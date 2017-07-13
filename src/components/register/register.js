/**
 * Register edit form
 */
import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const evalu = v => {
  try {
    return eval(v);
  } catch (err) {
    return v;
  }
};

export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.fields || {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value, type } = e.target;
    const s = { ...this.state };
    // smart value
    s[name] = type === 'number' ? Number(value) : evalu(value);
    s.updated = true;
    this.setState(s);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: 'REGISTERS_ADD',
      payload: { ...this.state, updated: undefined },
    });
  }

  render() {
    const props = this.props;
    const state = this.state;
    const title = this.state.id ? 'Edit Register' : 'New Register';
    // smart submit button
    const submit = state.updated
      ? <FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </FormGroup>
      : '';
    // def input prors
    const inputProps = {
      type: 'text',
      autoComplete: 'off',
      onChange: this.handleChange,
    };
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{title}</h3>
        <div>
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl
              {...inputProps}
              name="desc"
              defaultValue={state.desc}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Type</ControlLabel>
            <FormControl
              {...inputProps}
              name="type"
              defaultValue={state.type}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Address</ControlLabel>
            <FormControl
              {...inputProps}
              name="addr"
              type="text"
              defaultValue={state.addr}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Range</ControlLabel>
            <FormControl
              {...inputProps}
              name="range"
              defaultValue={state.range}
            />
          </FormGroup>
          {submit}
        </div>
      </form>
    );
  }
}

export default connect()(Component);
