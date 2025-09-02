import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    // Outer container for the page, setting up the flexbox centering
    <div className="bg-gray-100 text-white flex items-center justify-center min-h-screen px-4 font-sans">
      <div className="text-center p-8 sm:p-12 md:p-16 rounded-2xl shadow-2xl max-w-lg w-full hover:scale-105 transform transition-all duration-300 gradient-move">
        {/* The prominent 404 error code */}
        <h1 className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          404
        </h1>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-wide">
          Page Not Found
        </h2>

        <p className="text-gray-300 mb-8 max-w-sm mx-auto">
          The page you are looking for might have been moved, deleted, or never
          existed.
        </p>

        {/* A modern-looking call-to-action button */}
        <a
          href="/"
          className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-white text-gray-900 shadow-md transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
