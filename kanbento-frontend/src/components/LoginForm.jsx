import React, { useState } from "react";
import { login, saveCredentials } from "../services/AuthService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContex";

const LoginForm = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        usernameOrEmail: "",
        password: "",
    });

    const { user, setUser } = useAuthContext();
    const navigate = useNavigate();

    const isFormValid = () => {
        const currentErrors = { ...errors };
        currentErrors.usernameOrEmail = usernameOrEmail
            ? ""
            : "Username or Email is required";
        currentErrors.password = password ? "" : "Password is required";
        setErrors(currentErrors);
        return Object.values(currentErrors).every((error) => !error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            const credentials = { usernameOrEmail, password };
            login(credentials)
                .then((response) => {
                    console.log(response.data);
                    saveCredentials(response.data);
                    setUser(response.data.user);
                    toast.success("Login successful", { autoClose: 2000 });
                    navigate("/events");
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
                                onClick={handleSubmit}
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
