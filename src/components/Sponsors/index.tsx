import React from 'react';
import nike from '../../assets/sponsors/nike.png'
import lacoste from '../../assets/sponsors/lacoste.png'
import adidas from '../../assets/sponsors/adidas.png'
import newBalance from '../../assets/sponsors/nb.png'
import asics from '../../assets/sponsors/asics.png'
import tommy from '../../assets/sponsors/tomy.png'
import './styles/style.scss'

export const Sponsors = () => {
    const sponsors = [
        {
            name: "Nike",
            image: nike
        },
        {
            name: "Lacoste",
            image: lacoste
        },
        {
            name: "Adidas",
            image: adidas
        },
        {
            name: "New balance",
            image: newBalance
        },
        {
            name: "Asics",
            image: asics
        },
        {
            name: "Tommy Hilfiger",
            image: tommy
        },
    ]
    return (
        <section className='sponsors-wrapper'>
            {
                sponsors.map(sponsor => (
                    <img className='sponsor-image' key={sponsor.name} src={sponsor.image} alt={sponsor.name}/>
                ))
            }
        </section>
    );
};
