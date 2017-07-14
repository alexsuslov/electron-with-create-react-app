/**
 * Registers list
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Row from './row';

const row = (v, i) => <Row key={`RG-${i}`} {...v} />;

const Component = props => {
  const { items=[] } = props;
  return (
    <table className="table table-striped table-condensed">
      <thead>
      <tr>
        <th>Address</th>
        <th>Range</th>
        <th>type</th>
        <th>Description</th>
        <th>Group</th>
        <th>Mode</th>
        </tr>
      </thead>
      <tbody>
        {items.map(row)}
      </tbody>
    </table>
  );
};

Component.propTypes = {};

export default connect(s => s.registers)(Component);
