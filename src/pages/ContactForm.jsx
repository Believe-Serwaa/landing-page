import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import RootLayout from "../layouts/RootLayout";

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <RootLayout>
    <div className="min-h-screen bg-gray-100 pt-28 pb-10 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-8 px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900">Get In Touch</h2>
          <p className="text-center text-gray-700 mt-2">
            Interested in partnership, investment, or bulk orders?
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formState.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formState.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
    </RootLayout>
  );
}

export default ContactPage;
