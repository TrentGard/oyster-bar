import React from "react";
import dailySpecial616 from "../img/616.JPG";
import dailySpecial612 from "../img/612.JPG";
import dailySpecial611 from "../img/611.jpg";
import dailySpecial6102 from "../img/610-2.JPG";
import dailySpecial610 from "../img/610.JPG";
import dailySpecial69 from "../img/69.JPG";
import lobsterRollPlate from "../img/LobsterRollPlate.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Tuesday (6/16)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial616} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Friday (6/12)</h4>
      <br />
      <img src={dailySpecial612} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (6/11)</h4>
      <br />
      <img src={dailySpecial611} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (6/10)</h4>
      <br />
      <img src={dailySpecial6102} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial610} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (6/10)</h4>
      <br />
      <img src={dailySpecial69} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
