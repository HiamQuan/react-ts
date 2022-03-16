import instance from "./instance";

const getAll= () => {
    url="products";
    return instance.get(url);
}