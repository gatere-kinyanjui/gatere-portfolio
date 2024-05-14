"use client";

import { Footer } from "flowbite-react";
import React from "react";

function DefaultFooterComponent() {
  return (
    <Footer
      container
      className="w-full rounded-none shadow-[0px_0px_20px_5px_#00000024]"
    >
      <Footer.Copyright by="Gatere™" year={2024} />

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
