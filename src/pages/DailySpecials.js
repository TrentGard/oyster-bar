import React from "react";
import dailySpecial from "../img/Daily_Features.jpg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
