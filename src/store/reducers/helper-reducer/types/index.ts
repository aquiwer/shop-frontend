export interface IHelperState {
  isShow: boolean
}

export enum HelperActionEnum {
    SET_IS_SHOW = "SET_IS_SHOW"
}

export interface setIsShow {
    type: HelperActionEnum.SET_IS_SHOW,
    payload: boolean
}

export type IHelperAction = setIsShow
