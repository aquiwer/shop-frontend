import {AppDispatch} from "../state";
import {Api} from "../../server/agent";
import {ILogin, IRegister} from "../../server/types";
import {UserActionCreators} from "../action-creators";
import {IUser} from "../reducers/user-reducer/types";

export const userRegisterThunk = (userData: IRegister) => {
    return async (dispatch: AppDispatch) => {
        try {

            const response = await Api.createAccount(userData);
            console.log(response, "response")
            //@ts-ignore
            dispatch(UserActionCreators.setUser(response))
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
