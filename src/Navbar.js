import React from "react";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

function NavBarCustom() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#">Berita Online</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="kategori" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#ekonomi">Ekonomi</NavDropdown.Item>
                            <NavDropdown.Item href="#teknologi">Teknologi</NavDropdown.Item>
                            <NavDropdown.Item href="#olahraga">Olahraga</NavDropdown.Item>
                            <NavDropdown.Item href="#kesehatan">Kesehatan</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Tentang</Nav.Link>
                        <Nav.Link href="mailto:info@beritaonline.com">Kontak</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBarCustom;