// import { create } from 'core-js/library/es7/object';
import { createStore } from 'redux';

const ICREMENT = 'COUNTERT/ICREMENT';
const DECREMENT = 'COUNTERT/DECREMENT';
const RESET = 'COUNTERT/RESET';

export const increment = () => {
  return {
    type: ICREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const inintalState = {
  history: [],
};

const counterReducer = (state = inintalState, action) => {
  switch (action.type) {
    case ICREMENT:
      return {
        ...state,
        history: state.history.concat('+1'),
      };
    case DECREMENT:
      return {
        ...state,
        history: state.history.concat(-1),
      };
    case RESET:
      return {
        history: [],
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
