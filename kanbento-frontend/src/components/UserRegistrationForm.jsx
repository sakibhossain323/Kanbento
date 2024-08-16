import React, { useState } from "react";
import { register } from "../services/AuthService";

const UserRegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const isFormValid = () => {
        const currentErrors = { ...errors };
        currentErrors.username = username ? "" : "Username is required";
        currentErrors.email = email ? "" : "Email is required";
        currentErrors.password = password ? "" : "Password is required";
        currentErrors.confirmPassword =
            confirmPassword === password ? "" : "Passwords do not match";

        setErrors(currentErrors);

        return Object.values(currentErrors).every((error) => !error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            const user = { username, email, password };
            console.log(user);
            register(user)
                .then((response) => {
                    console.log(response);
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
                    <h3 className="card-header text-center py-3">Register</h3>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.username && "is-invalid"
                                    }`}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                                <div className="invalid-feedback">
                                    {errors.username}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className={`form-control ${
                                        errors.email && "is-invalid"
                                    }`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="invalid-feedback">
                                    {errors.email}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${
                                        errors.password && "is-invalid"
                                    }`}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <div className="invalid-feedback">
                                    {errors.password}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className={`form-control ${
                                        errors.confirmPassword && "is-invalid"
                                    }`}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                                <div className="invalid-feedback">
                                    {errors.confirmPassword}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-dark form-control py-2 my-4"
                                onClick={handleSubmit}
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegistrationForm;
