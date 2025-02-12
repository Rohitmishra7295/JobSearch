import React from "react";
import { FaGoogle, FaLightbulb, FaUsers, FaRocket, FaGlobe } from "react-icons/fa";

const AboutCard = () => {
  return (
    <div className="bg-gray-900 shadow-lg rounded-2xl p-6 max-w-md mx-auto text-center text-white">
      {/* Google Logo & Heading */}
      <div className="flex justify-center mb-4">
        <FaGoogle className="text-blue-400 text-4xl" />
      </div>
      <h2 className="text-2xl font-bold">About Google Careers</h2>
      
      {/* Description */}
      <p className="text-gray-300 mt-2">
        Explore career opportunities at Google! Whether you're a developer, designer, or marketer, 
        Google provides an innovative environment to grow and thrive in your career.
      </p>
      <p className="text-gray-300 mt-2">
        Join Google and work on cutting-edge technologies, from AI to cloud computing, shaping 
        the future of the digital world.
      </p>

      {/* Google Features Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureBox icon={FaLightbulb} title="Innovate" text="Work on AI, Cloud, and Quantum Computing." />
        <FeatureBox icon={FaUsers} title="Collaborate" text="Join a team of world-class engineers and thinkers." />
        <FeatureBox icon={FaRocket} title="Grow" text="Upskill with Google’s best learning programs." />
        <FeatureBox icon={FaGlobe} title="Impact" text="Make a difference in billions of people's lives." />
      </div>

      {/* Explore Jobs Button */}
      <div className="mt-6">
        <a 
          href="https://careers.google.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Explore Jobs
        </a>
      </div>
    </div>
  );
};

// Reusable Feature Box
const FeatureBox = ({ icon: Icon, title, text }) => (
  <div className="p-4 bg-gray-800 rounded-lg flex items-center">
    <Icon className="text-blue-400 text-3xl mr-3" />
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  </div>
);

export default AboutCard;
