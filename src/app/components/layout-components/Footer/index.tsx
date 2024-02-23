"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import linkedInLogo from "../../../../../public/linkedin-logo.svg";
import githubLogo from "../../../../../public/github-logo.svg";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link href={"https://github.com/gatere-kinyanjui"} scroll={false}>
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
