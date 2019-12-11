import React from 'react';
import './payment.css';
import './visa.css';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { tsPropertySignature } from '@babel/types';

import PaymentAction from './paymentAction.js';
//import {validatePayment} from './paymentAction.js';

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
  console.log("I am in payment");
  console.log(props);

  const onToken = token => {
    const body = {
      amount: 15000,
      token: token
    };

    PaymentAction.validatePayment(body, props);
    
    // axios.post("https://6fhjpe7mg2.execute-api.us-east-2.amazonaws.com/dev/pay", body)
    //   .then(response => {
    //     //window.location.href = "http://localhost:3000/#/confirmation";
    //     <Redirect to="/confirmation" />
    //          alert("Payment Success");

    // }).catch(error => {
      
    //   console.log("Payment Error: ", error);
    //   alert("Payment Error")
    // });
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
