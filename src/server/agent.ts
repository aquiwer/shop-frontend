import axios from "axios";
import {ILogin, IRegister, IUser} from "./types";
import {ICart} from "../store/reducers/cart-reducer/types";


export const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    withCredentials: true,
});

export const Api = {
    createAccount(userData: IRegister) {
        return (
            instance.post(`register`, userData).then(res => res.data)
        )
    },
    addToFav(userData: IUser) {
        return (
            instance.post(`favorite`, userData).then(res => res.data)
        )
    },
    login(userData: ILogin) {

        return (
            instance.post(`login`, userData).then(res => res.data)
        )
    },
    changeUserData(userData: IUser){
        console.log(userData, 'userdata')
        return (
            instance.put(`user`, userData).then(res => res.data)
        )
    },
    getProducts() {
        return (
            instance.get("products").then(res => res.data)
        )
    },
    checkUniqCodes(uniqCode: string) {
      return (
          instance.post('uniqCode', {uniqCode}).then(res => res.data)
      )
    },
    createUniqCode(email: string){
      return (
          instance.post('newUniqCode', {email}).then(res => res.data)
      )
    },
    addToCart(userId:string | undefined, productData: ICart) {
        return (
            instance.post("cart", {userId,productData}).then(res => res.data)
        )
    },

    getProductsForCart() {
        return (
            instance.get("cart").then(res => res.data)
        )
    },

    deleteProductsFromCart(id: string | undefined) {
        return (
            instance.delete(`cart/${id}`).then(res => res.data)
        )
    },

    getCurrentProduct(id: string | undefined) {
        return (
            instance.get(`product/${id}`).then(res => res.data)
        )
    },
    getCurrentProductSection(type: string | undefined) {
        return (
            instance.get(`products/${type}`).then(res => res.data)
        )
    }
}