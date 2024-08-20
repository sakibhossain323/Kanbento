import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
    const { id, name } = props;
    return (
        <Navbar
            expand="lg"
            bg="black"
            data-bs-theme="dark"
            className="min-vh-100 flex-column align-items-start justify-content-start 
                        border border-dark border-2 border-start-0"
        >
            <Navbar.Brand className="text-light ms-3 mt-3">
                <h3>{name}</h3>
            </Navbar.Brand>
            <Nav className="flex-column ms-5 my-3">
                <NavLink end to={`/organizations/${id}`} className="nav-link">
                    Overview
                </NavLink>
                <NavLink
                    to={`/organizations/${id}/events`}
                    className="nav-link"
                >
                    Events
                </NavLink>
                <NavLink
                    to={`/organizations/${id}/members`}
                    className="nav-link"
                >
                    Members
                </NavLink>
            </Nav>
        </Navbar>
    );
};

export default Sidebar;
