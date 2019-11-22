"use strict"

import React from 'react';
import {Modal} from 'react-bootstrap';

export const SignUp = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(signup);
    }

    return (
        <React.Fragment>
            <button type="button" className="btn-primary" onClick={handleShow}>SignUp</button>
            <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                      </Modal.Header>
                      <Modal.Body>
                      <form onSubmit = {handleSubmit}>
                          <Row>
                          <Col>
                        <label>
                           First Name:  
                                    <input type="text" />
                                </label>
                                </Col>
                                <Col>
                                <label>
                                    Last Name:  
                                    <input type="text" />
                                </label>
                                <br></br>
                                </Col>
                                </Row>
                               
                                <Row>
                                <label>
                                   Email address: 
                                    <input type="email" />
                                </label>
                                </Row>
                                <br></br>
                                <Row>
                                <label>
                                   Create a password: 
                                    <input type="password" placeholder="at least 6 characters"/>
                                </label>
                                </Row>

                                <Row>
                        <button variant="primary" onClick={handleClose}>
                          Sign Up
                        </button>  </Row>
                            </form>
                          </Modal.Body>
                      <Modal.Footer>
                        
                      </Modal.Footer>
                    </Modal>
                    </React.Fragment>
        );
        }
        