import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <h3 className="text-2xl">
            Hello! Welcome to my porfolio. My name is Gatere
          </h3>
          <p className="hover:text-teal-400 cursor-pointer">
            How I have Served Others
          </p>
          <Link href={"/projects"}>Projects</Link>
        </div>
      </div>
    </main>
  );
}
