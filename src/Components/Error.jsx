import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex justify-center items-center h-screen p-16 bg-gray-100 text-gray-900">
      <Link
        to="/"
        className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
      >
        Back to homepage
      </Link>
    </section>
  );
};

export default Error;
