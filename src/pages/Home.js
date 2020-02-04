import React from "react";
import OBCarousel from "../components/OBCarousel";
import { Container, Row, Col } from "react-bootstrap";
import romance from "../img/FourDaysRomance.jpg";

const Home = () => {
  return (
    <Container>
      <h1 className="page-title">The Oyster Bar</h1>
      <h4 className="page-title">Serious Food In A Casual Atmosphere</h4>
      <Row className="justify-content-md-center info">
      <Col md="auto" className="romance">
        <h4>New!</h4>
        <br />
        <h4>Come join us this Valentine's Weekend</h4>
        <h4>for our <span style={{ color: 'pink' }}>Four Days of Romance</span> event</h4>
        <h4>featuring special hours and menus!</h4>
        <br />
        <h4>The hours of the event are</h4>
        <h4>Thursday 4-10 pm,</h4>
        <h4>Friday and Saturday 4-11 pm,</h4>
        <h4>and <span style={{ color: 'pink' }}>Sunday 3-9 pm</span>.</h4>
        <br />
        <h4>Call <a href="tel:260-744-9490" style={{ color: 'tan' }}>(260) 744-9490</a></h4>
        <h4>to schedule your reservation!</h4>
      </Col>
      <Col md="auto" className="romance">
        <img src={romance} className="romance-image" />
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
