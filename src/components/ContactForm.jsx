import React, { useState } from "react";
import { CONTACT_CONFIG } from "../config/contactConfig";

const ContactForm = ({ onSubmitSuccess }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", CONTACT_CONFIG.accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        e.target.reset();
        if (onSubmitSuccess) {
          setTimeout(() => {
            onSubmitSuccess();
            setResult("");
          }, 1500);
        }
      } else {
        setResult("Unable to send. Please try again.");
      }
    } catch {
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="john@example.com"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700">Project Details</label>
        <textarea
          name="message"
          placeholder="Tell me about your project, timeline, and budget..."
          rows="4"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all resize-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full bg-[#111] hover:bg-[#FF4D00] text-white hover:text-black font-bold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </button>

      {result && (
        <span className={`text-center text-sm font-medium ${result.includes("Successfully") ? "text-green-600" : result.includes("Sending") ? "text-gray-500" : "text-red-500"}`}>
          {result}
        </span>
      )}
    </form>
  );
};

export default ContactForm;
