import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    addMemberToOrganization,
    getOrganizationMembers,
    removeMemberFromOrganization,
} from "../services/OrganizationService";
import { getUserByUsername } from "../services/KanbentoUserService";
import { useAuthContext } from "./AuthContex";

const OrganizationMembersList = () => {
    const [members, setMembers] = useState([]);
    const { id } = useParams();

    const [username, setUsername] = useState("");
    const [member, setMember] = useState(null);

    const { user } = useAuthContext();

    const loadMembers = () => {
        getOrganizationMembers(id)
            .then((response) => {
                setMembers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const findMember = () => {
        getUserByUsername(username)
            .then((response) => {
                setMember(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const addMember = () => {
        addMemberToOrganization(id, member.id)
            .then((response) => {
                loadMembers();
                setMember(null);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const removeMember = (memberId) => {
        removeMemberFromOrganization(id, memberId)
            .then((response) => {
                loadMembers();
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        loadMembers();
    }, [id]);
    return (
        <div className="container">
            <div className="row my-3">
                <h2 className="text-center my-5">Members</h2>

                <div className="row my-3">
                    <div className="col-10">
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="col-2">
                        <button
                            className="btn btn-dark form-control"
                            onClick={findMember}
                        >
                            Find
                        </button>
                    </div>
                </div>

                {member && (
                    <div className="row my-3">
                        <div className="col-10">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {member?.username}
                                    </h5>
                                    <p className="card-text">{member?.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                <button
                                    className="btn btn-dark"
                                    onClick={addMember}
                                >
                                    Add
                                </button>
                            </div>

                            <div className="row mt-2">
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        setMember(null);
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((member) => (
                                <tr key={member?.id}>
                                    <td>{member?.username}</td>
                                    <td>{member?.email}</td>
                                    <td>
                                        {member?.id !== user?.id && (
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => {
                                                    removeMember(member.id);
                                                }}
                                            >
                                                Remove
                                            </button>
                                        )}
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

export default OrganizationMembersList;
