import React from "react";
import DinnerApps from "../img/Dinner_Apps.jpg";
import DinnerMeats from "../img/Dinner_Meats.jpg";
import DinnerSeafood from "../img/Dinner_Seafood.jpg";
import image1 from "../img/Carousel1.jpg";
import image2 from "../img/Carousel2.gif";
import image3 from "../img/Carousel3.gif";
import image4 from "../img/Carousel4.gif";
import { Container, Carousel } from "react-bootstrap";

const Dinner = () => {
  return (
    <Container>
      <h1 className="page-title">Dinner</h1>
      <Carousel controls={false} interval={4500}>
        <Carousel.Item>
          <img src={image1} alt="Home" className="carousel-image-menu" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="Home" className="carousel-image-menu" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt="Home" className="carousel-image-menu" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image4} alt="Home" className="carousel-image-menu" />
        </Carousel.Item>
      </Carousel>
      <img src={DinnerApps} alt="Dinner Apps" className="menu-image" />
      <img src={DinnerMeats} alt="Dinner Meats" className="menu-image" />
      <img src={DinnerSeafood} alt="Dinner Seafood" className="menu-image" />
    </Container>
  );
};

export default Dinner;
