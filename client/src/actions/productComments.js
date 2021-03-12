import { ADD_PRODUCT_COMMENT } from '../constants/actionTypes';
import * as api from '../api/productComment.js';  


// Action Creators

export const addProductComment = (productComment) => async (dispatch) => {
    try {
        //const { data } = await api.addProductComment(productComment);

        let  productCommentData = JSON.stringify(productComment);
        const { data } = await api.addProductComment(productCommentData);

        dispatch({ type: ADD_PRODUCT_COMMENT, payload: data });
    } catch (err) {
        console.log(err);
    }    
};




