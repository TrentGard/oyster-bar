import React from "react";
import OBCarousel from "../components/OBCarousel";
import { Container, Row, Col } from "react-bootstrap";
import wine from "../img/wine.jpg";

const Home = () => {
  return (
    <Container>
      <h1 className="page-title">The Oyster Bar</h1>
      <h4 className="page-title">Serious Food In A Casual Atmosphere</h4>
      <Row className="justify-content-md-center wine">
      <Col md="auto">
        <p>New!</p>
        <p>Come join us on Sunday, March 8th,</p>
        <p>for a special Wine Dinner!</p>
        <p>Special guests include chef Tony West</p>
        <p>and wine expert Jana Neher.</p>
        <p>Doors open at 5:30 pm,</p>
        <p>dinner starts at 6 pm.</p>
        <p>Call <a href="tel:260-744-9490" style={{ color: 'tan' }}>(260) 744-9490</a> for additional info</p>
        <p>and to schedule your reservation!</p>
      </Col>
      <Col md="auto">
      <br />
        <img src={wine} alt="Wine" className="wine-image" />
      </Col>
      </Row>
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
          <p>Call <a href="tel:260-744-9490" style={{ color: 'tan' }}>(260) 744-9490</a></p>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
