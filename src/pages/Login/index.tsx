import React, {FC, useEffect, useState} from 'react';
import discount from "../../assets/icons/discount.svg";
import delivery from "../../assets/icons/delivery.svg";
import support from "../../assets/icons/support.svg";
import {ImgCard} from "../../components/ImgCards";

import {userLoginThunk} from "../../store/thunks/user-thunk";
import {RouteNames} from '../../router/router';
import {UserActionCreators} from "../../store/action-creators";

import {useDispatch} from "react-redux";
import {NavLink} from 'react-router-dom';

import "./styles/style.scss"

export const Login:FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const dispatch = useDispatch();
    const registerUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(userLoginThunk({login, username, password}))
    }



    return (
        <article className="registerPage-wrapper">
            <form className='form-wrapper'>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="login-field">
                        Login
                    </label>
                    <input required={true} onChange={(e) => setLogin(e.currentTarget.value)} placeholder="Your login" className='form-field' type="text"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="login-field">
                        Username
                    </label>
                    <input required={true} onChange={(e) => setUsername(e.currentTarget.value)} placeholder="Your username" className='form-field' type="text"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <label className='form-field-label' htmlFor="login-field">
                        Password
                    </label>
                    <input autoComplete="new-password" required={true} onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Your password" className='form-field' type="password"/>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <button onClick={(e) => registerUser(e)} className='form-field-button'>
                        Login
                    </button>
                </fieldset>
                <fieldset className="form-field-wrapper">
                    <NavLink to={RouteNames.REGISTER}>
                        I haven't got the account
                    </NavLink>
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
                    [1,2,3].map(i => <ImgCard key={i}/>)
                }
            </section>
        </article>
    );
};

