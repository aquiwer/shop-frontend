import {AppDispatch} from "../state";
import {Api} from "../../server/agent";
import {HelperActionCreator, ProductsActionCreators} from "../action-creators";
import {ICart} from "../reducers/cart-reducer/types";
import {setTypeOfNotification} from "../reducers/helper-reducer/types";

export const getProductsFromCartThunk = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await Api.getProductsForCart();
            dispatch(ProductsActionCreators.getForCart(response))
        } catch (e: any) {
            console.error(e)
        }
    }
}

export const addToCartThunk = (userId: string | undefined, productData: ICart) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await Api.addToCart(userId, productData).then(() => {
                dispatch(HelperActionCreator.setTypeOfNotification("info"))
                dispatch(HelperActionCreator.setNotificationTitle("Great!"))
                dispatch(HelperActionCreator.setNotificationMessage("Product was added! Thank u!"))
                dispatch(HelperActionCreator.setIsShowNotification(true))
            });

            //@ts-ignore
            dispatch(ProductsActionCreators.addToCart(response))


        } catch (e: any) {
            console.error(e)
        }
    }
}

export const getProductsSectionThunk = (type: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await Api.getCurrentProductSection(type);
            dispatch(ProductsActionCreators.setProducts(response))
        } catch (e: any) {
            console.error(e)
        }
    }
}
export const deleteProductsFromCartThunk = (id: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await Api.deleteProductsFromCart(id);
            dispatch(ProductsActionCreators.removeItemFromCart(response))
        } catch (e: any) {
            console.error(e)
        }
    }
}

export const getCurrentItemThunk = (id: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await Api.getCurrentProduct(id);
            dispatch(ProductsActionCreators.setCurrentProduct(response))
        } catch (e: any) {
            console.error(e)
        }
    }
}

