import axios from "axios";
import store from "../store";

const baseURL = 'https://social-network-server-react.herokuapp.com/api';

const instance = axios.create({
    baseURL: baseURL,
});

instance.interceptors.request.use(function (config) {
    const token = store.getters['authToken'];
    console.log('token', token);
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
});

export default instance;