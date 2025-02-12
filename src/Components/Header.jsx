import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu when a link is clicked on mobile
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          JobVault
        </Link>

        {/* Desktop Navigation - Centered Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/find-job" className="hover:text-gray-200">Jobs</Link>
          <Link to="/companies" className="hover:text-gray-200">Companies</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
        </nav>

        {/* Login and Signup Buttons at the Right - Desktop view only */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Link to="/login" className="px-4 py-2 bg-white text-blue-600 rounded-lg">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-gray-800 text-white rounded-lg">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-700 p-6 space-y-6 w-full">
          {/* Navigation Links in the Middle */}
          <div className="space-y-4 text-center w-full">
            <Link to="/" onClick={handleLinkClick} className="hover:text-gray-200 text-xl block w-full">Home</Link>
            <Link to="/find-job" onClick={handleLinkClick} className="hover:text-gray-200 text-xl block w-full">Jobs</Link>
            <Link to="/companies" onClick={handleLinkClick} className="hover:text-gray-200 text-xl block w-full">Companies</Link>
            <Link to="/about" onClick={handleLinkClick} className="hover:text-gray-200 text-xl block w-full">About</Link>
          </div>

          {/* Login and Signup Buttons at the Bottom */}
          <div className="mt-6 space-x-4 w-full flex justify-center">
            <Link to="/login" onClick={handleLinkClick} className="px-4 py-2 bg-white text-blue-600 rounded-lg text-lg block w-full text-center">Login</Link>
            <Link to="/signup" onClick={handleLinkClick} className="px-4 py-2 bg-gray-800 text-white rounded-lg text-lg block w-full text-center">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
