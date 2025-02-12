import React, { useEffect, useState } from "react";
import { fetchUsers } from "../utils/fetchUsers"; // Import the function

const FeedBack = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await fetchUsers(); // Fetch from API or cache
      setUsers(fetchedUsers);
    };

    loadUsers();
  }, []);

  // Sample positive feedback messages
  const feedbackMessages = [
    "This job portal helped me land my dream job!",
    "Amazing platform with great job opportunities!",
    "Super easy to apply and get hired!",
    "Best job search experience I've ever had!",
    "Highly recommended for job seekers!",
    "Seamless application process and great UI!",
    "Top-notch support and job recommendations!",
    "Landed an amazing opportunity through this site!",
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-300 mb-10">
        What Our Users Say
      </h2>

      {/* Grid for mobile: Show only 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden max-w-7xl mx-auto">
        {users.slice(0, 4).map((user, index) => (
          <div
            key={user.login?.uuid || index} // Use index as fallback key
            className="bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-700 hover:scale-105 transition-transform"
          >
            <img
              src={user.picture?.large || "https://via.placeholder.com/96"}
              alt={user.name?.first || "User"}
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
            />
            <h3 className="text-lg font-semibold text-gray-100 mt-4">
              {user.name?.first} {user.name?.last}
            </h3>
            <p className="text-gray-400 text-sm">{user.email || "N/A"}</p>
            <p className="text-gray-300 mt-4 italic">
              "{feedbackMessages[index % feedbackMessages.length]}"
            </p>
          </div>
        ))}
      </div>

      {/* Grid for large screens: Show all 8 cards */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {users.map((user, index) => (
          <div
            key={user.login?.uuid || index}
            className="bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-700 hover:scale-105 transition-transform"
          >
            <img
              src={user.picture?.large || "https://via.placeholder.com/96"}
              alt={user.name?.first || "User"}
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
            />
            <h3 className="text-lg font-semibold text-gray-100 mt-4">
              {user.name?.first} {user.name?.last}
            </h3>
            <p className="text-gray-400 text-sm">{user.email || "N/A"}</p>
            <p className="text-gray-300 mt-4 italic">
              "{feedbackMessages[index % feedbackMessages.length]}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
