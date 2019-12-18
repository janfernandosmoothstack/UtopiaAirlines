import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './header.css';
import { SignIn } from '../account/signin.js';
import { SignUp } from '../account/signup.js';
import { NavDropdown } from 'react-bootstrap';

export const Header = (props) => {
    return (
        <Navbar className="navBar">
            <Navbar.Brand href="/">
                <img width="80px" height="60px" src="https://imgur.com/WLQWpIv.png" alt="logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link className="navLink" to="/">Home</Link></Nav.Link>

                    <NavDropdown title={<span className="navLink">Booking</span>}>
                        <NavDropdown.Item><Link className="dropDown" to="/flights">Flights</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className="dropDown" to="/tickets">Tickets</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className="dropDown" to="/traveler">Traveler Information</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className="dropDown" to="/cancel">Cancel Booking</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Nav className="justify-content-end">
                    <NavDropdown title={<span className="navLink">Account</span>} className="account">
                        <NavDropdown.Item><Link className="dropDown" to="/flights">Continue as Guest</Link></NavDropdown.Item>
                        <NavDropdown.Item><SignIn history={props.history} /></NavDropdown.Item>
                        <NavDropdown.Item><SignUp history={props.history} /></NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.Item><Link className="dropDown" to="/">Logout</Link></NavDropdown.Item>
                    </NavDropdown>
                    
                    
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}