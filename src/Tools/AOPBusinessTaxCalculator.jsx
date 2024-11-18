import { useState } from "react";

const AOPBusinessTaxCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState("");
  const [result, setResult] = useState("");

  const calculateTax = (income) => {
    let tax = 0;

    if (income <= 600000) {
      tax = 0;
    } else if (income <= 1200000) {
      tax = (income - 600000) * 0.15;
    } else if (income <= 1600000) {
      tax = 90000 + (income - 1200000) * 0.2;
    } else if (income <= 3200000) {
      tax = 170000 + (income - 1600000) * 0.3;
    } else if (income <= 5600000) {
      tax = 650000 + (income - 3200000) * 0.4;
    } else {
      tax = 1610000 + (income - 5600000) * 0.45;
    }

    if (income > 10000000) {
      tax += tax * 0.1;
    }

    return tax;
  };

  const displayTax = () => {
    const income = parseFloat(annualIncome);
    if (isNaN(income) || income < 0) {
      setResult("Please enter a valid annual income.");
      return;
    }
    const tax = calculateTax(income);
    setResult(`The calculated tax for an income of PKR ${income.toFixed(2)} is PKR ${tax.toFixed(2)}`);
  };

  return (
    <div className=" rounded-3xl shadow-2xl bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Pakistan AOP & Business Tax Calculator
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <label htmlFor="income" className="block text-gray-700 font-medium mb-2">
          Enter your annual income (PKR):
        </label>
        <input
          type="number"
          id="income"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Enter your income"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
        />
        <button
          onClick={displayTax}
          className="w-full mt-4 bg-[#B4C424] hover:bg-[#9bb620] text-white font-medium py-2 rounded-lg"
        >
          Calculate Tax
        </button>
        {result && (
          <div className="mt-6 text-gray-700">
            <p className="font-medium">{result}</p>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default AOPBusinessTaxCalculator;
