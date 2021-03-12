import { combineReducers } from 'redux';
import products from './products';
import productCategories from './productCategories';
import productComments from './productComments';

export default combineReducers({ products, productCategories, productComments });


  