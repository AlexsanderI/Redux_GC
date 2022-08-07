import React from 'react';
import Header from './Header';
// import ThemedButton from './ThemedButton';
import { UserContext } from './user-context';

class App extends React.Component {
  state = {
    UserData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state.UserData}>
        <div className="page">
          <Header />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;