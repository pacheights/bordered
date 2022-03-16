const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/orders');
const bodyParser = require('body-parser');
const stripe = require('stripe')('');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// endpoints
app.post('/create-payment-intent', async (req, res) => {
  // Create a PaymentIntent with the order amount and currency
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 700,
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

app.post('/order', async (req, res) => {
  try {
    const results = await db.insertOrder({
      to: 'Sophia',
      from: 'Pearson',
      note: "You're the cutest",
    });
    res.status(201).json({ results });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

app.get('/orders', async (req, res) => {
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

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../web', 'build', 'index.html'));
});

// start express server on port 3000
app.listen(3000, () => {
  console.log('server started on port 3000');
});
