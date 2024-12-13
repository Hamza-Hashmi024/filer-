import { useState, useEffect } from "react";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";

const USALLc = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL_USA_SERVICES);
        setServices(response.data || []);
        setLoading(false);
      } catch (error) {
        setError(`Failed to fetch services: ${error}`);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className=" h-screen max-w-4xl mx-auto space-y-6">
      <div className="">
      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">{service.serviceName}</h2>
              <p className="text-gray-600">
                <strong>Price:</strong> ${service.price}
              </p>
            </div>
            <p className="text-gray-600 mt-2">
              <strong>Completion Time:</strong> {service.completionTime}
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Important Info:</strong> {service.importantInfo}
            </p>
            <div className="text-gray-600 mt-4">
              <strong>Requirements:</strong>
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: service.requirements }}
              />
            </div>
            <div className="flex justify-end items-center space-x-2 mt-4">
              <button className="relative inline-flex items-center justify-center p-2 text-sm font-medium text-gray-900 rounded-lg bg-[#B4C424] focus:ring-4 focus:outline-none focus:ring-lime-200">
                <span className="relative px-5 py-2.5 bg-white rounded-md transition-all ease-in duration-75 group-hover:bg-opacity-0">
                  Request a call
                </span>
              </button>
              <span className="mt-1 border-4 border-green-500 rounded-lg p-1">
                <FaWhatsapp className="text-green-500" style={{ fontSize: '34px' }} />
              </span>
            </div>
          </div>
        </div>
      ))}
       </div>
    </div>
   
  );
};

export default USALLc;
