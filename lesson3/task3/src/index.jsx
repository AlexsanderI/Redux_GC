import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { addUser, resetUser } from './user.actions';
import { setLanguage } from './languag.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id: 1, name: 'Tome' }));
store.dispatch(setLanguage('ua'));
store.dispatch(addProduct({ id: 2, name: 'Bobs' }));
store.dispatch(addProduct({ id: 3, name: 'Joe' }));
store.dispatch(addUser({ id: 3, name: 'max' }));
store.dispatch(removeProduct(2));
store.dispatch(resetUser());
