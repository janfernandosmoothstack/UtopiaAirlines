import React from 'react';
import './payment.css';
import './visa.css';
import StripeCheckout from "react-stripe-checkout";
import PaymentAction from '../../actions/paymentAction.js';

const button = {
  backgroundColor: "#48A1A3",
  border: "none",
  color: "white",
  padding: "6px 10px",
  textAlign: "center",
  display: "inline-block",
  marginLeft: "550px",
  borderRadius: "5px",
  fontSize: "20px",
  marginTop: "20px",
  fontWeight: "bold"
};

export const Payment = (props) => {
  const publishableKey = "pk_test_FGhq4bMJFOhS8WgOYkCEWM0p00BpHKx8Up";

  const onToken = (token) => {
    const body = {
      amount: 15000,
      token: token
    };

    PaymentAction.validatePayment(body, props);

  };

  return (
    <StripeCheckout
      label="Purchase ticket" //Component button text
      name="Purchase Flight Ticket" //Modal Header
      description="Confirm payment for ticket"
      panelLabel="Confirm" //Submit button in modal
      amount={15000} //Amount in cents 
      token={onToken}
      stripeKey={publishableKey}
      image="https://img.icons8.com/bubbles/50/000000/airplane-take-off.png" //Pop-in header image
      billingAddress={false}
    >
      <button type="submit" id="payment" style={button}>Payment</button>
    </StripeCheckout>
  );
};
