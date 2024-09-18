import Image from "next/image";
import htmlLogo from "../../../../../public/html-b-w-logo.svg";
import javascriptLogo from "../../../../../public/javascript-b-w-logo.svg";
import reactLogo from "../../../../../public/react-b-w-logo.svg";
import typescriptLogo from "../../../../../public/typescript-b-w-logo.svg";
import nextjsLogo from "../../../../../public/nextjs-b-w-logo.svg";
import rubyLogo from "../../../../../public/ruby-logo.svg";

const SkillsModal = () => {
  return (
    <>
      <div id="skills" className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-cyan-600"></span>
          <span className="bg-cyan-600 w-fit text-white p-2 px-5 sm:text-xl text-l rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-cyan-600"></span>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full py-8 border-none">
        <ul
          role="list"
          className="flex flex-col w-[75%] gap-y-8 md:gap-6 justify-center self-center divide-y divide-gray-500 dark:divide-gray-100"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  width={20}
                  height={20}
                  className="w-8 h-8 "
                  src={htmlLogo}
                  alt="html logo"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-md font-bold text-gray-900 truncate dark:text-white">
                  HTML/CSS
                </p>
              </div>

              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <p className="text-sm font-light text-black truncate dark:text-gray-50">
                  Advanced
                </p>
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  width={20}
                  height={20}
                  className="w-8 h-8"
                  src={javascriptLogo}
                  alt="js logo"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-md font-bold text-gray-900 truncate dark:text-white">
                  JavaScript
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <p className="text-sm font-light text-black truncate dark:text-gray-400">
                  Advanced
                </p>
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  width={20}
                  height={20}
                  className="w-8 h-8"
                  src={reactLogo}
                  alt="react logo"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-md font-bold text-gray-900 truncate dark:text-white">
                  React
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <p className="text-sm font-light text-black truncate dark:text-gray-400">
                  Intermediate
                </p>
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  width={20}
                  height={20}
                  className="w-8 h-8"
                  src={typescriptLogo}
                  alt="ts logo"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-md font-bold text-gray-900 truncate dark:text-white">
                  Typescript
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <p className="text-sm font-light text-black truncate dark:text-gray-400">
                  Intermediate
                </p>
              </div>
            </div>
          </li>

          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  width={20}
                  height={20}
                  className="w-8 h-8"
                  src={nextjsLogo}
                  alt="next.js logo"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-md font-bold text-gray-900 truncate dark:text-white">
                  Next.js
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <p className="text-sm font-light text-black truncate dark:text-gray-400">
                  Beginner
                </p>
              </div>
            </div>
          </li>

          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  width={20}
                  height={20}
                  className="w-8 h-8"
                  src={rubyLogo}
                  alt="next.js logo"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-md font-bold text-gray-900 truncate dark:text-white">
                  Ruby
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <p className="text-sm font-light text-black truncate dark:text-gray-400">
                  Beginner
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SkillsModal;
