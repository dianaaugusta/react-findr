import axios from "axios";

const api = axios.create({
    baseURL : "https://apifindr.herokuapp.com/"
})

export default api;