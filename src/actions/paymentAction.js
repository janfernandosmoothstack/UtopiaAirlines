import React from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';

//const PaymentAction = (body) => {
class PaymentAction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false // <-- initialize the signup state as false
        }
    };

    static validatePayment(body) {
        return (
            axios.post("https://6fhjpe7mg2.execute-api.us-east-2.amazonaws.com/dev/pay", body)
                .then((response) => {

                    alert("Payment Success");
                    window.location.href = "http://localhost:3000/#/confirmation";

                }).catch(error => {
                    console.log("Payment Error: ", error);
                    alert("Payment Error");
                })
        );
    };

    render() {
        if (this.state.redirect) {
            //window.location.href = "http://localhost:3000/#/confirmation";
            return <Redirect to="/confirmation" />;
        }
    };
}

export default PaymentAction;