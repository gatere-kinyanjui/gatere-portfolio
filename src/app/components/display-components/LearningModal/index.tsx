import Link from "next/link";

const LearningModal = () => {
  return (
    <>
      <div id="learning" className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-cyan-600"></span>
          <span className="bg-cyan-600 w-fit text-white p-2 px-5 sm:text-xl text-l rounded-md">
            Learning
          </span>
          <span className="w-24 h-[2px] bg-cyan-600"></span>
        </div>
      </div>

      <div className="flex flex-row flex-wrap py-8 gap-y-8 gap-6 justify-center">
        <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Software Engineering
          </h5>
          <Link target="_blank" href={"https://www.appacademy.io/"}>
            <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
              App Academy Open
            </p>
          </Link>
        </div>

        <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Web Development
          </h5>
          <Link target="_blank" href={"https://www.theodinproject.com/"}>
            <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
              The Odin Project
            </p>
          </Link>
        </div>

        <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            B.Tech Biotechnology
          </h5>
          <Link target="_blank" href={"https://tukenya.ac.ke/"}>
            <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
              The Technical University of Kenya
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LearningModal;
