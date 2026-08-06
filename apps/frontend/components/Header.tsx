import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-screen fixed top-0 flex items-center justify-center">
      <div className="w-[80%] h-12 bg-amber-950 flex items-center justify-around rounded-xl my-2">
        <Link href="/">
            <h1 className="font-bold text-2xl">
                CCe <span className="">.</span>
            </h1>
        </Link>
        <Navbar/>
      </div>
    </header>
  );
}