import React from "react";
import { Megaphone, Layout, PenTool, Database, Wallet, Users } from "lucide-react";

const BrowseJobs = () => {
  const JobType = [
    { title: "Web Developer", description: "Build and maintain websites for clients", icon: Layout, jobsPosted: "2k+ new jobs posted", color: "text-blue-600" },
    { title: "UI-UX Designer", description: "Design user interfaces and enhance user experience", icon: PenTool, jobsPosted: "800+ new jobs posted", color: "text-green-600" },
    { title: "Content Writing", description: "Write and edit content for various platforms", icon: Megaphone, jobsPosted: "1.5k+ new jobs posted", color: "text-yellow-600" },
    { title: "Data Entry", description: "Input data into systems accurately and efficiently", icon: Database, jobsPosted: "1k+ new jobs posted", color: "text-red-600" },
    { title: "Human Resource", description: "Recruit, manage, and support company employees", icon: Users, jobsPosted: "600+ new jobs posted", color: "text-pink-600" },
    { title: "Software Engineer", description: "Develop and maintain software applications", icon: Layout, jobsPosted: "1k+ new jobs posted", color: "text-teal-600" },
  ];

  const JobCard = ({ title, description, icon: Icon, jobsPosted, color }) => (
    <div className="bg-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl hover:border-4 hover:border-yellow-600 transition-all w-full md:w-[180px] lg:w-[200px] xl:w-[220px] mt-16 h-[260px]">
      <Icon className={`${color} w-12 h-12`} />
      <h3 className="text-sm font-semibold text-gray-800 mt-4">{title}</h3>
      <p className="text-xs text-gray-600 mt-2">{description}</p>
      <span className="text-xs font-medium text-gray-500 mt-3">{jobsPosted}</span>
    </div>
  );

  return (
    <div className="min-h-[300px] bg-gray-900 py-8  px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-300 mb-6">
        Browse Jobs
      </h2>
      <div className="overflow-x-auto md:overflow-visible">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
          {JobType.map((job, index) => (
            <div key={index} className="flex justify-center">
              <JobCard {...job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
