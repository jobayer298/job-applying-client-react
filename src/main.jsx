import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import Applied_jobs from "./Components/Applied_jobs";
import Blogs from "./Components/Blogs";
import Error from "./Components/Error";
import JobDetails from "./Components/JobDetails";
import { allJobsData } from "./Components/Loaders/GetjobAndCartData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/job-desc.json"),
      },
      {
        path: "job/:jobID",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/job-desc.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied_jobs",
        element: <Applied_jobs></Applied_jobs>,
        loader: () => fetch("/job-desc.json"),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
