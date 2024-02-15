import Image from "next/image";
import htmlLogo from "../../../../../public/html-b-w-logo.svg";
import javascriptLogo from "../../../../../public/javascript-b-w-logo.svg";
import reactLogo from "../../../../../public/react-b-w-logo.svg";
import typescriptLogo from "../../../../../public/typescript-b-w-logo.svg";
import nextjsLogo from "../../../../../public/nextjs-b-w-logo.svg";

const SkillsModal = () => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Skills
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
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
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  HTML/CSS
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Advanced
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>

              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm14 6H9l.2 2H17l-.6 6.6-4.2 1.4-4.3-1.4-.3-3h2l.2 1.4 2.4.8 2.3-.7.3-3H7.4L7 6h10.4L17 8Z" />
              </svg>
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
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  JavaScript
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Advanced
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3467
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
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  React
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Intermediate
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $67
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
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Typescript
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Beginner
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $367
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
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Next.js
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Beginner
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsModal;
