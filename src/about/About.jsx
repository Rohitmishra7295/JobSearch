import React, { useState, useEffect } from "react";

const About = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4&gender=female")
      .then((response) => response.json())
      .then((data) => {
        const userTestimonials = [
          { testimonial: "JobVolt made job searching easy!", rating: 5 },
          { testimonial: "Highly recommended! User-friendly and efficient.", rating: 5 },
          { testimonial: "I love how fast the application process is.", rating: 4 },
          { testimonial: "Great experience! Helped me land an amazing role!", rating: 4 },
        ];

        const testimonialsWithAvatars = userTestimonials.map((testimonial, index) => ({
          ...testimonial,
          name: `${data.results[index]?.name?.first} ${data.results[index]?.name?.last}`,
          avatar: data.results[index]?.picture?.large || "https://via.placeholder.com/150"
        }));

        setTestimonials(testimonialsWithAvatars);
      })
      .catch((error) => console.error("Error fetching user images:", error));
  }, []);

  return (
    <div className="min-h-screen mt-9 bg-gray-900 text-white p-6">
      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-700 text-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">About JobVolt</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your ultimate job search platform. Connecting professionals with top companies worldwide.
        </p>
      </section>

      {/* Stats Section */}
      <section className=" my-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold">500K+</h3>
            <p className="text-gray-400">Jobs Posted</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold">1M+</h3>
            <p className="text-gray-400">Users Registered</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold">50K+</h3>
            <p className="text-gray-400">Partner Companies</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">See JobVolt in Action</h2>
        <div className="flex justify-center">
          <iframe className="rounded-lg shadow-md w-full md:w-2/3 h-64 md:h-96" src="https://www.youtube.com/embed/ogfYd705cRs" title="JobVolt Demo" allowFullScreen></iframe>
        </div>
      </section>

      {/* Testimonials */}
      <section className="my-12 p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((user, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md flex items-center">
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="italic">"{user.testimonial}"</p>
                <h4 className="font-semibold mt-2">{user.name}</h4>
                <p className="text-yellow-400">⭐ {user.rating}/5</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="my-12 p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-700 p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">How do I apply for jobs?</summary>
            <p className="mt-2 text-gray-300">Simply create an account, browse jobs, and click 'Apply' on your preferred listing.</p>
          </details>
          <details className="bg-gray-700 p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">Is JobVolt free to use?</summary>
            <p className="mt-2 text-gray-300">Yes! JobVolt is completely free for job seekers.</p>
          </details>
          <details className="bg-gray-700 p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">Are the job listings verified?</summary>
            <p className="mt-2 text-gray-300">Absolutely! We only list jobs from trusted and verified employers.</p>
          </details>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-blue-700 text-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Find Your Dream Job Today!</h2>
        <p className="text-lg">Join JobVolt and take the next step in your career.</p>
        <a
          href="/signup"
          className="mt-4 inline-block bg-white text-blue-700 px-6 py-2 rounded-full font-semibold text-lg hover:bg-gray-300 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default About;
