import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-4">
            <Container>
                <Row>
                    <Col md={6}>
                    <p>Hak Cipta © 2025 | Aplikasi Berita Online</p>
                    <p>Kontak: info@beritaonline.com</p>
                    </Col>
                    <Col md={6} className="text md-end"> 
                    <a href="https://facebook.com" className="text-light me-3">Facebook</a>
                    <a href="https://twitter.com" className="text-light me-3">Twitter</a>
                    <a href="https://instagram.com" className="text-light">Instagram</a>
                    </Col>
                </Row>
            </Container>
        </footer>

    );
}

export default Footer;