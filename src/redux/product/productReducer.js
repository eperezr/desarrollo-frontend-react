import { SET_PRODUCTS } from './productTypes';

const initialState = {
    PRODUCTS: 'array de productos',
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS : {
            return {
                ...state,
                PRODUCTS: action.payload,
            }
        }
        default:
            return state;
    }
};

export default productReducer;