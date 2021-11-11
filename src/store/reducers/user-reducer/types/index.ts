export interface IUser {
    login: string,
    username: string,
    password: string,
    email: string,
    balance?: number,
    photo?: string
    isAuth?: boolean ,
}

export interface IUserState {
    user: IUser
}

export enum UserActionEnum {
    SET_USER = "SET_USER",
    CHANGE_USER = "CHANGE_USER",
    EXIT = "EXIT"
}

export interface setUserAction {
    type: UserActionEnum.SET_USER,
    payload: IUser
}

export interface setUsersChangingAction {
    type: UserActionEnum.CHANGE_USER,
    payload: IUser
}
export interface setExitedChangingAction {
    type: UserActionEnum.EXIT,
    payload: boolean
}

export type IUserAction = setUserAction | setUsersChangingAction | setExitedChangingAction;