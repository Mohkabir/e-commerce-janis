export const getProducts = (products) => {
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}

export const getProduct = (id) => {
    return {
        type: 'GET_PRODUCT',
        payload: id
    }
}

export const getCart = () => {
    return {
        type: 'GET_CART',
    }
}

export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const deleteFromCart = (cart) => {
    return {
        type: 'DELETE_FROM_CART',
        payload: cart
    }
}

export const quantityChange = (type, payload) => {
    return {
        type,
        payload
    }
}
