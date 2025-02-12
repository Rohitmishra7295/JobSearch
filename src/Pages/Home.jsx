import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { Typewriter } from "react-simple-typewriter";
import Boy from "/src/assets/Boy.png"; 

const Home = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        
        {/* Left Side - Hero Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Find Your <span className="text-yellow-400">Dream Job</span> Today!
          </h1>

          {/* Subheading with Typewriter Effect */}
          <p className="mt-4 text-lg md:text-2xl font-medium opacity-90">
            Good life begins with a good company.
          </p>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-yellow-300">
            <Typewriter
              words={["Explore thousands of job opportunities with just one click."]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>

          {/* Search Bar with Glassmorphism Effect */}
          <div className="mt-8 flex w-full max-w-lg bg-white/20 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full px-4 py-3 text-black outline-none bg-transparent placeholder-gray-200"
            />
            <button className="bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-500 transition-all">
              Search
            </button>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex space-x-4 justify-center md:justify-start">
            <NavLink
              to="/find-job"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all"
              activeClassName="bg-gray-200"
            >
              Find Jobs
            </NavLink>
            <NavLink
              to="/post-job"
              className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-all"
              activeClassName="bg-gray-700"
            >
              Post a Job
            </NavLink>
          </div>
        </div>

        {/* Right Side - Boy Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Boy}
            alt="Job Seeker"
            className="w-80 md:w-96 drop-shadow-lg animate-fadeIn"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg className="w-full h-32" viewBox="0 0 1440 320">
          <path
            fill="white"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,165.3C672,181,768,171,864,170.7C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224V320H0V160Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Home;
