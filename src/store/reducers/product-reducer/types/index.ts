export interface IProduct {
    price: number,
    title: string,
    count: number,
    photo?: string,
    describe: string,
    _id?: string,
    __v?: number
}

export interface IProductState {
    currentTab: string,
    products: Array<IProduct> | null,
    currentProduct: IProduct | null
}

export enum ProductActionEnum {
    SET_PRODUCT = "SET_PRODUCT",
    SET_CURRENT_TAB = "SET_CURRENT_TAB",
    GET_CURRENT_PRODUCT = "GET_CURRENT_PRODUCT"
}

export interface setCurrentProduct {
    type: ProductActionEnum.GET_CURRENT_PRODUCT,
    payload: IProduct
}

export interface setProductAction {
    type: ProductActionEnum.SET_PRODUCT,
    payload: Array<IProduct>
}

export interface setCurrentTabAction {
    type: ProductActionEnum.SET_CURRENT_TAB,
    payload: string
}

export type IProductAction = setProductAction | setCurrentProduct | setCurrentTabAction;
