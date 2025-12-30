import React from "react";
import {Card, Container,Row,Col} from 'react-bootstrap'

function Konten() {
   const berita = [
    {
        judul: "Ekonomi Hari Ini",
        deskripsi: "Berita terkini seputar perkembangan ekonomi nasional dan internasional",
    },
    {
        judul: "Teknologi Terbaru",
        deskripsi: "Update teknologi dan gadget terbaru yang menarik untuk diikuti",
    },
    {
        judul: "Olahraga Hari Ini",
        deskripsi: "Ringkasan berita olahraga dari berbagai cabang olahraga",
    },
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