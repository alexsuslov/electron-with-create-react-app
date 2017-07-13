import React from 'react';
import ReactDOM from 'react-dom';
import Cmp from './row';
import { Provider } from 'react-redux';
import store from '../../store/';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
    <table>
      <tbody>
        <Cmp />
      </tbody>
    </table>
  </Provider>, div);
});
