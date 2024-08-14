import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

export const login = (credentials) =>
    axios.post(BASE_URL + "/login", credentials);

export const storeToken = (token) => {
    localStorage.setItem("token", token);
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const getUser = () => {
    return localStorage.getItem("user");
};

export const storeUser = (user) => {
    localStorage.setItem("user", user);
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
};
