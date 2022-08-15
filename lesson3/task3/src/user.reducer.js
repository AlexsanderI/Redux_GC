import { SET_USER, RESET_USER } from './user.actions';

const usersReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER: {
      console.log(action.payload.userData);
      return {
        ...state,
        ...action.payload.userData,
      };
    }
    case RESET_USER: {
      return null;
    }

    default:
      return state;
  }
};

export default usersReducer;
