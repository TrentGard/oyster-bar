import React from "react";
import COVIDLunch from "../img/LunchMenuJune2020.jpg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

const CoronavirusLunch = () => {
  return (
    <Container>
      <h1 className="page-title">Lunch</h1>
      <br />
      <h4 className="page-title blue">Available Tuesday through Friday from 11 AM to 3 PM</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={COVIDLunch} alt="Lunch" className="menu-image" />
    </Container>
  );
};

export default CoronavirusLunch;
