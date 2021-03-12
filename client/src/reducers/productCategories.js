import { FETCH_ALL_PRODUCTCATEGORIES, FETCH_FILTERED_PRODUCTCATEGORIES } from '../constants/actionTypes';


const ProductCategoryReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUCTCATEGORIES:
            return action.payload;
        case FETCH_FILTERED_PRODUCTCATEGORIES:
            return action.payload;
        default:
            return state;
    }
};


export default ProductCategoryReducer;
