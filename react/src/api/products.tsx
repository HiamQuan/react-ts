import ProductType from "../type/product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";


const { user } = isAuthenticate() ? isAuthenticate(): [];

export const create = (products:ProductType) => {
    const url = `/products/${user._id}`;
    return instance.post(url,products,{
        headers: {
        "Authorization": `Bearer ${user.token}`
        }
    })
}

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}

export const listByCategory = (category:string) => {
    const url = `/products/category=${category}`;
    return instance.get(url);
}

export const read = (id : string | undefined) => {
    const url = `/product/${id}`;
    return instance.get(url);
}

export const update = (products:ProductType) => {
    const url = `/product/${products._id}`;
    return instance.patch(url,products);
}

export const remove = (id : string) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}

