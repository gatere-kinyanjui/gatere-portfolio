"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import linkedInLogo from "../../../../../public/linkedin-logo.svg";
import githubLogo from "../../../../../public/github-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-oracle border-gray-200 dark:bg-gray-900">
      <nav className="w-full navbar bg-white flex items-center justify-between shadow-[0px_-10px_20px_0px_#00000024]">
        <Link
          href={"https://github.com/gatere-kinyanjui"}
          scroll={false}
          target="_blank"
        >
          <Image
            src={githubLogo}
            alt={"github logo"}
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </Link>

        <Link
          href={"https://www.linkedin.com/in/elvis-gideon-gatere-724514138/"}
          scroll={false}
          target="_blank"
        >
          <Image
            src={linkedInLogo}
            alt={"linkedIn logo"}
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
