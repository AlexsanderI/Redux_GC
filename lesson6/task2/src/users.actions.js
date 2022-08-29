import { getUserData } from './users.getway';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATE_RECIEVED = 'USER_DATE_RECIEVED';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataRecived = userData => {
  return {
    type: USER_DATE_RECIEVED,
    payload: {
      userData,
    },
  };
};
export const fetchUserDate = userName => {
  return function (dispatch) {
    dispatch(showSpinner());
    getUserData(userName).then(userData => {
      dispatch(userDataRecived(userData));
    });
  };
};
