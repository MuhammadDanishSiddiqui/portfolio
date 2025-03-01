"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold text-gray-800">M.Danish</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`md:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li className="text-center">
              <Link href="#home" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li className="text-center">
              <Link href="#about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="#skills"
                className="text-gray-700 hover:text-blue-600"
              >
                Skills
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="#resume"
                className="text-gray-700 hover:text-blue-600"
              >
                Resume
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
