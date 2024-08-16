import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

export const register = (user) => axios.post(BASE_URL + "/register", user);

export const login = (credentials) =>
    axios.post(BASE_URL + "/login", credentials);

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
};
// Saved Credential Management

export const saveToken = (token) => {
    localStorage.setItem("token", token);
};

export const getSavedToken = () => {
    return localStorage.getItem("token");
};

export const saveUser = (user) => {
    localStorage.setItem("user", user);
};

export const getSavedUser = () => {
    return localStorage.getItem("user");
};

export const saveCredentials = (responseData, user) => {
    saveToken("Bearer " + responseData.accessToken);
    saveUser(user);
};

export const removeSavedCredentials = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};
