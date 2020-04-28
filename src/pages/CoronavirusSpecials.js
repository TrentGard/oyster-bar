import React from "react";
import lobsterRolls from "../img/LobsterRolls.JPG";
import dailySpecial428 from "../img/428.JPG";
import dailySpecial424 from "../img/424.JPG";
import dailySpecial4232 from "../img/4232.JPG";
import dailySpecial423 from "../img/423.JPG";
import dailySpecial4222 from "../img/4222.JPG";
import dailySpecial422 from "../img/422.JPG";
import dailySpecial421 from "../img/421.JPG";
import dailySpecial4212 from "../img/4212.JPG";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function DailySpecials() {
  return (
    <Container>
      <h1 className="page-title">Daily Specials</h1>
      <br />
      <h4 className="page-title blue">Available Tuesday (4/28)</h4>
      <h4 className="page-title blue">(Lobster rolls available until we run out.)</h4>
      <OBCarousel className="carousel-image-menu" />
      <img src={lobsterRolls} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial428} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h1 className="page-title">Previous Specials</h1>
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
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (4/22, DINNER)</h4>
      <br />
      <img src={dailySpecial4222} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Wednesday (4/22, LUNCH)</h4>
      <br />
      <img src={dailySpecial422} alt="Daily Specials" className="menu-image" />
      <br />
      <br />
      <h4 className="page-title blue">Tuesday (4/21)</h4>
      <br />
      <img src={dailySpecial421} alt="Daily Specials" className="menu-image" />
      <img src={dailySpecial4212} alt="Daily Specials" className="menu-image" />
    </Container>
  );
}

export default DailySpecials;
