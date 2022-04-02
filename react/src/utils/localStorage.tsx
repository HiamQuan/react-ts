import UserType from "../type/user";

export const authenticated = (user: UserType, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}
export const isAuthenticate = () => {
    if(!localStorage.getItem('user')) return null;
    return JSON.parse(localStorage.getItem('user') as string)
}