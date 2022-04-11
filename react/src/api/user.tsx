import userType from "../type/user";
import instance from "./instance";

export const createUser = (users:userType) => {
    const url = `/users`;
    return instance.post(url,users);
}

export const listUser = () => {
    const url = `/users`;
    return instance.get(url);
}


export const readUser = (id : string | undefined) => {
    const url = `/user/${id}`;
    return instance.get(url);
}

export const updateUser = (users:userType) => {
    const url = `/user/${users._id}`;
    return instance.patch(url,users);
}

export const removeUser = (id : string) => {
    const url = `/users/${id}`;
    return instance.delete(url);
}


