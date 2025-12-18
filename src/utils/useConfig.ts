import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL

export const myAxios = axios.create({
    baseURL: baseURL || 'http://localhost:3000/',
    headers: {
        "Content-Type": "application/json",
    },
});