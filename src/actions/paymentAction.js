import React from 'react';
import axios from "axios";

class PaymentAction extends React.Component {

    static validatePayment(body, props) {
        return (
            axios.post("https://6fhjpe7mg2.execute-api.us-east-2.amazonaws.com/dev/pay", body)
                .then(() => {
                    alert("Payment Success");
                    props.history.push('/confirmation');
                }).catch(error => {
                    console.log("Payment Error: ", error);
                    alert("Payment Error");
                })
        );
    };
}
export default PaymentAction;