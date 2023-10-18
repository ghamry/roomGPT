import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Metadata } from "next";
let title = "Should I Buy ?";
let description = "fin the best deal in seconds.";


export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/fav.ico",
  }
};
export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Your onSSSe-stop destination for effortless and efficient product searches. {" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">Should I Buy !</span>
          </span>{" "}
        </h1>

        <div className="searchbox">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
          <input
            aria-label="Just type the product name"
            autoComplete="off"
            inputMode="search"
            placeholder="Just type the product name"
            type="search"

          />
        </div>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-20 mt-20 hover:bg-blue-500 transition"
          href="/dream">Search
        </Link>
        {/* <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Room</h3>
                <Image
                  alt="Original photo of a room with roomGPT.io"
                  src="/original-pic.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/generated-pic-2.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
