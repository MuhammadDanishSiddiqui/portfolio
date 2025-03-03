"use client";
import { useState } from "react";
import Link from "next/link";
import { AlignRight, Menu, X } from "lucide-react";
import { menus } from "../constants/header";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white py-4 px-2 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold cursor-pointer">M. DANISH</h1>
          </div>
          <div>
            <div className="hidden md:block">
              {menus?.map(({ item, link }, index) => {
                return (
                  <Link
                    key={index}
                    href={link}
                    className="pl-5 text-md text-gray-500 hover:text-black hover:underline"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
            <div className="block md:hidden">
              <AlignRight size={30} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
      </header>
      <div
        className={`bg-black fixed top-0 w-full min-h-screen  py-4 px-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold cursor-pointer text-white">
            Danish
          </h1>
          <div>
            <X
              size={30}
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          {menus?.map(({ item, link }, index) => {
            return (
              <Link
                key={index}
                href={link}
                className="py-2 text-md text-white cursor-pointer hover:text-black"
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
