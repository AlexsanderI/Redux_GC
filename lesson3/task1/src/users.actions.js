export const ADD_USER = 'USER/ADD_USER';
export const DELETE_USER = 'USER/DELETE_USER';
export const UPDATE_USER = 'USER/UPDATE_USER';

export const addUser = userData => {
  return {
    type: ADD_USER,
    payload: userData,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const updateUser = (id, userData) => {
  return {
    type: UPDATE_USER,
    payload: { id, userData },
  };
};
