import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", phone: "", contactMethod: "email" });
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message || !formData.phone) {
      setResponseMessage("⚠️ Please fill in all fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setResponseMessage("⚠️ Please enter a valid email address.");
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setResponseMessage("⚠️ Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setResponseMessage("");
    
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setResponseMessage("✅ Thank you for reaching out! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "", phone: "", contactMethod: "email" });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-400">Contact Us</h2>
        <p className="text-gray-400 text-center mt-2">We would love to hear from you!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Get In Touch</h3>
            <p className="flex items-center gap-3 mb-2"><FaPhone /> +91 98765 43210</p>
            <p className="flex items-center gap-3 mb-2"><FaEnvelope /> support@jobvault.com</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt /> 123, Job Street, Bangalore, India</p>
            
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-blue-400 text-xl hover:text-blue-500"><FaFacebook /></a>
              <a href="#" className="text-blue-300 text-xl hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="text-blue-500 text-xl hover:text-blue-600"><FaLinkedin /></a>
              <a href="#" className="text-green-500 text-xl hover:text-green-600"><FaWhatsapp /></a>
              <a href="#" className="text-blue-400 text-xl hover:text-blue-500"><FaTelegram /></a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Send Us a Message</h3>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-2 bg-gray-700 text-white rounded mb-3 outline-none" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-2 bg-gray-700 text-white rounded mb-3 outline-none" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" className="w-full p-2 bg-gray-700 text-white rounded mb-3 outline-none" required />
            <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded mb-3 outline-none">
              <option value="email">Contact via Email</option>
              <option value="phone">Contact via Phone</option>
              <option value="whatsapp">Contact via WhatsApp</option>
              <option value="telegram">Contact via Telegram</option>
            </select>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full p-2 bg-gray-700 text-white rounded mb-3 outline-none" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-2 bg-gray-700 text-white rounded mb-3 outline-none" rows="4" required></textarea>
            
            <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition flex items-center justify-center">
              {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Send Message"}
            </button>
            {responseMessage && <p className="text-green-400 mt-2 text-sm">{responseMessage}</p>}
          </form>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-yellow-400 text-center mb-4">Our Location</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <iframe title="Google Map" className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.599763280636!2d77.59456207488906!3d12.971598810711998" allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
