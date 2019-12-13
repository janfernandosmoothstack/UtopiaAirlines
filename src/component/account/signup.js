"use strict"

import React from 'react';
import {Modal, Form} from 'react-bootstrap';
import './account.css';
import {Link} from 'react-router-dom';
import axios from "axios";

var bcrypt = require('bcryptjs');

export const SignUp = () => {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
    event.preventDefault();
      
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(event.target.password.value, salt);

    const user = {
      active: 1,
      address: event.target.address.value,
      email: event.target.email.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      password: hash,
      phoneNumber: event.target.phoneNumber.value,
      username: event.target.username.value
    }

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
             window.location.href = "http://localhost:3000/#/flights";
      })
      .catch(function (response) {
        console.log(response);
      alert("Please use different Username");
      });
    }
    return (
      <React.Fragment>
        <Link className="accountLink" onClick={handleShow}>Sign Up</Link>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>  
          </Modal.Header>
                    
          <Modal.Body>
            <Form onSubmit={handleSubmit}>

              <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input name="firstName" type="text" className="form-control"></input>
              </div>

              <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input name="lastName" type="text" className="form-control"></input>
              </div>  

              <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input name="phoneNumber" type="number" className="form-control"></input>
              </div> 
                        
              <div className="form-group">
                  <label htmlFor="email">E-mail:</label>
                  <input name="email" type="email" className="form-control"></input>
              </div> 
              
              <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <input name="address" type="text" className="form-control"></input>
              </div>

              <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input name="username" type="text" className="form-control"></input>
              </div>         
                              
              <div>
                  <label htmlFor="password">Password:</label>
                  <input name="password" type="password" className="form-control"></input>
              </div> 
                                 
              <div>
                  <label htmlFor="active">Active</label>
                  <input name="active" type="number" className="form-control" value ='1'></input>
              </div> 

              <br></br>         
                            
              <button type="submit" onClick={handleClose} className="btnStyle">Sign Up</button>               
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
}
        