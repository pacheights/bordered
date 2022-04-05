import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { NavBar, Form } from '../src/components';
import { PhotoWall } from '../src/containers/PhotoWall';
import { endpoint } from '../src/endpoint';
import { pk } from '../src/stripe';

const stripePromise = loadStripe(pk);

const App = () => {
  const [imgCount, setImgCount] = useState(1);
  const [clientSecret, setClientSecret] = useState('');
  const createPaymentIntent = async () => {
    const res = await fetch(`${endpoint}/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imgCount }),
    });
    const data = await res.json();
    setClientSecret(data.clientSecret);
  };

  useEffect(() => {
    createPaymentIntent();
  }, [imgCount]);

  return (
    <Container className='App'>
      {clientSecret && (
        <Elements
          options={{ clientSecret, appearance: { theme: 'stripe' } }}
          stripe={stripePromise}
        >
          <NavBar />
          <Form setImgCount={setImgCount} />
          <br />
          <PhotoWall />
          <br />
        </Elements>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export default App;
