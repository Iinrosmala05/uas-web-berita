import React from "react";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

function NavBarCustom() {
    return (
        <Navbar bg="primary" variant="dark" expand="Ig" sticky="top">
            <Container>
                <Navbar.Brand href="#">Berita Online</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <NavDropdown title="kategori" id="basic-nav-dropdown"></NavDropdown>
                            <NavDropdown.Item href="#">Ekonomi</NavDropdown.Item>
                            <NavDropdown.Item href="#">Teknologi</NavDropdown.Item>
                            <NavDropdown.Item href="#">Olahraga</NavDropdown.Item>
                            <NavDropdown.Item href="#">Kesehatan</NavDropdown.Item>
                        <Nav.Link href="#">Tentang</Nav.Link>
                        <Nav.Link href="mailto:info@beritaonline.com">Kontak</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBarCustom;