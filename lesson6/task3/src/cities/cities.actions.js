import { getUserData } from './cities.getway';

export const CITIES_DATE_RECIEVED = 'CITIES_DATE_RECIEVED';

export const userDataRecived = userData => ({
  type: CITIES_DATE_RECIEVED,
  payload: {
    userData,
  },
});
export const fetchUserDate = () =>
  // eslint-disable-next-line func-names
  function (dispatch) {
    getUserData().then(userData => {
      dispatch(userDataRecived(userData));
    });
  };
