import React from 'react';
import PropTypes from 'prop-types';

const Component = props => {
  const {addr, range, desc, type} = props;
  return (<tr>
    <td>{addr}</td>
    <td>{range}</td>
    <td>{type}</td>
    <td>{desc}</td>
  </tr>);
};

Component.propTypes = {
};

export default Component;
