import React from "react";
import { FaGoogle, FaUsers, FaCheckCircle, FaBell, FaRocket, FaStar } from "react-icons/fa";

const InfoSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Your Future at Google Starts Here!
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Join the world's most innovative company. Explore exciting career opportunities at Google and shape the future.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <StatBox icon={FaGoogle} color="text-blue-400" title="10,000+ Jobs" text="Find opportunities at Google in AI, Cloud, and more." />
          <StatBox icon={FaUsers} color="text-green-400" title="Top Talent" text="Work with the brightest minds in the industry." />
          <StatBox icon={FaCheckCircle} color="text-yellow-400" title="Fast Hiring" text="Seamless application process for Google careers." />
        </div>

        {/* Why Choose Google Section */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold text-white text-center">Why Work at Google?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <FeatureBox icon={FaBell} title="Innovation Hub" text="Be part of groundbreaking technology advancements." />
            <FeatureBox icon={FaRocket} title="Growth & Learning" text="Upskill with Google’s world-class training programs." />
            <FeatureBox icon={FaStar} title="Work-Life Balance" text="Enjoy flexible work culture and amazing perks." />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold text-white text-center">What Googlers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Testimonial name="Sundar P." text="Google is not a conventional company, and we don’t intend to become one!" />
            <Testimonial name="Jane D." text="Working at Google has been a dream come true. The impact we make is incredible!" />
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 text-center bg-gray-800 shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-white">Get Google Job Updates</h3>
          <p className="text-gray-300 mt-2">Stay updated with the latest Google job openings directly in your inbox.</p>
          <div className="mt-4 flex justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 border rounded-l-lg w-64 text-black" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Stat Box
const StatBox = ({ icon: Icon, color, title, text }) => (
  <div className="p-6 bg-gray-800 shadow-lg rounded-xl text-center">
    <Icon className={`${color} text-4xl mx-auto`} />
    <h3 className="text-xl font-semibold mt-3 text-white">{title}</h3>
    <p className="text-gray-400 mt-2">{text}</p>
  </div>
);

// Reusable Feature Box
const FeatureBox = ({ icon: Icon, title, text }) => (
  <div className="p-4 bg-gray-800 shadow-md rounded-lg flex items-center">
    <Icon className="text-blue-400 text-3xl mr-4" />
    <div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-gray-400">{text}</p>
    </div>
  </div>
);

// Reusable Testimonial Box
const Testimonial = ({ name, text }) => (
  <div className="p-6 bg-gray-800 shadow-md rounded-lg">
    <p className="text-gray-300 italic">“{text}”</p>
    <h4 className="text-lg font-semibold mt-3 text-blue-400">- {name}</h4>
  </div>
);

export default InfoSection;
