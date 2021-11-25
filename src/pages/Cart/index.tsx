import React, {FC, useEffect} from 'react';
import "./styles/style.scss"
import {CartItem} from "../../components/CartItem";
import arrowIcon from '../../assets/icons/arrowRight.svg'
import checkIcon from '../../assets/icons/check.svg'
import cancelIcon from '../../assets/icons/cancel.svg'
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getProductsFromCartThunk} from "../../store/thunks/product-thunk";
import {ImgCard} from "../../components/ImgCards";

export const Cart: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsFromCartThunk())
    }, [])
    const cartItems = useTypedSelector(state => state.cartReducer.cartItems);
    return (
        <article className='cart-body'>
            { cartItems.length > 0 ? <section className='cart-wrapper'>

                <div>{cartItems && cartItems.map(i => <CartItem _id={i._id} title={i.title} describe={i.describe}
                                                                price={i.price} count={i.count} photo={i.photo} key={i._id}/>)}</div>
                <form className='cart-controller'>
                    <button className='cart-button button-cancel'>
                        <fieldset className='cart-field'>
                            <p className='cart-button-title'>Cancel</p>
                            <img className='cart-button-icon' src={cancelIcon} alt="cancelIcon"/>
                        </fieldset>
                    </button>
                    <NavLink to={'/'} className='cart-button button-shop'>
                        <fieldset className='cart-field'>
                            <p className='cart-button-title'>Shop</p>
                            <img className='cart-button-icon' src={arrowIcon} alt="arrowIcon"/>
                        </fieldset>
                    </NavLink>
                    <button className='cart-button button-buy'>
                        <fieldset className='cart-field'>
                            <p className='cart-button-title'>Buy</p>
                            <img className='cart-button-icon' src={checkIcon} alt="checkIcon"/>
                        </fieldset>
                    </button>
                </form>
            </section>
            : <section className='non-saved-wrapper'>
                    <div><h2 className='non-saved-title'>Items in cart aren't found</h2></div>
                    <div><NavLink className='non-saved-link' to={'/'}>Go to shop</NavLink></div>
                </section>
            }
            <section className='cart-cards-wrapper'>
                {
                    [1, 2, 3].map(i => <ImgCard key={i}/>)
                }
            </section>
        </article>
    );
};