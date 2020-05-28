import React from "react";
import dailySpecial5284 from "../img/528-4.JPG";
import dailySpecial5283 from "../img/528-3.JPG";
import dailySpecial5282 from "../img/528-2.JPG";
import dailySpecial528 from "../img/528.JPG";
import dailySpecial527 from "../img/527-2.JPG";
import lobsterRollPlate from "../img/LobsterRollPlate.JPG";
import dailySpecial5262 from "../img/526-2.JPG";
import dailySpecial526 from "../img/526.JPG";
import dailySpecial522 from "../img/522.JPG";
import dailySpecial521 from "../img/521.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">*UPDATED* Available Thursday (5/28)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial5283} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial5284} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial5282} alt="Daily Specials" className="menu-image" />
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
    </Container>
  );
}

export default DailySpecials;
