import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOrganizationEvents } from "../services/OrganizationService";

const OrganizationEventList = () => {
    const [events, setEvents] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getOrganizationEvents(id)
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
                <h2 className="text-center my-5">Events</h2>
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
