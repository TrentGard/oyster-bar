import React from "react";
import dailySpecial528 from "../img/528.JPG";
import dailySpecial527 from "../img/527-2.JPG";
import lobsterRollPlate from "../img/LobsterRollPlate.JPG";
import dailySpecial5262 from "../img/526-2.JPG";
import dailySpecial526 from "../img/526.JPG";
import dailySpecial522 from "../img/522.JPG";
import dailySpecial521 from "../img/521.JPG";
import dailySpecial520 from "../img/520.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Thursday (5/28)</h4>
      <h4 className="page-title blue">Note: An additional special today is Joe's chicken sandwich w/ dab sauce and fries for $8.95!</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial528} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Wednesday (5/27)</h4>
      <br />
      <img src={dailySpecial527} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (5/26)</h4>
      <br />
      <img src={dailySpecial5262} alt="Daily Specials" className="menu-image" />
      <img src={lobsterRollPlate} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial526} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Friday (5/22)</h4>
      <br />
      <img src={dailySpecial522} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (5/21)</h4>
      <br />
      <img src={dailySpecial521} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (5/20)</h4>
      <br />
      <img src={dailySpecial520} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
