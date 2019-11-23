"use strict"

import React from 'react';
import {Modal, Form} from 'react-bootstrap';
import './account.css';
import {Link} from 'react-router-dom';

export const SignUp = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
      event.preventDefault();
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
                  <label htmlFor="phone">Phone Number:</label>
                  <input name="phone" type="text" className="form-control"></input>
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

              <br></br>         
                            
              <button type="submit" onClick={handleClose} className="btnStyle">Sign Up</button>               
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
}
        