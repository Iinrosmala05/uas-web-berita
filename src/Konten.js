import React from "react";
import {Card, Container,Row,Col, Badge,} from 'react-bootstrap';

function Konten() {
   const berita = [
    {
        id: "ekonomi",
        judul: "Ekonomi Nasional Meningkat di 2025",
        deskripsi: "Pertumbuhan ekonomi menunjukkan tren positif, didukung oleh sektor industri dan investasi asing.",
        kategori: "Ekonomi",
        tanggal: "30 desember 2025",
        gambar: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&q=80&w=400",
    },
    {
        id: "teknologi",
        judul: "Inovasi Teknologi AI Terbaru",
        deskripsi: "Startup teknologi memperkenalkan AI baru yang dapat membantu bisnis lebih efisien dan hemat biaya",
        kategori: "Teknologi",
        tanggal: "29 Desember 2025",
        gambar: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    },
    {
        id: "olahraga",
        judul: "Kejuaraan Sepak Bola Hari Ini",
        deskripsi: "Tim nasional berhasil meraih kemenangan dramatis",
        kategori: "Olahraga",
        tanggal: "28 Desember 2025",
        gambar:"https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400",
    },
    {
        id: "kesehatan",
        judul: "Tips Sehat Hidup Modern",
        deskripsi: "Artikel kesehatan tentang bagaimana menjaga pola hidup sehat di tengah kesibukan sehari-hari",
        kategori: "Kesehatan",
        tanggal: "27 Desember 2025",
        gambar: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    },
   ];

    return(
      <Container className="my-4">
            {berita.map((item)=>(
                <section id={item.id} key={item.id} style={{ scrollMarginTop: "80px"}}>
                <Row>
                <Col md={6} lg={4} key={item.id} id={item.id} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src={item.gambar}
                            style={{ height: "200px", objectFit: "cover"}}/>
                        <Card.Body>
                            <Badge bg="secondary" className="mb-2">{item.kategori}</Badge>
                                <Card.Title>{item.judul}</Card.Title>
                                <Card.Text>{item.deskripsi}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">{item.tanggal}</Card.Footer>
                    </Card>
                </Col>
                 </Row>
             </section>
            ))}

            {/*===== TENTANG KAMI ==== */}
            <section id="tentang" style={{ marginTop: "100px", scrollMarginTop: "80px"}}>
                <h2>Tentang Kami</h2>
                <p>
                    Berita Online adalah portal berita digital yang menyajikan informasi terkini seputar ekonomi, teknologi, olahraga,dan kesehatan.
                </p>
            </section>
      </Container> 

    );
}

export default Konten;