import { createStore } from 'redux';
import usersListReducer from './users/users.reducer';

// const appReducer = combineReducers({
//   users: usersListReducer,
// });

const store = createStore(
  usersListReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
