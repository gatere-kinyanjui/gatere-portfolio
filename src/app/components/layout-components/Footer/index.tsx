import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <Link href={"https://github.com/gatere-kinyanjui"} scroll={false}>
            <li>Github</li>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/elvis-gideon-gatere-724514138/"}
            scroll={false}
          >
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              LinkedGreen
            </button>
            {/* <li>LinkedIn</li> */}
          </Link>
          <li>
            {/* <Link href={""} scroll={false}>
              <button>Hire me</button>
            </Link> */}
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
