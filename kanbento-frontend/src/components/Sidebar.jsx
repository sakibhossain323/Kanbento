import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
    const { navlinks } = props;

    return (
        <Navbar
            bg="tertiary"
            data-bs-theme="light"
            className="flex-column my-5 align-items-start"
        >
            <Nav className="flex-column w-75">
                {navlinks.map((link) => (
                    <Nav.Item key={link.title}>
                        <NavLink
                            end={link.default}
                            to={link.path}
                            className={({ isActive }) =>
                                "nav-link my-1" +
                                (isActive ? " border-top border-bottom" : "")
                            }
                        >
                            {link.title}
                        </NavLink>
                    </Nav.Item>
                ))}
            </Nav>
        </Navbar>
    );
};

export default Sidebar;
