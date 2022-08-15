import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initalState = {
  cardsList: [],
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return { ...state, cardsList: state.cardsList.concat(action.payload.productData) };
    }

    case REMOVE_PRODUCT: {
      const newList = state.cardsList.filter(card => card.id !== action.payload.productId);
      return { ...state, cardsList: newList };
    }
    default:
      return state;
  }
};

export default cartReducer;
