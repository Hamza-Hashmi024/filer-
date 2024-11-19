import { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaEnvelope, FaPhoneAlt, FaUserAlt, FaRegComment } from "react-icons/fa";
import { Alert } from "@mui/material";
import Footer from "../Components/Footer";
import { motion } from 'framer-motion';

const Contactus = () => {
  const [alert, setAlert] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    setAlert({
      severity: "success",
      message: "Your message has been sent successfully!",
    });

    
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <>
      <Navbar />

      <div className="relative bg-[#47464C] text-white">
        <div className="absolute inset-x-0 -bottom-16 h-16 bg-white rounded-t-full"></div>
        <div className="w-full py-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-center max-w-2xl">
            Have any questions or need assistance? Reach out to us today!
            Our team is here to help and provide you with the best solutions.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-[#B4C424] text-white font-semibold rounded-lg shadow-md hover:bg-[#A0B520]">
              Call Us
            </button>
            <button className="px-6 py-3 bg-white text-[#47464C] font-semibold rounded-lg shadow-md hover:bg-gray-100">
              Email Us
            </button>
          </div>
        </div>
      </div>

      {/* Alert Section */}
      {alert && (
        <Alert severity={alert.severity} className="mb-4 mx-6">
          {alert.message}
        </Alert>
      )}

<div className=" w-full flex items-center justify-center p-6">
  <div className="flex w-full max-w-6xl bg-white rounded-lg">
    {/* Left Section - Solutyics */}
    <div className="flex-1 flex items-center justify-center bg-[#B4C424]">
    <motion.h1
            className="text-6xl text-white font-bold"
            initial={{ opacity: 0, y: 20 }} // Initial state (offscreen and invisible)
            whileInView={{ opacity: 1, y: 0 }} // Target state (visible and in place)
            transition={{ duration: 1 }} // Animation duration
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
          >
            Solutyics
          </motion.h1>
    </div>

    {/* Right Section - Contact Form */}
    <div className="flex-1 flex items-center justify-center bg-[#47464C] p-6">
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md  rounded-lg p-8">
      <motion.h1
              className="text-4xl text-center font-extrabold text-white mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Get a Quote
            </motion.h1>

            <motion.h2
              className="text-lg text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Our team will contact you shortly
            </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">First Name</label>
            <div className="flex items-center bg-white border border-[#B4C424] rounded-lg p-3">
              <FaUserAlt className="text-[#47464C] mr-2" />
              <input
                type="text"
                id="first_name"
                className="bg-transparent border-none text-[#47464C] text-sm focus:outline-none w-full"
                placeholder="First Name "
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-white">Last Name</label>
            <div className="flex items-center bg-white border border-[#B4C424] rounded-lg p-3">
              <FaUserAlt className="text-[#47464C] mr-2" />
              <input
                type="text"
                id="last_name"
                className="bg-transparent border-none text-[#47464C] text-sm focus:outline-none w-full"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
          <div className="flex items-center bg-white border border-[#B4C424] rounded-lg p-3">
            <FaPhoneAlt className="text-[#47464C] mr-2" />
            <input
              type="tel"
              id="phone"
              className="bg-transparent border-none text-[#47464C] text-sm focus:outline-none w-full"
              placeholder="+92"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email Address</label>
          <div className="flex items-center bg-white border border-[#B4C424] rounded-lg p-3">
            <FaEnvelope className="text-[#47464C] mr-2" />
            <input
              type="email"
              id="email"
              className="bg-transparent border-none text-[#47464C] text-sm focus:outline-none w-full"
              placeholder="@gmail.com"
              required
            />
          </div>
        </div>


        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
          <div className="flex items-start bg-[#F9FAFB] border border-[#B4C424] rounded-lg p-3">
            <FaRegComment className="text-[#47464C] mr-2 mt-1" />
            <textarea
              id="message"
              className="bg-transparent border-none text-[#47464C] text-sm focus:outline-none w-full h-32 resize-none"
              placeholder="Write your message here..."
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-[#B4C424] text-white font-medium rounded-lg text-sm focus:ring-4 focus:outline-none focus:ring-[#B4C424] hover:bg-[#A0B520] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>


<Footer/>

    
    </>
  );
};

export default Contactus;

