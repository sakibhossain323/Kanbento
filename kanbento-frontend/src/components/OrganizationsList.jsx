import React from "react";
import { useAuthContext } from "./AuthContex";
import { Navigate } from "react-router-dom";

const OrganizationsList = () => {
    const { user, setUser } = useAuthContext();
    if (!user) {
        return <Navigate to="/login" />;
    }

    return <div>List</div>;
};

export default OrganizationsList;
