/**
 * Create redux store
 */
import { createStore, combineReducers } from 'redux';
import ux from './ux/';
import registers from './registers/';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default createStore(
	combineReducers({
    ux, registers,
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
