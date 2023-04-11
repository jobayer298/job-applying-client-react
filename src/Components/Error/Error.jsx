import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <section className="flex text-center justify-center items-center h-screen p-16  text-gray-900">
      <div>
        <div className="number">404</div>
        <h2 className="gradient-heading mb-6">Ops..Page Not Fount</h2> <br />
        <Link
          to="/"
          className="px-6 py-4  font-semibold rounded bg-cyan-200 text-gray-900"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
