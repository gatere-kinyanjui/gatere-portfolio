import Image from "next/image";
import dashboardLogo from "../../../../../public/dashboard.svg";
import bakeryLogo from "../../../../../public/bakery.svg";
import blogLogo from "../../../../../public/blog.svg";
import Link from "next/link";

const ProjectsModal = () => {
  return (
    <div className="bg-pewter flex flex-col py-8 gap-y-8 md:gap-6 justify-center items-center">
      <div className="max-w-xs md:max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-lighterGreen">
        <Image
          width={20}
          height={20}
          className="w-8 h-8 group-hover:text-color-black"
          src={dashboardLogo}
          alt="dashboard logo"
        />
        <Link href="#" target="_blank">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Student Dashboard
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
          similique repudiandae fugiat vitae quibusdam cum accusamus autem
          doloribus quisquam...
        </p>
        <Link
          href="#"
          className="inline-flex font-medium items-center text-blue-gray hover:underline group-hover:text-blue-gray group-hover:font-semibold"
        >
          See project
        </Link>
      </div>

      <div className="max-w-xs md:max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-lighterGreen">
        <Image
          width={20}
          height={20}
          className="w-8 h-8"
          src={bakeryLogo}
          alt="bakery logo"
        />
        <Link href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Bakery E-commerce & Blog
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
          similique repudiandae fugiat vitae quibusdam cum accusamus autem
          doloribus quisquam...
        </p>
        <Link
          href="#"
          className="inline-flex font-medium items-center text-blue-gray hover:underline group-hover:text-blue-gray group-hover:font-semibold"
        >
          See project
        </Link>
      </div>

      <div className="max-w-xs md:max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-lighterGreen">
        <Image
          width={20}
          height={20}
          className="w-8 h-8"
          src={blogLogo}
          alt="blog logo"
        />
        <Link href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Blog Site
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
          similique repudiandae fugiat vitae quibusdam cum accusamus autem
          doloribus quisquam...
        </p>
        <Link
          href="x.com"
          className="inline-flex font-medium items-center text-blue-gray hover:underline group-hover:text-blue-gray group-hover:font-semibold"
        >
          See project
        </Link>
      </div>

      <div className="max-w-xs md:max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-lighterGreen">
        <Image
          width={20}
          height={20}
          className="w-8 h-8"
          src={blogLogo}
          alt="blog logo"
        />
        <Link href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Blog Site
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
          similique repudiandae fugiat vitae quibusdam cum accusamus autem
          doloribus quisquam...
        </p>
        <Link
          href="x.com"
          className="inline-flex font-medium items-center text-blue-gray hover:underline group-hover:text-blue-gray group-hover:font-semibold"
        >
          See project
        </Link>
      </div>

      <div className="max-w-xs md:max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-lighterGreen">
        <Image
          width={20}
          height={20}
          className="w-8 h-8"
          src={blogLogo}
          alt="blog logo"
        />
        <Link href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Blog Site
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
          similique repudiandae fugiat vitae quibusdam cum accusamus autem
          doloribus quisquam...
        </p>
        <Link
          href="x.com"
          className="inline-flex font-medium items-center text-blue-gray hover:underline group-hover:text-blue-gray group-hover:font-semibold"
        >
          See project
        </Link>
      </div>

      <div className="max-w-xs md:max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-none ease-in-out duration-1000 group hover:bg-lighterGreen">
        <Image
          width={20}
          height={20}
          className="w-8 h-8"
          src={blogLogo}
          alt="blog logo"
        />
        <Link href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-gray">
            Blog Site
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque
          similique repudiandae fugiat vitae quibusdam cum accusamus autem
          doloribus quisquam...
        </p>
        <Link
          href="x.com"
          className="inline-flex font-medium items-center text-blue-gray hover:underline group-hover:text-blue-gray group-hover:font-semibold"
        >
          See project
        </Link>
      </div>
    </div>
  );
};

export default ProjectsModal;
