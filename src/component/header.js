import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">
                <img width="80px" height="60px" src="images/ualogo.png" />
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/flights">Flights</Nav.Link>
            </Nav>
        </Navbar>
    );
}