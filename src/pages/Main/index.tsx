import React, {FC, useEffect} from 'react';
import "./styles/style.scss"
import {Banner} from "../../components/Banner";
import {Products} from "../../components/Products";
import {Sponsors} from "../../components/Sponsors";
import ReactNotification, {store} from "react-notifications-component";
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {HelperActionCreator} from "../../store/action-creators";

export const Main: FC = () => {
    const typeOfNotification = useTypedSelector(state => state.helperReducer.typeOfNotification)
    const isShowNotification = useTypedSelector(state => state.helperReducer.isShowNotification)
    const notificationTitle = useTypedSelector(state => state.helperReducer.notificationTitle)
    const notificationMessage = useTypedSelector(state => state.helperReducer.notificationMessage)

    const dispatch = useDispatch();

    useEffect(() => {
        isShowNotification && store.addNotification({
            title: notificationTitle,
            message: notificationMessage,
            type: typeOfNotification,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__fadeOut", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
        dispatch(HelperActionCreator.setIsShowNotification(false))
    }, [isShowNotification])

    return (
        <main className="products-wrapper">
            <ReactNotification/>
            <Banner/>
            <Products/>
            <Sponsors/>
        </main>
    );
};