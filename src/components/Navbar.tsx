"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/casestudies" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3 flex justify-between items-center h-14 md:h-16">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/">
            <Image
              src="/assets/Logo.png"
              alt="Gloryville Logo"
              width={120}
              height={40}
              className="w-auto h-8 md:h-10 object-contain transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-yellow-500">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition text-sm">
            Contact Us
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-700 font-medium hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
