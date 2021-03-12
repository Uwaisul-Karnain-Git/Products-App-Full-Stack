import { ADD_PRODUCT_COMMENT } from '../constants/actionTypes';


const ProductCommentReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT_COMMENT:
            return [ ...state, action.payload];
        default:
            return state;
    }
};


export default ProductCommentReducer;
