import { NEXT_PAGE, PREV_PAGE } from './users.actions';
import { users } from './users';

const getUsersPage = (pageNumber, amount) => {
  const startIndex = pageNumber * 3;
  return users.slice().splice(startIndex, amount);
};

const initalState = {
  usersList: users,
  usersPage: getUsersPage(0, 3),
  currentPage: 1,
};

const usersListReducer = (state = initalState, action) => {
  switch (action.type) {
    case NEXT_PAGE: {
      // console.log(action.payload.userData);
      return {
        ...state,
        usersPage: getUsersPage(state.currentPage + 1, 3),
        currentPage: state.currentPage + 1,
      };
    }
    case PREV_PAGE: {
      return {
        ...state,
        usersPage: getUsersPage(state.currentPage - 1, 3),
        currentPage: state.currentPage - 1,
      };
    }

    default:
      return state;
  }
};

export default usersListReducer;
