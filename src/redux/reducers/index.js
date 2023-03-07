import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { customerInforReducer } from './customerInforReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({ userReducer, cartReducer, customerInforReducer });
