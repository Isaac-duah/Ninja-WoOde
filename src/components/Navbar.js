// src/components/NavBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Coach", path: "/coach" },
    { name: "Student", path: "/student" },
    { name: "Business", path: "/business" },
    { name: "Sports Wear", path: "/sports-wear" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-black shadow-mdbg-black shadow-md w-full m-0 p-0 rounded-none fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LEFT: Logo + Nav Links */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-xl font-bold text-gray-200">
              Ninja WoOde
            </Link>

            {/* Desktop Nav */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-sm space-x-8 hover:text-gray-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* RIGHT: Log in + Sign Up */}
          <div className="flex items-center space-x-4">
            <Link to="">
              <button className="text-white text-sm font-semibold">
                Log in
              </button>
            </Link>
            <Link to="">
              <button className="bg-white rounded-full px-4 py-2 text-sm font-semibold text-black">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
