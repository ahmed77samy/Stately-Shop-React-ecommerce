export const FETCH_USER = (payload) => {
    return {
        type: "FETCH_USER",
        payload: payload ? payload : undefined
    }
}

export const EXIT_USER = () => {
    return {
        type: "EXIT_USER",
        payload: null
    }
}

export const USER_FAVOURIT = (payload) => {
    return {
        type: "USER_FAVOURIT",
        payload: payload ? payload : undefined
    }
}

export const USER_CART = (payload) => {
    return {
        type: "USER_CART",
        payload: payload ? payload : undefined
    }
}

export const ADD_TO_CART = (payload) => {
    return {
        type: "ADD_TO_CART",
        payload: payload
    }
}