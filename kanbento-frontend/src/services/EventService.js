import axios from "axios";

const BASE_URL = "http://localhost:8080/api/events";

// export const getAllEvents = () => axios.get(BASE_URL);

// export const getEvent = (id) => axios.get(`${BASE_URL}/${id}`);

export const getAllEvents = () => Promise.resolve({ data: events });

export const getEvent = (id) =>
    Promise.resolve({ data: events.find((event) => event.id === id) });

const events = [
    {
        id: 1,
        title: "Event 1",
        venue: "Venue 1",
        date: "2021-12-31",
        image: "https://via.placeholder.com/1280x720",
    },
    {
        id: 2,
        title: "Event 2",
        venue: "Venue 2",
        date: "2022-01-01",
        image: "https://via.placeholder.com/1280x720",
    },
    {
        id: 3,
        title: "Event 3",
        venue: "Venue 3",
        date: "2022-01-02",
        image: "https://via.placeholder.com/1280x720",
    },
    {
        id: 4,
        title: "Event 4",
        venue: "Venue 4",
        date: "2022-01-03",
        image: "https://via.placeholder.com/1280x720",
    },
    {
        id: 5,
        title: "Event 5",
        venue: "Venue 5",
        date: "2022-01-04",
        image: "https://via.placeholder.com/1280x720",
    },
    {
        id: 6,
        title: "Event 6",
        venue: "Venue 6",
        date: "2022-01-05",
        image: "https://via.placeholder.com/1280x720",
    },
    {
        id: 7,
        title: "Event 7",
        venue: "Venue 7",
        date: "2022-01-06",
        image: "https://via.placeholder.com/1280x720",
    },
];
