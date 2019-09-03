import React from "react";
import NavLink from "./NavLink";
import { Navbar, Nav, Container } from "react-bootstrap";
import OBLogo from "../img/OB_Logo.png";

const links = [
  { title: "Home ", link: "/" },
  { title: "Lunch ", link: "/lunch" },
  { title: "Dinner ", link: "/dinner" },
  { title: "Daily Specials", link: "/daily_specials" },
  { title: "Beverages ", link: "/beverages" },
  { title: "Caterings", link: "/caterings" },
  { title: "History ", link: "/history" }
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
    </Container>
  );
}

export default Na;
