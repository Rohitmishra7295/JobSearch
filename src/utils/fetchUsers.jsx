// src/utils/fetchUsers.js
export const fetchUsers = async () => {
    const cachedUsers = localStorage.getItem("feedbackUsers");
  
    if (cachedUsers) {
      return JSON.parse(cachedUsers); // Return cached users if available
    }
  
    try {
      const response = await fetch("https://randomuser.me/api/?results=8");
      const data = await response.json();
      localStorage.setItem("feedbackUsers", JSON.stringify(data.results)); // Cache data
      return data.results;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };
  