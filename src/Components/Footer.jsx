import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle email subscription
  const handleSubscribe = async () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    try {
      // Simulating API request (You can replace with actual API call)
      localStorage.setItem("subscribedEmail", email);
      setMessage("✅ Subscription successful! Check your inbox.");
      setEmail(""); // Clear input after success
    } catch (error) {
      setMessage("❌ Failed to subscribe. Please try again.");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">JobVault</h2>
            <p className="mt-3 text-gray-300">
              Your gateway to the best career opportunities. Find jobs that fit your passion!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/find-job" className="hover:text-yellow-400 transition">Find Jobs</Link></li>
              <li><Link to="/companies" className="hover:text-yellow-400 transition">Top Companies</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 text-xl">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 text-xl">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 text-xl">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription with Validation & Messages */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Subscribe to Newsletter</h3>
            <p className="text-gray-300 mb-2">Stay updated with the latest job postings.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full rounded-l bg-gray-800 text-white outline-none"
              />
              <button
                className="bg-yellow-400 px-4 py-2 rounded-r text-black font-semibold hover:bg-yellow-500 transition"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
            {message && <p className="mt-2 text-sm">{message}</p>}
          </div>
        </div>
      
        {/* Copyright & Legal */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} JobVault. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-yellow-400 transition"> Terms of Service </Link> <br />
            <Link to="social" className="hover:text-yellow-400 transition">Developed by @ROHITMISHRA</Link>
          </p>
  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
