import React, {FC, useEffect, useState} from 'react';
import discount from "../../assets/icons/discount.svg";
import delivery from "../../assets/icons/delivery.svg";
import support from "../../assets/icons/support.svg";
import {ImgCard} from "../../components/ImgCards";
import arrow from "../../assets/icons/arrowRight.svg";
import './styles/style.scss'
import {useDispatch} from "react-redux";
import {userLoginThunk, userRegisterThunk} from "../../store/thunks/user-thunk";
import {NavLink} from "react-router-dom";
import {RouteNames} from "../../router/router";
import {UserActionCreators} from "../../store/action-creators";

export const Register:FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const registerUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(userRegisterThunk({username, email, password}))
    }
    return (
        <article className="registerPage-wrapper">
            <form className='form-wrapper'>
                <fieldset>
                    <input required={true} onChange={(e) => setUsername(e.currentTarget.value)} placeholder="Your username" className='registerPage-edit-field' type="text"/>
                </fieldset>
                <fieldset>
                    <input required={true} onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Your password" className='registerPage-edit-field' type="password"/>
                </fieldset>
                <fieldset>
                    <input required={true} onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Your email" className='registerPage-edit-field' type="text"/>
                </fieldset>
                <fieldset>
                    <button onClick={(e) => registerUser(e)} className='form-button'>
                        Register
                    </button>
                </fieldset>
                <fieldset>
                    <NavLink to={RouteNames.LOGIN} className='form-button'>
                        I have the account
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
