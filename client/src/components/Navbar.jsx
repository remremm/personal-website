import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/Navdropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button';
import styles from '../styles/Navbar.css';

const NavbarTop = (props) => {
  return(
    <div>
      <Navbar className={styles.navbar} bg="light" variant="light">
        <Navbar.Brand className={styles.brand} onClick={props.goHome}>Remremm</Navbar.Brand>
        <Nav className={styles.drop}>
        <DropdownButton alignRight title="Menu" id="dropdown-menu-align-right" variant="dark-text">
          <NavDropdown.Item onClick={props.changeView}>Home</NavDropdown.Item>
          <NavDropdown.Item onClick={props.changeView}>Projects</NavDropdown.Item>
        </DropdownButton>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavbarTop;