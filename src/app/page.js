import Image from "next/image";
import { Instagram } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800">
            John Smith <span className="inline-block">👋</span>
          </h1>
          <p className="text-gray-600 text-xl mt-2">Visual Designer</p>
          <p className="text-gray-500 mt-4 max-w-md">
            I'm a creative designer based in New York, and I'm very passionate
            and dedicated to my work.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2">
            <span>Say Hello</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
              />
            </svg>
          </button>
          <div className="flex space-x-4 mt-6">
            <Instagram
              className="text-gray-700 hover:text-black cursor-pointer"
              size={24}
            />
            <Instagram
              className="text-gray-700 hover:text-black cursor-pointer"
              size={24}
            />
            <Instagram
              className="text-gray-700 hover:text-black cursor-pointer"
              size={24}
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="rounded-full border-4 border-gray-300 p-2">
            <Image
              src="/profile.jpg"
              alt="John Smith"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
