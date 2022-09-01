import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import citiesReducer from './weather/cities.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  citiesReducer,

  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
