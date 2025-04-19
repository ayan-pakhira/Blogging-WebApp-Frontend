// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaEdit, FaSignInAlt, FaUserPlus } from "react-icons/fa";


const Navbar = () => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed top-0 w-full z-50">
      <Link to="/" className="text-2xl font-bold text-gray-800">
        BlogSphere
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to="/register"
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
        >
          <FaUserPlus className="text-lg" />
          <span className="hidden md:inline">Register</span>
        </Link>

        <Link
          to="/login"
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
        >
          <FaSignInAlt className="text-lg" />
          <span className="hidden md:inline">Login</span>
        </Link>

        <button
          onClick={() => alert("Open Write Blog Modal")}
          className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
        >
          <FaEdit className="text-lg" />
          <span className="hidden md:inline">Write a Blog</span>
        </button>

        {/* Human Icon Dropdown */}
        <div className="relative">
            <FaUserCircle
              className="text-3xl text-gray-700 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-50">
                {/* Dropdown menu for logged in user will be shown here */}
                <p className="block px-4 py-2 text-sm text-gray-700">User Details</p>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Logout
                </button>
              </div>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
