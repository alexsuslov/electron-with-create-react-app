import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Cmp from './navbar';
import store from '../../store/';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Cmp /></Provider>, div);
});
