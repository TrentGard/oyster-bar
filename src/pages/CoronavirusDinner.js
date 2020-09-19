import React from "react";
import COVIDDinner1 from "../img/DinnerMenu1June2020.jpg";
import COVIDDinner2 from "../img/DinnerMenu2June2020.jpg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

const CoronavirusDinner = () => {
  return (
    <Container>
      <h1 className="page-title">Dinner</h1>
      <br />
      <h4 className="page-title blue">Available Tuesday through Thursday from 4 PM to 9 PM,</h4>
      <h4 className="page-title blue">Friday and Saturday from 4 PM to 10 PM</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={COVIDDinner1} alt="Dinner Apps" className="menu-image" />
      <img src={COVIDDinner2} alt="Dinner" className="menu-image" />
    </Container>
  );
};

export default CoronavirusDinner;
