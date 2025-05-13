import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="mt-4 text-4xl font-semibold text-gray-600">Page Not Found</h2>
        <p className="mt-4 mb-8 text-gray-500">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-white bg-blue-500 rounded-lg transition-colors duration-300 hover:bg-blue-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
