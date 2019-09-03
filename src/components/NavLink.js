import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function NavLink({ title, link }) {
  return (
    <Nav.Link as={Link} to={link} className="ob-nav" style={{ color: 'tan' }}>
      {title}
    </Nav.Link>
  );
}

export default NavLink;
