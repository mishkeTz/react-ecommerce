import ShopActionTypes from './shop.types';

const initialState = {
    collections: null,
    isFetching: true,
    errorMessage: null,
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
                errorMessage: null,
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: null,
                collections: action.payload,
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        default: 
            return state;
    }
};

export default shopReducer;