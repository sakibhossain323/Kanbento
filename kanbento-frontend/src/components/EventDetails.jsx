import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEvent } from "../services/EventService";

const EventDetails = () => {
    const [event, setEvent] = useState({});
    const { id } = useParams();
    useEffect(() => {
        getEvent(id)
            .then((response) => {
                console.log(response.data);
                setEvent(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div>
            <h1>{event?.title}</h1>
            <p>{event?.date}</p>
            <p>{event?.venue}</p>
            <p>{event?.description}</p>
        </div>
    );
};

export default EventDetails;
