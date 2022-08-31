import { CITIES_DATE_RECIEVED } from './cities.actions';

const initialData = {
  isFetching: false,
  userData: null,
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case CITIES_DATE_RECIEVED: {
      return { ...state, userData: action.payload.userData, isFetching: false };
    }
    default:
      return state;
  }
};

export default userReducer;
