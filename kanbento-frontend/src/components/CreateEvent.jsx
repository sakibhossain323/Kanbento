import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEvent } from "../services/EventService";

const CreateEvent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();

    const isFormValid = () => {
        const currentErrors = { ...errors };
        currentErrors.title = title ? "" : "Title is required";
        currentErrors.description = description
            ? ""
            : "Description is required";
        currentErrors.location = location ? "" : "Location is required";
        currentErrors.date = date ? "" : "Date is required";
        currentErrors.time = time ? "" : "Time is required";
        setErrors(currentErrors);
        return Object.values(currentErrors).every((error) => !error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            const event = {
                title,
                description,
                location,
                date,
                time,
                organizationId: id,
            };
            createEvent(event)
                .then((response) => {
                    console.log(response.data);
                    navigate(`/organizations/${id}/events`);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 my-5">
                    <h3 className="card-header text-center py-3">
                        Create Event
                    </h3>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.title ? "is-invalid" : ""
                                    }`}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <div className="invalid-feedback">
                                    {errors.title}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className={`form-control ${
                                        errors.description ? "is-invalid" : ""
                                    }`}
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                ></textarea>
                                <div className="invalid-feedback">
                                    {errors.description}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location</label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.location ? "is-invalid" : ""
                                    }`}
                                    value={location}
                                    onChange={(e) =>
                                        setLocation(e.target.value)
                                    }
                                />
                                <div className="invalid-feedback">
                                    {errors.location}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date</label>
                                <input
                                    type="date"
                                    className={`form-control ${
                                        errors.date ? "is-invalid" : ""
                                    }`}
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <div className="invalid-feedback">
                                    {errors.date}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Time</label>
                                <input
                                    type="time"
                                    className={`form-control ${
                                        errors.time ? "is-invalid" : ""
                                    }`}
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                                <div className="invalid-feedback">
                                    {errors.time}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-dark form-control py-2 my-4"
                                onClick={handleSubmit}
                            >
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
