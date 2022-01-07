import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import Modal from 'react-modal';
import ReactNotification, { store } from 'react-notifications-component'

import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {userCheckUniqCodesThunk, userRegisterThunk, userSendUniqCodeThunk} from "../../store/thunks/user-thunk";

import discount from "../../assets/icons/discount.svg";
import delivery from "../../assets/icons/delivery.svg";
import support from "../../assets/icons/support.svg";
import {ImgCard} from "../../components/ImgCards";


import './styles/style.scss'
import 'react-notifications-component/dist/theme.css'
import {HelperActionCreator} from "../../store/action-creators";

export const Register: FC = () => {



    const [username, setUsername] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [uniqCode, setUniqCode] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);

    const isUniqCode = useTypedSelector(state => state.userReducer.isUniqCode);



    function closeModal() {
        setIsOpen(false);
    }



    useEffect(() => {
        if (isUniqCode) {
            closeModal();
            dispatch(userRegisterThunk({login, username, email, password}))



        }
    }, [isUniqCode])



    const customStyles = {
        content: {
            backgroundColor: "#0A0A0A",
            borderRadius: "10px",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: "grid",
            gap: "40px",
            color: "#fff"
        },
    };
    const dispatch = useDispatch();

    const registerUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

    }

    const checkUniqCodes = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (uniqCode.length === 6) {
            dispatch(userCheckUniqCodesThunk(uniqCode))
        }
    }
    const sendUniqCode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (email.trim().length && username.trim().length && password.trim().length && login.trim().length) {
            setIsOpen(true)
            dispatch(userSendUniqCodeThunk(email));
        }
    }


    return (
        <article className="registerPage-wrapper">

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <p>We sent to your mail special code, please copy and paste it.</p>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="login-field">
                        Uniq Code
                    </label>
                    <input placeholder="XXX-XXX" maxLength={6} onChange={(e) => setUniqCode(e.currentTarget.value)}
                           className='form-field' type="text" id="code-field"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <button onClick={(e) => checkUniqCodes(e)} className='form-field-button'>Register</button>
                </fieldset>
            </Modal>
            <form className='form-wrapper'>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="login-field">
                        Login
                    </label>
                    <input placeholder="Your login" onChange={(e) => setLogin(e.currentTarget.value)}
                           className='form-field' type="text" id="login-field"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="username-field">
                        Username
                    </label>
                    <input placeholder="Your username" onChange={(e) => setUsername(e.currentTarget.value)}
                           className='form-field' type="text" id="username-field"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="email-field">
                        Email
                    </label>
                    <input required={true} onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Your email"
                           className='form-field' type="text" id="email-field"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="password-field">
                        Password
                    </label>
                    <input autoComplete="new-password" onChange={(e) => setPassword(e.currentTarget.value)}
                           placeholder="Your password" className='form-field' type="password" id="password-field"/>
                </fieldset>
                {
                    isUniqCode ? <fieldset className="form-field-wrapper">
                            <button onClick={(e) => registerUser(e)} className='form-field-button'>Register</button>
                        </fieldset> :
                        <fieldset className="form-field-wrapper">
                            <button onClick={(e) => sendUniqCode(e)} className='form-field-button'>Accept</button>
                        </fieldset>
                }

                <fieldset className="form-field-wrapper">
                    <NavLink to={'/login'}>I have the account</NavLink>
                </fieldset>
            </form>
            <section className='profile-peculiarities-wrapper'>
                <section className='profile-peculiarities'>
                    <picture><img className="profile-peculiarities-image" src={discount} alt="discount"/></picture>
                    <div><h3 className='profile-peculiarities-title'>Discount system</h3></div>
                    <div><p className='profile-peculiarities-describe'>Nam libero tempore, cum soluta nobis est eligendi
                        optio, cumque nihil impedit, quo minus id, quod maxime placeat</p></div>
                </section>
                <section className='profile-peculiarities'>
                    <picture><img className="profile-peculiarities-image" src={delivery} alt="delivery"/></picture>
                    <div><h3 className='profile-peculiarities-title'>Free delivery</h3></div>
                    <div><p className='profile-peculiarities-describe'>Nam libero tempore, cum soluta nobis est eligendi
                        optio, cumque nihil impedit, quo minus id, quod maxime placeat</p></div>
                </section>
                <section className='profile-peculiarities'>
                    <picture><img className="profile-peculiarities-image" src={support} alt="support"/></picture>
                    <div><h3 className='profile-peculiarities-title'>Support 24/7</h3></div>
                    <div><p className='profile-peculiarities-describe'>Nam libero tempore, cum soluta nobis est eligendi
                        optio, cumque nihil impedit, quo minus id, quod maxime placeat</p></div>
                </section>
            </section>
            <section className='profile-cards-wrapper'>
                {
                    [1, 2, 3].map(i => <ImgCard key={i}/>)
                }
            </section>
        </article>
    );
};
