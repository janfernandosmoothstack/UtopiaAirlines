import React from 'react';
import axios from "axios";
class AccountAction extends React.Component {
   
    static getUser(hash, props) {
        
        return (
            axios({
                method: 'get',
                url: 'http://localhost:8090/users/verified',
                headers: {'Content-Type': 'application/json',
                  'username': event.target.username.value, 'password': hash}
                })
                .then(function (response) {
                    //handle success
                    console.log(response);
                       alert("Login Success");
                       props.history.push('/flights');
                })
                .catch(function (response) {
                    //handle error
                  console.log(response);
                alert("Incorrect login credentials!");
                })
        )
    };
  
    static createUser(user, hash, props) {
        return (
            axios({
                method: 'post',
                url: 'http://utopiaairlinelb-1335414957.us-east-2.elb.amazonaws.com/users/create',
                headers: {'Content-Type': 'application/json',
                'Accept': 'application/json'},
                data: user 
                })
                .then(function (response) {
                    console.log(response);
                       alert("SignedUp Successfully!");
                       props.history.push('/flights');
                })
                .catch(function (response) {
                  console.log(response);
                alert("Please use different Username");
                })
        )
    };
}

export default AccountAction;