import React from "react";
import image1 from "../img/Carousel1.jpg";
import image2 from "../img/Carousel2.gif";
import image3 from "../img/Carousel3.gif";
import image4 from "../img/Carousel4.gif";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <h1 className="page-title">The Oyster Bar</h1>
      <h4 className="page-title">Serious Food In A Casual Atmosphere</h4>
      <br />
      <Carousel controls={false} interval={4500}>
        <Carousel.Item>
          <img src={image1} alt="Home" className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="Home" className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt="Home" className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image4} alt="Home" className="carousel-image" />
        </Carousel.Item>
      </Carousel>
      <Row className="justify-content-md-center info">
        <Col md="auto">
          <h3>Location:</h3>
          <br />
          <p>1830 S Calhoun St</p>
          <p>Fort Wayne, IN 46802</p>
        </Col>
        <Col md="auto">
          <h3>Hours:</h3>
          <br />
          <p>M-Th: 11 AM to 10 PM</p>
          <p>Fri: 11 AM to 11 PM</p>
          <p>Sat: 5 PM to 11 PM</p>
        </Col>
        <Col md="auto">
          <h3>Reservations:</h3>
          <br />
          <p>Call us at</p>
          <p>(260) 744-9490</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
