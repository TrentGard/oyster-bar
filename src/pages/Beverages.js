import React from "react";
import Wine from "../img/Wine_List.jpg";
import Cocktails from "../img/Cocktails.jpg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function Beverages() {
  return (
    <Container>
      <div className="page-title">
        <h1>Beverages</h1>
        <br />
        <h4 className="blue">Notes: Beers rotate regularly.</h4>
        <h4 className="blue">Not all beverages may be available at this time.</h4>
        <h4 className="blue"><a href="tel:260-744-9490" style={{ color: 'tan' }}>Call</a> the restaurant for more details.</h4>
      </div>
      <OBCarousel className="carousel-image-menu" />
      <h3 className="page-title">Wines</h3>
      <img src={Wine} alt="Wine List" className="menu-image" />
      <h3 className="page-title">Cocktails</h3>
      <img src={Cocktails} alt="Cocktails" className="menu-image" />
    </Container>
  );
}

export default Beverages;
