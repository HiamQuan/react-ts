import OrderType from "../type/order";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";


const { token, user } = isAuthenticate()?isAuthenticate():'';


export const createOrder = (orders:OrderType) => {
    const url = `/orders/${user._id}`;
    console.log(token);
    return instance.post(url,orders,{
        headers: {
        "Authorization": `Bearer ${token}`
        }
    })
}

export const listOrder = () => {
    const url = `/orders`;
    return instance.get(url);
}



export const readOrder = (id : string | undefined) => {
    const url = `/order/${id}`;
    return instance.get(url);
}

export const readByUser = (id : string | undefined) => {
    const url = `/orders/userId=${id}`;
    return instance.get(url);
}

export const updateOrder = (orders:OrderType) => {
    const url = `/order/${orders._id}`;
    return instance.patch(url,orders);
}

export const removeOrder = (id : string) => {
    const url = `/order/${id}`;
    return instance.delete(url);
}

export const searchOrder = (text:string)=>{
    const url = `/search?searchText=${text}`;
    return instance.get(url);
}

export const sortOrder = (item:string,order:string)=>{
    const url = `/orders/?sortBy=${item}&orderBy=${order}`;
    return instance.get(url);
}

