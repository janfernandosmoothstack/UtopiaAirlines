'use strict'
import axios from "axios";
import React from 'react';
import {Modal, Form} from 'react-bootstrap';
import './account.css';
import {Link} from 'react-router-dom';
import AccountAction from '../../actions/accountActions';


var bcrypt = require('bcryptjs');

export const SignIn = (props) => {
  console.log("I am in sign in component");
  console.log(props);
    const [show, setShow] = React.useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => {setShow(true);}
    const handleSubmit = (event) => {
      event.preventDefault();

      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(event.target.password.value, salt);
       AccountAction.getUser(hash, props); 
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


