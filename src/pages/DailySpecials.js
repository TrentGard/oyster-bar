import React from "react";
import dailySpecial from "../img/Daily_Features.jpg";
import image1 from "../img/Carousel1.jpg";
import image2 from "../img/Carousel2.gif";
import image3 from "../img/Carousel3.gif";
import image4 from "../img/Carousel4.gif";
import { Container, Carousel } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
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
      <img src={dailySpecial} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
