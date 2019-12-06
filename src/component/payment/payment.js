import React from 'react';
import './payment.css';
import './visa.css';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


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

export const Payment = () => {
  const publishableKey = "pk_test_FGhq4bMJFOhS8WgOYkCEWM0p00BpHKx8Up";

  const onToken = token => {
    const body = {
      amount: 15000,
      token: token
    };
    axios.post("https://zdt56bh758.execute-api.us-east-2.amazonaws.com/dev/pay", body).then(response => {
      console.log(response);
      window.location.href = "http://localhost:3000/#/confirmation";
      //alert("Payment Success");

    }).catch(error => {
      
      console.log("Payment Error: ", error);
      alert("Payment Error")
    });
  };

  // function checkout() {
  //   stripe.redirectToCheckout({
  //     successUrl: "http://localhost:3000/#/confirmation",
  //     cancelUrl: "http://localhost:3000/#/"
  //   })
  // }

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
      {/* <Link to="/confirmation"><button style={button}></Link> */}
      <button id="payment" style={button}>
        Payment
      </button>
    </StripeCheckout>
  );
};
