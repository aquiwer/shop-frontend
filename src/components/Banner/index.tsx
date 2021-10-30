import React from 'react';
import "./styles/style.scss"
import image from '../../assets/banner/firstImage.jpg'
import {ImgCard} from "../ImgCards";
export const Banner = () => {
    return (
        <article className='banner-wrapper'>
            <section>
                <h2 className='banner-title'>Покупай сейчас, ибо завтра будет дороже</h2>
            </section>
            <ImgCard/>
        </article>
    );
};
