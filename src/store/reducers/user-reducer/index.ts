import {IUserAction, IUserState, UserActionEnum} from "./types";

const initialState: IUserState = {
    isUniqCode: false,
    user: {
        login: "",
        username: "",
        email: "",
        password: "",
        balance: 0,
        photo: "",
        isAuth: false,
        cart: [],
        liked: []
    }
}

export const userReducer = (state = initialState, action: IUserAction) => {
    switch (action.type) {
        case UserActionEnum.SET_UNIQ_CODE:
            return {
                ...state, isUniqCode: action.payload
            }
        case UserActionEnum.SET_USER:
            return {...state, user: action.payload}
        case UserActionEnum.CHANGE_USER:
            return {...state, user: {...state.user, ...action.payload}}
        case UserActionEnum.EXIT:
            return {
                ...state,
                user: {login: "", username: "", password: "", email: "", balance: 0, isAuth: action.payload}
            }
        case UserActionEnum.ADD_TO_FAVS:
            return {...state, favorites: action.payload}
        default:
            return state;
    }
}