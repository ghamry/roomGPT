import Link from "next/link";
import SquigglyLines from "../components/SquigglyLines";
import { Metadata } from "next";
import SearchInput from "../components/SearchInput";

export default function HomePage() {
  return (

    <>
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
        Your one-stop destination for effortless and efficient product searches. {" "}
        <span className="relative whitespace-nowrap text-blue-600">
          <SquigglyLines />
          <span className="relative">Should I Buy !</span>
        </span>{" "}
      </h1>

      <SearchInput />

      <Link
        className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-20 mt-20 hover:bg-blue-500 transition"
        href="/searchResult">searchResult
      </Link>
    </>


  );
}
