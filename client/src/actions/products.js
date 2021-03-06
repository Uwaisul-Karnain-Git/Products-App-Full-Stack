import { FETCH_ALL_PRODUCTS, FETCH_FILTERED_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT } from '../constants/actionTypes';
import * as api from '../api/product.js';  


// Action Creators

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();
    
        dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });
    } catch (err) {
        console.log(err);
    }    
};

export const getFilteredProducts = (name, price) => async (dispatch) => {
    try {
        const { data } = await api.fetchFilteredProducts(name, price);
    
        dispatch({ type: FETCH_FILTERED_PRODUCTS, payload: data });
    } catch (err) {
        console.log(err);
    }    
};

export const createProduct = (product) => async (dispatch) => {
    try {
        //const { data } = await api.createProduct(product);

        let  productData = JSON.stringify(product);
        const { data } = await api.createProduct(productData);

        console.log('data is: ' + data);

        dispatch({ type: CREATE_PRODUCT, payload: data });
    } catch (err) {
        console.log(err);
    }    
};


// export const updateProductToDeleteState = (id, post) => async (dispatch) => {
//     try {
//       const { data } = await api.updateProductToDeleteState(id, post);
      
//       dispatch({ type: UPDATE_PRODUCT, payload: data });
//     } catch (err) {
//       console.log(err);
//     }
// };

export const updateMultipleProductsToDeleteState = (ids) => async (dispatch) => {
    try {      
      const { data } = await api.updateMultipleProductsToDeleteState(ids);
      
      dispatch({ type: UPDATE_PRODUCT, payload: data });
    } catch (err) {
      console.log(err);
    }
};

