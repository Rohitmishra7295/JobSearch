import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar2.png"; // Ensure this path is correct
import girl from "../assets/girl.png"; // Ensure this path is correct

const HowWork = () => {
  return (
    <div className="min-h-screen bg-gray-800 p-8 flex justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row bg-gray-900 shadow-xl rounded-lg space-y-12 md:space-y-0 p-8">
        {/* Left Side - Girl Image and Avatar */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative">
          {/* Girl Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img
              src={girl}
              alt="Girl"
              className="w-full md:w-96 h-[500px] md:h-[700px] drop-shadow-lg animate-fadeIn"
            />
          </motion.div>

          {/* Avatar Card (Fixed Position) */}
<div className="absolute left-2/3 transform translate-x-[35px] top-[25%] md:top-[36%] flex flex-col items-center ">
  <motion.div
    className="flex flex-col items-center p-2 rounded-lg shadow-lg border-2 border-gray-700 bg-gray-800"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 1.5 }}
  >
    <img
      src={avatar}
      alt="Avatar"
      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full border-2 border-gray-200 shadow-md mb-1"
    />
    <h3 className="text-xs font-semibold text-gray-100">Profile</h3>
    <p className="text-[10px] text-gray-400">70% Done</p>
  </motion.div>
</div>

</div>

        {/* Right Side - Functionality Cards */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          {/* Main Title */}
          <motion.h2
            className="text-4xl font-bold text-center text-gray-100 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            How it Works
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-lg text-center text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Effortlessly navigate through the process and land your dream job.
          </motion.p>

          {/* Process Steps */}
          {[
            {
              title: "Build Your Resume",
              description: "Create a standout resume with your skills.",
              icon: "📝",
            },
            {
              title: "Search for Jobs",
              description: "Find and apply for jobs that match your skills.",
              icon: "💼",
            },
            {
              title: "Get Hired",
              description: "Connect with employers and start your new job.",
              icon: "🎉",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start bg-gray-700 p-6 rounded-lg shadow-md transition-all hover:bg-gray-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">{step.icon}</span>
                <h3 className="text-2xl font-semibold text-gray-100">
                  {step.title}
                </h3>
              </div>
              <p className="text-md text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWork;
