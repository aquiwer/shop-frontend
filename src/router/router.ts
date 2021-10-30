import React from "react";
import {Cart} from "../pages/Cart";
import savedIcon from '../assets/icons/saved.svg'
import profileIcon from '../assets/icons/settings.svg'
import cartIcon from '../assets/icons/cart.svg'
import exitIcon from '../assets/icons/exit.svg'
import registerIcon from '../assets/icons/register.svg'
import {Main} from "../pages/Main";
import {Profile} from "../pages/Profile";
import {Saved} from "../pages/Saved";
import {Register} from "../pages/Register";
import {Login} from "../pages/Login";

export interface IRoute {
    path: string;
    component: React.ComponentType | null;
    exact?: boolean;
    title?: string;
    icon?: string | null;
}

export enum RouteNames {
    SAVED = "/saved",
    PROFILE = "/profile",
    CART = "/cart",
    EXIT = "/login",
    LOGIN = "/login",
    MAIN = '/',
    REGISTER = '/registration'
}

export const publicRoute: IRoute[] = [
    {
        path: RouteNames.REGISTER,
        exact: true,
        component: Register,
        title: "Register",
        icon: registerIcon
    },
    {
        path: RouteNames.LOGIN,
        exact: true,
        component: Login,
        title: "Login",
        icon: exitIcon
    },
]

export const privateRoute: IRoute[] = [

    {
        path: RouteNames.SAVED,
        exact: true,
        component: Saved,
        title: "Saved",
        icon: savedIcon
    },
    {
        path: RouteNames.MAIN,
        exact: true,
        component: Main,
        title: "Main",
    },
    {
        path: RouteNames.PROFILE,
        exact: true,
        component: Profile,
        title: "Profile",
        icon: profileIcon
    },
    {
        path: RouteNames.CART,
        exact: true,
        component: Cart,
        title: "Cart",
        icon: cartIcon
    },

]

