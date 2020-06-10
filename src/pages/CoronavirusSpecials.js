import React from "react";
import dailySpecial6102 from "../img/610-2.JPG";
import dailySpecial610 from "../img/610.JPG";
import dailySpecial69 from "../img/69.JPG";
import dailySpecial653 from "../img/653.JPG";
import dailySpecial65 from "../img/65.JPG";
import dailySpecial652 from "../img/652.JPG";
import dailySpecial64 from "../img/64.JPG";
import dailySpecial63 from "../img/63.jpg";
import lobsterRollPlate from "../img/LobsterRollPlate.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">*UPDATED* Available Wednesday (6/10)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial6102} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial610} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Tuesday (6/10)</h4>
      <br />
      <img src={dailySpecial69} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Friday (6/5)</h4>
      <br />
      <img src={dailySpecial653} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial65} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial652} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (6/4)</h4>
      <br />
      <img src={dailySpecial64} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (6/3)</h4>
      <br />
      <img src={dailySpecial63} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
