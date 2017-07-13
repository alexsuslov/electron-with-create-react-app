import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Form = (
  <form action="#">
    <FormGroup>
      <ControlLabel>Address</ControlLabel>
      <FormControl name="addr" defaultValue='0'/>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Range</ControlLabel>
      <FormControl name="range" defaultValue='0'/>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Description</ControlLabel>
      <FormControl name="desc" defaultValue=''/>
    </FormGroup>

    <FormGroup>
      <ControlLabel>Type</ControlLabel>
      <FormControl name="type" defaultValue='int16'/>
    </FormGroup>
  </form>
);


const Component = props => {
  return (<div>
    {Form}
  </div>);
};

Component.propTypes = {
};

export default Component;
