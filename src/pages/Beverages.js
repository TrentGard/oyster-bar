import React from "react";
import Wine from "../img/Wine_List.jpg";
import Cocktails from "../img/Cocktails.jpg";
import image1 from "../img/Carousel1.jpg";
import image2 from "../img/Carousel2.gif";
import image3 from "../img/Carousel3.gif";
import image4 from "../img/Carousel4.gif";
import { Container, Carousel } from "react-bootstrap";

function Beverages() {
  return (
    <Container>
      <div className="page-title">
        <h1>Beverages</h1>
        <h3>Note: Beers rotate regularly, stop in for the latest craft brews!</h3>
      </div>
      <Carousel controls={false} interval={4500} pauseOnHover={true}>
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
      <h3 className="page-title">Wines</h3>
      <img src={Wine} alt="Wine List" className="menu-image" />
      <h3 className="page-title">Cocktails</h3>
      <img src={Cocktails} alt="Cocktails" className="menu-image" />
    </Container>
  );
}

export default Beverages;
