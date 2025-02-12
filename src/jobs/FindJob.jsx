import React, { useState } from "react";
import { FaRegBookmark, FaBookmark, FaUpload } from "react-icons/fa";


const FindJob = () => {
  const jobListings = [
    { id: 1, title: "Software Engineer", company: "Tata Consultancy Services", location: "Mumbai", type: "Full-Time", description: "Develop and maintain software applications for various industries." },
    { id: 2, title: "Data Scientist", company: "Hindustan Unilever", location: "Bangalore", type: "Full-Time", description: "Analyze data to extract insights and build predictive models." },
    { id: 3, title: "Web Developer", company: "Infosys", location: "Chennai", type: "Full-Time", description: "Build and maintain websites and web applications." },
    { id: 4, title: "Marketing Manager", company: "Reliance Industries", location: "Delhi", type: "Full-Time", description: "Develop and execute marketing strategies to promote products and services." },
    { id: 5, title: "Financial Analyst", company: "ICICI Bank", location: "Hyderabad", type: "Full-Time", description: "Analyze financial data and provide recommendations to improve financial performance." },
    { id: 6, title: "HR Manager", company: "Wipro", location: "Kolkata", type: "Full-Time", description: "Manage human resources functions, including recruitment, training, and employee relations." },
    { id: 7, title: "Sales Manager", company: "Maruti Suzuki", location: "Pune", type: "Full-Time", description: "Lead and manage sales teams to achieve sales targets." },
    { id: 8, title: "Project Manager", company: "Larsen & Toubro", location: "Ahmedabad", type: "Full-Time", description: "Plan, execute, and manage projects within budget and timeline." },
    { id: 9, title: "UX Designer", company: "Flipkart", location: "Gurgaon", type: "Full-Time", description: "Design user interfaces and user experiences for digital products." },
    { id: 10, title: "Content Writer", company: "Times of India", location: "Noida", type: "Full-Time", description: "Create engaging and informative content for various platforms." },
    { id: 11, title: "Network Engineer", company: "Bharti Airtel", location: "Jaipur", type: "Full-Time", description: "Design, implement, and maintain computer networks." },
    { id: 12, title: "Mechanical Engineer", company: "Mahindra & Mahindra", location: "Nagpur", type: "Full-Time", description: "Design, develop, and test mechanical systems and components." },
    { id: 13, title: "Electrical Engineer", company: "Adani Group", location: "Indore", type: "Full-Time", description: "Design, develop, and test electrical systems and components." },
    { id: 14, title: "Civil Engineer", company: "DLF", location: "Chandigarh", type: "Full-Time", description: "Design, construct, and maintain infrastructure projects." },
    { id: 15, title: "Biomedical Engineer", company: "Apollo Hospitals", location: "Chennai", type: "Full-Time", description: "Develop and maintain medical equipment and devices." },
    { id: 16, title: "Chemical Engineer", company: "Reliance Industries", location: "Vadodara", type: "Full-Time", description: "Design and operate chemical processes and plants." },
    { id: 17, title: "Environmental Scientist", company: "Centre for Science and Environment", location: "Delhi", type: "Full-Time", description: "Study and protect the environment through research and analysis." },
    { id: 18, title: "Pharmacist", company: "Sun Pharmaceuticals", location: "Mumbai", type: "Full-Time", description: "Dispense medications and provide pharmaceutical care to patients." },
    { id: 19, title: "Veterinarian", company: "CVC India", location: "Bangalore", type: "Full-Time", description: "Provide medical care to animals." },
    { id: 20, title: "Architect", company: "Hafeez Contractor", location: "Mumbai", type: "Full-Time", description: "Design and plan buildings and other structures." },
  ];
  
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [jobTypeFilter, setJobTypeFilter] = useState("");
    const [companyFilter, setCompanyFilter] = useState("");
    const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
    const [resume, setResume] = useState(null);
  
    const handleBookmark = (jobId) => {
      setBookmarkedJobs((prev) =>
        prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
      );
    };
  
    const handleResumeUpload = (event) => {
      setResume(event.target.files[0]);
    };
  
    const filteredJobs = jobListings.filter(
      (job) =>
        (searchTerm === "" ||
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (locationFilter === "" || job.location === locationFilter) &&
        (jobTypeFilter === "" || job.type === jobTypeFilter) &&
        (companyFilter === "" || job.company.toLowerCase().includes(companyFilter.toLowerCase()))
    );
  
    return (
      <section className="flex flex-col items-center min-h-screen bg-gray-900 py-12 px-4">
        <div className="w-full max-w-6xl bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-200 text-center">Find Your Dream Job</h2>
          <p className="text-gray-200 text-center mt-2">Search and apply for the best jobs available.</p>
  
          {/* Search Filters */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <input type="text" placeholder="Search for jobs..." className="input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <input type="text" placeholder="Search by company..." className="input" value={companyFilter} onChange={(e) => setCompanyFilter(e.target.value)} />
            <select className="input" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
              <option value="">All Locations</option>
              {[...new Set(jobListings.map((job) => job.location))].map((location) => <option key={location} value={location}>{location}</option>)}
            </select>
            <select className="input" value={jobTypeFilter} onChange={(e) => setJobTypeFilter(e.target.value)}>
              <option value="">All Job Types</option>
              {[...new Set(jobListings.map((job) => job.type))].map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
  
          {/* Job Listings */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-lg shadow p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600">{job.company} - {job.location}</p>
                <span className="mt-2 inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">{job.type}</span>
                <p className="text-gray-500 mt-2 flex-grow">{job.description}</p>
                <div className="mt-4 flex justify-between">
                  <button className="btn">Apply</button>
                  <button className="bookmark-btn" onClick={() => handleBookmark(job.id)}>
                    {bookmarkedJobs.includes(job.id) ? <FaBookmark className="text-yellow-500" /> : <FaRegBookmark />}
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          {/* Upload Resume */}
          <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-900">Upload Your Resume</h3>
            <label className="flex items-center gap-3 mt-3 cursor-pointer">
              <FaUpload className="text-gray-600" />
              <span className="text-gray-600">Choose a file</span>
              <input type="file" className="hidden" onChange={handleResumeUpload} />
            </label>
            {resume && <p className="text-sm text-gray-500 mt-2">Uploaded: {resume.name}</p>}
          </div>
  
          {/* Bookmarked Jobs */}
          {bookmarkedJobs.length > 0 && (
            <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900">Saved Jobs</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                {bookmarkedJobs.map((id) => {
                  const job = jobListings.find((job) => job.id === id);
                  return <li key={id}>{job?.title} at {job?.company}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default FindJob;
  