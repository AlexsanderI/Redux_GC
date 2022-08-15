import { SET_LANGUAGE } from './languag.actions';

// eslint-disable-next-line import/prefer-default-export
export const languagReducer = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload.language;
    default:
      return state;
  }
};
