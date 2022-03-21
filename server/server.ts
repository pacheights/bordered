import { sk } from './stripe';
import { Request, Response } from 'express';

const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/orders');
const bodyParser = require('body-parser');
const stripe = require('stripe')(sk);

// remove this
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// endpoints
app.post('/create-payment-intent', async (req: Request, res: Response) => {
  // Create a PaymentIntent with the order amount and currency
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 700,
      currency: 'usd',
      // automatic_payment_methods: {
      //   enabled: true,
      // },
      payment_method_types: ['card'],
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'an error occurred' });
  }
});

app.post('/order', async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log(body);
    res.status(201).json({});
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

app.get('/orders', async (req: Request, res: Response) => {
  try {
    const results = await db.getAllOrders();
    res.status(200).json({ results });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

// serving frontend
app.use(express.static(path.join(__dirname, '../web', 'build')));
app.use(express.static('public'));

app.use((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../web', 'build', 'index.html'));
});

// start express server on port 3000
app.listen(3000, () => {
  console.log('server started on port 3000');
});
