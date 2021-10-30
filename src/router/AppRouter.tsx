import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {privateRoute, publicRoute, RouteNames} from './router';
import {useTypedSelector} from "../utils/hooks/useTypedSelector";

export const AppRouter = () => {
    const isAuth = useTypedSelector(state => state.userReducer.user.isAuth);

    return (
        isAuth ?
            <Switch>
                <div>
                    {privateRoute.map(route => <Route key={route.path} path={route.path} exact={route.exact}
                                                      component={route.component!}/>)}
                    <Redirect to={RouteNames.MAIN}/>
                </div>
            </Switch>
            :
            <Switch>
                {publicRoute.map(route => <Route key={route.path} path={route.path} exact={route.exact}
                                                 component={route.component!}/>)}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>

    );
};
