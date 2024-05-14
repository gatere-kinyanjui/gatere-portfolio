"use client";

import Link from "next/link";
import Image from "next/image";
import homeIconTwo from "../../../../../public/home-logo-2.svg";
import burgerIcon from "../../../../../public/hamburger.svg";
import { useState } from "react";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleMobileDrawer = () => {
    setOpenDrawer(!openDrawer);
    console.log("toggled", !openDrawer.valueOf);
  };

  return (
    <div className="drawer min-h-fit z-9999 top-0 shadow-[0px_10px_20px_0px_#00000024] border-gray-200 dark:bg-gray-900">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar  bg-gradient-to-l from-gunmetal-gray to-[#BCECE0] bg-blend-multiply flex items-center justify-between">
          <div className="px-2 mx-2">
            <Link href={"/"} className="">
              <Image alt="home icon" src={homeIconTwo} width={32} height={32} />
            </Link>
          </div>

          <div className="md:hidden">
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
                onClick={toggleMobileDrawer}
              />
            </label>{" "}
          </div>

          <ul className="hidden md:flex menu menu-horizontal gap-8">
            {/* Navbar menu content here */}
            <li>
              <Link
                href={"#projects"}
                className="block py-2 px-3 text-gray-900 rounded-none md:focus:text-white md:focus:bg-transparent md:hover:bg-transparent border-0 md:hover:text-cyan-100 md:hover:font-bold md:hover:tracking-wide md:hover:text-base transition-all duration-600 border-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href={"#skills"}
                className="block py-2 px-3 text-gray-900 rounded-none md:focus:text-white md:focus:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-cyan-100 md:hover:font-bold md:hover:tracking-wide md:hover:text-base transition-all duration-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                href={"#work"}
                className="block py-2 px-3 text-gray-900 rounded-none md:focus:text-white md:focus:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-cyan-100 md:hover:font-bold md:hover:tracking-wide md:hover:text-base transition-all duration-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transparent"
                aria-current="page"
              >
                Work Experience
              </Link>
            </li>

            <li>
              <Link
                href={"#learning"}
                className="block py-2 px-3 text-gray-900 rounded-none md:focus:text-white md:focus:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-cyan-100 md:hover:font-bold md:hover:tracking-wide md:hover:text-base transition-all duration-600 group md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transparent"
                aria-current="page"
              >
                Learning
              </Link>
            </li>

            <li>
              <Link
                href={"#contact me"}
                className="block py-2 px-3 text-gray-900 rounded-none md:focus:text-white md:focus:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-cyan-100 md:hover:font-bold md:hover:tracking-wide md:hover:text-base transition-all duration-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transparent"
                aria-current="page"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {openDrawer ? (
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-[75%] min-h-full bg-gradient-to-l from-gunmetal-gray to-[#BCECE0] bg-blend-multiply text-black flex flex-col gap-y-10 justify-start uppercase">
            {/* Sidebar content here */}
            <li>
              <Link
                href={"#projects"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-gray hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                onClick={toggleMobileDrawer}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href={"#skills"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-gray hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                onClick={toggleMobileDrawer}
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                href={"#work"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-gray hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                onClick={toggleMobileDrawer}
              >
                Work Experience
              </Link>
            </li>

            <li>
              <Link
                href={"#learning"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-gray hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                onClick={toggleMobileDrawer}
              >
                Learning
              </Link>
            </li>

            <li>
              <Link
                href={"#contact me"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-gray hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                onClick={toggleMobileDrawer}
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
