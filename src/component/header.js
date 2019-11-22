import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {SignIn} from './signin.js'

export const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">
                <img width="80px" height="60px" src="https://imgur.com/WLQWpIv.png" alt="logo" />
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/flights">Flights</Nav.Link>
                <Nav.Link href="/cancel">Cancellation</Nav.Link>
            </Nav>

            <Nav className="justify-content-end">
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <SignIn/>
            </Nav>
        </Navbar>
    );
}