import React from "react";
import dailySpecial721 from "../img/721.jpeg";
import dailySpecial717 from "../img/717.jpeg";
import Duck from "../img/Duck.jpeg";
import Seabass2 from "../img/Seabass2.jpeg";
import dailySpecial716 from "../img/716.jpeg";
import Mahi from "../img/MahiMahi.jpeg";
import Seabass from "../img/Seabass.jpeg";
import Tony from "../img/Tony.jpeg";
import dailySpecial624 from "../img/624.JPG";
import dailySpecial623 from "../img/623.JPG";
import Grouper from "../img/Grouper.JPG";
import Halibut from "../img/Halibut.JPG";
import dailySpecial6162 from "../img/616-2.JPG";
import dailySpecial616 from "../img/616.JPG";
import dailySpecial612 from "../img/612.JPG";
import lobsterRollPlate from "../img/LobsterRollPlate.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Tuesday (7/21)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial721} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Friday (7/17) W/ Guest Chef Tony West!</h4>
      <br />
      <img src={Seabass2} alt="Daily Specials" className="menu-image" />
      <img src={Duck} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial717} alt="Daily Specials" className="menu-image" />
      <img src={Tony} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (7/16) W/ Guest Chef Tony West!</h4>
      <br />
      <img src={Mahi} alt="Daily Specials" className="menu-image" />
      <img src={Seabass} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial716} alt="Daily Specials" className="menu-image" />
      <img src={Tony} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (6/24)</h4>
      <br />
      <img src={dailySpecial624} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (6/23)</h4>
      <br />
      <img src={dailySpecial623} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (6/16)</h4>
      <br />
      <img src={dailySpecial616} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial6162} alt="Daily Specials" className="menu-image" />
      <img src={Grouper} alt="Daily Specials" className="menu-image" />
      <img src={Halibut} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Friday (6/12)</h4>
      <br />
      <img src={dailySpecial612} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
