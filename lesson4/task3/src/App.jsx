import React from 'react';
import { Provider } from 'react-redux';
import UserList from './UsersList';
import store from './store';

const App = () => (
  <Provider store={store}>
    <UserList />
  </Provider>
);

export default App;
