import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneSquareAlt, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import LOGO from "../assets/Logo.jpg";
const contactItems = [
  { icon: <MdMarkEmailRead size={24} />, text: "hamzaasif064@gmail.com" },
  { icon: <FaPhoneSquareAlt size={24} />, text: "03314824760" },
  { icon: <FaLocationDot size={24} />, text: "793C Faisal Town Lahore" },
];
const socialItems = [
  { icon: <FaFacebook size={24} color="#47464C" /> },
  { icon: <RiInstagramFill size={24} color="#47464C"  /> },
  { icon: <FaLinkedin size={24} color="#47464C"  /> },
];
const navMenu = [
  { name: "Home", URL: "/" },
  { name: "Tax Tools", URL: "/taxtools" },
  { name: "Business Services", URL: "/services" },
  { name: "About us", URL: "/aboutus" },
  { name: "Contact us", URL: "/contactus" },
];
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Top Bar: Contact Info & Social Links */}
      <div className="w-full h-16 bg-[#B4C424] flex justify-center items-center shadow-lg text-white">
        <div className="w-full max-w-screen-xl flex justify-between items-center px-4 sm:px-8">
          {/* Contact Info Section */}
          <div className="flex items-center space-x-6 text-sm">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 hover:text-[#FEFAF6] transition-colors duration-300"
              >
                <div className="text-[#47464C]">{item.icon}</div>
                <a>{item.text}</a>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="flex items-center space-x-6">
            <span>Follow us on:</span>
            {socialItems.map((item, index) => (
              <div
                key={index}
                className="hover:text-[#47464C]  transition-colors duration-300 cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar: Logo & Links */}
      <div className="w-full flex justify-center items-center h-7 py-7">
        <nav className="w-full max-w-screen-xl fixed  flex justify-between items-center px-4 sm:px-8 bg-white shadow-md rounded-lg">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="bg-black w-11">
              <img src={LOGO} alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            {navMenu.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.URL}
                  className="text-black hover:text-[#B4C424] hover: no-underline transition duration-200 ease-in-out transform hover:scale-105"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-black">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4">
          {navMenu.map((item, index) => (
            <div key={index}>
              <Link
                to={item.URL}
                className="text-[#47464C]  text-lg hover:text-[#B4C424] "
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Navbar;
