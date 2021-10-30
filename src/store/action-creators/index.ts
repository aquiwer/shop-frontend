import {
    IUser,
    setExitedChangingAction,
    setUserAction,
    setUsersChangingAction,
    UserActionEnum
} from "../reducers/user-reducer/types";
import {
    IProduct,
    ProductActionEnum,
    setCurrentProduct,
    setCurrentTabAction,
    setProductAction
} from "../reducers/product-reducer/types";
import {
    CartActionEnum,
    deleteRemoveItemFromCart,
    getInCartAction,
    ICart,
    setToCartAction
} from "../reducers/cart-reducer/types";
import {HelperActionEnum, setIsShow} from "../reducers/helper-reducer/types";

export const UserActionCreators = {
    setUser: (user: IUser): setUserAction => ({type: UserActionEnum.SET_USER, payload: user}),
    changeUser: (user: IUser): setUsersChangingAction => ({type: UserActionEnum.CHANGE_USER, payload: user}),
    exit: ():  setExitedChangingAction => ({type: UserActionEnum.EXIT, payload: false})
}

export const ProductsActionCreators = {
    setProducts: (products: Array<IProduct>): setProductAction => ({
        type: ProductActionEnum.SET_PRODUCT,
        payload: products
    }),
    setCurrentTab: (tab: string): setCurrentTabAction => ({
        type: ProductActionEnum.SET_CURRENT_TAB,
        payload: tab
    }),
    addToCart: (products: Array<ICart>): setToCartAction => ({type: CartActionEnum.SET_TO_CART, payload: products}),
    getForCart: (products: Array<IProduct>): getInCartAction => ({type: CartActionEnum.GET_IN_CART, payload: products}),
    removeItemFromCart: (product: ICart): deleteRemoveItemFromCart => ({
        type: CartActionEnum.DELETE_FROM_CART,
        payload: product
    }),
    setCurrentProduct: (product: string | undefined): setCurrentProduct => ({
        type: ProductActionEnum.GET_CURRENT_PRODUCT,
        //@ts-ignore
        payload: product
    }),
}


export const HelperActionCreator = {
    setIsShow: (isShow: boolean): setIsShow => ({
        type: HelperActionEnum.SET_IS_SHOW,
        payload: isShow
    })
}