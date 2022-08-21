import { sk } from './stripe';
import { Request, Response } from 'express';
import { getAllOrders, getAllPhotos, insertOrder } from './db/orders';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const stripe = require('stripe')(sk);
const utils = require('./utils');

// update this
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

// endpoints
app.post('/order', async (req: Request, res: Response) => {
  try {
    const orderEntry = await utils.createOrderDbEntry(req.body);
    const order = await insertOrder(orderEntry);
    res.status(201).json({ order });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

app.get('/orders', async (req: Request, res: Response) => {
  try {
    const results = await getAllOrders();
    res.status(200).json({ results });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

app.get('/photos', async (req: Request, res: Response) => {
  try {
    const photos = await getAllPhotos();
    res.status(200).json({ photos });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

app.post('/create-payment-intent', async (req: Request, res: Response) => {
  // Create a PaymentIntent with the order amount and currency
  try {
    const { imgCount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: imgCount * 250,
      currency: 'usd',
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
