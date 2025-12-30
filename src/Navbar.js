import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

function NavBarCustom() {
    return (
        <Navbar bg="primary"variant="dark"expand="ig">
            <Container>
                <Navbar.Brand href="#">Berita Online</Navbar.Brand>
                <Navbar.Tonggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Berita</Nav.Link>
                        <Nav.Link href="#">Tentang</Nav.Link>
                        <Nav.Link href="#">Kontak</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navbar;