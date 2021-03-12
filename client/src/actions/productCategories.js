import { FETCH_ALL_PRODUCTCATEGORIES, FETCH_FILTERED_PRODUCTCATEGORIES } from '../constants/actionTypes';
import * as api from '../api/productCategory.js';  


// Action Creators

export const getProductCategories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProductCategories();
    
        dispatch({ type: FETCH_ALL_PRODUCTCATEGORIES, payload: data });
    } catch (err) {
        console.log(err);
    }    
};

export const getFilteredProductCategories = (name) => async (dispatch) => {
    try {
        const { data } = await api.fetchFilteredProductCategories(name);
    
        dispatch({ type: FETCH_FILTERED_PRODUCTCATEGORIES, payload: data });
    } catch (err) {
        console.log(err);
    }    
};



