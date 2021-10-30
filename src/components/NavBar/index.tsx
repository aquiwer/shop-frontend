import React from 'react';
import {Switch, NavLink} from "react-router-dom";
import {privateRoute, publicRoute} from "../../router/router";
import "./styles/style.scss"
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {UserActionCreators} from '../../store/action-creators';
import exitIcon from '../../assets/icons/exit.svg'

export const NavBar = () => {
    const isAuth = useTypedSelector(state => state.userReducer.user?.isAuth ?? true);
    const user = useTypedSelector(state => state.userReducer.user)
    const dispatch = useDispatch();
    return (

        <Switch>

            <nav className="nav-wrapper">
                {
                    isAuth && <section>
                        <div className='user-avatar'>
                            <p>{user.username[0]?.toUpperCase()}</p>
                        </div>
                    </section>
                }
                {
                    isAuth
                        ?
                        <nav className="nav-routes">
                            {
                                privateRoute.map(route => {
                                    if (route.title !== "Main" && route.title !== "Register" && route.title !== "Login") {
                                        return (
                                            <NavLink className="nav-route" key={route.path} to={route.path}
                                                     exact={route.exact}>
                                                <button>
                                                    <img src={route.icon ?? ""} alt={route.title}/>
                                                </button>
                                            </NavLink>
                                        )
                                    }
                                })
                            }
                            <div className={"nav-route"}>
                                <button onClick={() => dispatch(UserActionCreators.exit())}>
                                    <img src={exitIcon} alt="exitIcon"/></button>
                            </div>
                        </nav>

                        : <nav>
                            {
                                publicRoute.map(route => {
                                    if (route.title !== "Login") {
                                        return (
                                            <NavLink className="nav-route" key={route.path} to={route.path}
                                                     exact={route.exact}>
                                                <button>
                                                    <img src={route.icon ?? ""} alt={route.title}/>
                                                </button>
                                            </NavLink>
                                        )
                                    }
                                })
                            }
                        </nav>
                }
            </nav>
        </Switch>

    );
};