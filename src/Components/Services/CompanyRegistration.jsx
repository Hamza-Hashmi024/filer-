import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CompanyRegistration = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL_USA_COMPANY);
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
    <div className="h-screen   max-w-4xl mx-auto space-y-6">
      <div className="">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg mb-4">
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
              <button
              className="bg-[#B4C424] text-white py-2 px-4 rounded-lg mt-4"
              onClick={() =>
                navigate("/order", { state: { selectedService: service.serviceName } })
              }
            >
              Get Info
            </button>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyRegistration;

