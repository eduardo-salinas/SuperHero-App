import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {

    return (
        <Navbar bg="warning" expand="lg">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
        </Navbar>
    )
};

export default NavBar;