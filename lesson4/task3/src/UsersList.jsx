import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users/users.actions';

class UserList extends React.Component {
  // state = {
  //   currentPage: 1,
  // };

  // itemsPerPage = 3;

  // prevBtnHandler = () => {
  //   this.setState({ currentPage: this.state.currentPage - 1 });
  // };

  // nextBtnHandler = () => {
  //   this.setState({ currentPage: this.state.currentPage + 1 });
  // };

  render() {
    const { users, currentPage, usersToRender, goPrev, goNext } = this.props;
    // const startIndex = (this.state.currentPage - 1) * this.itemsPerPage;
    // const endIndex = startIndex + this.itemsPerPage;
    // const usersToRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goPrev={goPrev}
          goNext={goNext}
          totalItems={users.length}
          itemsPerPage={usersToRender.length}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    currentPage: state.currentPage,
    usersToRender: state.usersPage,
    users: state.usersList,
  };
};

const mapDispatch = {
  goPrev: usersActions.prevPage,
  goNext: usersActions.nextPage,
};

const connector = connect(mapState, mapDispatch);

const connectedUserList = connector(UserList);

export default connectedUserList;
