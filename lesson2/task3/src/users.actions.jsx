export const ADD = 'USER/ADD_USER';
export const DELETE = 'USER/DELETE_USER';

export const addUser = userData => {
  return {
    type: ADD,
    payload: userData,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE,
    payload: id,
  };
};
