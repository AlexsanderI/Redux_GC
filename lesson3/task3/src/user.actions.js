export const SET_USER = 'USER/SET_USER';
export const RESET_USER = 'USER/RESET_USER';

export const addUser = userData => ({
  type: SET_USER,
  payload: { userData },
});

export const resetUser = () => ({ type: RESET_USER });
