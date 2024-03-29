import { Form } from './components';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { pk } from './stripe';
import { endpoint } from './endpoint';
import { PhotoWall } from './containers/PhotoWall';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router';
import { About } from './containers/About/About';
import { Feedback } from './containers/Feedback';

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
  }, []);

  // useEffect(() => {
  //   await stripe.paymentIntents.update(**paymentIntentId**, {
  //     amount,
  //   });
  // })

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

          <Routes>
            <Route path='/' element={<PhotoWall />} />
            <Route path='about' element={<About />} />
            <Route path='feedback' element={<Feedback />} />
          </Routes>
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
