import {CartActionEnum, ICart, ICartAction, ICartState} from "./types";

const initialState: ICartState = {
    cartItems: []
}

export const cartReducer = (state = initialState, action: ICartAction) => {
    switch (action.type) {
        case CartActionEnum.GET_IN_CART:
            return {...state, cartItems: action.payload}
        case CartActionEnum.DELETE_FROM_CART:
            const filteredProducts = state.cartItems?.filter((stateProduct: ICart) => stateProduct._id !== action.payload._id)
            return {...state, cartItems: filteredProducts}
        default:
            return state;
    }
}