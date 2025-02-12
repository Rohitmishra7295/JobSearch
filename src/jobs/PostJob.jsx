import React, { useState } from "react";

const PostJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    salary: "",
    jobType: "Full-time",
    applicationDeadline: "",
    companyWebsite: "",
    contactEmail: "",
    description: "",
    logo: null,
  });

  const [charCount, setCharCount] = useState(0);
  const [previewLogo, setPreviewLogo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "description") {
      setCharCount(value.length);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, logo: file });
      setPreviewLogo(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    // Here, you can integrate API call to post job
  };

  return (
    <div className="bg-gray-900">
    <div className="max-w-2xl mx-auto p-6 bg-gray-200 shadow-lg mt-11 rounded-lg">
      <h2 className="text-6xl text-gray-900 text-center font-bold mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Job Title */}
        <div>
          <label className="block font-medium">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Company */}
        <div>
          <label className="block font-medium">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block font-medium">Salary (Optional)</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block font-medium">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block font-medium">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Company Website */}
        <div>
          <label className="block font-medium">Company Website</label>
          <input
            type="url"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Contact Email */}
        <div>
          <label className="block font-medium">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block font-medium">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
          <p className="text-sm text-gray-500">{charCount}/500 characters</p>
        </div>

        {/* Upload Company Document*/}
        <div>
          <label className="block font-medium">Upload Company Document</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="w-full p-2 border rounded"
          />
          {previewLogo && (
            <div className="mt-2">
              <img
                src={previewLogo}
                alt="Company Logo Preview"
                className="w-24 h-24 object-cover rounded border"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>

      {/* Live Preview Section */}
      <div className="mt-6 p-4 border rounded-lg bg-gray-50">
        <h3 className="text-xl font-semibold">Live Preview</h3>
        <p className="font-bold text-lg">{formData.jobTitle || "Job Title"}</p>
        <p className="text-gray-700">
          {formData.company || "Company Name"} - {formData.location || "Location"}
        </p>
        <p className="text-sm">
          <strong>Type:</strong> {formData.jobType} | <strong>Salary:</strong>{" "}
          {formData.salary ? `$${formData.salary}` : "Not Disclosed"}
        </p>
        <p className="text-gray-600">{formData.description || "Job Description"}</p>
        {formData.applicationDeadline && (
          <p className="text-sm text-red-500">
            Apply before: {formData.applicationDeadline}
          </p>
        )}
      </div>
    </div>
    </div>
  );
};

export default PostJob;
