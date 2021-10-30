import React from 'react';
import image from "../../assets/banner/firstImage.jpg";
import "./styles/style.scss"

export const ImgCard = () => {
    return (
        <figure className='image-wrapper'>
            {[1,2,3].map(item => <img className='image' src={image} alt=""/>)}
        </figure>
    );
};
