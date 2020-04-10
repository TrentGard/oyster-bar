import React from "react";
import dailySpecial410 from "../img/410.JPG";
import dailySpecial2 from "../img/43.JPG";
import dailySpecial3 from "../img/43-2.jpg";
import dailySpecial4 from "../img/47.JPG";
import dailySpecial5 from "../img/48-2.JPG";
import dailySpecial49 from "../img/49.JPG";
import dailySpecial7 from "../img/42.JPG";
import dailySpecial8 from "../img/47-2.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Friday (4/10)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={dailySpecial410} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
      <br />
      <h4 className="page-title blue">Thursday (4/9)</h4>
      <br />
      <img src={dailySpecial49} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (4/8, LUNCH AND DINNER)</h4>
      <br />
      <img src={dailySpecial5} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (4/7, LUNCH AND DINNER)</h4>
      <br />
      <img src={dailySpecial4} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial8} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Friday (4/3, DINNER ONLY)</h4>
      <br />
      <img src={dailySpecial3} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Friday (4/3, LUNCH ONLY)</h4>
      <br />
      <img src={dailySpecial2} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Thursday (4/2)</h4>
      <br />
      <img src={dailySpecial7} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
