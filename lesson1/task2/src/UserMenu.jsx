import React from 'react';
import { UserContext } from './user-context';

class UserMenu extends React.Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">{this.context.name}</span>
        <img alt={this.context.name} src={this.context.avatar_url} className="menu__avatar" />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;
export default UserMenu;
