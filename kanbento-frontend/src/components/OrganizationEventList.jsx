import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllEvents } from "../services/EventService";

const OrganizationEventList = () => {
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

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row my-3">
                <h1 className="text-center my-5">Events</h1>
                <div className="col-2">
                    <button
                        className="btn btn-dark"
                        onClick={() => {
                            navigate("create");
                        }}
                    >
                        Create
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Venue</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event) => (
                                <tr key={event?.id}>
                                    <td>{event?.title}</td>
                                    <td>{event?.location}</td>
                                    <td>{event?.date}</td>
                                    <td>
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => {
                                                navigate(`${event.id}`);
                                            }}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrganizationEventList;
