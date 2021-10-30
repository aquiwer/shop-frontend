import React, {FC} from 'react';
import "./styles/style.scss"
import {Banner} from "../../components/Banner";
import {Products} from "../../components/Products";
import {Sponsors} from "../../components/Sponsors";

export const Main:FC = () => {
    return (
        <main className="products-wrapper">
            <Banner/>
            <Products/>
            <Sponsors/>
        </main>
    );
};