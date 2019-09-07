import React from "react";
import DinnerApps from "../img/Dinner_Apps.jpg";
import DinnerMeats from "../img/Dinner_Meats.jpg";
import DinnerSeafood from "../img/Dinner_Seafood.jpg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

const Dinner = () => {
  return (
    <Container>
      <h1 className="page-title">Dinner</h1>
      <OBCarousel className="carousel-image-menu" />
      <img src={DinnerApps} alt="Dinner Apps" className="menu-image" />
      <img src={DinnerMeats} alt="Dinner Meats" className="menu-image" />
      <img src={DinnerSeafood} alt="Dinner Seafood" className="menu-image" />
    </Container>
  );
};

export default Dinner;
