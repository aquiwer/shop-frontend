import React, {useState} from 'react';
import './styles/style.scss'
import successIcon from '../../assets/icons/check.svg'
import errorIcon from '../../assets/icons/cancel.svg'
import arrowIcon from '../../assets/icons/arrowRight.svg'
import {useDispatch} from "react-redux";
import {HelperActionCreator} from "../../store/action-creators";

interface IOutcomeWindow {
    isShow: boolean
    type: string
}

export const OutcomeWindow = ({isShow, type}: IOutcomeWindow) => {
    const dispatch = useDispatch();

    const closeWindow = () => {
        dispatch(HelperActionCreator.setIsShow(false))
    }
    return (
        <>
            {isShow && (
                <article className='window-wrapper'>
                    <section className='window-container'>
                        <picture>
                            <img className='window-icon' src={type === "success" ? successIcon : errorIcon} alt={type}/>
                        </picture>
                        <div>
                            {type === "success" ? <p className='window-title'> Order successfully completed </p> :
                                <p className="window-title"> Order badly completed </p>}
                        </div>
                        <div onClick={() => closeWindow()} className='window-button-wrapper'>
                            <button>Continue</button>
                            <img src={arrowIcon} alt={arrowIcon}/>
                        </div>
                    </section>
                </article>
            )}
        </>
    );
};

