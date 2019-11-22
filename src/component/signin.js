"use strict"

import React from 'react';
import {Modal} from 'react-bootstrap';

export const SignIn = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(signin);
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
                                <label>
                                   Email address: 
                                    <input type="email" />
                                </label>
                                </Row>
                                <br></br>
                                <Row>
                                <label>
                                   Password: 
                                    <input type="password" />
                                </label>
                                </Row>
                                <br></br>

                                <Row>
                        <button variant="primary" onClick={handleClose}>
                        Sign In
                        </button>  </Row>
                            </form>
                          </Modal.Body>
                      <Modal.Footer>
                        
                      </Modal.Footer>
                    </Modal>
                    </React.Fragment>
        );
        }
        