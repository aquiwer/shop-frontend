export interface IUser {
    login: string,
    username: string,
    password: string,
    email: string,
    balance?: number,
    photo?: string
    isAuth?: boolean ,
    _id?: string
}

export interface IUserState {
    user: IUser,
    isUniqCode: boolean
}

export enum UserActionEnum {
    SET_USER = "SET_USER",
    CHANGE_USER = "CHANGE_USER",
    EXIT = "EXIT",
    SET_UNIQ_CODE = "SET_UNIQ_CODE"
}

export interface setUserAction {
    type: UserActionEnum.SET_USER,
    payload: IUser
}

export interface setUsersChangingAction {
    type: UserActionEnum.CHANGE_USER,
    payload: IUser
}

export interface setUniqCodeAction {
    type: UserActionEnum.SET_UNIQ_CODE,
    payload: boolean
}

export interface setExitedChangingAction {
    type: UserActionEnum.EXIT,
    payload: boolean
}

export type IUserAction = setUserAction | setUsersChangingAction | setExitedChangingAction | setUniqCodeAction;