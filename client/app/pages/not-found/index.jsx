import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-500 animate-bounce">404</h1>
                <p className="text-2xl mt-4 text-gray-700 mb-10 dark:text-gray-300">Oops! The page you're looking for doesn't exist.</p>
                <Link
                    to="/"
                    className="mt-20 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                    Go Back Home
                </Link>
            </div>
            {/* <div className="mt-8 w-64 h-64 md:w-80 md:h-80">
                <img src="/assets/404-illustration.svg" alt="Page Not Found" className="w-full h-full object-cover" />
            </div> */}
        </div>
    );
}

export default NotFound;
