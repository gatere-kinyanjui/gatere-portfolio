import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h3 className="text-2xl">
          Hello! Welcome to my porfolio. My name is Gatere
        </h3>
        <Link href={"/projects"}>
          <p className="hover:text-mediumaquamarine-400 cursor-pointer">
            How I have Served Others
          </p>
        </Link>
        <Link href={"/projects"}>Projects</Link>
      </div>
    </main>
  );
}
