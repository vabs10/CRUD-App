import {createStore, applyMiddleware} from 'redux';
import bookReducer from './_Reducers';
import {thunk} from 'redux-thunk';


const bookStore = createStore(bookReducer, applyMiddleware(thunk));

export default bookStore;