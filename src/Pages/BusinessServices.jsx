import { useState } from "react";
// import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import USALLC from "../Components/Services/USALLC";
import CompanyRegistration from "../Components/Services/CompanyRegistration";
import IncomeTax from "../Components/Services/IncomeTax";

const BusinessServices = () => {
  const [selectedService, setSelectedService] = useState("all");

  const renderServiceComponent = () => {
    switch (selectedService) {
      case "companyRegistration":
        return (
          <div className="p-6 bg-white border rounded-lg shadow hover:shadow-md hover:border-gray-300">
            <CompanyRegistration />
          </div>
        );
      case "incomeTax":
        return (
          <div className="p-6 bg-white border rounded-lg shadow hover:shadow-md hover:border-gray-300">
            <IncomeTax />
          </div>
        );
      case "usaLLC":
        return (
          <div className="p-6 bg-white border rounded-lg shadow hover:shadow-md hover:border-gray-300">
            <USALLC />
          </div>
        );
      default:
        return (
          <div className="flex flex-col gap-10">
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-md hover:border-gray-300">
              <CompanyRegistration />
            </div>
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-md hover:border-gray-300">
              <IncomeTax />
            </div>
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-md hover:border-gray-300">
              <USALLC />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-28">
        {/* Search Section */}
        <div className="flex flex-col lg:w-4/6 lg:items-end lg:mx-auto px-4">
          <form className="max-w-md w-full">
            <h2 className="text-xl font-bold text-[#47464C] mb-4 sm:text-2xl">
              Find what you are looking for...
            </h2>
            <div className="relative">
              <input
                type="search"
                id="search-input"
                className="block w-full p-3 pl-10 text-sm text-[#47464C] border border-gray-300 rounded-lg bg-white focus:ring-[#B4C424] focus:border-[#B4C424] sm:p-4"
                placeholder="Search Services..."
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

        {/* Services Header */}
        <div className="text-center my-8 px-4">
          <h1 className="text-3xl font-bold text-[#47464C]">
            Our Business Services
          </h1>
          <p className="text-lg text-[#47464C] mt-4 max-w-2xl mx-auto">
            Registering a business can be quite stressful. Worry not! Get expert
            assistance on how and which business structure to select and start
            your entrepreneurial journey with a bang!
          </p>
        </div>

        {/* Service Filter Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-8 px-4">
          <button
            onClick={() => setSelectedService("incomeTax")}
            className="py-2.5 px-5 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520] transition"
          >
            Income Tax
          </button>
          <button
            onClick={() => setSelectedService("companyRegistration")}
            className="py-2.5 px-5 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520] transition"
          >
            Company Registration
          </button>
          <button
            onClick={() => setSelectedService("usaLLC")}
            className="py-2.5 px-5 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520] transition"
          >
            USA & LLC
          </button>
          <button
            onClick={() => setSelectedService("all")}
            className="py-2.5 px-5 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520] transition"
          >
            Show All
          </button>
        </div>

        {/* Rendered Services */}
        <div className="max-w-6xl mx-auto px-4">{renderServiceComponent()}</div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default BusinessServices;



// import { useState } from "react";
// import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";
// import USALLC from "../Components/Services/USALLC";
// import CompanyRegistration from "../Components/Services/CompanyRegistration";
// import IncomeTax from "../Components/Services/IncomeTax";



// const BusinessServices = () => {
//   const [selectedService, setSelectedService] = useState("all");


//   const renderServiceComponent = () => {
//     switch (selectedService) {
//       case "companyRegistration":
//         return <CompanyRegistration />;
//       case "incomeTax":
//         return <IncomeTax />;
//       case "usaLLC":
//         return <USALLC />;
//       default:
//         return (
//           <div className="" >
//             <div className="mt-4 mb-4">
//             <CompanyRegistration />
//             </div>
//            <div className="mt-4 mb-4">
//             <IncomeTax />
//             </div>
//             <div className="mt-4 mb-4">
//             <USALLC />
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="mt-40 w-full">
//         {/* Search Form */}
//         <div className="flex flex-col lg:w-4/6 lg:items-end lg:mx-auto">
//           <form className="max-w-md w-full">
//             <h2 className="text-xl font-bold text-[#47464C] mb-4 sm:text-2xl">
//               Find what you are looking for...
//             </h2>
//             <div className="relative">
//               <input
//                 type="search"
//                 id="search-input"
//                 className="block w-full p-3 pl-10 text-sm text-[#47464C] border border-gray-300 rounded-lg bg-white focus:ring-[#B4C424] focus:border-[#B4C424] sm:p-4"
//                 placeholder="Search Mockups, Logos..."
//                 required
//               />
//               <button
//                 type="submit"
//                 className="text-white absolute right-2 bottom-2 bg-[#B4C424] hover:bg-[#47464C] focus:ring-4 focus:outline-none focus:ring-[#B4C424] font-medium rounded-lg text-sm px-3 py-1.5 sm:bottom-2.5 sm:px-4 sm:py-2"
//               >
//                 Search
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Services Header */}
//         <div className="text-center my-8">
//           <h1 className="text-3xl font-bold text-[#47464C]">
//             Our Business Services
//           </h1>
//           <p className="text-lg text-[#47464C] mt-4 max-w-2xl mx-auto">
//             Registering a business can be quite stressful. Worry not! Get expert
//             assistance on how and which business structure to select and start
//             your entrepreneurial journey with a bang!
//           </p>
//         </div>
            


//                {/* Service Buttons */}
//         <div className="flex justify-center ml-14 w-6/12 gap-10">
//           <button
//             onClick={() => setSelectedService("incomeTax")}
//             className="mt-12 py-2.5 px-5 mb-2 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520]"
//           >
//             Income Tax
//           </button>
//           <button
//             onClick={() => setSelectedService("companyRegistration")}
//             className="mt-12 py-2.5 px-5 mb-2 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520]"
//           >
//             Company Registration
//           </button>
//           <button
//             onClick={() => setSelectedService("usaLLC")}
//             className="mt-12 py-2.5 px-5 mb-2 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520]"
//           >
//             USA & LLC
//           </button>
//           <button
//             onClick={() => setSelectedService("all")}
//             className="mt-12 py-2.5 px-5 mb-2 text-sm font-medium text-white bg-[#B4C424] rounded-full hover:bg-[#A0B520]"
//           >
//             Show All
//           </button>
//         </div>
//             <div className="flex">
//             <div className="">
     

//         {/* Rendered Services */}
//         <div className="max-w-3xl min-h-screen ml-14 mx-auto mt-8">
//           <div className="">
//           {renderServiceComponent()}
//           </div>
//           </div>
//             </div>
//             <div className="">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//     Noteworthy technology acquisitions 2021
//   </h5>
//   <p className="font-normal text-gray-700 dark:text-gray-400">
//     Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
//   </p>
//                </div>
//       <div>




//       </div>
//       </div>
//       </div>

//       <div className="fixed bottom-0 ">
//       <Footer />
//       </div>
     
//     </>
//   );
// };

// export default BusinessServices;




