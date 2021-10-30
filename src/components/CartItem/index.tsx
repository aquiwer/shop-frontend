import React from 'react';
import "./styles/style.scss"
import trashIcon from '../../assets/icons/trash.svg'
import {ICart} from "../../store/reducers/cart-reducer/types";
import {useDispatch} from "react-redux";
import {deleteProductsFromCartThunk} from "../../store/thunks/product-thunk";

export const CartItem = ({title, price, count, photo, _id}: ICart) => {
    const dispatch = useDispatch();
    const deleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(deleteProductsFromCartThunk(_id))
    }
    return (
        <article className="cart-item">
            <section className='cart-main-info'>
                <div>
                    <div className='cart-image'><img src={`http://localhost:3000/static/${photo?.substr(40)}`} alt="title"/></div>
                </div>
                <div>
                    <h2 className='cart-product-title'>{title}</h2>
                </div>
            </section>
            <section className='cart-extra-info'>
                <section className='cart-money-info'>
                    <div>
                        <p className='cart-item-text'>{price}$</p>
                    </div>
                    <div>
                        <p className='cart-item-text'>{count}</p>
                    </div>
                </section>
                <section>
                    <div><button onClick={e => deleteItem(e)}><img src={trashIcon} alt="trashIcon"/></button></div>
                </section>
            </section>
        </article>
    );
};