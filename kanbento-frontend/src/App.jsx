import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import LoginForm from "./components/LoginForm";
import EventsGrid from "./components/EventsGrid";
import EventDetails from "./components/EventDetails";
import UserRegistrationForm from "./components/UserRegistrationForm";
import OrganizationsList from "./components/OrganizationsList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
