import React from 'react';
import "./styles/style.scss"
import searchIcon from '../../assets/icons/search-icon.svg'

export const SearchBar = () => {
    return (
        <form className='search-bar-form'>
            <fieldset>
                <input className='search-bar-field' type="text" placeholder="What do u want?"/>
            </fieldset>
            <fieldset>
                <button className='search-bar-button'><img src={searchIcon} alt="searchIcon"/></button>
            </fieldset>
        </form>
    );
};
