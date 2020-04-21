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
      <h4 className="page-title blue">Available Tuesday through Friday from 4 PM to 7 PM</h4>
      <h4 className="page-title blue">Note: OYSTERS ARE BACK (except for Parmesan and Beinville)!</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={COVIDApps} alt="Dinner Apps" className="menu-image" />
      <img src={COVIDDinner} alt="Dinner" className="menu-image" />
    </Container>
  );
};

export default CoronavirusDinner;
