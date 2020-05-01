import React from "react";
import dailySpecial51 from "../img/51.JPG";
import dailySpecial430 from "../img/430.JPG";
import dailySpecial4292 from "../img/4292.JPG";
import dailySpecial429 from "../img/429.JPG";
import lobsterRolls from "../img/LobsterRolls.JPG";
import dailySpecial428 from "../img/428.JPG";
import dailySpecial424 from "../img/424.JPG";
import dailySpecial4232 from "../img/4232.JPG";
import dailySpecial423 from "../img/423.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Friday (5/1)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial51} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Thursday (4/30)</h4>
      <br />
      <img src={dailySpecial430} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (4/29, DINNER)</h4>
      <br />
      <img src={dailySpecial4292} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (4/29, LUNCH)</h4>
      <br />
      <img src={dailySpecial429} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (4/28)</h4>
      <br />
      <img src={lobsterRolls} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial428} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Friday (4/24)</h4>
      <br />
      <img src={dailySpecial424} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (4/23, DINNER)</h4>
      <br />
      <img src={dailySpecial4232} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (4/23, LUNCH)</h4>
      <br />
      <img src={dailySpecial423} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
