import Image from "next/image";
import Link from "next/link";
import homeIcon from "../../../../../public/home-logo.svg";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <Image alt="home icon" src={homeIcon} width={32} height={32} />
      </Link>

      <nav>
        <ul>
          <Link href={"/skills"}>
            <li>Skills</li>
          </Link>

          <Link href={"/work"}>
            <li>Work Experience</li>
          </Link>
          <Link href={"education"}>
            <li>Education</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
