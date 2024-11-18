import Navbar from "./Navbar";
import SalaryTaxCalculator from "../Tools/SalaryTaxCalculator";
import AOPBusinessTaxCalculator from "../Tools/AOPBusinessTaxCalculator";

const TaxTools = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white py-10">
        <div className="flex gap-8">
          {/* Salary Tax Calculator */}
          <div className="w-96 ">
            <SalaryTaxCalculator />
          </div>

          {/* AOP Business Tax Calculator */}
          <div className="w-96">
            <AOPBusinessTaxCalculator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxTools;
