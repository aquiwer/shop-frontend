import React from 'react';
import "./styles/style.scss"
import {SearchBar} from "../SearchBar";
import {NavBar} from "../NavBar";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header-wrapper">
            <NavLink to='/'><h2 className='header-logo'>Jewerly-aesthetics</h2></NavLink>
            <SearchBar/>
            <NavBar/>
        </header>
    );
};
