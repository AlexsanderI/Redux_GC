import { createStore } from 'redux';
import { counterReducer } from './counter.reducer';
// import usersReducer from './users.reducer';

// const appReducer = combineReducers({
//   counte: counterReducer,
//   // users: usersReducer,
// });

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
