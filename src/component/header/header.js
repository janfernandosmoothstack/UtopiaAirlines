import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import './header.css';
import {SignIn} from '../account/signin.js';
import {SignUp} from '../account/signup.js';

export const Header = (props) => {
    console.log("I am in header");
    console.log(props)

    return (
        <Navbar className="navBar">
            <Navbar.Brand href="/">
                <img width="80px" height="60px" src="https://imgur.com/WLQWpIv.png" alt="logo" />
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="navLink" to="/">Home</Link>
                    <Link className="navLink" to="/flights">Flights</Link>
                    <Link className="navLink" to="/tickets">Tickets</Link>
                    <Link className="navLink" to="/traveler">Traveler Information</Link>
                    <Link className="navLink" to="/cancel">Cancel Reservation</Link>
                </Nav>

                <Nav className="justify-content-end">
                <Link className="navLink" to="/flights">Continue as Guest</Link>
                    <SignIn history={props.history}/>
                    <SignUp history={props.history}/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}