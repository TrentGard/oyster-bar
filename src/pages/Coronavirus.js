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
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>UPDATE:</span> We will be CLOSED this Saturday, July 4th.</h5>
        <h5 className="page-title">This decision was made to honor our AWESOME staff and give them a 3 day weekend off to spend time with friends and family.</h5>
        <h5 className="page-title">Thank you everyone and we hope you have a fun, safe, and healthy weekend!</h5>

        <br />
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>COVID-19:</span> We are open for dine-in services (inside and out) with expanded hours (see below) at limited capacity and respecting social distancing guidelines.</h5>
        <br />
        <h6 className="page-title"><span style={{ color: 'lightblue' }}>NOTES:</span> For everyone's safety, servers will be equipped with masks and gloves, along with plastic eye-ware should they so choose. We will continue our practice of testing all employees for a temperature before they start their shift. Additionally, all areas will continue to be routinely sanitized with the inclusion of paper menus/single-use table coverings.</h6>
        <h6 className="page-title">Regarding testing for temperatures, we do have non-invasive thermometers (i.e. the ones with lasers you need only point at the forehead) and request all guests dining with us undergo the quick scan (again, just as EVERYONE serving you in the restaurant does).</h6>
        <h6 className="page-title">Full disclosure though: of course we can't force anyone to take this test, and anyone found to have a temperature will be refused dine-in service. We are only making this request for the safety of ALL involved, and asking for a bit of altruism via participation.</h6>
        <br />
        <h5 className="page-title">That having been said, keep checking <a href="https://www.facebook.com/The-Oyster-Bar-292501212282/" target="_blank" without rel="noopener noreferrer" style={{ "color": "lightblue" }}>Facebook</a>, <a href="https://www.instagram.com/fwoysterbar/" target="_blank" without rel="noopener noreferrer" style={{ "color": "lightblue" }}>Instagram</a>, and here for all the latest updates.</h5>
        <h5 className="page-title">We look forward to this step back to normalcy and continuing to serve you <span style={{ color: 'lightblue' }}>serious food in a casual atmosphere!</span></h5>
        <br />
        <h5 className="page-title">Click the <span style={{ color: 'lightblue' }}>Lunch and Dinner</span> tabs above to view our updated menus</h5>
        <h5 className="page-title">and call <a href="tel:260-744-9490" style={{ color: 'lightblue' }}>(260) 744-9490</a> to schedule your order/reservation.</h5>
        <br />
        <h5 className="page-title blue">We will be offering a 10% discount on all take-out food and beverages when you order with a credit or debit card!</h5>
        <h5 className="page-title blue">(Burger specials not included.)</h5>
        <br />
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>Burger Update:</span> Due to escalations in food costs we have had to</h5> 
        <h5 className="page-title">marginally increase our Tuesday burger special beyond the $2 price range.</h5>
        <h5 className="page-title">We apologize for the increment, but rest assured</h5>
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>they are still the best quality (1/2 pound!) burgers in Fort Wayne!</span></h5>
        <br />
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>Thank you for your support during these difficult times</span></h5> 
        <h5 className="page-title">and please continue checking out our <span style={{ color: 'lightblue' }}>Daily Specials</span> tab above for the latest features!</h5>
        <br />
        <h5 className="page-title"><span style={{ color: 'lightblue' }}>Reminder:</span> OYSTERS ARE BACK (except for Parmesan and Bienville)!</h5>
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
            <p>Tue-Fri Lunch: 11 AM to 3 PM</p>
            <p>Tue-Sat Dinner: 4 PM to 9 PM</p>
            <p>Sun-Mon: Closed</p>
            <br />
          </Col>
          <Col md="auto">
            <h3>Contact and</h3>
            <h3>Place an Order/</h3>
            <h3>Reservation:</h3>
            <br />
            <p>Call <a href="tel:260-744-9490" style={{ color: 'tan' }}>(260) 744-9490</a></p>
            <br />
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Coronavirus;