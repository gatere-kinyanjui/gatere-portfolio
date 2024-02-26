import Image from "next/image";
import htmlLogo from "../../../../../public/html-b-w-logo.svg";
import javascriptLogo from "../../../../../public/javascript-b-w-logo.svg";
import reactLogo from "../../../../../public/react-b-w-logo.svg";
import typescriptLogo from "../../../../../public/typescript-b-w-logo.svg";
import nextjsLogo from "../../../../../public/nextjs-b-w-logo.svg";

const SkillsModal = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen bg-pewter border-none border-gray-200  dark:bg-gray-800 dark:border-gray-700">
      <ul
        role="list"
        className="flex flex-col w-[70%] gap-y-8 md:gap-6 justify-center self-center divide-y divide-gunmetal-gray dark:divide-gray-700"
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
  );
};

export default SkillsModal;
