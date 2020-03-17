import React from "react";
import OBCarousel from "../components/OBCarousel";
import { Container, Row, Col } from "react-bootstrap";

const Coronavirus = () => {
    return (
      <Container>
        <h1 className="page-title">The Oyster Bar</h1>
        <h4 className="page-title">Serious Food In A Casual Atmosphere</h4>
        <br />
        <h4 className="page-title blue">UPDATE: Due to the Coronavirus outbreak</h4>
        <h4 className="page-title blue">we will be serving take-out only during limited hours (listed below).</h4>
        <br />
        <h4 className="page-title blue">Click the Lunch and Dinner Take-Out tabs above to view our updated menus</h4>
        <h4 className="page-title blue">and call <a href="tel:260-744-9490" style={{ color: 'tan' }}>(260) 744-9490</a> to schedule your order.</h4>
        <br />
        <h4 className="page-title blue">We wish everyone affected by this outbreak</h4>
        <h4 className="page-title blue">good health and well-being during these trying times.</h4>
        <br />
        <h4 className="page-title blue">Thank you all for your astonishing</h4>
        <h4 className="page-title blue">support and patronage as we all weather this storm.</h4>
        <br/>
        <OBCarousel className="carousel-image" />
        <Row className="justify-content-md-center info">
          <Col md="auto">
            <h3>Location:</h3>
            <br />
            <p>1830 S Calhoun St</p>
            <p>Fort Wayne, IN 46802</p>
            <br />
          </Col>
          <Col md="auto" className="blue">
            <h3>New Hours:</h3>
            <br />
            <p>M-Fri Lunch: 11:30 AM to 2 PM</p>
            <p>M-Fri Dinner: 4 PM to 7 PM</p>
            <p>Sat: 4 PM to 7 PM (Dinner Only)</p>
            <p>Sun: Closed</p>
            <br />
          </Col>
          <Col md="auto">
            <h3>Contact and to</h3>
            <h3>Place an Order:</h3>
            <br />
            <p>Call <a href="tel:260-744-9490" style={{ color: 'tan' }}>(260) 744-9490</a></p>
            <br />
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Coronavirus;