const initialState = {
    carts: [],
    products: [],
    product: {},
}


const productReducers = (state = initialState, { payload, type }) => {
    switch (type) {
        case 'GET_PRODUCTS':
            const cangeProduct = JSON.parse(localStorage.getItem("products"))

            localStorage.setItem("products", JSON.stringify(payload))

            return {
                ...state, products: payload
            }

        case 'GET_PRODUCT':
            const allProducts = JSON.parse(localStorage.getItem("products"))

            const filteredProduct = allProducts?.filter((item) => item.id == +payload)

            return {
                ...state, product: filteredProduct[0], products: allProducts
            }

        case 'GET_CART':
            const localCart = JSON.parse(localStorage.getItem("cart"))
            return { ...state, carts: localCart ? localCart : [] }


        case 'ADD_TO_CART':
            const exist = state.carts?.find((x) => x.id === payload.id)

            const cartItems = state.carts?.map((cart) => cart.id === payload.id ? { ...payload} : cart)

            if (exist) {
                localStorage.setItem("cart", JSON.stringify(cartItems))
                return { ...state, carts: cartItems }
            } 
            else {
                const pro = payload
                localStorage.setItem("cart", JSON.stringify([...state.carts, { ...pro, inCart: true }]))
                return {
                    ...state, carts: [...state.carts, { ...pro, inCart: true, }]
                }
            }

        case 'INCREMENT':
            const qtnIncrease = state.products.map((x) => x.id === payload ? { ...state.product, qtn: state.product.qtn + 1 } : x)

            localStorage.setItem("products", JSON.stringify(qtnIncrease))

            const product = qtnIncrease.filter((x) => x.id === payload)

            return { ...state, product: product[0] }

        case 'DECREMENT':
            const check1 = state.product.id === payload ? { ...state.product, qtn: --state.product.qtn } : state.product

            if (state.product.qtn < 2) {
                const productQtn = state.product.id === payload ? { ...state.product, qtn: 1 } : state.product
                return { ...state, product: productQtn }
            }

            return { ...state, products: check1 }

        case 'DELETE_FROM_CART':
            const filtered = state.carts.filter((cart) => cart.id !== payload.id)
            localStorage.setItem("cart", JSON.stringify(filtered))

            return {
                ...state, carts: filtered
            }

        default: return state
    }
}


export default productReducers