import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
      <Link className="navbar-brand" to="/">
        Admin Dashboard
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown> */}
        </Nav>
        {/* <Nav.Link href="#home">Home</Nav.Link> */}
        {/* <Nav.Link href="#link">Signin</Nav.Link> */}
        <li className="nav-item" style={{ listStyle: "none" }}>
          <NavLink className="nav-link" to="/signin">
            Signin
          </NavLink>
        </li>
        <li className="nav-item" style={{ listStyle: "none" }}>
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
