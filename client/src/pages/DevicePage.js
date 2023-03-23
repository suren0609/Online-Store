import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

const DevicePage = () => {
  const device = {
    id: 7,
    name: "Iphone 12 pro",
    price: 300000,
    rating: 5,
    img: "https://allcell.am/wp-content/uploads/2020/11/iphone-12-pro-max-gold-hero.png.webp",
  };
  const description = [
    { id: 1, title: "RAM", description: "5 gb" },
    { id: 2, title: "Camera", description: "12 mp" },
    { id: 3, title: "CPU", description: "Intel Core I5" },
    { id: 4, title: "Cores", description: "4" },
    { id: 5, title: "Battery", description: "4000" },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4} height={300}>
          <Image width={250} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 style={{ textAlign: "center" }}>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>From: {device.price} dr.</h3>
            <Button variant="outline-dark">Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        {description.map((info, i) => (
          <Row
            key={info.id}
            style={{ background: i % 2 === 0 ? "lightgray" : "transparent" }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
