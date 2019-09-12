import React from "react";
import lunchApp from "../img/Lunch_App.jpg";
import lunchSandwich from "../img/Lunch_Sandwich.jpg";
import lunchEntree from "../img/Lunch_Entree.jpg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

const Lunch = () => {
  return (
    <Container>
      <h1 className="page-title">Lunch</h1>
      <OBCarousel className="carousel-image-menu" />
      <img src={lunchApp} alt="Lunch App" className="menu-image" />
      <img src={lunchSandwich} alt="Lunch Sandwich" className="menu-image" />
      <img src={lunchEntree} alt="Lunch Entree" className="menu-image" />
    </Container>
  );
};

export default Lunch;
