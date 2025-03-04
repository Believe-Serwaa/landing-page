import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, Info } from "lucide-react";
import RootLayout from "../layouts/RootLayout";

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const inputVariants = {
    focused: { scale: 1.02, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" },
    default: { scale: 1, boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }
  };

  const formFields = [
    { name: "name", label: "Full Name", icon: <User size={18} />, type: "text" },
    { name: "email", label: "Email Address", icon: <Mail size={18} />, type: "email" },
    { name: "subject", label: "Subject", icon: <Info size={18} />, type: "text" },
    { name: "message", label: "Your Message", icon: <MessageSquare size={18} />, type: "textarea", rows: 4 }
  ];

  return (
    <RootLayout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left column: Contact info */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex flex-col justify-between">
              <div>
                <motion.h1 
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Let's Connect
                </motion.h1>
                
                <motion.p 
                  className="mb-8 text-blue-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  We'd love to hear from you! Whether you're interested in partnership opportunities, investment possibilities, or making bulk orders - our team is ready to assist you.
                </motion.p>
                
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-full">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>contact@yourcompany.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-full">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <span>+1 (888) 123-4567</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-12 text-sm text-blue-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                
              </motion.div>
            </div>
            
            {/* Right column: Form */}
            <div className="md:col-span-3 p-8">
              <motion.h2 
                className="text-2xl font-bold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Send Us a Message
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Fill out the form below and we'll get back to you as soon as possible.
              </motion.p>
              
              {submitted ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div 
                    className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p>Thank you for reaching out. We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formFields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                      </label>
                      <motion.div
                        className="relative"
                        variants={inputVariants}
                        animate={focused === field.name ? "focused" : "default"}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Icon is shown only when field is empty */}
                        {!formState[field.name] && (
                          <motion.div 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {field.icon}
                          </motion.div>
                        )}
                        
                        {field.type === "textarea" ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            rows={field.rows}
                            required
                            value={formState[field.name]}
                            onChange={handleChange}
                            onFocus={() => handleFocus(field.name)}
                            onBlur={handleBlur}
                            className={`block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none py-3 ${!formState[field.name] ? 'pl-10' : 'pl-4'}`}

                          />
                        ) : (
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            required
                            value={formState[field.name]}
                            onChange={handleChange}
                            onFocus={() => handleFocus(field.name)}
                            onBlur={handleBlur}
                            className={`block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none h-12 ${!formState[field.name] ? 'pl-10' : 'pl-4'}`}

                          />
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="pt-4"
                  >
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:-translate-y-1 h-12"
                    >
                      <span className="mr-2">Send Message</span>
                      <Send className="h-5 w-5" />
                    </button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </RootLayout>
  );
}

export default ContactPage;