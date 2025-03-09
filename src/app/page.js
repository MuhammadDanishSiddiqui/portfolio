import Image from "next/image";
import profileImage from "../assets/images/avatr.jpg";
import {
  ArrowDown,
  Award,
  CircleCheck,
  Headset,
  Mouse,
  StickyNote,
} from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <div className="py-8 lg:py-0 min-h-[calc(100vh-64px)] bg-gray-100">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center flex-wrap min-h-[calc(100vh-64px)] px-4">
          <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start">
            <h1 className="text-2xl font-bold text-black">
              Muhammad Danish ✋
            </h1>
            <h2 className="text-3xl my-2 text-black">MERN Stack Developer</h2>
            <p className="text-gray-600 text-center lg:text-start">
              I'm a MERN Stack Developer with over 3 years of experience in
              building full-stack web and mobile applications.
            </p>
            <button className="bg-gray-200 flex items-center p-2 rounded-md cursor-pointer mt-4">
              <Mouse />
              <span className="mx-2">Scroll down</span>
              <ArrowDown size={20} />
            </button>
          </div>
          <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-end mb-8 lg:mb-0">
            <Image
              src={profileImage}
              className="w-[250px] h-[250px] rounded-full object"
            />
          </div>
        </div>
        <div
          id="about"
          className="py-8 lg:py-0 min-h-[calc(100vh-64px)] bg-gray-100"
        >
          <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black">About Me</h2>
              <p className="text-gray-600 text-sm">Get to Know More About Me</p>
            </div>
            <div className="flex justify-center items-center flex-wrap w-full mt-8">
              <div className="w-full lg:w-[50%] flex justify-center lg:justify-start mb-8 lg:mb-0">
                <Image
                  src={profileImage}
                  className="w-[300px] h-[300px] object rounded-xl"
                />
              </div>
              <div className="w-full lg:w-[50%]">
                <div className="flex justify-between flex-wrap">
                  <div className="bg-white w-full md:w-[32%] mb-4 md:mb-0 rounded-md flex flex-col items-center p-4 shadow-md">
                    <Award />
                    <h3 className="text-md text-black my-1 font-semibold">
                      Experience
                    </h3>
                    <p className="text-sm text-gray-600">3+ Years</p>
                  </div>
                  <div className="bg-white w-full md:w-[32%] mb-4 md:mb-0 rounded-md flex flex-col items-center p-4 shadow-md">
                    <CircleCheck />
                    <h3 className="text-md text-black my-1 font-semibold">
                      Completed
                    </h3>
                    <p className="text-sm text-gray-600">20+ Projects</p>
                  </div>
                  <div className="bg-white w-full md:w-[32%] rounded-md flex flex-col items-center p-4 shadow-md">
                    <Headset />
                    <h3 className="text-md text-black my-1 font-semibold">
                      Support
                    </h3>
                    <p className="text-sm text-gray-600">24/7 Availability</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col items-center lg:items-start">
                  <p className="text-gray-700 text-md text-center lg:text-start">
                    I am a passionate MERN Stack Developer with a strong
                    background in building efficient and scalable web and mobile
                    applications. With over 3 years of experience, I specialize
                    in crafting high-performance solutions that meet business
                    needs.
                  </p>
                  <div className="mt-4">
                    <button className="flex items-center bg-black text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-gray-800 text-sm cursor-pointer">
                      Download CV
                      <StickyNote size={20} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
