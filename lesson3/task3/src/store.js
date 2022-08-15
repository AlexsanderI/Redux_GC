import { createStore, combineReducers } from 'redux';
// import { counterReducer } from './language.reducer';
import usersReducer from './user.reducer';
import cartReducer from './cart.reducer';
import { languagReducer } from './language.reducer';

const appReducer = combineReducers({
  user: usersReducer,
  cart: cartReducer,
  language: languagReducer,
});

const store = createStore(
  appReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
