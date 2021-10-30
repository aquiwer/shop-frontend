import React, {useEffect, useState} from 'react';
import "./styles/style.scss"
import {TabsMenu} from "./Tabs";
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {Product} from "./Product";
import {Tab, TabList, Tabs} from "react-tabs";
import {tabsRoute} from "./Tabs/tabsRouter";
import {productTabsRoute} from "./Product/filterRouter";
import {useDispatch} from "react-redux";
import {getProductsSectionThunk} from "../../store/thunks/product-thunk";
import {OutcomeWindow} from "../OutcomeWindow";


export const Products = () => {
    const currentTab = useTypedSelector(state => state.productReducer.currentTab)
    const isShow = useTypedSelector(state => state.helperReducer.isShow)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsSectionThunk(currentTab))
    }, [])
    const products = useTypedSelector(state => state.productReducer.products);
    return (
        <>
            <article className='products-wrapper'>
                <nav className="tabs-menu">
                    <TabsMenu/>
                </nav>
                <section>
                    <Tabs>
                        <TabList className='tabs-wrapper'>
                            {
                                productTabsRoute.map(tab => {
                                    return (
                                        <Tab key={tab.title} className='tab-link'>{tab.title}</Tab>
                                    )
                                })
                            }
                        </TabList>
                    </Tabs>
                    <section className='products-container'>
                        {
                            products && products.map(item => <Product title={item.title}
                                                                      photo={item.photo}
                                                                      count={item.count}
                                                                      price={item.price}
                                                                      describe={item.describe}/>)
                        }
                    </section>
                    <OutcomeWindow isShow={isShow} type='success'/>
                </section>
            </article>
        </>
    );
};
