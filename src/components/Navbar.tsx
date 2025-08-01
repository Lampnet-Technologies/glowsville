"use client";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center h-12 md:h-14">
        <Link href="/">
          <Image
            src="/assets/Logo.png"
            alt="Gloryville Logo"
            width={120}
            height={40}
            className="w-auto h-8 md:h-10 object-contain transition-transform duration-200 hover:scale-105"
          />
        </Link>
      </div>
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-yellow-500">About Us</li>
        <li className="cursor-pointer hover:text-yellow-500">Services</li>
        <li className="cursor-pointer hover:text-yellow-500">Case Studies</li>
        <li className="cursor-pointer hover:text-yellow-500">Insights</li>
      </ul>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition text-sm">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
