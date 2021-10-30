import React from 'react';
import paypal from '../../assets/footer/paypal.svg'
import visa from '../../assets/footer/visa.svg'
import mastercard from '../../assets/footer/mastercard.svg'
import './styles/style.scss'
export const Footer = () => {
    const paySystems = [
        {
            title: "Paypal",
            logo: paypal
        },
        {
            title: "Paypal",
            logo: visa
        },
        {
            title: "Paypal",
            logo: mastercard
        }
    ]
    return (
        <footer className='footer-wrapper'>
            {
                paySystems.map(system => (
                    <img className='paySystem-logo' key={system.title} src={system.logo} alt={system.title}/>
                ))
            }
        </footer>
    );
};
