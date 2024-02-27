import Link from "next/link";

export default function Home() {
  return (
    <main className="text-black bg-gradient-to-b from-white to-pewter flex justify-center items-center h-screen">
      <div className="text-left p-6 flex flex-col gap-y-2">
        <h3 className="text-2xl">Hello! Welcome to my portfolio.</h3>

        <h4 className="text-xl">My name is Gatere.</h4>

        <Link href={"/projects"} target="_blank">
          <h5 className="hover:text-blue-gray text-l cursor-h5ointer ">
            How I have Served Others:
          </h5>
        </Link>

        <Link href={"/projects"}>Projects</Link>
      </div>
    </main>
  );
}
