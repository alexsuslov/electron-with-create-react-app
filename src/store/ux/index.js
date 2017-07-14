/**
 * Ux state
 */

const State = {
  inspector: false,
  loader: false,
};

function reducer(state = State, action) {
  switch (action.type) {
    case 'inspector':
      return { ...state, inspector: !state.inspector };
    case 'LOADER':
      return { ...state, loader: !state.loader };
    default:
      return state;
  }
}

export default reducer;
