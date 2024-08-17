import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContex";
import { removeSavedCredentials } from "../services/AuthService";
import { toast } from "react-toastify";
const Header = () => {
    const { user, setUser } = useAuthContext();

    const handleLogout = () => {
        removeSavedCredentials();
        setUser(null);
        toast.info("You have been logged out", {
            autoClose: 2000,
        });
    };

    return (
        <header>
            <Navbar expand="lg" bg="black" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/" className="me-5">
                        Kanbento
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/events" className="nav-link">
                                Events
                            </NavLink>
                            <NavLink to="/create-organization" className="nav-link">
                                Create Organization
                            </NavLink>
                        </Nav>

                        {user ? (
                            <Nav>
                                <NavLink to="/profile" className="nav-link">
                                    {user}
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className="nav-link"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </NavLink>
                            </Nav>
                        ) : (
                            <Nav>
                                <NavLink to="/login" className="nav-link">
                                    Login
                                </NavLink>
                                <NavLink to="/register" className="nav-link">
                                    Register
                                </NavLink>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
