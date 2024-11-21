import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FaWhatsapp } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "NTN Registration – Salaried",
      price: "Rs. 800",
      completionTime: "1 - 2 Working Days",
      requirements: [
        "Color copy of CNIC",
        "Latest paid electricity bill",
        "Phone Number",
        "Email address",
      ],
    },
    {
      title: "Company Registration",
      price: "Rs. 1500",
      completionTime: "3 - 5 Working Days",
      requirements: [
        "Director CNIC copies",
        "Business Address",
        "Contact details",
        "Company Name and Type",
      ],
    },
    // Add more services as needed
  ];

  return (
    <>
      <Navbar />
      
      {/* <div className="w-10/12 mt-8 mb-8  flex flex-col items-end   ">
  <form className="max-w-md  ml-25 ">
    <h2 className="text-2xl font-bold text-[#47464C] mb-4">
      Find what you are looking for...
    </h2>
    <label
      htmlFor="search-input"
      className="mb-2 text-sm font-medium text-[#47464C] sr-only"
    >
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-[#47464C]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="search-input"
        className="block w-full p-4 pl-10 text-sm text-[#47464C] border border-gray-300 rounded-lg bg-white focus:ring-[#B4C424] focus:border-[#B4C424]"
        placeholder="Search Mockups, Logos..."
        required
      />
      <button
        type="submit"
        className="text-white absolute right-2.5 bottom-2.5 bg-[#B4C424] hover:bg-[#47464C] focus:ring-4 focus:outline-none focus:ring-[#B4C424] font-medium rounded-lg text-sm px-4 py-2"
      >
        Search
      </button>
    </div>
  </form>
</div> */}

<div className="w-full px-4 mt-8 mb-8 flex flex-col items-center lg:w-10/12 lg:items-end lg:mx-auto">
  <form className="max-w-md w-full">
    <h2 className="text-xl font-bold text-[#47464C] mb-4 sm:text-2xl">
      Find what you are looking for...
    </h2>
    <label
      htmlFor="search-input"
      className="mb-2 text-sm font-medium text-[#47464C] sr-only"
    >
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-[#47464C]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
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


         

      <div className="w-8/12 bg-white ">
      <div className="text-center my-8">
  <h1 className="text-3xl font-bold text-[#47464C]  ">
    <span className="shadow-2xl">
    Our Business Services
    </span>
  </h1>
  <p className="text-lg text-[#47464C] mt-4 max-w-2xl mx-auto  ">
    Registering a business can be quite stressful. Worry not! Get expert
    assistance on how and which business structure to select and start your
    entrepreneurial journey with a bang!
  </p>
</div>
      <div className="max-w-4xl  mx-auto  space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600">
                  <strong>Price:</strong> {service.price}
                </p>
              </div>
              <p className="text-gray-600 mt-2">
                <strong>Completion Time:</strong> {service.completionTime}
              </p>
              <p className="text-gray-600 mt-4">
                <strong>Requirements:</strong>
              </p>
              <ul className="list-disc pl-5 text-gray-600 mt-2">
                {service.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <div className="flex justify-end items-center space-x-2 mt-4">
                <button className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg bg-[#B4C424] dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span className="relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md transition-all ease-in duration-75 group-hover:bg-opacity-0">
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

      <Footer/>
    </>
  );
};

export default Services;
