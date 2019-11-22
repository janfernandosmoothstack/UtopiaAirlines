'use strict'

import React from 'react';
import {Modal, Form, Nav} from 'react-bootstrap';

const btnStyle = {
  marginRight: "10px",
  borderRadius: "7px",
  width: "100px"
}

const style = {
  color: "white"
}

export const SignIn = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
      event.preventDefault();
    }

    return (
      <React.Fragment>
        <Nav.Link style={style} href="/signIn" onClick={handleShow}>Sign In</Nav.Link>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
              </Modal.Header>
              
              <Modal.Body>
                  <Form onSubmit={handleSubmit}>

                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input name="email" type="email" className="form-control"></input>
                    </div>        
                    
                    <div>
                      <label htmlFor="password">Password:</label>
                      <input name="password" type="password" className="form-control"></input>
                    </div>

                    <br></br>

                    <button type="submit" className="btn-primary" onClick={handleClose} style={btnStyle}>Sign In</button> 
                  </Form>
              </Modal.Body>
            </Modal>
      </React.Fragment>
    );
}
        