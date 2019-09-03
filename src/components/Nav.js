import React from "react";
import NavLink from "./NavLink";
import { Navbar, Nav } from "react-bootstrap";

const links = [
  { title: "Home ", link: "/" },
  { title: "Lunch ", link: "/lunch" },
  { title: "Dinner ", link: "/dinner" },
  { title: "Daily Specials", link: "/daily_specials" },
  { title: "Beverages ", link: "/beverages" },
  { title: "History ", link: "/history" }
];

function Na() {
  return (
    <Navbar className="ob-nav" expand="md">
      <Navbar.Brand>The Oyster Bar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ color: 'tan' }}>
          {links.map(({ title, link }, index) => {
            return <NavLink key={index} title={title} link={link} />;
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Na;
