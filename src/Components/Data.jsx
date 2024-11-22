export const companyRegistration = [
    {
      serviceName: "Private Limited Company Registration",
      serviceType: "Other than Licensed Entity",
      minimumFee: "Rs. 20,000 (Excluding SECP Fees)",
      completionTime: "3 - 10 working days depending upon availability of Name",
      requirements: [
        { id: 1, name: "Three Names of the Proposed Company", required: true },
        { id: 2, name: "Scanned CNIC Copies of Directors/Subscribers",  required: true },
        { id: 3, name: "Registered Address",  required: true },
        { id: 4, name: "Principal Business of the Proposed Company", required: true },
        { id: 5, name: "Nature of Business Activity", required: true },
        { id: 6, name: "Authorized Capital", required: true },
        { id: 7, name: "Paid-up Capital", required: true },
        { id: 8, name: "Value per Share",  required: true },
        { id: 9, name: "Combination of Shares", required: true },
        { id: 10, name: "Name of Chief Executive", required: true },
        { id: 11, name: "Telephone and Email of Directors", required: true },
        { id: 12, name: "SECP Login Details",  required: false },
      ]
    },
    {
      serviceName: "Partnership Firm Registration",
      serviceType: "Business Partnership",
      minimumFee: "Rs. 15,000 (Excluding SECP Fees)",
      completionTime: "5 - 7 working days depending upon the documents",
      requirements: [
        { id: 13, name: "Proposed Firm Name",  required: true },
        { id: 14, name: "Scanned CNIC Copies of Partners",  required: true },
        { id: 15, name: "Firm Address",  required: true },
        { id: 16, name: "Nature of Business", required: true },
        { id: 17, name: "Partnership Agreement", required: true },
        { id: 18, name: "Authorized Capital",  required: true },
        { id: 19, name: "Profit and Loss Sharing", required: true },
        { id: 20, name: "Bank Account Details",required: true },
        { id: 21, name: "Telephone and Email of Partners", required: true },
      ]
    }
  ];
  export const incomeTax =[
    {
        serviceName: "NTN Registr ation – Salaried",
        minimumFee: "Rs. 800",
        completionTime: "1 - 2 Working Days",
        requirements: [
          { id: 22, name: "Color Copy of CNIC", required: true },
          { id: 23, name: "Latest Paid Electricity Bill", required: true },
          { id: 24, name: "Phone Number", required: true },
          { id: 25, name: "Email Address",required: true },
        ]
     },
     {
        serviceName: "NTN Registration – Business",
        minimumFee: "Rs. 2,500",
        completionTime: "1 - 2 Working Days",
        requirements: [
            { id: 26, name: "Color Copy of CNIC", required: true },
            { id: 27, name: "Latest Paid Electricity Bill", required: true },
            { id: 28, name: "Phone Number",  required: true },
            { id: 29, name: "Email Address", required: true },
          ]
     }

];

export const USA_LLC  = [
    {
      serviceName: "Company Formation in USA - LLC / Inc. (C Corp)",
      stateFee: "State fee + $120",
      timeline: "3 Business Days",
      requirements: [
        { id: 30, name: "2 Suggested Names of the Company", required: true },
        { id: 31, name: "CNIC (English Only) / Passport of Director(s)", required: true },
      ]
    },
    {
      serviceName: "Employer Identification Number (EIN)",
      stateFee: "$160",
      timeline: "30 Business Days",
      requirements: [
        { id: 32, name: "Article of Organization",  required: true },
        { id: 33, name: "Certificate of Organization",  required: true },
      ]
    },
    {
      serviceName: "Open A US Bank Account",
      stateFee: "$100",
      timeline: "30 Business Days",
      requirements: [
        { id: 34, name: "Article of Organization", required: true },
        { id: 35, name: "Certificate of Organization",  required: true },
        { id: 36, name: "CNIC (English Only) / Passport of Director(s)", required: true },
        { id: 37, name: "EIN", required: true },
      ]
    },
    {
      serviceName: "USA Company Formation - Complete Package",
      stateFee: "State Fee + $349",
      timeline: {
        companyFormation: "3 Business Days",
        EIN: "30 Business Days after Company Formation",
        bankAccount: "30 Business Days after EIN"
      },
      requirements: [
        { id: 38, name: "2 Suggested Names of the Company",  required: true },
        { id: 39, name: "CNIC (English Only) / Passport of Director(s)", required: true },
      ]
    },
    {
      serviceName: "Tax Filing - State: LLC / Inc. (C Corp)",
      stateFee: "$200",
      timeline: "3 Business Days",
      requirements: [
        { id: 40, name: "Financial Statements", required: true },
        { id: 41, name: "Last Year's Tax Return (if applicable)", required: true },
      ]
    },
    {
      serviceName: "Tax Filing - Federal: LLC / Inc. (C Corp)",
      stateFee: "$200",
      timeline: "3 Business Days",
      requirements: [
        { id: 42, name: "Financial Statements", required: true },
        { id: 43, name: "Last Year's Tax Return (if applicable)", required: true },
      ]
    }
  ];
  
  
  
