import { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaEnvelope, FaPhoneAlt, FaUserAlt, FaRegComment } from "react-icons/fa";
import { Alert } from "@mui/material";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6"
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

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

      {/* Hero Section */}
      <div className="relative bg-[#47464C] text-white">
        <div className="absolute inset-x-0 -bottom-16 h-16 bg-white rounded-t-full"></div>
        <div className="w-full py-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg max-w-2xl">
            Have any questions or need assistance? Reach out to us today! Our
            team is here to help and provide you with the best solutions.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
  {/* Phone */}
  <div className="flex flex-col items-center text-center">
    <FaPhoneVolume size={30} color="#B4C424" />
    <p className="mt-2">+923314824760</p>
  </div>
  
  {/* Email */}
  <div className="flex flex-col items-center text-center">
    <MdMarkEmailRead size={30} color="#B4C424" />
    <p className="mt-2">hamzaasif064@gmail.com</p>
  </div>
  
  {/* Location */}
  <div className="flex flex-col items-center text-center">
    <FaMapLocationDot size={30} color="#B4C424" />
    <p className="mt-2">793C Faisal Town Lahore</p>
  </div>
</div>

        </div>
      </div>

      {/* Alert Section */}
      {alert && (
        <div className="px-4">
          <Alert severity={alert.severity} className="mb-4">
            {alert.message}
          </Alert>
        </div>
      )}

      {/* Contact Section */}
      <div className="w-full flex items-center justify-center px-4 py-8">
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg overflow-hidden">
          {/* Left Section - Solutyics */}
          <div className="flex-1 flex items-center justify-center bg-[#B4C424] p-6">
            <motion.h1
              className="text-3xl sm:text-6xl text-white font-bold text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Solutyics
            </motion.h1>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex-1 flex items-center justify-center bg-[#47464C] p-6">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full max-w-md p-4 sm:p-8 rounded-lg"
            >
              <motion.h1
                className="text-2xl sm:text-4xl text-center font-extrabold text-white mt-6 sm:mt-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Get a Quote
              </motion.h1>

              <motion.h2
                className="text-base sm:text-lg text-center text-white"
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
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    First Name
                  </label>
                  <div className="flex items-center bg-white border border-[#B4C424] rounded-lg p-3">
                    <FaUserAlt className="text-[#47464C] mr-2" />
                    <input
                      type="text"
                      id="first_name"
                      className="bg-transparent border-none text-[#47464C] text-sm focus:outline-none w-full"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Last Name
                  </label>
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
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Phone Number
                </label>
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
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email Address
                </label>
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

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Message
                </label>
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

      <Footer />
    </>
  );
};

export default Contactus;


