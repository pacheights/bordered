import { useStripe, useElements } from '@stripe/react-stripe-js';
import { ReactElement, useEffect, useState } from 'react';
import {
  convertFormToReqBody,
  createOrder,
  deleteBody,
  getBody,
  setBody,
} from '../utils';
import { FormView } from '../components/FormView';

export type Image = string | null;

interface Props {
  setImgCount: (num: number) => void;
}

export function Form({ setImgCount }: Props): ReactElement {
  const [imgs, setImgs] = useState([null] as Image[]);
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onPhotoUpload = (e: any, i: number) => {
    try {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = e.target.result;
        const newImgs = [...imgs];
        newImgs[i] = img;
        setImgs(newImgs);
      };
      reader.readAsDataURL(e.target.files[0]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          createOrder(getBody(), clientSecret).then(() => deleteBody());
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  useEffect(() => {
    setImgCount(imgs.length);
  }, [imgs.length]);

  const addPhoto = () => setImgs((imgs) => [...imgs, null]);

  const deletePhoto = (i: number) =>
    setImgs((imgs) => [...imgs.slice(0, i), ...imgs.slice(i + 1)]);

  const handlePayment = async () => {
    if (!stripe || !elements) return;
    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://192.168.1.77:3001',
      },
    });

    setLoading(false);
    return Promise.reject(error?.message || 'An unexpected error occured.');
  };

  const handleSubmit = async (fd: FormData) => {
    try {
      const body = convertFormToReqBody(fd, imgs);
      console.log('body', body);
      setBody(body);
      await handlePayment();
    } catch (e: any) {
      console.log(e);
      setMessage(e as string);
    }
  };

  return (
    <FormView
      onPhotoUpload={onPhotoUpload}
      imgs={imgs}
      addPhoto={addPhoto}
      deletePhoto={deletePhoto}
      onFormSubmit={handleSubmit}
    />
  );
}
