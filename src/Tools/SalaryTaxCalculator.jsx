import { useState } from "react";

const SalaryTaxCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [result, setResult] = useState(null);

  const calculateYearlyTax = (yearlyIncome) => {
    let tax = 0;

    if (yearlyIncome <= 600000) {
      tax = 0;
    } else if (yearlyIncome <= 1200000) {
      tax = (yearlyIncome - 600000) * 0.05;
    } else if (yearlyIncome <= 2200000) {
      tax = 30000 + (yearlyIncome - 1200000) * 0.15;
    } else if (yearlyIncome <= 3200000) {
      tax = 180000 + (yearlyIncome - 2200000) * 0.25;
    } else if (yearlyIncome <= 4100000) {
      tax = 430000 + (yearlyIncome - 3200000) * 0.3;
    } else {
      tax = 700000 + (yearlyIncome - 4100000) * 0.35;
    }

    if (yearlyIncome > 10000000) {
      tax += tax * 0.1;
    }

    return tax;
  };

  const displayTax = () => {
    const yearlyIncome = parseFloat(monthlyIncome) * 12;
    const yearlyTax = calculateYearlyTax(yearlyIncome);
    const yearlyIncomeAfterTax = yearlyIncome - yearlyTax;
    const monthlyTax = yearlyTax / 12;
    const monthlyIncomeAfterTax = parseFloat(monthlyIncome) - monthlyTax;

    setResult({
      monthlyIncome: parseFloat(monthlyIncome).toFixed(2),
      monthlyTax: monthlyTax.toFixed(2),
      monthlyIncomeAfterTax: monthlyIncomeAfterTax.toFixed(2),
      yearlyIncome: yearlyIncome.toFixed(2),
      yearlyTax: yearlyTax.toFixed(2),
      yearlyIncomeAfterTax: yearlyIncomeAfterTax.toFixed(2),
    });
  };

  return (
    <div className=" rounded-3xl shadow-2xl bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Pakistan Salary Tax Calculator
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <label htmlFor="income" className="block text-gray-700 font-medium mb-2">
          Enter your monthly income (PKR):
        </label>
        <input
          type="number"
          id="income"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Enter your monthly income"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
        />
        <button
          onClick={displayTax}
          className="w-full mt-4 bg-[#B4C424] hover:bg-[#9bb620] text-white font-medium py-2 rounded-lg"
        >
          Calculate Tax
        </button>
        {result && (
          <div className="mt-6">
            <table className="w-full text-gray-700 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Details
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Amount (PKR)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Monthly Income
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.monthlyIncome}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Monthly Tax</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.monthlyTax}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Monthly Income After Tax
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.monthlyIncomeAfterTax}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Yearly Income
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.yearlyIncome}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Yearly Tax</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.yearlyTax}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Yearly Income After Tax
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.yearlyIncomeAfterTax}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    
    </div>
  );
};

export default SalaryTaxCalculator;
