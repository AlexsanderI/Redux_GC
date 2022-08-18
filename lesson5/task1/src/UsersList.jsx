import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users/users.actions';
import { usersListSelector, currentPageSelector, usersPageSelector } from './users/users.selectors';

class UserList extends React.Component {
  render() {
    const { users, currentPage, usersToRender, goPrev, goNext } = this.props;
    console.log(users);
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

const mapState = state => ({
  currentPage: currentPageSelector(state),
  usersToRender: usersPageSelector(state),
  users: usersListSelector(state),
});

const mapDispatch = {
  goPrev: usersActions.prevPage,
  goNext: usersActions.nextPage,
};

const connector = connect(mapState, mapDispatch);

const connectedUserList = connector(UserList);

export default connectedUserList;
