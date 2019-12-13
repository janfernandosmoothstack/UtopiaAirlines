'use strict'
import axios from "axios";
import React from 'react';
import {Modal, Form} from 'react-bootstrap';
import './account.css';
import {Link} from 'react-router-dom';


var bcrypt = require('bcryptjs');

export const SignIn = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => {setShow(true);}
    const handleSubmit = (event) => {
      event.preventDefault();

      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(event.target.password.value, salt);

        axios({
          method: 'get',
          url: 'http://utopiaairlinelb-1335414957.us-east-2.elb.amazonaws.com/users/verified',
          headers: {'Content-Type': 'application/json',
            'username': event.target.username.value, 'password': hash}
          })
          .then(function (response) {
              //handle success
              console.log(response);
                 alert("Login Success");
                 window.location.href = "http://localhost:3000/#/flights";
          })
          .catch(function (response) {
              //handle error
            console.log(response);
          alert("Incorrect login credentials!");
          });
    };

    return (
      <React.Fragment>
        <Link className="accountLink" onClick={handleShow}>Sign In</Link>
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input name="username" type="text" className="form-control"></input>
                  </div>        
                  
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" className="form-control"></input>
                  </div>

                  <br></br>

                  <button className="btnStyle" type="submit" onClick={handleClose}>Sign In</button>
                </Form>
            </Modal.Body>
          </Modal>
      </React.Fragment>
    );
}


