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
    const style = {
      position: 'absolute',
      top: 32,
      width: '90%',
      padding: 16,
    }


    return (
      <form className="bg-info" style={style} onSubmit={this.handleSubmit}>
        <h3>{title}</h3>
        <div>
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
            <ControlLabel>Point ID</ControlLabel>
            <FormControl
              {...inputProps}
              name="pointId"
              defaultValue={state.pointId}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl
              {...inputProps}
              name="desc"
              defaultValue={state.desc}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Options/Range</ControlLabel>
            <FormControl
              {...inputProps}
              name="options"
              defaultValue={state.options}
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

          <FormGroup>
            <ControlLabel>Units</ControlLabel>
            <FormControl
              {...inputProps}
              name="units"
              defaultValue={state.units}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>type</ControlLabel>
            <FormControl
              {...inputProps}
              name="type"
              defaultValue={state.type}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Permision</ControlLabel>
            <FormControl
              {...inputProps}
              name="perm"
              defaultValue={state.perm}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Group</ControlLabel>
            <FormControl
              {...inputProps}
              name="group"
              defaultValue={state.group}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>SubGroup</ControlLabel>
            <FormControl
              {...inputProps}
              name="sub"
              defaultValue={state.sub}
            />
          </FormGroup>

          {submit}
        </div>
      </form>
    );
  }
}

export default connect()(Component);
