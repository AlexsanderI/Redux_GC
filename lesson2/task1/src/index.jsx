import { createStore } from 'redux';

const INCREAMENT = 'COUNTER/INCREAMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const increment = () => {
  return {
    type: INCREAMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREAMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
