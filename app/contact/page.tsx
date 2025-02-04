"use client";

import { useState } from "react";

export default function ContactPage() {
  //TODO: form vaildation
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    package: "",
    eventDate: "",
    addons: "",
    eventDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold font-museo-moderno">Contact Us</h1>
        <p className=" mt-2">
          Thank you for considering us for your special event! We’re excited to
          help make it unforgettable.
        </p>
        <p className="mt-2">
          To book your event or ask any questions, simply fill out the form
          below, and we’ll be in touch soon!
        </p>
      </header>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
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
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
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
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
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
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Package Selection */}
        <div>
          <label className="block font-medium">Select a Package</label>
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Choose a Package</option>
            <option value="standard">Standard Package</option>
            <option value="essential">Essential Package</option>
            <option value="premium">Premium Package</option>
          </select>
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
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Add-ons Selection */}
        <div>
          <label className="block font-medium">Add-ons</label>
          <select
            name="addons"
            value={formData.addons}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Choose Add-ons</option>
            <option value="additional-hours">Additional Hours</option>
            <option value="colored-backdrop">Colored Backdrop</option>
            <option value="custom-flower-walls">Custom Flower Walls</option>
          </select>
        </div>

        {/* Event Details */}
        <div>
          <label className="block font-medium">Tell us about your event</label>
          <textarea
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-lg"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-black font-bold py-2 rounded-lg  "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
