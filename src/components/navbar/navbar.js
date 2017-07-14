/**
 * Navbar
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

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

const handleInspector = ({ dispatch }) => {
  return e => {
    e.preventDefault();
    dispatch({ type: 'inspector' });
  };
};

export const handleLoader = ({ dispatch }) => {
  return e => {
    e.preventDefault();
    dispatch({ type: 'LOADER' });
  };
};

const Component = props => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Modbus conf</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={3} title="Registers" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} onClick={handleLoader(props)}>Load</MenuItem>
        </NavDropdown>

        </Nav>
        <Nav pullRight>
          <NavItem eventKey={2} href="#" onClick={handleInspector(props)}>
            Inspector
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Component.propTypes = {};

export default connect()(Component);
