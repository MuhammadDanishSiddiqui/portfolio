import Image from "next/image";
import profileImage from "../assets/images/profile.jpeg";
import { ArrowDown, Mouse } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="h-[calc(100vh-64px)] bg-gray-100">
      <div className="container mx-auto flex items-center justify-center h-full">
        <div className="w-[50%]">
          <h1 className="text-2xl font-bold text-black">Muhammad Danish ✋</h1>
          <h2 className="text-3xl my-2 text-black">MERN Stack Developer</h2>
          <p className="text-gray-600">
            I'm a MERN Stack Developer with over 3 years of experience in
            building full-stack web and mobile applications.
          </p>
          <button className="bg-gray-200 flex items-center p-2 rounded-md cursor-pointer mt-4">
            <Mouse />
            <span className="mx-2">Scroll down</span>
            <ArrowDown size={20} />
          </button>
        </div>
        <div className="w-[50%] flex items-center justify-end">
          <Image
            src={profileImage}
            className="w-[250px] h-[250px] rounded-full object"
          />
        </div>
      </div>
    </div>
  );
}
