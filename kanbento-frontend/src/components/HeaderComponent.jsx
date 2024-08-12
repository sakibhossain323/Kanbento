import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const HeaderComponent = () => {
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
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                        </Nav>

                        <Nav>
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="nav-link">
                                Register
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default HeaderComponent;
