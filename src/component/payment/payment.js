import React from 'react';
import './payment.css';
import './visa.css';
import { Link } from 'react-router-dom';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const button = {
  backgroundColor: "#3C5E83",
  border: "none",
  color: "white",
  padding: "6px 10px",
  textAlign: "center",
  display: "inline-block",
  marginLeft: "550px",
  borderRadius: "5px",
  fontSize: "20px"
};

export const Payment = () => {
  const publishableKey = "pk_test_FGhq4bMJFOhS8WgOYkCEWM0p00BpHKx8Up";

  const onToken = token => {
    const body = {
      amount: 15000,
      token: token
    };
    axios.post("https://zdt56bh758.execute-api.us-east-2.amazonaws.com/dev/pay", body).then(response => {
      console.log(response);
      alert("Payment Success");
    }).catch(error => {
      console.log("Payment Error: ", error);
      alert("Payment Error");
    });
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
      <button style={button}>
        Payment
      </button>
    </StripeCheckout>
  );
};
