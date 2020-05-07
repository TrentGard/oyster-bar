import React from "react";
import dailySpecial57 from "../img/57.JPG";
import dailySpecial56 from "../img/56.JPG";
import dailySpecial552 from "../img/552.JPG";
import Marg from "../img/Marg.JPG";
import MargBurger from "../img/MargBurger.JPG";
import dailySpecial55 from "../img/55.JPG";
import dailySpecial51 from "../img/51.JPG";
import dailySpecial430 from "../img/430.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Thursday (5/7)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial57} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Wednesday (5/6)</h4>
      <br />
      <img src={dailySpecial56} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (5/5, DINNER)</h4>
      <br />
      <img src={MargBurger} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial552} alt="Daily Specials" className="menu-image" />
      <img src={Marg} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (5/5, LUNCH)</h4>
      <br />
      <img src={dailySpecial55} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Friday (5/1)</h4>
      <br />
      <img src={dailySpecial51} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (4/30)</h4>
      <br />
      <img src={dailySpecial430} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
