
import React from 'react';
import axios from "axios";
//import { Confirmation } from '../confirmation/confirmation.js/index.js';
import { Route, Switch, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


//const PaymentAction = (body) => {
class PaymentAction extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         redirect: false // <-- initialize the signup state as false
    //     }
    // };

    static validatePayment(body, props) {
        
        return (
            axios.post("https://6fhjpe7mg2.execute-api.us-east-2.amazonaws.com/dev/pay", body)
                .then(() => {
                    props.history.push('/confirmation');
                    
                    //window.location.href = "http://localhost:3000/#/confirmation";
                    // <Switch>
                    //     <Route path='/confirmation' component={Confirmation} />
                    // </Switch>
                    //this.setState({ redirect: true });
                    // <Link to="/confirmation" component={Confirmation}></Link>
                    alert("Payment Success");
                    //return <Redirect to={{ pathname: "/confirmation" }} />;
                }).catch(error => {
                    console.log("Payment Error: ", error);
                    alert("Payment Error");
                    //this.setState({ isSignedUp: true });
                })
        );
    };

    render() {
        if (this.state.redirect) {
            //window.location.href = "http://localhost:3000/#/confirmation";
            // redirect to home if signed up
            return <Redirect to="/confirmation" />;
        }
    };
}

export default PaymentAction;