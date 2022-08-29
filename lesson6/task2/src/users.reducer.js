import { SHOW_SPINNER, USER_DATE_RECIEVED } from './users.actions';

const initialData = {
  isFetching: false,
  userData: null,
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return { ...state, isFetching: true };
    }
    case USER_DATE_RECIEVED: {
      return { ...state, userData: action.payload.userData, isFetching: false };
    }
    default:
      return state;
  }
};

export default userReducer;
