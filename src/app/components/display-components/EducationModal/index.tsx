import React from "react";

const EducationModal = () => {
  return (
    <>
      <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Software Engineering
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          App Academy
        </p>
      </div>

      <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Web Developer
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          The Odin Project
        </p>
      </div>

      <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          B.Tech Biotechnology
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          The Technical University of Kenya
        </p>
      </div>
    </>
  );
};

export default EducationModal;
