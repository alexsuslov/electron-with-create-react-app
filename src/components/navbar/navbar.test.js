import React from 'react';
import ReactDOM from 'react-dom';
import Cmp from './navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cmp />, div);
});
