import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  const footerSections = [
    {
      title: "Stay Connected",
      items: [
        { text: <FaFacebook size={34} />, link: "#" },
        { text: <IoLogoYoutube size={34} />, link: "#" },
        { text: <FaTwitter size={34} />, link: "#" },
        { text: <FaLinkedin size={34} />, link: "#" },
      ],
    },
    {
      title: "Need Support?",
      items: [
        { icon: <MdMarkEmailRead size={24} className="text-[#B4C424]" />, text: "hamzaasif064@gmail.com", isText: true },
        { icon: <FaPhoneVolume size={24} className="text-[#B4C424]" />, text: "+92 331 1111070", isText: true },
      ],
    },
    {
      title: "Locate Us",
      items: [
        { text: <FaMapLocation size={34} />, link: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white text-[#47464C] py-10 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {footerSections.map((section, index) => (
          <div key={index} className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul
              className={`${
                section.title === "Stay Connected" ? "flex justify-center md:justify-start space-x-4" : "space-y-4"
              }`}
            >
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center space-x-3">
                  {item.icon && <span>{item.icon}</span>}
                  {item.isText ? (
                    <span className="text-sm">{item.text}</span>
                  ) : (
                    <a href={item.link} className="hover:text-[#B4C424] text-[#47464C]">
                      {item.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-sm text-[#47464C]">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
