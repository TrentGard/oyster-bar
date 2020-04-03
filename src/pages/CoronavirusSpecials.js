import React from "react";
import dailySpecial1 from "../img/331-2.jpeg";
import dailySpecial2 from "../img/43.JPG";
import dailySpecial3 from "../img/326.jpeg";
import dailySpecial4 from "../img/327.jpeg";
import dailySpecial5 from "../img/330.JPG";
import dailySpecial6 from "../img/331.jpeg";
import dailySpecial7 from "../img/42.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Friday (4/3)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial2} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Thursday (4/2)</h4>
      <br />
      <img src={dailySpecial7} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (3/31, DINNER ONLY)</h4>
      <br />
      <img src={dailySpecial1} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (3/31, LUNCH ONLY)</h4>
      <br />
      <img src={dailySpecial6} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Monday (3/30)</h4>
      <br />
      <img src={dailySpecial5} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Friday (3/27)</h4>
      <br />
      <img src={dailySpecial4} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (3/26)</h4>
      <br />
      <img src={dailySpecial3} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
