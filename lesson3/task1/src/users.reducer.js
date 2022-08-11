// import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

// const initalState = {
//   usersList: [],
// };

// const usersReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case ADD_USER: {
//       return {
//         ...state,
//         usersList: state.usersList.concat(action.paylod),
//       };
//     }
//     case DELETE_USER: {
//       const newList = state.usersList.filter(user => user.id !== action.payload.userId);
//       return {
//         ...state,
//         usersList: newList,
//       };
//     }
//     case UPDATE_USER: {
//       const newList = state.usersList.map(user => {
//         if (user.id === action.payload.userId) {
//           return {
//             ...user,
//             ...action.payload.userData,
//           };
//         }
//         return user;
//       });
//       return {
//         ...state,
//         usersList: newList,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default usersReducer;
import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions.js';

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        usersList: state.usersList.concat(action.payload),
      };
    case DELETE_USER:
      return {
        usersList: state.usersList.filter(user => user.id !== action.payload),
      };
    case UPDATE_USER:
      return {
        usersList: state.usersList.map(user => {
          if (user.id !== action.payload.id) return user;
          return {
            ...user,
            ...action.payload.userData,
          };
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;
