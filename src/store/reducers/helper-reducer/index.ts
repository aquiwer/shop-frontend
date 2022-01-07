import {IHelperState, IHelperAction, HelperActionEnum} from "./types";

const initialState: IHelperState = {
    typeOfNotification: undefined,
    notificationTitle: "",
    notificationMessage: "",
    isShowNotification: false
}

export const helperReducer = (state = initialState, action: IHelperAction) => {
    switch (action.type) {
        case HelperActionEnum.SET_TYPE_OF_NOTIFICATION:
            return {...state, typeOfNotification: action.payload}
        case HelperActionEnum.SET_IS_SHOW_NOTIFICATION:
            return  {
                ...state, isShowNotification: action.payload
            }
        case HelperActionEnum.SET_NOTIFICATION_TITLE:
            return  {...state, notificationTitle: action.payload}
        case HelperActionEnum.SET_NOTIFICATION_MESSAGE:
            return  {...state, notificationMessage: action.payload}
        default:
            return state;
    }
}