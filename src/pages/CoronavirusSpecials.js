import React from "react";
import dailySpecial1 from "../img/324.jpeg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Tuesday (3/24) from 11:30 AM to 2 PM</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial1} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
