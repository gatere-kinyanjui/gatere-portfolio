import Link from "next/link";
import Image from "next/image";
import homeIconTwo from "../../../../../public/home-logo-2.svg";
import burgerIcon from "../../../../../public/hamburger.svg";

const DaisyFlexNav = () => {
  return (
    <div className="drawer shadow-[0px_10px_20px_0px_#00000024] bg-oracle border-gray-200 dark:bg-gray-900">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white flex items-center justify-between">
          <div className="px-2 mx-2">
            <Link href={"/"} className="">
              <Image alt="home icon" src={homeIconTwo} width={32} height={32} />
            </Link>
          </div>

          <div className="lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Image
                src={burgerIcon}
                alt="hamburger icon"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </label>{" "}
          </div>

          <ul className="hidden lg:flex menu menu-horizontal gap-8">
            {/* Navbar menu content here */}
            <li>
              <Link
                href={"/projects"}
                className="block py-2 px-3 text-gray-900 rounded-none md:focus:text-blue-600 md:focus:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-blue-gray md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href={"/skills"}
                className="block py-2 px-3 text-gray-900 rounded-none md:focus:text-blue-600 md:focus:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                href={"/work"}
                className="block py-2 px-3 text-gray-900 rounded-none md:focus:text-blue-600 md:focus:bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Work Experience
              </Link>
            </li>

            <li>
              <Link
                href={"/education"}
                className="block py-2 px-3 text-gray-900 rounded-none md:focus:text-blue-600 md:focus:bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Education
              </Link>
            </li>

            <li>
              <Link
                href={"/contact"}
                className="block py-2 px-3 text-gray-900 rounded-none md:focus:text-blue-600 md:focus:bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-gray-50 flex flex-col">
          {/* Sidebar content here */}
          <li>
            <Link
              href={"/projects"}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-gray hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href={"/skills"}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-gray hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              href={"/work"}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-gray hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              Work Experience
            </Link>
          </li>

          <li>
            <Link
              href={"/education"}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-gray hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              href={"/contact"}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-gray hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DaisyFlexNav;
