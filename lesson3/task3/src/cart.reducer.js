import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initalState = {
  products: [],
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return { ...state, products: state.products.concat(action.payload.productData) };
    }

    case REMOVE_PRODUCT: {
      const newList = state.products.filter(card => card.id !== action.payload.productId);
      return { ...state, products: newList };
    }
    default:
      return state;
  }
};

export default cartReducer;
