'use strict'

import React from 'react';
import {Modal, Form} from 'react-bootstrap';
import './account.css';
import {Link} from 'react-router-dom';

export const SignIn = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
      event.preventDefault();
    }

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
                    <label htmlFor="email">E-mail:</label>
                    <input name="email" type="email" className="form-control"></input>
                  </div>        
                  
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" className="form-control"></input>
                  </div>

                  <br></br>

                  <button type="submit" className="btn-primary" onClick={handleClose} className="btnStyle">Sign In</button> 
                </Form>
            </Modal.Body>
          </Modal>
      </React.Fragment>
    );
}
        