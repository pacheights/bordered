import { Form } from './components';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { pk } from './stripe';

const stripePromise = loadStripe(pk);

const App = () => {
  const [clientSecret, setClientSecret] = useState('');
  const createPaymentIntent = async () => {
    const res = await fetch('http://localhost:3000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    setClientSecret(data.clientSecret);
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  return (
    <Container className='App'>
      {clientSecret && (
        <Elements
          options={{ clientSecret, appearance: { theme: 'stripe' } }}
          stripe={stripePromise}
        >
          <Form />
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
