import getRawBody from "raw-body";
import { NextResponse } from "next/server";
import Stripe from "stripe";
// This is your test secret API key.
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (amount) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  if (!amount.indexOf(".") !== -1) {
    return amount + "00";
  } else {
    return amount;
  }
};

export async function POST(req) {
  const body = await req.json();
  const { id, amount } = body.data;
  // console.log(body);
  // console.log(id);
  // console.log(amount);

  //   Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(amount),
    currency: "eur",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
  });
}
