import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "./AuthContex";
import { getOrganizationById } from "../services/OrganizationService";

const OrganizationOverview = () => {
    const [organization, setOrganization] = useState(null);
    const { id } = useParams();
    const { user } = useAuthContext();

    useEffect(() => {
        getOrganizationById(id)
            .then((response) => {
                console.log(response.data);
                setOrganization(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    return (
        <div className="container">
            <div className="row my-3">
                <h2 className="text-center my-5">Overview</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <p>{organization?.description}</p>
                            <p>
                                <strong>Location: </strong>
                                {organization?.location}
                            </p>
                            <p>
                                <strong>Email: </strong>
                                {organization?.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationOverview;
