import { getUserData } from './weather.gateway';

export const CITIES_DATE_RECIEVED = 'CITIES_DATE_RECIEVED';

export const userDataRecived = citiesData => ({
  type: CITIES_DATE_RECIEVED,
  payload: {
    citiesData,
  },
});
export const getWeatherData = () =>
  function (dispatch) {
    getUserData().then(citiesData => {
      dispatch(userDataRecived(citiesData));
    });
  };
