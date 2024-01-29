import {createStore} from 'redux';
import bookReducer from './_Reducers';

const store = createStore(bookReducer);

export default store;