import React from "react";

const WorkModal = () => {
  return (
    <>
      <div id="work" className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-cyan-600"></span>
          <span className="bg-cyan-600 w-fit text-white p-2 px-5 sm:text-xl text-l rounded-md">
            Work Experience
          </span>
          <span className="w-24 h-[2px] bg-cyan-600"></span>
        </div>
      </div>

      <div className="flex flex-row flex-wrap py-8 gap-y-8 gap-6 justify-center">
        <div className="max-w-xs md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Technical Customer Support & Success Lead
          </h5>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
            Providing users with customer technical support on the SaaS product{" "}
            <strong>|</strong> CRM maintenance and updating <strong>|</strong>{" "}
            Content review and editing (blogs and articles) <strong>|</strong>{" "}
            Tasks follow-up and tracking with various tools - ClickUp, Slack,
            Google workspace, Notion etc <strong>|</strong> Assisting the
            engineering team
          </p>
        </div>
        <div className="max-w-xs md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Medical Marketer & Sales Rep
          </h5>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
            Back-to-back sales, in a high-touch marketing environment{" "}
            <strong>|</strong> Facilitating and conducting CME (Continuous
            Medical Education) <strong>|</strong>
            Establishing relationships with necessary physicians and clients{" "}
            <strong>|</strong> Maintaining a physicians' database{" "}
            <strong>|</strong> 35% travel
          </p>
        </div>

        <div className="max-w-xs md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Technical Customer Support
          </h5>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aliquam voluptas voluptatibus ex eveniet, nostrum reprehenderit quo
            blanditiis itaque maiores mollitia esse consequuntur repudiandae
            voluptate. In iusto veritatis aperiam amet!
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkModal;
