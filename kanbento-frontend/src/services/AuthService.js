import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

export const register = (user) => axios.post(BASE_URL + "/register", user);

export const login = (credentials) =>
    axios.post(BASE_URL + "/login", credentials);

// Saved Credential Management

export const saveToken = (token) => {
    localStorage.setItem("token", token);
};

export const getSavedToken = () => {
    return localStorage.getItem("token");
};

export const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const getSavedUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const saveCredentials = (responseData) => {
    saveToken("Bearer " + responseData.accessToken);
    saveUser(responseData.user);
};

export const removeSavedCredentials = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};
