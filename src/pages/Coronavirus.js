import React from "react";
import OBCarousel from "../components/OBCarousel";
import { Container, Row, Col } from "react-bootstrap";

const Coronavirus = () => {
    return (
      <Container>
        <h1 className="page-title">The Oyster Bar</h1>
        <h4 className="page-title">Serious Food In A Casual Atmosphere</h4>
        <br />
        <OBCarousel className="carousel-image" />
        <br />
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>COVID-19:</span> We have a *tentative* date of Tuesday, June 16th, set for resuming dine-in services.</h5>
        <h5 className="page-title">(With expanded hours and limited seating.)</h5>
        <h5 className="page-title">In the meantime, we will continue serving take-out/curbside only during limited hours (listed below).</h5>
        <br />
        <h5 className="page-title">Click the <span style={{ color: 'lightblue' }}>Lunch and Dinner Take-Out</span> tabs above to view our updated menus</h5>
        <h5 className="page-title">and call <a href="tel:260-744-9490" style={{ color: 'lightblue' }}>(260) 744-9490</a> to schedule your order.</h5>
        <br />
        <h5 className="page-title blue">We will be offering a 10% discount on all food and beverages when you order with a credit or debit card!</h5>
        <h5 className="page-title blue">(Burger specials not included.)</h5>
        <br />
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>Update:</span> Due to escalations in food costs we have had to</h5> 
        <h5 className="page-title">marginally increase our Tuesday burger special beyond the $2 price range.</h5>
        <h5 className="page-title">We apologize for the increment, but rest assured</h5>
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>they are still the best quality (1/2 pound!) burgers in Fort Wayne!</span></h5>
        <br />
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>Thank you for your support during these difficult times</span></h5> 
        <h5 className="page-title">and please continue checking out our <span style={{ color: 'lightblue' }}>Daily Specials</span> tab above for the latest features!</h5>
        <br />
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>Reminder:</span> OYSTERS ARE BACK (except for Parmesan and Bienville)!</h5>
        <br />

        <Row className="justify-content-md-center info">
          <Col md="auto">
            <h3>Location:</h3>
            <br />
            <p>1830 S Calhoun St</p>
            <p>Fort Wayne, IN 46802</p>
            <br />
          </Col>
          <Col md="auto" className="blue">
            <h3>New Hours:</h3>
            <br />
            <p>Tue-Fri Lunch: 11:30 AM to 2 PM</p>
            <p>Tue-Fri Dinner: 4 PM to 7 PM</p>
            <p>Sat, Sun, Mon: Closed</p>
            <br />
          </Col>
          <Col md="auto">
            <h3>Contact and</h3>
            <h3>Place an Order:</h3>
            <br />
            <p>Call <a href="tel:260-744-9490" style={{ color: 'tan' }}>(260) 744-9490</a></p>
            <br />
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Coronavirus;