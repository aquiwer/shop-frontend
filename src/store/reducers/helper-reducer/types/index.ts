export type notificationTypes = "success" | "danger" | "info" | "default" | "warning" | undefined;

export interface IHelperState {
    typeOfNotification: notificationTypes,
    notificationTitle: string,
    notificationMessage: string,
    isShowNotification: boolean
}

export enum HelperActionEnum {
        SET_TYPE_OF_NOTIFICATION = "SET_TYPE_OF_NOTIFICATION",
    SET_IS_SHOW_NOTIFICATION = "SET_IS_SHOW_NOTIFICATION",
    SET_NOTIFICATION_TITLE = "SET_NOTIFICATION_TITLE",
    SET_NOTIFICATION_MESSAGE = "SET_NOTIFICATION_MESSAGE",
}

export interface setTypeOfNotification {
    type: HelperActionEnum.SET_TYPE_OF_NOTIFICATION,
    payload: notificationTypes
}
export interface setIsShowNotification {
    type: HelperActionEnum.SET_IS_SHOW_NOTIFICATION,
    payload: boolean
}
export interface setNotificationTitle {
    type: HelperActionEnum.SET_NOTIFICATION_TITLE,
    payload: string
}
export interface setNotificationMessage{
    type: HelperActionEnum.SET_NOTIFICATION_MESSAGE,
    payload: string
}

export type IHelperAction = setTypeOfNotification | setIsShowNotification | setNotificationTitle | setNotificationMessage
