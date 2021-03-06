import {AppDispatch} from "../state";
import {Api} from "../../server/agent";
import {ILogin, IRegister} from "../../server/types";
import {HelperActionCreator, UserActionCreators} from "../action-creators";
import {IUser} from "../reducers/user-reducer/types";

export const userRegisterThunk = (userData: IRegister) => {
    return async (dispatch: AppDispatch) => {
        try {

            const response = await Api.createAccount(userData)

            if (response) {
                dispatch(HelperActionCreator.setTypeOfNotification("success"))
                dispatch(HelperActionCreator.setNotificationTitle("Successful registration!"))
                dispatch(HelperActionCreator.setNotificationMessage("Thank u, that choose us <3"))
                dispatch(HelperActionCreator.setIsShowNotification(true))
            }

            console.log(response, "response")
            //@ts-ignore
            dispatch(UserActionCreators.setUser(response))
        } catch (e: any) {
            console.error(e)
        }
    }
}
export const userAddToFavThunk = (userData: IRegister) => {
    return async (dispatch: AppDispatch) => {
        try {

            const response = await Api.addToFav(userData);
            console.log(response, "response")
            //@ts-ignore
            dispatch(UserActionCreators.addToFav(response))
        } catch (e: any) {
            console.error(e)
        }
    }
}

export const userSendUniqCodeThunk = (email: string) => {

    return async (dispatch: AppDispatch) => {
        try {

            const response = await Api.createUniqCode(email);
            console.log(response, "response")

        } catch (e: any) {
            console.error(e)
        }
    }
}
export const userCheckUniqCodesThunk = (code: string) => {

    return async (dispatch: AppDispatch) => {
        try {

            const response = await Api.checkUniqCodes(code);
            console.log(response, "response")
            console.log("Im here")
            dispatch(UserActionCreators.setUniqCode(Boolean(response)))
        } catch (e: any) {
            console.error(e)
        }
    }
}

export const userLoginThunk = (userData: ILogin) => {
    return async (dispatch: AppDispatch) => {
        try {

            const response = await Api.login(userData);
            //@ts-ignore
            dispatch(UserActionCreators.setUser(response))
            console.log(response, "response")

        } catch (e: any) {
            console.error(e)
        }
    }
}
export const userChangeDataThunk = (userData: IUser) => {
    return async (dispatch: AppDispatch) => {
        try {

            //@ts-ignore
            const response = await Api.changeUserData(userData);
            // @ts-ignore

            dispatch(UserActionCreators.changeUser(response))
            console.log(response, "response")

        } catch (e: any) {
            console.error(e)
        }
    }
}
