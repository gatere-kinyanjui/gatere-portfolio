import Image from "next/image";
import dashboardLogo from "../../../../../public/dashboard.svg";
import bakeryLogo from "../../../../../public/bakery.svg";
import blogLogo from "../../../../../public/blog.svg";

const ProjectsModal = () => {
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          width={20}
          height={20}
          className="w-8 h-8"
          src={dashboardLogo}
          alt="dashboard logo"
        />
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Student Dashboard
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
          similique repudiandae fugiat vitae quibusdam cum accusamus autem
          doloribus quisquam...
        </p>
        <a
          href="#"
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          See project
        </a>
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          width={20}
          height={20}
          className="w-8 h-8"
          src={bakeryLogo}
          alt="bakery logo"
        />
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Bakery E-commerce & Blog
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
          similique repudiandae fugiat vitae quibusdam cum accusamus autem
          doloribus quisquam...
        </p>
        <a
          href="#"
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          See project
        </a>
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          width={20}
          height={20}
          className="w-8 h-8"
          src={blogLogo}
          alt="blog logo"
        />
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Blog Site
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
          similique repudiandae fugiat vitae quibusdam cum accusamus autem
          doloribus quisquam...
        </p>
        <a
          href="x.com"
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          See project
        </a>
      </div>
    </>
  );
};

export default ProjectsModal;
