import {
    ADD_BOOK_TO_CART,
    FETCH_BOOKS,
    DELETE_BOOK_FROM_CART,
    DELETE_ALL_BOOKS_FROM_CART } from './actions';

const initialState = {
    cards: [],
    isLoading: true,
    shoppingCart: [],
    totalPrice: null,
}

const updateCart = (state, action, quantity) => {
    const { shoppingCart, totalPrice } = state;
    const idx = shoppingCart.findIndex(({id}) => id === action.payload.id);

    if (idx === -1) {
        return {
            ...state,
            shoppingCart: [
                ...shoppingCart,
                { ...action.payload, count: quantity, },
            ],
            totalPrice: totalPrice + action.payload.price * quantity
        }
    }
    
    const currentCount = state.shoppingCart[idx].count;
    const currentPrice = state.shoppingCart[idx].price;
    
    if (currentCount + quantity < 1) {
        return {
            ...state,
            shoppingCart: [
                ...shoppingCart.slice(0,idx),
                ...shoppingCart.slice(idx+1),
            ],
            totalPrice: totalPrice + (currentPrice / currentCount) * quantity
        }
    }
    
    return {
        ...state,
        shoppingCart: [
            ...shoppingCart.slice(0, idx),
            {
                ...action.payload,
                count: currentCount + quantity,
                price: currentPrice + (currentPrice / currentCount) * quantity,
            },
            ...shoppingCart.slice(idx+1)
        ],
        totalPrice: totalPrice + (currentPrice / currentCount) * quantity
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOKS :
            return {
                ...state,
                cards: action.payload,
                isLoading: false,
            }

        case ADD_BOOK_TO_CART :
            return updateCart(state, action, 1);

        case DELETE_BOOK_FROM_CART : 
            return updateCart(state, action, -1);

        case DELETE_ALL_BOOKS_FROM_CART :
            return updateCart(state, action, -action.payload.count)

        default :
            return state;
    }
}

export default reducer;