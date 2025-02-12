import React, { useState } from "react";
import AboutCard from "./AboutCard";
import InfoSection from "./InfoSection";
import EmployeeCard from "./EmployeeCard";
import banner from "../assets/Profile/banner.jpg"
import Glogo from "../assets/Companies/Glogo.png"
import { Search } from "lucide-react";
import TabSwitcher from './TabSwitcher';

const companies = [
  "Google", "Amazon", "Netflix", "Microsoft", "Meta", "Apple", "Tesla", "Adobe", "IBM", "Intel",
  "Oracle", "Salesforce", "Twitter", "Snapchat", "Spotify", "Uber", "Airbnb", "Dropbox", "Slack", "LinkedIn"
];

const companyData = {
  Name: "Google",
  Overview: "Google is a multinational technology company specializing in internet-related services and products.",
  Industry: "Technology",
  Size: "150,000+ employees",
  Headquarters: "Mountain View, California, USA",
  Website: "https://www.google.com",
  Specialties: ["Search Engine", "Cloud Computing", "AI", "Advertising"],
};

const careerLinks = {
  Google: "https://careers.google.com/",
  Amazon: "https://www.amazon.jobs/",
  Netflix: "https://jobs.netflix.com/",
  Microsoft: "https://careers.microsoft.com/",
  Meta: "https://www.metacareers.com/",
  Apple: "https://www.apple.com/careers/",
  Tesla: "https://www.tesla.com/careers/",
  Adobe: "https://www.adobe.com/careers.html",
  IBM: "https://www.ibm.com/employment/",
  Intel: "https://www.intel.com/content/www/us/en/jobs/jobs-at-intel.html",
  Oracle: "https://www.oracle.com/careers/",
  Salesforce: "https://www.salesforce.com/company/careers/",
  Twitter: "https://careers.twitter.com/",
  Snapchat: "https://www.snap.com/en-US/jobs/",
  Spotify: "https://www.lifeatspotify.com/",
  Uber: "https://www.uber.com/us/en/careers/",
  Airbnb: "https://careers.airbnb.com/",
  Dropbox: "https://www.dropbox.com/jobs",
  Slack: "https://slack.com/careers",
  LinkedIn: "https://careers.linkedin.com/",
};

const companyLogos = {};
companies.forEach(company => {
  companyLogos[company] = `https://logo.clearbit.com/${company.toLowerCase()}.com`;
});

const Companies = () => {
  const [search, setSearch] = useState("");
  const [sortByEmployees, setSortByEmployees] = useState(false);

  let similar = companies
    .filter((company) => company !== companyData.Name && companyLogos[company])
    .map((name) => ({
      name,
      employees: Math.floor(Math.random() * 50000) + 5000,
      careerLink: careerLinks[name] || "#",
      logo: companyLogos[name],
      rating: (Math.random() * 2 + 3).toFixed(1),
    }))
    .filter((company) => company.name.toLowerCase().includes(search.toLowerCase()));

  if (sortByEmployees) {
    similar.sort((a, b) => b.employees - a.employees);
  }

  return (
    <div className="p-6 bg-gray-900 text-white mt-11 min-h-screen">
      <div className="mb-6 flex flex-col sm:flex-row mt-11 justify-between items-center gap-4 w-full">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 pl-10 w-full rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
   


      
      {/* Company Overview */}

      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <div className="h-20 bg-black w-full"><img src={banner} alt="Description" className="
        w-full  h-full"/>
       </div>
       
       <div className="relative -top-8 h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 ml-2 rounded-full overflow-hidden bg-white flex items-center justify-center">
          <img 
            src={Glogo} 
            alt="Logo" 
            className="h-full w-full object-cover  rounded-full"
          />
        </div>


       
        <h1 className="text-3xl font-bold mb-2 bg-[url('banner')] bg-cover">{companyData.Name}</h1>
        <p className="text-gray-400 mb-4">{companyData.Overview}</p>
        <p><strong>Industry:</strong> {companyData.Industry}</p>
        <p><strong>Company Size:</strong> {companyData.Size}</p>
        <p><strong>Headquarters:</strong> {companyData.Headquarters}</p>
        <p>
          <strong>Website:</strong>
          <a href={companyData.Website} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            {companyData.Website}
          </a>
        </p>
        <p><strong>Specialties:</strong> {companyData.Specialties.join(", ")}</p>
      </div>


      <TabSwitcher />


      {/* Similar Companies - Cards View */}
      <div className="p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Similar Companies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similar.map((company, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-full border border-gray-500" />
                <h3 className="text-lg font-semibold">{company.name}</h3>
              </div>
              <p className="text-gray-300 text-sm">{company.employees.toLocaleString()} Employees</p>
              <p className="text-yellow-400 text-sm">⭐ {company.rating} / 5</p>
              <a
                href={company.careerLink}
                className="text-blue-400 hover:underline block mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Careers →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;

