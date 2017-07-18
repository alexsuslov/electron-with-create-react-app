import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

import { handleLoader } from '../navbar/navbar';
/*
onChange={(event)=> {
               this.readFile(event)
          }}
 */
const handleChange = props => {
  const { dispatch } = props;
  return e => {
    const { files } = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      dispatch({ type: 'REGISTERS_FILE', payload: JSON.parse(reader.result)});
      dispatch({ type: 'LOADER' });
    };
    reader.readAsText(files[0]);
  };
};

const Component = props => {
  const propsFile = {
    name: 'file',
    type: 'file',
    accept: '.json',
    onClick: e => (e.target.value = null),
    onChange: handleChange(props),
  };
  return props.loader
    ? <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Load registers</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input {...propsFile} />
          </Modal.Body>

          <Modal.Footer>
            <Button data="LOADER" onClick={handleLoader(props)}>Cancel</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    : <div />;
};

Component.propTypes = {};

export default connect(s => s.ux)(Component);
