import axios from "axios";

const BASE_URL = "http://localhost:8080/api/events";

export const createEvent = (event) => axios.post(BASE_URL, event);

export const getAllEvents = () => axios.get(BASE_URL);

export const getEvent = (id) => axios.get(`${BASE_URL}/${id}`);
