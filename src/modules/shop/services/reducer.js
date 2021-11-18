const initalstate = {
    products: null,
    collections: null,
    product_reviews: null
}

const shopReducer = (state = initalstate , action) => {
    switch (action.type) {
        
        case 'FETCH_PRODUCT':
            return {
                ...state,
                products: action.payload
            };
        
        case 'FETCH_REVIEWS':
            return {
                ...state,
                product_reviews: action.payload
            };
        
        case 'FETCH_COLLECTION':
            return {
                ...state,
                collections: action.payload
            };
        
        case 'STORE_REVIEWS':
            if(Array.isArray(state.product_reviews)) {
                return {...state, product_reviews: [action.payload].concat(state.product_reviews)}
            } else {
                return {...state, product_reviews: [action.payload]}
            }
        
        default:
            return state;
    }
}

export default shopReducer