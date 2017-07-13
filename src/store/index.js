/**
 * Create redux store
 */
import { createStore, combineReducers } from 'redux';

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
    counter,

  })
);
