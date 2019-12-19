import React from 'react';
import Dispatcher from '../dispatcher/appDispatcher'; 
import axios from "axios";

var bcrypt = require('bcryptjs');
class AccountAction extends React.Component {

   static getUser(pass, props) {
       
       return (
            axios({
                method: 'get',
                url: 'http://localhost:8090/users',
                headers: {'Content-Type': 'application/json',
                  'username': event.target.username.value}
                })
                .then(function (response) {
                    Dispatcher.dispatch({
                    actionType: 'read_user_successful',
                    data: response.data
                });
                const match = bcrypt.compareSync(pass, response.data.password);
                
                if(match){
                    alert("Login Success");
                    props.history.push('/flights');
                }
                else{
                    console.log(response);
                    alert("Incorrect login credentials!");
                }
            })
            .catch(function (response) {
                Dispatcher.dispatch({
                    actionType: 'read_user_failure' //action to display error message
                });
                
                console.log(response);
                alert("Incorrect login credentials!");
            })
        )
    };

    static createUser(user, props) {
        return (
            axios({
                method: 'post',
                url: 'http://localhost:8090/users',
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
    }

}

export default AccountAction;