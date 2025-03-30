// api/axios.js

import axios from 'axios';


export const backendBaseUrl = 'http://localhost:8000';
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,

});

axiosInstance.interceptors.request.use((config) => {
    const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('XSRF-TOKEN='))
        ?.split('=')[1];

    if (token) {
        config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token);
    }

    return config;
});


export default axiosInstance
