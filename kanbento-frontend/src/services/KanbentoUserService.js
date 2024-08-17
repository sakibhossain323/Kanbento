import axios from "axios";

const BASE_KANBENTO_USER_API_URL = "http://localhost:8080/api/users";

export const getUserByUsername = (username) => axios.get(BASE_KANBENTO_USER_API_URL + "/" + username);