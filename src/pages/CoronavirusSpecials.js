import React from "react";
import dailySpecial521 from "../img/521.JPG";
import dailySpecial520 from "../img/520.JPG";
import dailySpecial519 from "../img/519.jpg";
import dailySpecial515 from "../img/515.JPG";
import dailySpecial514 from "../img/514.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Thursday (5/21)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial521} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Wednesday (5/20)</h4>
      <br />
      <img src={dailySpecial520} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (5/19)</h4>
      <br />
      <img src={dailySpecial519} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Friday (5/15)</h4>
      <br />
      <img src={dailySpecial515} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (5/14)</h4>
      <br />
      <img src={dailySpecial514} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
