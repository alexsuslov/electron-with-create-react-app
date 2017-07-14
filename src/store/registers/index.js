/**
 * Registers
 */

const State = {
  items: [],
};

function reducer(state = State, action) {
  switch (action.type) {
    case 'REGISTERS_FILE':
      return { ...state, items: action.payload };
    case 'REGISTERS_DEL':
      return { ...state, items: state.items.filter(v => v.id !== action.payload) };

    case 'REGISTERS_ADD':
      return { ...state, items: [...state.items, action.payload] };

    default:
      return state;
  }
}

export default reducer;
