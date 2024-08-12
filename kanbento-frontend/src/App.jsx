import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1 className="text-success">home</h1>,
    },
    {
        path: "/about",
        element: <h1>about</h1>,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
