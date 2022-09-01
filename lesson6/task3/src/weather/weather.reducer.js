import { CITIES_DATE_RECIEVED } from './weather.actions';

const initialData = {
  citiesData: null,
};

const citiesReducer = (state = initialData, action) => {
  switch (action.type) {
    case CITIES_DATE_RECIEVED: {
      return { ...state, citiesData: action.payload.citiesData };
    }
    default:
      return state;
  }
};

export default citiesReducer;
