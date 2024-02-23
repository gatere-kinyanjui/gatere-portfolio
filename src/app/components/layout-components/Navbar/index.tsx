"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import homeIcon from "../../../../../public/home-logo.svg";
import burgerIcon from "../../../../../public/hamburger.svg";
import closeIcon from "../../../../../public/close.svg";

const Navbar = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

  const handleBurgerMenu = () => {
    console.log("burger!");

    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <>
      <nav className="w-full shadow-2xl bg-oracle border-gray-200 dark:bg-gray-900">
        <div className="bg-ivory max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:items-center md:flex">
          <div className="bg-scallop-seashell flex items-center justify-between py-3 md:py-5 md:flex">
            <Link href={"/"} className="flex items-center">
              <Image alt="home icon" src={homeIcon} width={32} height={32} />
            </Link>
            <div className="sm:hidden" onClick={handleBurgerMenu}>
              {burgerMenuOpen ? (
                <Image
                  src={closeIcon}
                  alt="close icon"
                  width={28}
                  height={28}
                  className="cursor-pointer"
                  onClick={() => setBurgerMenuOpen(false)}
                />
              ) : (
                <Image
                  src={burgerIcon}
                  alt="hamburger icon"
                  width={32}
                  height={32}
                  className="cursor-pointer"
                  onClick={() => setBurgerMenuOpen(true)}
                />
              )}
            </div>
          </div>

          <div
            className={`hidden w-full sm:flex sm:w-auto id='navbar-default' ${
              burgerMenuOpen ? "p-12 sm:p-0" : "hidden"
            }`}
            // className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            //   burgerMenuOpen ? "p-12 md:p-0 block" : "hidden"
            // }`}
          >
            <ul className="hidden sm:flex h-screen md:h-auto font-medium flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 uppercase">
              <Link
                href={"/projects"}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
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
      </nav>

      {/* <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
              width={32}
              height={32}
            />
            <span
              className="self-center text-2xl font-semibold whitespace-nowrap 
            dark:text-white"
            >
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm 
            text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none 
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
            dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full" id="navbar-hamburger">
            <ul
              className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 
            dark:border-gray-700"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
