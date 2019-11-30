import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import './header.css';
import {SignIn} from '../account/signin.js';
import {SignUp} from '../account/signup.js';
import { NavDropdown } from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar>
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
                    <NavDropdown 
                        title={
                            <Link className="navLink">Account</Link>
                        }
                        id="nav-dropdown">
                        <NavDropdown.Item><SignIn/></NavDropdown.Item>
                        <NavDropdown.Item><SignUp/></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}