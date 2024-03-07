import Link from "next/link";
import React from "react";
import DefaultFooterComponent from "./components/flowbite-components/default-footer/defaultFooter";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-b from-white to-pewter text-black h-[100%]">
      <div className="flex flex-col justify-center gap-y-8 items-center">
        <h2 className="text-4xl font-bold text-center">Page Not Found</h2>
        <p>Could not find requested resource</p>
      </div>

      <div>
        <DefaultFooterComponent />
      </div>
    </div>
  );
}
