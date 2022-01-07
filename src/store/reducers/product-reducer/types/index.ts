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
    currentProduct: IProduct | null,
    isAdded: boolean
}

export enum ProductActionEnum {
    SET_PRODUCT = "SET_PRODUCT",
    SET_CURRENT_TAB = "SET_CURRENT_TAB",
    SET_IS_ADDED = "SET_IS_ADDED",
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
export interface setIsAdded {
    type: ProductActionEnum.SET_IS_ADDED,
    payload: boolean
}

export interface setCurrentTabAction {
    type: ProductActionEnum.SET_CURRENT_TAB,
    payload: string
}

export type IProductAction = setProductAction | setCurrentProduct | setIsAdded | setCurrentTabAction;
