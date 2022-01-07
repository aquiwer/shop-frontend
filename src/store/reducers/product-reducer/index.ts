import {IProductAction, IProductState, ProductActionEnum} from "./types";

const initialState: IProductState = {
    currentTab: "dresses",
    products: [],
    currentProduct: {
        price: 0,
        title: "",
        count: 0,
        photo: "",
        describe: "",
        _id: "",
        __v: 0
    },
    isAdded: false
}

export const productReducer = (state = initialState, action: IProductAction) => {
    switch (action.type) {
        case ProductActionEnum.SET_CURRENT_TAB:
            return {...state, currentTab: action.payload}
        case ProductActionEnum.SET_PRODUCT:
            return {...state, products: action.payload}
        case ProductActionEnum.GET_CURRENT_PRODUCT:
            return {...state, currentProduct: action.payload}
        case ProductActionEnum.SET_IS_ADDED:
            return {...state, isAdded: action.payload}
        default:
            return state;
    }
}