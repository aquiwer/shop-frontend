import React from 'react';
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {Product} from "../../components/Products/Product";
import {NavLink} from "react-router-dom";
import "./styles/style.scss"

export const Saved = () => {
    const savedItemsFalsy = useTypedSelector(state => state.productReducer.products);
    return (
        <div>
            {
                savedItemsFalsy && savedItemsFalsy.length > 0 ? savedItemsFalsy.map(item => <Product title={item.title}
                                                                                                     count={item.count}
                                                                                                     price={item.price}
                                                                                                     describe={item.describe}/>)
                    : <section className='non-saved-wrapper'>
                        <div><h2 className='non-saved-title'>Saved items aren't found</h2></div>
                        <div><NavLink className='non-saved-link' to={'/'}>Go to shop</NavLink></div>
                    </section>
            }
        </div>
    );
};
