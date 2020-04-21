import React from "react";
import COVIDApps from "../img/CoronavirusApps.jpg";
import COVIDLunch from "../img/CoronavirusLunch.jpg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

const CoronavirusLunch = () => {
  return (
    <Container>
      <h1 className="page-title">Lunch Take-Out</h1>
      <br />
      <h4 className="page-title blue">Available Tuesday through Friday from 11:30 AM to 2 PM</h4>
      <h4 className="page-title blue">Note: OYSTERS ARE BACK (except for Parmesan and Bienville)!</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={COVIDApps} alt="Lunch Apps" className="menu-image" />
      <img src={COVIDLunch} alt="Lunch" className="menu-image" />
    </Container>
  );
};

export default CoronavirusLunch;
