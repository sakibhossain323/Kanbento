import React, { useEffect, useState } from "react";
import { getAllEvents } from "../services/EventService";
import EventCard from "./EventCard";

const EventsGrid = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getAllEvents()
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="container">
            <div className="row my-5">
                {events.map((event) => (
                    <EventCard event={event} key={event.id} />
                ))}
            </div>
        </div>
    );
};

export default EventsGrid;
