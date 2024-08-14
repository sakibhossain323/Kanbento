import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = (props) => {
    const { event } = props;

    const navigate = useNavigate();

    return (
        <div className="col-md-6 col-lg-4" key={event?.id}>
            <div className="card my-4 mx-3 rounded-3">
                <div className="ratio ratio-16x9">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="figure-img img-fluid rounded-top"
                    />
                </div>
                <div className="card-body">
                    <h4 className="card-title text-center mb-2">
                        {event?.title}
                    </h4>
                    <div className="row">
                        <div className="col-8 mx-4">
                            <p className="card-text my-1">
                                <strong>Date:</strong> {event?.date}
                            </p>
                            <p className="card-text my-1">
                                <strong>Venue:</strong> {event?.venue}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 offset-1 my-3">
                            <button
                                className="btn btn-dark w-100"
                                onClick={() => navigate(`/events/${event?.id}`)}
                            >
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
