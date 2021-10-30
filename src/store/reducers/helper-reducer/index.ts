import {IHelperState, IHelperAction, HelperActionEnum} from "./types";

const initialState: IHelperState = {
    isShow: false
}

export const helperReducer = (state = initialState, action: IHelperAction) => {
    switch (action.type) {
        case HelperActionEnum.SET_IS_SHOW:
            return {...state, isShow: action.payload}
        default:
            return state;
    }
}