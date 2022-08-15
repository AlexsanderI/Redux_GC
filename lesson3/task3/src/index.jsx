import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id: 1, name: 'Tome' }));
// store.dispatch(setLanguage('ua'));
// store.dispatch(addProduct({ id: 2, name: 'Bobs' }));
// store.dispatch(addProduct({ id: 3, name: 'Joe' }));
store.dispatch(setUser({ id: 3, name: 'max' }));
// store.dispatch(removeProduct(2));
// store.dispatch(resetUser());
