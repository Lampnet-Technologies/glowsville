"use client";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      <div className="text-lg font-bold text-yellow-600">Glowsville</div>
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
