import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const PageLayout = () => {
    return (
        <>
            <HeaderComponent />
            <section className="min-vh-100">
                <Outlet />
            </section>
            <FooterComponent />
        </>
    );
};

export default PageLayout;
