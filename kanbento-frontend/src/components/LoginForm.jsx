import React, { useState } from "react";
import { login, storeToken, storeUser } from "../services/AuthService";
import { useAuthContext } from "./AuthContex";
import { redirect } from "react-router-dom";

const LoginForm = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        usernameOrEmail: "",
        password: "",
    });

    const isCredentialsValid = () => {
        const currentErrors = { ...errors };
        currentErrors.usernameOrEmail = usernameOrEmail
            ? ""
            : "Username or Email is required";
        currentErrors.password = password ? "" : "Password is required";
        setErrors(currentErrors);
        return Object.values(currentErrors).every((error) => !error);
    };

    const handlesubmit = (e) => {
        e.preventDefault();

        if (isCredentialsValid()) {
            const credentials = { usernameOrEmail, password };
            login(credentials)
                .then((response) => {
                    console.log(response.data);
                    storeToken("Bearer " + response.data.accessToken);
                    storeUser(usernameOrEmail);
                    window.location.href = "/";
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h3 className="card-header text-center py-3">Login</h3>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">
                                    Username or Email
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.usernameOrEmail && "is-invalid"
                                    }`}
                                    onChange={(e) =>
                                        setUsernameOrEmail(e.target.value)
                                    }
                                />
                                <div className="invalid-feedback">
                                    {errors.usernameOrEmail}
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
                            <button
                                type="submit"
                                className="btn btn-dark form-control py-2 my-4"
                                onClick={handlesubmit}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
