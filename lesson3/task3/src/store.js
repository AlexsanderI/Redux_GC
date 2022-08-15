import { createStore, combineReducers } from 'redux';
import { usersReducer } from './user.reducer';
import { cartReducer } from './cart.reducer';
import { languagReducer } from './language.reducer';

const appReducer = combineReducers({
  language: languagReducer,
  user: usersReducer,
  cart: cartReducer,
});

const store = createStore(
  appReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
