import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: "https://marwan-ecommerce-app.onrender.com",
});

export default instance;
