import React, { useEffect, useState } from "react";
import { useAuthContext } from "./AuthContex";
import { Navigate, useNavigate } from "react-router-dom";
import { getAllOrganizations, getOrganizationsByOwnerId } from "../services/OrganizationService";

const OrganizationsList = () => {
    const { user, setUser } = useAuthContext();

    if (!user) {
        return <Navigate to="/login" />;
    }

    const [organizations, setOrganizations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);

        getOrganizationsByOwnerId(user.id)
            .then((response) => {
                setOrganizations(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="container">
            <div className="row my-3">
                <h1 className="text-center my-5">Organizations</h1>
                <div className="col-2">
                    <button
                        className="btn btn-dark"
                        onClick={() => {
                            navigate("/organizations/create");
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
                                <th>Name</th>
                                <th>Owner</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {organizations.map((organization) => (
                                <tr key={organization?.id}>
                                    <td>{organization?.name}</td>
                                    <td>{organization?.ownerId}</td>
                                    <td>
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => {
                                                navigate(
                                                    `/organizations/${organization.id}`
                                                );
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

export default OrganizationsList;
