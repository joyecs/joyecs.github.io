import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

library.add(faCoffee);

function TopNav() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="mailto:joyee816@gmail.com">joyee816@gmail.com</Nav.Link>
          <Nav.Link href="#">2693620864</Nav.Link> */}
          <Nav.Link href='/#/education'>
            Education
          </Nav.Link>
          <Nav.Link href="/experience">Experience</Nav.Link>
          <Nav.Link href="/portfolio">Porfolio</Nav.Link>
          {/* <Nav.Link href="/blog">Learning Blog</Nav.Link> */}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default TopNav;