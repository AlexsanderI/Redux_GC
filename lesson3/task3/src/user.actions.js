export const SET_USER = 'USER/SET_USER';
export const RESET_USER = 'USER/RESET_USER';

export const setUser = userData => ({
  type: SET_USER,
  payload: { userData },
});

export const removeUser = () => ({ type: RESET_USER });
