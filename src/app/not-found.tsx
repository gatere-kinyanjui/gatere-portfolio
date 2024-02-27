import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-black overflow-hidden bg-pewter flex flex-col gap-y-8 justify-center items-center h-screen">
      <h2 className="text-4xl font-bold text-center">Page Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}
