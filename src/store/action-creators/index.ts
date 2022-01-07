import {
    IUser,
    setExitedChangingAction, setFavsAction, setUniqCodeAction,
    setUserAction,
    setUsersChangingAction,
    UserActionEnum
} from "../reducers/user-reducer/types";
import {
    IProduct,
    ProductActionEnum,
    setCurrentProduct,
    setCurrentTabAction, setIsAdded,
    setProductAction
} from "../reducers/product-reducer/types";
import {
    CartActionEnum,
    deleteRemoveItemFromCart,
    getInCartAction,
    ICart,
    setToCartAction
} from "../reducers/cart-reducer/types";
import {
    HelperActionEnum,
    notificationTypes,
    setIsShowNotification, setNotificationMessage, setNotificationTitle,
    setTypeOfNotification
} from "../reducers/helper-reducer/types";

export const UserActionCreators = {
    setUser: (user: IUser): setUserAction => ({type: UserActionEnum.SET_USER, payload: user}),
    changeUser: (user: IUser): setUsersChangingAction => ({type: UserActionEnum.CHANGE_USER, payload: user}),
    exit: (): setExitedChangingAction => ({type: UserActionEnum.EXIT, payload: false}),
    setUniqCode: (isAvailable: boolean): setUniqCodeAction => ({
        type: UserActionEnum.SET_UNIQ_CODE,
        payload: isAvailable
    }),
    addToFav: (favorites: IUser): setFavsAction => ({
        type: UserActionEnum.ADD_TO_FAVS,
        payload: favorites
    }),
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
    setIsAdded: (isAdded: boolean): setIsAdded => ({
        type: ProductActionEnum.SET_IS_ADDED,
        payload: isAdded
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
    setTypeOfNotification: (typeOfNotification: notificationTypes): setTypeOfNotification => ({
        type: HelperActionEnum.SET_TYPE_OF_NOTIFICATION,
        payload: typeOfNotification
    }),
    setIsShowNotification: (isShowNotification: boolean): setIsShowNotification => ({
        type: HelperActionEnum.SET_IS_SHOW_NOTIFICATION,
        payload: isShowNotification
    }),
    setNotificationTitle: (notificationTitle: string): setNotificationTitle => ({
        type: HelperActionEnum.SET_NOTIFICATION_TITLE,
        payload: notificationTitle
    }),
    setNotificationMessage: (notificationMessage: string): setNotificationMessage => ({
        type: HelperActionEnum.SET_NOTIFICATION_MESSAGE,
        payload: notificationMessage
    })
}