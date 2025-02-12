import React from "react";
import Marquee from "react-fast-marquee";
import { Briefcase, Home, Code, Building2, GraduationCap, Handshake, Globe, Landmark } from "lucide-react";

const jobCategories = [
  { title: "Government Jobs", description: "Secure and stable government jobs.", Icon: Building2, color: "text-blue-600" },
  { title: "IT Software", description: "Latest IT and software openings.", Icon: Code, color: "text-green-600" },
  { title: "Contingent Jobs", description: "Temporary and contract-based jobs.", Icon: Briefcase, color: "text-yellow-600" },
  { title: "Work From Home", description: "Remote job opportunities.", Icon: Home, color: "text-purple-600" },
  { title: "Part Time Jobs", description: "Flexible part-time jobs.", Icon: Handshake, color: "text-orange-600" },
  { title: "Bank Jobs", description: "Banking and financial careers.", Icon: Landmark, color: "text-indigo-600" },
  { title: "Internships", description: "Hands-on experience in various fields.", Icon: GraduationCap, color: "text-teal-600" },
  { title: "Walk-in Jobs", description: "Immediate hiring opportunities.", Icon: Briefcase, color: "text-red-600" },
  { title: "Remote Jobs", description: "Work from anywhere jobs.", Icon: Globe, color: "text-cyan-600" },
];

const JobCard = ({ title, description, Icon, color }) => (
  <div className="bg-gray-300 shadow-md rounded-lg p-4 md:p-5 flex items-center gap-3 border border-gray-200 hover:shadow-lg transition-all w-[160px] md:w-[200px] mt-16">
    <Icon className={`${color} w-7 h-7 md:w-9 md:h-9`} />
    <div>
      <h3 className="text-sm md:text-base font-semibold text-gray-800">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Jobsforu = () => (
  <div className="min-h-[220px] md:min-h-[280px] bg-gray-900 py-6 md:py-8">
    <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-300  mb-6">Job Openings Across Various Fields</h2>
    
    <Marquee gradient={false} speed={50} pauseOnHover={true} className="px-6 md:px-12">
      <div className="flex gap-10 md:gap-14" id="jobforyou">
        {jobCategories.map(({ title, description, Icon, color }, index) => (
          <JobCard key={index} title={title} description={description} Icon={Icon} color={color} />
        ))}
      </div>
    </Marquee>
  </div>
);

export default Jobsforu;
