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
      <Route path={base + "/"} component={Home} exact />
      <Route path={base + "/lunch"} component={Lunch} exact />
      <Route path={base + "/dinner"} component={Dinner} exact />
      <Route path={base + "/daily_specials"} component={DailySpecials} exact />
      <Route path={base + "/beverages"} component={Beverages} exact />
      <Route path={base + "/caterings"} component={Caterings} exact />
      <Route path={base + "/history"} component={History} exact />
      <Route path={base + "/social"} component={Social} exact />
    </Container>
  );
}

export default Na;
