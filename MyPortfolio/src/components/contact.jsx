import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast"; // Changed from ToastContainer to Toaster

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to validate email format
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    else if (!validateEmail(formData.email)) formErrors.email = "Invalid email address.";
    if (!formData.message) formErrors.message = "Message is required.";

    // If there are validation errors, set errors and prevent form submission
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Send email if no validation errors
    emailjs
      .send(
        "service_hlmt87n", // Replace with your EmailJS service ID
        "template_cyg92zv", // Replace with your EmailJS template ID
        formData,
        "p5xAc_BvQzGxcJAs_" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
          setErrors({}); // Clear errors
        },
        (error) => {
          toast.error("Failed to send message, please try again later.");
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" }); // Clear error message when user starts typing
  };

  return (
    <div className="text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 underline underline-offset-2">Get in Touch</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto border border-green-600"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600 ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600 ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600 ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder="Your Message"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md font-medium hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Send Message
        </button>
      </form>

      <Toaster /> {/* This renders the toasts */}
    </div>
  );
};

export default Contact;
