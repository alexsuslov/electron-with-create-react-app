/**
 * Ux state
 */

const State = {
  inspector: false,
};

function reducer(state = State, action) {
  switch (action.type) {
    case 'inspector':
      return { ...state, inspector: !state.inspector };
    default:
      return state;
  }
}

export default reducer;
