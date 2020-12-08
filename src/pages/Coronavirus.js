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
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>UPDATE:</span> We have <span style={{ color: 'lightblue' }}>new dinner hours</span> of <span style={{ color: 'lightblue' }}>Monday</span> through Saturday 4 PM - 10 PM (lunch hours will remain the same)!</h5>
        <h5 className="page-title">We look forward to seeing you amid these expanded hours!</h5>
        <br />
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>COVID-19:</span> We are open for dine-in services at limited capacity and following all government-recommended health guidelines.</h5>
        <br />
        <h5 className="page-title">Keep checking <a href="https://www.facebook.com/The-Oyster-Bar-292501212282/" target="_blank" without rel="noopener noreferrer" style={{ "color": "lightblue" }}>Facebook</a>, <a href="https://www.instagram.com/fwoysterbar/" target="_blank" without rel="noopener noreferrer" style={{ "color": "lightblue" }}>Instagram</a>, and here for all the latest updates.</h5>
        <br />
        <h5 className="page-title">Click the <span style={{ color: 'lightblue' }}>Lunch and Dinner</span> tabs above to view our updated menus</h5>
        <h5 className="page-title">and call <a href="tel:260-744-9490" style={{ color: 'lightblue' }}>(260) 744-9490</a> to schedule your order/reservation.</h5>
        <br />
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>Thank you for your support during these difficult times.</span></h5>
        <h5 className="page-title">With everything going on, we look forward to continue serving you <span style={{ color: 'lightblue' }}>serious food in a casual atmosphere!</span></h5>
        <Row className="justify-content-md-center info">
          <Col md="auto">
            <h3 className="blue">Location:</h3>
            <br />
            <p>1830 S Calhoun St</p>
            <p>Fort Wayne, IN 46802</p>
            <br />
          </Col>
          <Col md="auto">
            <h3 className="blue">Hours:</h3>
            <br />
            <p>Tue-Fri Lunch: 11 AM to 3 PM</p>
            <p>Mon-Sat Dinner: 4 PM to 10 PM</p>
            <p>Sun: Closed</p>
            <br />
          </Col>
          <Col md="auto">
            <h3 className="blue">Contact and</h3>
            <h3 className="blue">Place an Order/</h3>
            <h3 className="blue">Reservation:</h3>
            <br />
            <p>Call <a href="tel:260-744-9490" style={{ color: 'tan' }}>(260) 744-9490</a></p>
            <br />
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Coronavirus;