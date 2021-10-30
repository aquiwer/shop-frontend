import React from 'react';
import messageIcon from '../../../assets/icons/message.svg'
import eyeIcon from '../../../assets/icons/eye.svg'
import bookmarkIcon from '../../../assets/icons/bookmark.svg'
import buyIcon from '../../../assets/icons/buy.svg'

import "./styles/style.scss"
import {IProduct} from "../../../store/reducers/product-reducer/types";
import {useDispatch} from "react-redux";
import {addToCartThunk} from "../../../store/thunks/product-thunk";

export const Product = ({title, describe, price, count, photo}: IProduct) => {
    const dispatch = useDispatch();

    const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(addToCartThunk({title, describe, count: 1, price, photo}))
    }
    return (
        <article className="product-wrapper">
            <picture>
                <img className="product-image" src={`http://localhost:3000/static/${photo?.substr(40)}`} alt={title}/>
            </picture>
            <section>
                <div>
                    <div className='product-info-wrapper'>
                        <div>
                            <h3 className='product-title'>{title}</h3>
                        </div>
                        <div>
                            <p className='product-price'>{`${price}$`}</p>
                        </div>
                    </div>
                    <section className='product-control-info-panel'>
                        <div>
                            <p className='product-description'>{describe}</p>
                        </div>
                        <div className='product-control-panel'>
                            <button><img className='product-control-icon' src={eyeIcon} alt="eyeIcon"/></button>
                            <button><img className='product-control-icon' src={messageIcon} alt="messageIcon"/></button>
                            <button><img className='product-control-icon' src={bookmarkIcon} alt="bookmarkIcon"/></button>
                            <button onClick={e => addToCart(e)}><img className='product-control-icon' src={buyIcon} alt="buyIcon"/></button>
                        </div>
                    </section>
                </div>
            </section>
        </article>
    );
};