import { FETCH_ALL_PRODUCTS, FETCH_FILTERED_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT } from '../constants/actionTypes';


const ProductReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS:
            return action.payload;
        case FETCH_FILTERED_PRODUCTS:
            return action.payload;
        case CREATE_PRODUCT:
            return [ ...state, action.payload];
        case UPDATE_PRODUCT:
            return state.map(product => product.id === action.payload.id ? action.payload : product);
        default:
            return state;
    }
};


export default ProductReducer;