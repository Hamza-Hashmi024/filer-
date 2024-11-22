import Navbar from "./Navbar";
import SalaryTaxCalculator from "../Tools/SalaryTaxCalculator";
import AOPBusinessTaxCalculator from "../Tools/AOPBusinessTaxCalculator";
import TaxToolsection from "../Tools/TaxToolsection";



const TaxTools = () => {
  
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen mt-35  flex flex-col items-center justify-center bg-white py-10 px-4">

       
       

        <div className="flex mt-20 flex-wrap gap-20 justify-center">
          {/* Salary Tax Calculator */}
          <div className="w-full max-w-xs sm:max-w-md lg:w-96">
            <SalaryTaxCalculator />
          </div>

          {/* AOP Business Tax Calculator */}
          <div className="w-full max-w-xs sm:max-w-md lg:w-96">
            <AOPBusinessTaxCalculator />
          </div>
        </div>
        <TaxToolsection/>
      </div>
    </div>
  );
};

export default TaxTools;
