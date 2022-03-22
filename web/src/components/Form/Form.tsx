import { useStripe, useElements } from '@stripe/react-stripe-js';
import { ReactElement, useEffect, useState } from 'react';
import { convertFormToReqBody } from '../../utils';
import { FormView } from './FormView';

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
    setImgCount(imgs.length);
  }, [imgs.length]);

  const addPhoto = () => setImgs((imgs) => [...imgs, null]);

  const deletePhoto = (i: number) =>
    setImgs((imgs) => [...imgs.slice(0, i), ...imgs.slice(i + 1)]);

  const handlePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000',
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message as string);
    } else {
      setMessage('An unexpected error occured.');
    }

    setLoading(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const body = JSON.stringify(await convertFormToReqBody(form, imgs));

    fetch('http://localhost:3000/order', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
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
