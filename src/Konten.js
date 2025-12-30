import React from "react";
import {Card, Container,Row,Col} from 'react-bootstrap'

function Konten() {
    const berita = [
        { judul: "Berita Ekonomi Hari ini", deskripsi: "Isi singkat berita ekonomi..."},
        { judul: "Berita Teknologi Hari ini", deskripsi: "Isi singkat berita teknologi..."},
        { judul: "Berita Olahraga Hari ini", deskripsi: "Isi singkat berita olahraga..."},
    ];

    return(
      <Container className="my-4">
        <Row>
            {berita.map((item,index)=>(
                <Col md={4} key={index} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>{item.judul}</Card.Title>
                            <Card.Text>{item.deskripsi}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
      </Container> 

    );
}

export default Konten;