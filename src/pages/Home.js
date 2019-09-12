import React from "react";
import OBCarousel from "../components/OBCarousel";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <h1 className="page-title">The Oyster Bar</h1>
      <h4 className="page-title">Serious Food In A Casual Atmosphere</h4>
      <br />
      <OBCarousel className="carousel-image" />
      <Row className="justify-content-md-center info">
        <Col md="auto">
          <h3>Location:</h3>
          <br />
          <p>1830 S Calhoun St</p>
          <p>Fort Wayne, IN 46802</p>
          <br />
        </Col>
        <Col md="auto">
          <h3>Hours:</h3>
          <br />
          <p>M-Th: 11 AM to 10 PM</p>
          <p>Fri: 11 AM to 11 PM</p>
          <p>Sat: 5 PM to 11 PM</p>
          <br />
        </Col>
        <Col md="auto">
          <h3>Reservations</h3>
          <h3>& Caterings:</h3>
          <br />
          <p>Call (260) 744-9490</p>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
