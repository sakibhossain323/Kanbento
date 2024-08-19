import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import LoginForm from "./components/LoginForm";
import EventsGrid from "./components/EventsGrid";
import EventDetails from "./components/EventDetails";
import UserRegistrationForm from "./components/UserRegistrationForm";
import OrganizationsList from "./components/OrganizationsList";
import { authLoader } from "./components/AuthContex";
import CreateOrganization from "./components/CreateOrganization";
import OrganizationDashboard from "./components/OrganizationDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        loader: authLoader,
        children: [
            {
                index: true,
                element: <EventsGrid />,
            },
            {
                path: "/events",
                element: <EventsGrid />,
            },
            {
                path: "/events/:id",
                element: <EventDetails />,
            },
            {
                path: "/login",
                element: <LoginForm />,
            },
            {
                path: "/register",
                element: <UserRegistrationForm />,
            },
            {
                path: "/organizations",
                element: <OrganizationsList />,
            },
            {
                path: "/organizations/create",
                element: <CreateOrganization />,
            },
            {
                path: "/organizations/:id",
                element: <OrganizationDashboard />,
                children: [
                    {
                        index: true,
                        element: <h1>organization dashboard</h1>,
                    },
                    {
                        path: "events",
                        element: <h1>event list</h1>,
                    },
                    {
                        path: "members",
                        element: <h1>member list</h1>,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
