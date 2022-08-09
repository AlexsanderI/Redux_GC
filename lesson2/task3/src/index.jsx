import './index.scss';
import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Joe' }));

store.subscribe(() => {
  const state = store.getState();

  console.log(state);
});

console.log(store.getState());

store.dispatch(deleteUser(4));
