import React, { useEffect, useState } from "react";
import { useAuthContext } from "./AuthContex";
import { Navigate, NavLink, Outlet, useParams } from "react-router-dom";
import { getOrganizationById } from "../services/OrganizationService";
import Loading from "./Loading";
import { Nav, Navbar } from "react-bootstrap";
import Sidebar from "./Sidebar";

const OrganizationDashboard = () => {
    const { user } = useAuthContext();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [organization, setOrganization] = useState(null);

    useEffect(() => {
        getOrganizationById(id)
            .then((response) => {
                console.log(response.data);
                setOrganization(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    if (isLoading) {
        return <Loading />;
    }
    if (organization?.ownerId !== user?.id) {
        return <Navigate to="/organizations" />;
    }

    return (
        <div className="row">
            <div className="col-sm-5 col-md-4 col-lg-3 col-xxl-2">
                <Sidebar id={organization.id} name={organization.name} />
            </div>
            <div className="col">
                <Outlet />
            </div>
        </div>
    );
};

export default OrganizationDashboard;
