import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { companyRegistration, incomeTax, USA_LLC } from "../Components/Data";

const Services = () => {
  const [selectedService, setSelectedService] = useState("all");

  // Map the service data based on the selected service type on Data.jsx
  const getFilteredServices = () => {
    switch (selectedService) {
      case "companyRegistration":
        return companyRegistration;
      case "incomeTax":
        return incomeTax;
      case "usaLLC":
        return USA_LLC;
      default:
        return [...companyRegistration, ...incomeTax, ...USA_LLC];
    }
  };
   
    
  const services = getFilteredServices();

  return (
    <>
      <Navbar />
      <div className="mt-40 w-full">

          {/* Search Form */}
          <div className="  flex flex-col  lg:w-4/6 lg:items-end lg:mx-auto">
            <form className="max-w-md w-full">
              <h2 className="text-xl font-bold text-[#47464C] mb-4 sm:text-2xl">
                Find what you are looking for...
              </h2>
              <div className="relative">
                <input
                  type="search"
                  id="search-input"
                  className="block w-full p-3 pl-10 text-sm text-[#47464C] border border-gray-300 rounded-lg bg-white focus:ring-[#B4C424] focus:border-[#B4C424] sm:p-4"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2 bottom-2 bg-[#B4C424] hover:bg-[#47464C] focus:ring-4 focus:outline-none focus:ring-[#B4C424] font-medium rounded-lg text-sm px-3 py-1.5 sm:bottom-2.5 sm:px-4 sm:py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

       

        {/* Services List */}
        <div className="max-w-4xl space-x-36 mt-8">

          
          {/* Text */}
        <div className="space-x-36" >
         
         <div className="text-center  my-8">
           <h1 className="text-3xl font-bold text-[#47464C]  ">
             <span className="">Our Business Services</span>
           </h1>
           <p className="text-lg text-[#47464C] mt-4 max-w-2xl mx-auto  ">
             Registering a business can be quite stressful. Worry not! Get
             expert assistance on how and which business structure to select
             and start your entrepreneurial journey with a bang!
           </p>
         </div>
         

        
       </div>



          {/* Service Buttons */}
        <div className="flex justify-center gap-10">
          <button
            onClick={() => setSelectedService("incomeTax")}
            className="mt-12 py-2.5 px-5 mb-2 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520]"
          >
            Income Tax
          </button>
          <button
            onClick={() => setSelectedService("companyRegistration")}
            className="mt-12 py-2.5 px-5 mb-2 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520]"
          >
            Company Registration
          </button>
          <button
            onClick={() => setSelectedService("usaLLC")}
            className="mt-12 py-2.5 px-5 mb-2 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520]"
          >
            USA & LLC
          </button>
          <button
            onClick={() => setSelectedService("all")}
            className="mt-12 py-2.5 px-5 mb-2 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520]"
          >
            Show All
          </button>
        </div>
          




          <div className="max-w-4xl mx-auto space-y-6 mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {service.serviceName || "No Service Name"}
                    </h2>
                    <p className="text-gray-600">
                      <strong>Price:</strong>{" "}
                      {service.minimumFee ||
                        service.stateFee ||
                        "Not available"}
                    </p>
                  </div>
                  <p className="text-gray-600 mt-2">
                    <strong>Completion Time:</strong>{" "}
                    {typeof service.timeline === "object"
                      ? Object.entries(service.timeline).map(([key, value]) => (
                          <span key={key} className="block">
                            {`${key}: ${value}`}
                          </span>
                        ))
                      : service.timeline || "Not available"}
                  </p>
                  <p className="text-gray-600 mt-4">
                    <strong>Requirements:</strong>
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-2">
                    {Array.isArray(service.requirements) ? (
                      service.requirements.map((req, i) => (
                        <li key={i}>
                          {req.name || "No requirement specified"}
                        </li>
                      ))
                    ) : (
                      <li>No requirements available</li>
                    )}
                  </ul>
                  <div className="flex justify-end items-center space-x-2 mt-4">
                    <button className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg bg-[#B4C424] focus:ring-4 focus:outline-none focus:ring-lime-200">
                      <span className="relative px-5 py-2.5 bg-white rounded-md transition-all ease-in duration-75">
                        Request a call
                      </span>
                    </button>
                    <span className="mt-1 border-4 border-green-500 rounded-lg">
                      <FaWhatsapp size={34} color="green" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
