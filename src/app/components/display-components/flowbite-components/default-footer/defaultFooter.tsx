"use client";

import { Footer } from "flowbite-react";
import Link from "next/link";
import React from "react";

const currentYearMaintenanceFooter = new Date();

function DefaultFooterComponent() {
  return (
    <Footer
      container
      className="w-full rounded-none shadow-[0px_0px_20px_5px_#00000024]"
    >
      <Link href={"https://github.com/gatere-kinyanjui"}>
        <Footer.Copyright
          by="Gatere™"
          year={currentYearMaintenanceFooter.getFullYear()}
        />
      </Link>

      <Footer.LinkGroup>
        {/* <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link> */}

        <h6 className="last:mr-0 md:mr-6 me-4 text-sm text-gray-500 hover:text-gunmetal-gray">
          Crafting pleasant web apps!
        </h6>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default DefaultFooterComponent;
