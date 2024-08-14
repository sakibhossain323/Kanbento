import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AuthContexProvider from "./AuthContex";

const PageLayout = () => {
    return (
        <AuthContexProvider>
            <Header />
            <section className="min-vh-100">
                <Outlet />
            </section>
            <Footer />
        </AuthContexProvider>
    );
};

export default PageLayout;
