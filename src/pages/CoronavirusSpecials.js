import React from "react";
import dailySpecial1 from "../img/324.jpeg";
import dailySpecial2 from "../img/325.jpeg";
import dailySpecial3 from "../img/326.jpeg";
import dailySpecial4 from "../img/327.jpeg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Friday (3/27)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial4} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Thursday (3/26)</h4>
      <br />
      <img src={dailySpecial3} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (3/25)</h4>
      <br />
      <img src={dailySpecial2} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (3/24)</h4>
      <br />
      <img src={dailySpecial1} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
