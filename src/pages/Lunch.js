import React from "react";
import lunchApp from "../img/Lunch_App.jpg";
import lunchSandwich from "../img/Lunch_Sandwich.jpg";
import lunchEntree from "../img/Lunch_Entree.jpg";
import image1 from "../img/Carousel1.jpg";
import image2 from "../img/Carousel2.gif";
import image3 from "../img/Carousel3.gif";
import image4 from "../img/Carousel4.gif";
import { Container, Carousel } from "react-bootstrap";

const Lunch = () => {
  return (
    <Container>
      <h1 className="page-title">Lunch</h1>
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
      <img src={lunchApp} alt="Lunch App" className="menu-image" />
      <img src={lunchSandwich} alt="Lunch Sandwich" className="menu-image" />
      <img src={lunchEntree} alt="Lunch Entree" className="menu-image" />
    </Container>
  );
};

export default Lunch;
