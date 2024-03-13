import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import JobDetails from "./components/JobDetails/JobDetails";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/applied-jobs",
                element: <AppliedJobs />,
                loader: () => fetch(`/data/jobs.json`),
            },
            {
                path: "/job/:jobId",
                element: <JobDetails />,
                loader: () => fetch(`/data/jobs.json`),
            },
            {
                path: "/blog",
                element: <Blog />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </React.StrictMode>
);
