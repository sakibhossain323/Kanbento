import React, { useEffect, useState } from "react";
import { useAuthContext } from "./AuthContex";
import { useParams } from "react-router-dom";
import { getOrganizationById } from "../services/OrganizationService";

const OrganizationDashboard = () => {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/login" />;
    }
    const { id } = useParams();
    const [organization, setOrganization] = useState(null);
    useEffect(() => {
        getOrganizationById(id)
            .then((response) => {
                setOrganization(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    return (
        <div>
            <h1>Organization Dashboard</h1>
            <h2>{organization?.name}</h2>
            <p>{organization?.description}</p>
            <p>{organization?.location}</p>
            <p>{organization?.email}</p>
            <p>{organization?.ownerId}</p>
        </div>
    );
};

export default OrganizationDashboard;
