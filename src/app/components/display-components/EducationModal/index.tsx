const EducationModal = () => {
  return (
    <div className="bg-pewter flex flex-col py-8 gap-y-8 md:gap-6 justify-center items-center h-screen">
      <div className="max-w-xs md:max-w-lg p-6 w-[75%] bg-white border border-gray-200 rounded-none shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-lighterGreen">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
          Software Engineering
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-black">
          App Academy
        </p>
      </div>

      <div className="max-w-xs md:max-w-lg p-6 w-[75%] bg-white border border-gray-200 rounded-none shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-lighterGreen">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
          Web Development
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-black">
          The Odin Project
        </p>
      </div>

      <div className="max-w-xs md:max-w-lg p-6 w-[75%] bg-white border border-gray-200 rounded-none shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-lighterGreen">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
          B.Tech Biotechnology
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-black">
          The Technical University of Kenya
        </p>
      </div>
    </div>
  );
};

export default EducationModal;
