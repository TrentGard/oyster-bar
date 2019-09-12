import React from "react";
import image1 from "../img/Carousel1.jpg";
import image2 from "../img/Carousel2.gif";
import image3 from "../img/Carousel3.gif";
import image4 from "../img/Carousel4.gif";
import { Container, Carousel } from "react-bootstrap";

const OBCarousel = ({ className }) => {
    return (
        <Carousel controls={false} interval={4500}>
            <Carousel.Item>
                <img src={image1} alt="Home" className={className} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={image2} alt="Home" className={className} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={image3} alt="Home" className={className} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={image4} alt="Home" className={className} />
            </Carousel.Item>
        </Carousel>
    );
};

export default OBCarousel;
