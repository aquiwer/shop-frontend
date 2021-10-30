import React from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import {tabsRoute} from "./tabsRouter";
import "../styles/style.scss"
import {useDispatch} from "react-redux";
import {getProductsSectionThunk} from "../../../store/thunks/product-thunk";

export const TabsMenu = () => {
    const dispatch = useDispatch();

    const setProductSection = (tab: any) => {
        dispatch(getProductsSectionThunk(tab.title.toLowerCase()))
    }

    return (
        <Tabs>
            <TabList className='tabs-wrapper'>
                {
                    tabsRoute.map(tab => {
                        return (
                            <Tab key={tab.title} onClick={() => setProductSection(tab)} className='tab-link'>{tab.title}</Tab>
                        )
                    })
                }
            </TabList>
            <TabList className='tabs-content'>
                {
                    tabsRoute.map(tab => (
                        <TabPanel key={tab.title}>
                            <section className='tabs-content-title-wrapper'>
                                <h2 className='tabs-content-title'>{tab.title}</h2>
                            </section>
                        </TabPanel>
                    ))
                }
            </TabList>
        </Tabs>
    );
};
