"use client"
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email or store submission)
    alert('Your message has been sent!');
  };

  return (
    <div>
      {/* Contact Introduction Section */}
      <section className="py-20 px-28">
        <h2 className="text-4xl font-bold text-black text-center mb-6">Contact Us</h2>
        <p className="text-xl text-gray-700 text-center mb-6">
          Have a question or want to get in touch? We would love to hear from you! Fill out the form below or reach us through other contact details.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-28">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-950 text-white py-3 px-6 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h3 className="text-3xl text-black font-bold mb-6">Contact Details</h3>
        <div className="text-lg text-gray-700">
          <p>Email: contact@yourblog.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Blog St., Blog City, Country</p>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 text-center">
        <h3 className="text-3xl font-bold text-black mb-4">Follow Us</h3>
        <div className="flex justify-center gap-8">
          <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800">Facebook</a>
          <a href="https://twitter.com" target="_blank" className="text-blue-400 hover:text-blue-600">Twitter</a>
          <a href="https://linkedin.com" target="_blank" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
