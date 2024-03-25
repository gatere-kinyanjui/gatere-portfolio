import Link from "next/link";
import React from "react";
import DefaultFooterComponent from "./components/flowbite-components/default-footer/defaultFooter";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col justify-between text-black bg-gradient-to-l from-gunmetal-gray to-[#BCECE0] bg-blend-multiply items-center">
      <div className="rounded-lg bg-gray-200 p-8 m-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="text-gray-600">
          Oops! The page you are looking for could not be found.
        </p>
        <a
          href="/"
          className="mt-4 inline-block rounded bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          {" "}
          Go back to Home{" "}
        </a>
      </div>

      <DefaultFooterComponent />
    </div>
  );
}
