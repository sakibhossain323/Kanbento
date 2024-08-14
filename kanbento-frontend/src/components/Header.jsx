import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "./AuthContex";
import { logout } from "../services/AuthService";
const Header = () => {
    const { user, setUser } = useAuthContext();
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
                        </Nav>

                        {user ? (
                            <Nav>
                                <NavLink to="/profile" className="nav-link">
                                    {user}
                                </NavLink>
                                <NavLink
                                    to="/logout"
                                    className="nav-link"
                                    onClick={logout}
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
