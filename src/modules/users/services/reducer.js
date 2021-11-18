const initalstate = {
    user: null,
    user_wishlist: null,
    user_cart: null
}

const userReducer = (state = initalstate , action) => {
    switch (action.type) {
        
        case "FETCH_USER":
            return {
                ...state,
                user: action.payload
            };
        
        case "EXIT_USER":
            return {
                ...state,
                user: action.payload
            };
        
        case "USER_FAVOURIT":
            return {
                ...state,
                user_wishlist: action.payload
            };
        
        case "USER_CART":
            return {
                ...state,
                user_cart: action.payload
            };

        case 'ADD_TO_CART':
            if(Array.isArray(state.user_cart)) {
                return {...state, user_cart: [action.payload].concat(state.user_cart)}
            } else {
                return {...state, user_cart: [action.payload]}
            }
        
        default:
            return state;
    }
}


export default userReducer