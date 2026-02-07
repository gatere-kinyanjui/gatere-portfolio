"use client";

import { Footer } from "flowbite-react";
import React from "react";

const currentYear = new Date();

function DefaultFooterComponent() {
  return (
    <Footer
      container
      className="w-full bg-cyan-100 bg-transparent rounded-none shadow-[0px_0px_20px_5px_#00000024]"
    >
      <Footer.Copyright
        className="text-black"
        by="Gatere™"
        year={currentYear.getFullYear()}
      />

      <Footer.LinkGroup>
        {/* <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link> */}

        {/* <h6 className="last:mr-0 md:mr-6 me-4 text-sm text-gray-500 hover:text-gunmetal-gray">
          Crafting beautiful and user-friendly web experiences!
        </h6> */}
      </Footer.LinkGroup>
    </Footer>
  );
}

export default DefaultFooterComponent;
