import React from "react";
import dailySpecial514 from "../img/514.JPG";
import dailySpecial513 from "../img/513.JPG";
import dailySpecial5122 from "../img/5122.JPG";
import dailySpecial512 from "../img/512.JPG";
import dailySpecial582 from "../img/582.JPG";
import dailySpecial58 from "../img/58.JPG";
import dailySpecial572 from "../img/572.JPG";
import dailySpecial57 from "../img/57.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Thursday (5/14)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial514} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Wednesday (5/13)</h4>
      <br />
      <img src={dailySpecial513} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (5/12)</h4>
      <br />
      <img src={dailySpecial5122} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial512} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Friday (5/8)</h4>
      <br />
      <img src={dailySpecial582} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial58} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (5/7)</h4>
      <br />
      <img src={dailySpecial572} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial57} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
