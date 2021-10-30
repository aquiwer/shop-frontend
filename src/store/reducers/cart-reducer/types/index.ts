export interface ICart {
    title: string,
    describe: string,
    count: number,
    price: number,
    _id?: string,
    __v?: number
    photo?: string,
}

export interface ICartState {
    cartItems: Array<ICart>
}

export enum CartActionEnum {
    SET_TO_CART = "SET_TO_CART",
    DELETE_FROM_CART = "DELETE_FROM_CART",
    GET_IN_CART = "GET_IN_CART",
}

export interface setToCartAction {
    type: CartActionEnum.SET_TO_CART,
    payload: Array<ICart>
}

export interface getInCartAction {
    type: CartActionEnum.GET_IN_CART,
    payload: Array<ICart>
}

export interface deleteRemoveItemFromCart {
    type: CartActionEnum.DELETE_FROM_CART,
    payload: ICart
}


export type ICartAction = setToCartAction | getInCartAction | deleteRemoveItemFromCart;
