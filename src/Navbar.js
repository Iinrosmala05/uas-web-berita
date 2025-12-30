import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

function NavBarCustom() {
    return (
        <Navbar bg="primary" variant="dark"expand="Ig">
            <Container>
                <Navbar.Brand href="#">Berita Online</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="https://news.google.com/">Berita</Nav.Link>
                        <Nav.Link href="#">Tentang</Nav.Link>
                        <Nav.Link href="mailto:info@beritaonline.com">Kontak</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBarCustom;