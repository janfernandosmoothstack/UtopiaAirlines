"use strict"

import React from 'react';
import {Modal, Form} from 'react-bootstrap';
import './header/header.css';
import {Link} from 'react-router-dom';

const btnStyle = {
  marginRight: "10px",
  borderRadius: "7px",
  width: "100px"
}

export const SignUp = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
      event.preventDefault();
    }

    return (
      <React.Fragment>
        <Link className="accountLink" to="/signUp" onClick={handleShow}>Sign Up</Link>

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
                  <label htmlFor="email">E-mail:</label>
                  <input name="email" type="email" className="form-control"></input>
              </div>         
                              
              <div>
                  <label htmlFor="password">Password:</label>
                  <input name="password" type="password" className="form-control"></input>
              </div> 

              <br></br>         
                            
              <button type="submit" className="btn-primary" onClick={handleClose} style={btnStyle}>Sign Up</button>               
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
}
        