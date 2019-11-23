import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {SignIn} from './signin.js'
import {SignUp} from './signup.js'

const style = {
    color: "white"
}

export const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">
                <img width="80px" height="60px" src="https://imgur.com/WLQWpIv.png" alt="logo" />
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link style={style} href="/">Home</Nav.Link>
                <Nav.Link style={style} href="/flights">Flights</Nav.Link>
                <Nav.Link style={style} href="/cancel">Cancellation</Nav.Link>
            </Nav>

            <Nav className="justify-content-end">
                <SignUp/>
                <SignIn/>
            </Nav>
        </Navbar>
    );
}