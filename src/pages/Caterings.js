import React from 'react';
import OBCarousel from "../components/OBCarousel";
import catering1 from "../img/Catering_Menu1.jpg";
import catering2 from "../img/Catering_Menu2.jpg";
import catering3 from "../img/Catering_Menu3.jpg";
import catering4 from "../img/Catering_Menu4.jpg";
import catering5 from "../img/Catering_Menu5.jpg";
import catering6 from "../img/Catering_Menu6.jpg";
import catering7 from "../img/Catering_Menu7.jpg";
import catering8 from "../img/Catering_Menu8.jpg";
import catering9 from "../img/Catering_Menu9.jpg";
import catering10 from "../img/Catering_Menu10.jpg";
import catering11 from "../img/Catering_Menu11.jpg";
import catering12 from "../img/Catering_Menu12.jpg";
import { Container } from "react-bootstrap";

function Caterings() {
    return (
        <Container>
            <h1 className="page-title">Caterings</h1>
            <OBCarousel className="carousel-image-menu" />
            <img src={catering1} alt="Catering" className="menu-image" />
            <img src={catering2} alt="Catering" className="menu-image" />
            <img src={catering3} alt="Catering" className="menu-image" />
            <img src={catering4} alt="Catering" className="menu-image" />
            <img src={catering5} alt="Catering" className="menu-image" />
            <img src={catering6} alt="Catering" className="menu-image" />
            <img src={catering7} alt="Catering" className="menu-image" />
            <img src={catering8} alt="Catering" className="menu-image" />
            <img src={catering9} alt="Catering" className="menu-image" />
            <img src={catering10} alt="Catering" className="menu-image" />
            <img src={catering11} alt="Catering" className="menu-image" />
            <img src={catering12} alt="Catering" className="menu-image" />
        </Container>
    )
}

export default Caterings;