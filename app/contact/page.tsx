"use client";

import { useState } from "react";

type ValidationErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  package?: string;
  eventDate?: string;
  addons?: string;
  eventDetails?: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    package: "",
    eventDate: "",
    addons: "",
    eventDetails: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [, setLoading] = useState(false);
  const [, setMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Full Name validation
    if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters long";
    }
    if (!/^[a-zA-Z\s]*$/.test(formData.fullName)) {
      newErrors.fullName = "Name should only contain letters and spaces";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (minimum 10 digits)";
    }

    // Package validation
    if (!formData.package) {
      newErrors.package = "Please select a package";
    }

    // Event Date validation
    if (!formData.eventDate) {
      newErrors.eventDate = "Please select an event date";
    } else {
      const selectedDate = new Date(formData.eventDate);
      const today = new Date();
      if (selectedDate < today) {
        newErrors.eventDate = "Event date cannot be in the past";
      }
    }

    // Add-ons validation
    if (!formData.addons) {
      newErrors.addons = "Please select an add-on option";
    }

    // Event Details validation
    if (formData.eventDetails.trim().length < 10) {
      newErrors.eventDetails =
        "Please provide more details about your event (minimum 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setMessage("Your message has been sent!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          package: "",
          eventDate: "",
          addons: "",
          eventDetails: "",
        });
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  const renderError = (fieldName: keyof ValidationErrors) => {
    return errors[fieldName] ? (
      <p className="text-red-500 text-sm mt-1">{errors[fieldName]}</p>
    ) : null;
  };

  return (
    <div className="max-w-3xl mx-auto p-6 md:mt-20">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold font-museo-moderno md:text-6xl">
          Contact Us
        </h1>
        <p className="mt-2 md:text-lg md:mt-4">
          Thank you for considering us for your special event! We&apos;re
          excited to help make it unforgettable.
        </p>
        <p className="mt-2 md:text-lg">
          To book your event or ask any questions, simply fill out the form
          below, and we&apos;ll be in touch soon!
        </p>
      </header>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
        noValidate
      >
        {/* Full Name */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded-lg ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {renderError("fullName")}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {renderError("email")}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded-lg ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {renderError("phone")}
        </div>

        {/* Package Selection */}
        <div>
          <label className="block font-medium">Select a Package</label>
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded-lg ${
              errors.package ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Choose a Package</option>
            <option value="standard">Standard Package</option>
            <option value="essential">Essential Package</option>
            <option value="premium">Premium Package</option>
          </select>
          {renderError("package")}
        </div>

        {/* Event Date Picker */}
        <div>
          <label className="block font-medium">Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded-lg ${
              errors.eventDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {renderError("eventDate")}
        </div>

        {/* Add-ons Selection */}
        <div>
          <label className="block font-medium">Add-ons</label>
          <select
            name="addons"
            value={formData.addons}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded-lg ${
              errors.addons ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Choose Add-ons</option>
            <option value="">None</option>
            <option value="additional-hours">Additional Hours</option>
            <option value="colored-backdrop">Colored Backdrop</option>
            <option value="custom-flower-walls">Custom Flower Walls</option>
          </select>
          {renderError("addons")}
        </div>

        {/* Event Details */}
        <div>
          <label className="block font-medium">Tell us about your event</label>
          <textarea
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleChange}
            rows={4}
            className={`w-full p-2 border rounded-lg ${
              errors.eventDetails ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {renderError("eventDetails")}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-black font-bold py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
