import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";  // Import the heart icon

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="backdrop-blur-md fixed w-full lg:px-20 md:px-10  top-0 border-b border-neutral-700/50 py-3 bg-white/70 shadow-sm z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">MyApp</Link>
        </div>

        <div className="hidden md:flex justify-center items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium underline"
                : "text-gray-900 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium underline"
                : "text-gray-900 hover:text-blue-600"
            }
          >
            About
          </NavLink>

          {/* Favorite List Link */}
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium underline"
                : "text-gray-900 hover:text-blue-600"
            }
          >
            <FaCartShopping className="text-xl" />
          </NavLink>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-gray-900 hover:text-blue-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-neutral-700/50 shadow-md">
          <div className="flex flex-col gap-4 p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-medium underline"
                  : "text-gray-900 hover:text-blue-600"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-medium underline"
                  : "text-gray-900 hover:text-blue-600"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            {/* Mobile Favorite List Link */}
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-medium underline"
                  : "text-gray-900 hover:text-blue-600"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FaCartShopping className="text-xl" />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
