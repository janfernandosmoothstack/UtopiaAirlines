import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';
import {SignIn} from '../signin.js';
import {SignUp} from '../signup.js';

export const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">
                <img width="80px" height="60px" src="https://imgur.com/WLQWpIv.png" alt="logo" />
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link className="navLink" href="/">Home</Nav.Link>
                <Nav.Link className="navLink" href="/flights">Flights</Nav.Link>
                <Nav.Link className="navLink" href="/cancel">Cancellation</Nav.Link>
            </Nav>

            <Nav className="justify-content-end">
                <SignUp/>
                <SignIn/>
            </Nav>
        </Navbar>
    );
}