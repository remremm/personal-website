import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/Navdropdown';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Navbar.css';

const NavbarTop = (props) => {
  return(
    <div>
      <Navbar className={styles.navbar} bg="light" variant="light">
        <Navbar.Brand className={styles.brand} onClick={props.goHome}>Remremm</Navbar.Brand>
        <Nav className={styles.drop}>
        <NavDropdown title="Menu" id="collasible-nav-dropdown" drop="down">
          <NavDropdown.Item onClick={props.changeView}>Home</NavDropdown.Item>
          <NavDropdown.Item onClick={props.changeView}>Projects</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4"><a href="https://www.linkedin.com/in/amarvadhia/">Resume</a></NavDropdown.Item>
        </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavbarTop;