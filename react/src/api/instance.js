import axios from "axios";

const instance = axios.create({
    baseURL: "localhost:3001/api/"
})

export default instance;