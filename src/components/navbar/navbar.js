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

  <MenuItem eventKey={1.1} data="MODBUS_ADD" {...propsItem}>Add</MenuItem>
*/

export const handleLoader = ({ dispatch }) => {
  return e => {
    e.preventDefault();
    const type = e.target.getAttribute('data');
    dispatch({ type });
  };
};

const Component = props => {
  const propsItem = {
    onClick: handleLoader(props),
  }
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
          <NavItem href="/modbus">Modbus</NavItem>
          <NavDropdown eventKey={3} title="Registers" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} data="LOADER" {...propsItem}>Load</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={2} href="#" type="inspector" {...propsItem}>
            Inspector
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Component.propTypes = {};

export default connect()(Component);
