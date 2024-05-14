import Image from "next/image";
import dashboardLogo from "../../../../../public/dashboard.svg";
import bakeryLogo from "../../../../../public/bakery.svg";
import blogLogo from "../../../../../public/blog.svg";
import React from "react";
import Link from "next/link";

const ProjectsModal = () => {
  return (
    <>
      <div id="projects" className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-cyan-600"></span>
          <span className="bg-cyan-600 w-fit text-white p-2 px-5 sm:text-xl text-l rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-cyan-600"></span>
        </div>
      </div>

      <div className="flex flex-row flex-wrap py-8 gap-y-8 gap-6 justify-center">
        <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <Image
            width={20}
            height={20}
            className="w-8 h-8 group-hover:text-color-black"
            src={dashboardLogo}
            alt="dashboard logo"
          />
          <Link href="#" target="_blank">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-cyan-900">
              Student Dashboard
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
            similique repudiandae fugiat vitae quibusdam cum accusamus autem
            doloribus quisquam...
          </p>
          <Link
            href="#"
            className="inline-flex font-medium items-center text-cyan-900 hover:underline group-hover:text-cyan-900 group-hover:font-semibold"
          >
            See project
          </Link>
        </div>

        <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <Image
            width={20}
            height={20}
            className="w-8 h-8"
            src={bakeryLogo}
            alt="bakery logo"
          />
          <Link href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-cyan-900">
              Bakery E-commerce & Blog
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
            similique repudiandae fugiat vitae quibusdam cum accusamus autem
            doloribus quisquam...
          </p>
          <Link
            href="#"
            className="inline-flex font-medium items-center text-cyan-900 hover:underline group-hover:text-cyan-900 group-hover:font-semibold"
          >
            See project
          </Link>
        </div>

        <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <Image
            width={20}
            height={20}
            className="w-8 h-8"
            src={blogLogo}
            alt="blog logo"
          />
          <Link href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-cyan-900">
              Blog Site
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
            similique repudiandae fugiat vitae quibusdam cum accusamus autem
            doloribus quisquam...
          </p>
          <Link
            href="x.com"
            className="inline-flex font-medium items-center text-cyan-900 hover:underline group-hover:text-cyan-900 group-hover:font-semibold"
          >
            See project
          </Link>
        </div>

        <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <Image
            width={20}
            height={20}
            className="w-8 h-8"
            src={blogLogo}
            alt="blog logo"
          />
          <Link href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-cyan-900">
              Blog Site
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
            similique repudiandae fugiat vitae quibusdam cum accusamus autem
            doloribus quisquam...
          </p>
          <Link
            href="x.com"
            className="inline-flex font-medium items-center text-cyan-900 hover:underline group-hover:text-cyan-900 group-hover:font-semibold"
          >
            See project
          </Link>
        </div>

        <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <Image
            width={20}
            height={20}
            className="w-8 h-8"
            src={blogLogo}
            alt="blog logo"
          />
          <Link href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-cyan-900">
              Blog Site
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
            similique repudiandae fugiat vitae quibusdam cum accusamus autem
            doloribus quisquam...
          </p>
          <Link
            href="x.com"
            className="inline-flex font-medium items-center text-cyan-900 hover:underline group-hover:text-cyan-900 group-hover:font-semibold"
          >
            See project
          </Link>
        </div>

        <div className="max-w-[90%] min-w-[80%] md:min-w-0 md:max-w-lg p-6 bg-cyan-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-cyan-50">
          <Image
            width={20}
            height={20}
            className="w-8 h-8"
            src={blogLogo}
            alt="blog logo"
          />
          <Link href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-cyan-900">
              Blog Site
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 group-hover:text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
            similique repudiandae fugiat vitae quibusdam cum accusamus autem
            doloribus quisquam...
          </p>
          <Link
            href="x.com"
            className="inline-flex font-medium items-center text-cyan-900 hover:underline group-hover:text-cyan-900 group-hover:font-semibold"
          >
            See project
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectsModal;
