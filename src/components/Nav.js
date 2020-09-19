import React from "react";
import NavLink from "./NavLink";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";
import History from "../pages/History";
import Home from "../pages/Home";
import Beverages from "../pages/Beverages";
import Caterings from "../pages/Caterings";
import Social from "../pages/Social";
import Coronavirus from "../pages/Coronavirus";
import CoronavirusLunch from "../pages/CoronavirusLunch";
import CoronavirusDinner from "../pages/CoronavirusDinner";

const links = [
  { title: "Home ", link: "/" },
  { title: "Lunch", link: "/lunch" },
  { title: "Dinner", link: "/dinner" },
  { title: "Beverages ", link: "/beverages" },
  { title: "Caterings", link: "/caterings" },
  { title: "History ", link: "/history" },
  { title: "Social", link: "/social" }
];

const base = process.env.PUBLIC_URL;

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
      <Route path={base + "/"} component={Coronavirus} exact />
      <Route path={base + "/lunch"} component={CoronavirusLunch} exact />
      <Route path={base + "/dinner"} component={CoronavirusDinner} exact />
      <Route path={base + "/beverages"} component={Beverages} exact />
      <Route path={base + "/caterings"} component={Caterings} exact />
      <Route path={base + "/history"} component={History} exact />
      <Route path={base + "/social"} component={Social} exact />
    </Container>
  );
}

export default Na;
