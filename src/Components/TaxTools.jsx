import Navbar from "./Navbar";
import SalaryTaxCalculator from "../Tools/SalaryTaxCalculator";
import AOPBusinessTaxCalculator from "../Tools/AOPBusinessTaxCalculator";
import { GrDocumentNotes } from "react-icons/gr";
import { HiReceiptTax } from "react-icons/hi";
import { FaCalculator } from "react-icons/fa";

const TaxTools = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen mt-35  flex flex-col items-center justify-center bg-white py-10 px-4">
        <div className="text-center mt-40 w-full md:w-3/4 px-4 mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#47464C]">
            Simplify Your Tax Journey with Powerful Tools
          </h1>
          <p className="text-[#47464C] font-medium mt-4 text-base md:text-lg">
            Our tax tools are designed to make calculations easy, accurate, and
            hassle-free. Whether youre managing your salary taxes or running a
            business, you can rely on our smart tools to guide you every step of
            the way.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {/* NTN Status */}
            <div className="bg-[#B4C424] w-40 h-40 flex flex-col items-center justify-center rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              <GrDocumentNotes size={40} color="#47464C" />
              <p className="font-semibold text-[#47464C] mt-2">NTN STATUS</p>
            </div>
            {/* ATL Status */}
            <div className="bg-[#B4C424] w-40 h-40 flex flex-col items-center justify-center rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              <HiReceiptTax size={40} color="#47464C" />
              <p className="font-semibold text-[#47464C] mt-2">ATL STATUS</p>
            </div>
            {/* calculater */}
            <div className="bg-[#B4C424] w-40 h-40 flex flex-col items-center justify-center rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              <FaCalculator size={40} color="#47464C" />
              <p className="font-semibold text-[#47464C] mt-2">Calculater</p>
            </div>
          </div>
          <p className="font-semibold text-lg md:text-xl text-[#47464C] mt-8">
            Key Features:
          </p>
          <ul className="text-sm md:text-base text-[#47464C] font-semibold mt-4 list-disc list-inside">
            <li>Verify NTN status instantly with accurate data.</li>
            <li>Check your Active Taxpayer List (ATL) status effortlessly.</li>
            <li>Calculate salary and business taxes with precision.</li>
            <li>
              Gain insights into your financial obligations for informed
              decisions.
            </li>
          </ul>
          <p className="text-[#47464C] font-semibold mt-10 text-sm md:text-base">
            Don’t let taxes overwhelm you! Use our tools to stay ahead of your
            obligations and take control of your financial journey today.
          </p>
        </div>

        <div className="flex flex-wrap gap-20 justify-center">
          {/* Salary Tax Calculator */}
          <div className="w-full max-w-xs sm:max-w-md lg:w-96">
            <SalaryTaxCalculator />
          </div>

          {/* AOP Business Tax Calculator */}
          <div className="w-full max-w-xs sm:max-w-md lg:w-96">
            <AOPBusinessTaxCalculator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxTools;
