import Link from "next/link";

import React from "react";
import Image from "next/image";
import githubIcon from "../../public/github-dark-logo.svg";
import linkedInIcon from "../../public/linkedin-dark-logo.svg";
import xSocialMediaIcon from "../../public/x-social-media-black-icon.svg";
import DefaultFooterComponent from "./components/flowbite-components/default-footer/defaultFooter";
import Projects from "./(pages)/projects/page";
import Skills from "./(pages)/skills/page";
import Education from "./(pages)/education/page";
import Work from "./(pages)/work/page";
import Contact from "./(pages)/contact/page";

export default function Home() {
  return (
    <section className="flex flex-col justify-between min-h-screen bg-center bg-no-repeat text-black bg-gradient-to-l from-gunmetal-gray to-[#BCECE0] bg-blend-multiply">
      <div className="flex flex-col items-center px-4 mx-auto max-w-screen-xl text-center py-32 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">
          Welcome to my portfolio
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
          Passionate self-taught developer crafting beautiful and user-friendly
          web experiences!
        </p>
        <div className="flex flex-row justify-around items-center self-center gap-8 pace-y-0">
          <Link
            target="_blank"
            href="https://github.com/gatere-kinyanjui"
            className="inline-flex justify-center items-center text-gray-800 py-3 px-5 text-base font-medium text-center rounded-lg bg-transparent hover:bg-cyan-600"
          >
            <Image src={githubIcon} height={32} width={32} alt="github icon" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/elvis-gideon-gatere-724514138/"
            className="inline-flex justify-center items-center text-gray-800 py-3 px-5 text-base font-medium text-center rounded-lg bg-transparent hover:bg-cyan-600"
          >
            <Image
              src={linkedInIcon}
              height={32}
              width={32}
              alt="linkedin icon"
            />
          </Link>

          <Link
            target="_blank"
            href="https://twitter.com/GatereKinyanjui"
            className="inline-flex justify-center items-center text-gray-800 py-3 px-5 text-base font-medium text-center rounded-lg bg-transparent hover:bg-cyan-600"
          >
            <Image
              src={xSocialMediaIcon}
              height={32}
              width={32}
              alt="linkedin icon"
            />
          </Link>
        </div>
      </div>

      <>
        <Projects />
        <Skills />
        <Work />
        <Education />
        <Contact />
      </>

      <div className="">
        <DefaultFooterComponent />
      </div>
    </section>
  );
}
