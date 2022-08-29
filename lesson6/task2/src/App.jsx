import React from 'react';
import { Provider } from 'react-redux';
import UserInfo from './UserInfo';
import SearchField from './SearchField';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <UserInfo />
        <SearchField />
      </div>
    </Provider>
  );
};

export default App;
