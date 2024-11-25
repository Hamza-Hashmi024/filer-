import { GrDocumentNotes } from "react-icons/gr";
import { HiReceiptTax } from "react-icons/hi";
import { FaCalculator } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TaxToolsection = () => {
    const navigate = useNavigate()
  return (
       <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="text-center w-full md:w-3/4 px-4">
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
        <div
          onClick={() => navigate("/ntnstatuschecker")}
          className="bg-[#B4C424] cursor-pointer w-40 h-40 flex flex-col items-center justify-center rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        >
          <GrDocumentNotes size={40} color="#47464C" />
          <p className="font-semibold text-[#47464C] mt-2">NTN STATUS</p>
        </div>
        {/* ATL Status */}
        <div
          onClick={() => navigate("/Atlstatus")}
          className="bg-[#B4C424] cursor-pointer w-40 h-40 flex flex-col items-center justify-center rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        >
          <HiReceiptTax size={40} color="#47464C" />
          <p className="font-semibold text-[#47464C] mt-2">ATL STATUS</p>
        </div>
        {/* Calculator */}
        <div
          onClick={() => navigate("/taxtools")}
          className="bg-[#B4C424] cursor-pointer w-40 h-40 flex flex-col items-center justify-center rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        >
          <FaCalculator size={40} color="#47464C" />
          <p className="font-semibold text-[#47464C] mt-2">Calculator</p>
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
          Gain insights into your financial obligations for informed decisions.
        </li>
      </ul>
      <p className="text-[#47464C] font-semibold mt-10 text-sm md:text-base">
        Don’t let taxes overwhelm you! Use our tools to stay ahead of your
        obligations and take control of your financial journey today.
      </p>
    </div>
       </div>
  )
}

export default TaxToolsection
