import React from "react";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

function NavBarCustom() {

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#">Berita Online</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" onClick={() => window.scrollTo({ top:0, behavior: 'smooth'})}>Home</Nav.Link>
                        <NavDropdown title="kategori" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => handleScroll("ekonomi")}>Ekonomi</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleScroll("teknologi")}>Teknologi</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleScroll("olahraga")}>Olahraga</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleScroll("kesehatan")}>Kesehatan</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={()=>handleScroll("tentang")}>Tentang</Nav.Link>
                        <Nav.Link href="mailto:info@beritaonline.com">Kontak</Nav.Link>
                        <Nav.Link onClick={()=> handleScroll("home")}></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBarCustom;