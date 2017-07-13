/**
 * Navbar
 */
import React from 'react';
import PropTypes from 'prop-types';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

/*
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
*/


const Component = props => {
  return (<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Modbus conf</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Registers</NavItem>

      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href="#">Inspector</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
};

Component.propTypes = {
};

export default Component;
