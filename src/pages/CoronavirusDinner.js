import React from "react";
import COVIDApps from "../img/CoronavirusApps.jpg";
import COVIDDinner from "../img/CoronavirusDinner.jpg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

const CoronavirusDinner = () => {
  return (
    <Container>
      <h1 className="page-title">Dinner Take-Out</h1>
      <br />
      <h4 className="page-title blue">Available Tuesday through Saturday from 4 PM to 9 PM</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={COVIDApps} alt="Dinner Apps" className="menu-image" />
      <img src={COVIDDinner} alt="Dinner" className="menu-image" />
    </Container>
  );
};

export default CoronavirusDinner;
