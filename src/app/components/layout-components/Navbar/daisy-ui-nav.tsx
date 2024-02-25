import Link from "next/link";
import Image from "next/image";
import homeIcon from "../../../../../public/home-logo.svg";
import burgerIcon from "../../../../../public/hamburger.svg";

const DaisyUiNav = () => {
  return (
    <div className="drawer shadow-2xl bg-oracle border-gray-200 dark:bg-gray-900">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white">
          <div className="flex-1 px-2 mx-2">
            <Link href={"/"} className="">
              <Image alt="home icon" src={homeIcon} width={32} height={32} />
            </Link>
          </div>

          <div className="flex-none lg:hidden">
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
                // onClick={() => setBurgerMenuOpen(true)}
              />
            </label>{" "}
          </div>

          <div className="flex-none hidden lg:flex justify-between">
            <ul className="menu menu-horizontal bg-gray-50 uppercase">
              {/* Navbar menu content here */}
              <Link
                href={"/projects"}
                className="block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Projects
              </Link>

              <Link
                href={"/skills"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Skills
              </Link>

              <Link
                href={"/work"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Work Experience
              </Link>

              <Link
                href={"/education"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Education
              </Link>

              <Link
                href={"/contact"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="drawer-side uppercase">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-gray-50 uppercase md:flex-row">
          {/* Sidebar content here */}
          <Link
            href={"/projects"}
            // className="block py-2 px-3 text-gray-900 rounded md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            aria-current="page"
          >
            Projects
          </Link>

          <Link
            href={"/skills"}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Skills
          </Link>

          <Link
            href={"/work"}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Work Experience
          </Link>

          <Link
            href={"/education"}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Education
          </Link>

          <Link
            href={"/contact"}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DaisyUiNav;
