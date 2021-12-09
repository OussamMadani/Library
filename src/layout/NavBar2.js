import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const NavBar2 = ({handleLogout}) => {
return (
  <Navbar className="navbar22" collapseOnSelect expand="sm"  variant="dark">
    <Navbar.Brand>Library</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item  href="#action/3.1" >example1</NavDropdown.Item>
          <NavDropdown.Item  href="#action/3.2" >example2</NavDropdown.Item>
          <NavDropdown.Item  href="#action/3.3" >example3</NavDropdown.Item>
          <NavDropdown.Divider />
         
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link onClick={handleLogout} >Log out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
}
export default NavBar2;