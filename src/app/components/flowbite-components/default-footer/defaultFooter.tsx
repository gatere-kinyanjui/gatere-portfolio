"use client";

import { Footer } from "flowbite-react";
import React from "react";

function DefaultFooterComponent() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Gatere™" year={2024} />
      <h6 className="last:mr-0 md:mr-6 me-4 text-sm text-gray-500 hover:text-gunmetal-gray">
        Crafting pleasant web apps!
      </h6>
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default DefaultFooterComponent;
