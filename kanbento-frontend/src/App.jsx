import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/PageLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                index: true,
                element: <h1>index</h1>,
            },
            {
                path: "/about",
                element: <h1>about</h1>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
