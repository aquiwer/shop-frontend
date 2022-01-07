import React, {useState} from 'react';
import like from '../../../assets/icons/like.svg'
import filledLike from '../../../assets/icons/filledLike.svg'
import arrow from '../../../assets/icons/arrowRight.svg'

import "./styles/style.scss"
import {IProduct} from "../../../store/reducers/product-reducer/types";
import {useDispatch} from "react-redux";
import {addToCartThunk} from "../../../store/thunks/product-thunk";
import {NavLink} from 'react-router-dom';
import {useTypedSelector} from "../../../utils/hooks/useTypedSelector";

export const Product = ({title, describe, price, count, photo}: IProduct) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);
    const userId = useTypedSelector(state => state.userReducer.user._id)

    const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(addToCartThunk(userId, {title, describe, count: 1, price, photo}))
    }
    return (
        <article className="product-wrapper">
            <picture className='product-image-container'>
                <img className="product-image" src={`http://localhost:5000/static/${photo?.substr(40)}`} alt={title}/>

                {liked ? <img src={filledLike} onClick={() => setLiked(false)} className='like-icon' alt="like"/> :
                    <img src={like} onClick={() => setLiked(true)} className='like-icon' alt="like"/>}


            </picture>
            <section>
                <div>
                    <div className='product-info-wrapper'>
                        <div>
                            <h5 className='product-title'>{title}</h5>
                        </div>
                        <div>
                            <p className='product-description'>{describe}</p>
                        </div>
                        <div className='product-info-panel'>
                            <div>
                                <p className='product-price'>{`$${price}`}</p>
                            </div>
                            <NavLink to={'/cart'} style={{textDecoration: "none"}} className='product-info-button'>
                                <button>Learn More</button>
                                <img className="product-info-button" src={arrow} alt="arrow"/>
                            </NavLink>
                        </div>
                    </div>
                    <section className='product-control-info-panel'>
                        <fieldset>
                            <button className='product-button' onClick={e => addToCart(e)}>Add to cart</button>
                        </fieldset>
                    </section>
                </div>
            </section>
        </article>
    );
};