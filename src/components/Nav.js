import React from "react";
import NavLink from "./NavLink";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";
import History from "../pages/History";
import Home from "../pages/Home";
import Beverages from "../pages/Beverages";
import DailySpecials from "../pages/DailySpecials";
import Caterings from "../pages/Caterings";
import Social from "../pages/Social";
const links = [
  { title: "Home ", link: "/" },
  { title: "Lunch ", link: "/lunch" },
  { title: "Dinner ", link: "/dinner" },
  { title: "Daily Specials", link: "/daily_specials" },
  { title: "Beverages ", link: "/beverages" },
  { title: "Caterings", link: "/caterings" },
  { title: "History ", link: "/history" },
  { title: "Social", link: "/social" }
];

function Na() {
  return (
    <Container>
      <Navbar className="ob-nav" expand="md">
        <Navbar.Brand style={{ color: 'tan' }}>
          The Oyster Bar
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {links.map(({ title, link }, index) => {
              return <NavLink key={index} title={title} link={link} />;
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" to="/" component={Home} exact />
      <Route path="/lunch" to="/lunch" component={Lunch} exact />
      <Route path="/dinner" to="/dinner" component={Dinner} exact />
      <Route path="/daily_specials" to="/daily_specials" component={DailySpecials} exact />
      <Route path="/beverages" to="/beverages" component={Beverages} exact />
      <Route path="/caterings" to="/caterings" component={Caterings} exact />
      <Route path="/history" to="/history" component={History} exact />
      <Route path="/social" to="/social" component={Social} exact />
    </Container>
  );
}

export default Na;
