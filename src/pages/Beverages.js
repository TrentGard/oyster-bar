import React from "react";
import Wine from "../img/Wine_List.jpg";
import Cocktails from "../img/Cocktails.jpg";
import OBCarousel from "../components/OBCarousel";
import { Container } from "react-bootstrap";

function Beverages() {
  return (
    <Container>
        <h1 className="page-title">Beverages</h1>
        <br />
        <h4 className="page-title blue">Notes: Beers rotate regularly.</h4>
        <h4 className="page-title blue">Not all beverages may be available at this time.</h4>
        <h4 className="page-title blue"><a href="tel:260-744-9490" style={{ color: 'tan' }}>Call</a> the restaurant for more details.</h4>
      <OBCarousel className="carousel-image-menu" />
      <h2 className="page-title">Wines</h2>
      <br />
      <img src={Wine} alt="Wine List" className="menu-image" />
      <br />
      <br />
      <h2 className="page-title">Cocktails</h2>
      <br />
      <img src={Cocktails} alt="Cocktails" className="menu-image" />
    </Container>
  );
}

export default Beverages;
