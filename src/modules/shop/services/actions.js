export const FETCH_PRODUCT = (payload) => {
    return {
        type: "FETCH_PRODUCT",
        payload: payload && payload.length >= 1 ? payload : undefined
    }
}

export const FETCH_REVIEWS = (payload) => {
    return {
        type: "FETCH_REVIEWS",
        payload: payload && payload.length >= 1 ? payload : undefined
    }
}

export const FETCH_COLLECTION = (payload) => {
    return {
        type: "FETCH_COLLECTION",
        payload: payload && payload.length >= 1 ? payload : undefined
    }
}

export const STORE_REVIEWS = (payload) => {
    return {
        type: "STORE_REVIEWS",
        payload: payload
    }
}