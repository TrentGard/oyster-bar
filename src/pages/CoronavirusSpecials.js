import React from "react";
import dailySpecial421 from "../img/421.JPG";
import dailySpecial4212 from "../img/4212.JPG";
import dailySpecial414 from "../img/414-1.JPG";
import dailySpecial4142 from "../img/414-3.JPG";
import dailySpecial416 from "../img/416.JPG";
import dailySpecial417 from "../img/417.JPG";
import dailySpecial415 from "../img/415.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Tuesday (4/21)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial421} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial4212} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Friday (4/17)</h4>
      <br />
      <img src={dailySpecial417} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (4/16)</h4>
      <br />
      <img src={dailySpecial416} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (4/15)</h4>
      <br />
      <img src={dailySpecial415} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (4/14)</h4>
      <br />
      <img src={dailySpecial414} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial4142} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
