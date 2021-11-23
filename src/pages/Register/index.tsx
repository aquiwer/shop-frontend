import React, {FC, useState} from 'react';
import discount from "../../assets/icons/discount.svg";
import delivery from "../../assets/icons/delivery.svg";
import support from "../../assets/icons/support.svg";
import {ImgCard} from "../../components/ImgCards";
import './styles/style.scss'
import {useDispatch} from "react-redux";
import {userCheckUniqCodesThunk, userRegisterThunk, userSendUniqCodeThunk} from "../../store/thunks/user-thunk";
import {NavLink} from "react-router-dom";
import {RouteNames} from "../../router/router";
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import Modal from 'react-modal';

export const Register: FC = () => {
    const [username, setUsername] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [uniqCode, setUniqCode] = useState("");
    const [enableUniqCodeField, setEnableUniqCodeField] = useState(false);
    const isUniqCode = useTypedSelector(state => state.userReducer.isUniqCode);

    const dispatch = useDispatch();
    const isValidEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const checkUniqCodes = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (uniqCode.length === 6) {
            dispatch(userCheckUniqCodesThunk(uniqCode))
        }
    }
    const sendUniqCode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEnableUniqCodeField(true);
        isValidEmail(email)
        if (email.trim().length) {
            dispatch(userSendUniqCodeThunk(email));
        }
    }
    const registerUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(userRegisterThunk({login, username, email, password}))
    }
    // @ts-ignore
    return (
        <article className="registerPage-wrapper">

            <form className='form-wrapper'>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="login-field">
                        Login
                    </label>
                    <input placeholder="Your login" onChange={(e) => setLogin(e.currentTarget.value)}
                           className='form-field' type="text" id="login-field"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="login-field">
                        Username
                    </label>
                    <input placeholder="Your username" onChange={(e) => setUsername(e.currentTarget.value)}
                           className='form-field' type="text" id="login-field"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="login-field">
                        Email
                    </label>
                    <input required={true} onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Your email"
                           className='form-field' type="text" id="login-field"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="login-field">
                        Password
                    </label>
                    <input autoComplete="new-password" onChange={(e) => setPassword(e.currentTarget.value)}
                           placeholder="Your password" className='form-field' type="password" id="login-field"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <button onClick={(e) => sendUniqCode(e)} className='form-field-button'>Register</button>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <NavLink to={'/login'}>I have the account</NavLink>
                </fieldset>
                {/*<fieldset>*/}
                {/*    <input required={true} onChange={(e) => setLogin(e.currentTarget.value)} placeholder="Your login"*/}
                {/*           className='registerPage-edit-field' type="text"/>*/}
                {/*</fieldset>*/}
                {/*<fieldset>*/}
                {/*    <input required={true} onChange={(e) => setUsername(e.currentTarget.value)}*/}
                {/*           placeholder="Your username" className='registerPage-edit-field' type="text"/>*/}
                {/*</fieldset>*/}
                {/*<fieldset>*/}
                {/*    <input autoComplete="new-password" required={true} onChange={(e) => setPassword(e.currentTarget.value)}*/}
                {/*           placeholder="Your password" className='registerPage-edit-field' type="password"/>*/}
                {/*</fieldset>*/}
                {/*<fieldset>*/}
                {/*    <input required={true} onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Your email"*/}
                {/*           className='registerPage-edit-field' type="text"/>*/}
                {/*</fieldset>*/}
                {/*{enableUniqCodeField &&*/}
                {/*<fieldset>*/}
                {/*    <input required={true} onChange={(e) => setUniqCode(e.currentTarget.value)}*/}
                {/*           placeholder="Type uniq code from ur mail"*/}
                {/*           className='registerPage-edit-field' type="text"/>*/}
                {/*</fieldset>*/}
                {/*}*/}
                {/*{!enableUniqCodeField ?*/}
                {/*    <fieldset>*/}
                {/*        <button onClick={(e) => sendUniqCode(e)}*/}
                {/*                className={"form-button"}>*/}
                {/*            Register*/}
                {/*        </button>*/}
                {/*    </fieldset>*/}
                {/*    :*/}
                {/*    <fieldset>*/}
                {/*        <button onClick={(e) => checkUniqCodes(e)} disabled={uniqCode.length !== 6}*/}
                {/*                className={uniqCode.length !== 6 ? " error-button form-button" : "form-button"}>*/}
                {/*            Confirm*/}
                {/*        </button>*/}
                {/*    </fieldset>*/}
                {/*}*/}
                {/*{*/}
                {/*    isUniqCode && <fieldset>*/}
                {/*        <button onClick={(e) => registerUser(e)}*/}
                {/*                className={"form-button"}>*/}
                {/*            Register*/}
                {/*        </button>*/}
                {/*    </fieldset>*/}
                {/*}*/}

                {/*<fieldset>*/}
                {/*    <NavLink to={RouteNames.LOGIN} className='form-button'>*/}
                {/*        I have the account*/}
                {/*    </NavLink>*/}
                {/*</fieldset>*/}
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
