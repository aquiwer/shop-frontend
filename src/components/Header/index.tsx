import React from 'react';
import "./styles/style.scss"
import {SearchBar} from "../SearchBar";
import {NavBar} from "../NavBar";
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo.svg'

export const Header = () => {
    return (
        <header className="header-wrapper">
            <NavLink to='/'><img className='header-logo' src={logo} alt="logo"/></NavLink>
            <SearchBar/>
            <NavBar/>
        </header>
    );
};
