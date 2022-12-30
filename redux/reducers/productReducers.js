const initialState = {
    carts: [],
    products: [],
    product: {},
}


const productReducers = (state = initialState, { payload, type }) => {
    switch (type) {
        case 'GET_PRODUCTS':
            localStorage.setItem("products", JSON.stringify(payload))

            console.log(payload , 'payload')
            return {
                ...state, products: payload
            }

        case 'GET_PRODUCT':
            const allProducts = JSON.parse(localStorage.getItem("products"))

            const filteredProduct = allProducts?.filter((item) => item.id == +payload)

            return {
                ...state,product : filteredProduct[0]
            }

        case 'ADD_TO_CART':
            const exist = state.carts?.find((x) => x.id === payload.id)

            const productQtn = { ...state.product, qtn: 1 }

            const cartItems = state.carts.map((cart) => cart.id === payload.id ? { ...cart, qtn: cart.qtn + payload.qtn } : cart)

            localStorage.setItem("cart", JSON.stringify(cartItems))

            if (exist) {
                return { ...state, carts: cartItems, product: productQtn }

            } else {
                const pro = payload
                return {
                    ...state, product: productQtn, carts: [...state.carts, { ...pro }]
                }
            }

        case 'GET_CART':
            const localCart = JSON.parse(localStorage.getItem("cart"))
            return { ...state, carts: localCart ? localCart : [] }


        case 'INCREMENT':
            const qtnIncrease = { ...state.product, qtn: state.product.qtn + 1 }
            return { ...state, product: qtnIncrease }

        case 'DECREMENT':
            const check1 = state.products.map((x) => x.id === payload ? { ...x, qtn: --x.qtn } : x)
            const checkItem = state.products.find((x) => x.id === payload)

            if (checkItem.qtn < 2) {
                const productQtn = state.products.map((x) => x.id === payload ? { ...x, qtn: 1 } : x)
                return { ...state, products: productQtn }
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