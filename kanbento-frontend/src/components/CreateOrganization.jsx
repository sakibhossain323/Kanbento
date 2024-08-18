import React, { useEffect, useState } from "react";
import { createOrganization } from "../services/OrganizationService";
import { useAuthContext } from "./AuthContex";
import { useNavigate } from "react-router-dom";

const CreateOrganization = () => {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/login" />;
    }

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        location: "",
        email: "",
    });

    const navigate = useNavigate();

    const isFormValid = () => {
        const currentErrors = { ...errors };
        currentErrors.name = name ? "" : "Name is required";
        currentErrors.description = description
            ? ""
            : "Description is required";
        currentErrors.location = location ? "" : "Location is required";
        currentErrors.email = email ? "" : "Email is required";
        setErrors(currentErrors);
        return Object.values(currentErrors).every((error) => !error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            const organization = {
                name,
                description,
                location,
                email,
                ownerId: user.id,
            };
            createOrganization(organization)
                .then((response) => {
                    console.log(response.data);
                    navigate("/organizations");
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
                        Create Organization
                    </h3>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.name && "is-invalid"
                                    }`}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <div className="invalid-feedback">
                                    {errors.name}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className={`form-control ${
                                        errors.description && "is-invalid"
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
                                        errors.location && "is-invalid"
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
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className={`form-control ${
                                        errors.email && "is-invalid"
                                    }`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="invalid-feedback">
                                    {errors.email}
                                </div>
                            </div>
                            <button
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

export default CreateOrganization;
