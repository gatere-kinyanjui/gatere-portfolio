import Image from "next/image";
import homeIcon from "../../public/home.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <header>
          <Image alt="home icon" src={homeIcon} width={32} height={32} />

          <nav>
            <ul>
              <Link href={""}>
                <li>Skills</li>
              </Link>

              <Link href={""}>
                <li>Work Experience</li>
              </Link>
              <Link href={""}>
                <li>Education</li>
              </Link>
            </ul>
          </nav>
        </header>

        <div>
          <h3>Hello! Welcome to my porfolio. My name is Gatere</h3>
          <p>How I have Served Others</p>
          <Link href={""}>
            <li>Projects</li>
          </Link>
        </div>

        <footer>
          <nav>
            <ul>
              <Link href={"https://github.com/gatere-kinyanjui"} scroll={false}>
                <li>Github</li>
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/elvis-gideon-gatere-724514138/"
                }
                scroll={false}
              >
                <li>LinkedIn</li>
              </Link>
              <li>
                <Link href={""} scroll={false}>
                  <button>Hire me</button>
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </main>
  );
}
