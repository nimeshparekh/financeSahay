export const STATIC_SECTIONS = {
  "A. Project Setup": [
    { name: "Financial Year Start Month", type: "Dropdown", default: "", unit: "Month", options: ["","January","February","March","April","May","June","July","August","September","October","November","December"] },
    { name: "Projection Period", type: "Number", default: "", unit: "Years" },
    { name: "Reporting Currency", type: "Dropdown", default: "", unit: "INR / USD", options: ["","INR","USD","EUR","GBP","AED"] },
    { name: "Reporting Scale", type: "Dropdown", default: "", unit: "Units / Lakhs / Crores", options: ["","Units","Thousands","Lakhs","Crores"] }
  ],
  "B. Macro & Tax": [
    { name: "Inflation Rate", type: "Percentage", default: "", unit: "% per year" },
    { name: "Corporate Tax Rate", type: "Percentage", default: "", unit: "%" },
    { name: "Minimum Alternate Tax (MAT)", type: "Percentage", default: "", unit: "%" },
    { name: "GST Rate on Primary Revenue", type: "Dropdown", default: "", unit: "", options: ["","0%","5%","12%","18%","28%"] },
    { name: "Dividend Distribution Tax", type: "Percentage", default: "", unit: "%" }
  ],
  "C. Working Capital": [
    { name: "Debtor Days (DSO)", type: "Number", default: "", unit: "Days" },
    { name: "Creditor Days (DPO)", type: "Number", default: "", unit: "Days" },
    { name: "Inventory Days", type: "Number", default: "", unit: "Days (0 if no inventory)" },
    { name: "Advance from Customers", type: "Percentage", default: "", unit: "% of Revenue" },
    { name: "Security Deposit Paid", type: "Number", default: "", unit: "Months of Rent" }
  ],
  "D. Capital Structure": [
    { name: "Opening Equity Capital", type: "Currency", default: "", unit: "INR" },
    { name: "Debt / Equity Ratio", type: "Number", default: "", unit: "x (0 = no debt)" },
    { name: "Interest Rate on Term Loan", type: "Percentage", default: "", unit: "% per year" },
    { name: "Loan Repayment Tenure", type: "Number", default: "", unit: "Months" },
    { name: "Moratorium Period", type: "Number", default: "", unit: "Months" },
    { name: "WACC / Discount Rate", type: "Percentage", default: "", unit: "% (for DCF / NPV)" },
    { name: "Terminal Growth Rate", type: "Percentage", default: "", unit: "% (for DCF terminal value)" },
    { name: "Risk-Free Rate", type: "Percentage", default: "", unit: "% (10Y G-Sec)" }
  ],
  "E. Depreciation": [
    { name: "Depreciation Method", type: "Dropdown", default: "", unit: "", options: ["","WDV","SLM"] },
    { name: "Computers & IT Equipment", type: "Number", default: "", unit: "Years useful life" },
    { name: "Furniture & Fixtures", type: "Number", default: "", unit: "Years useful life" },
    { name: "Office Equipment", type: "Number", default: "", unit: "Years useful life" },
    { name: "Software / Intangibles", type: "Number", default: "", unit: "Years useful life" },
    { name: "Plant & Machinery", type: "Number", default: "", unit: "Years useful life" },
    { name: "Vehicles", type: "Number", default: "", unit: "Years useful life" },
    { name: "Leasehold Improvements", type: "Number", default: "", unit: "Years useful life" }
  ],
  "F. Office & Admin": [
    { name: "Office Rent per Sq Ft / Month", type: "Currency", default: "", unit: "INR per sq ft per month" },
    { name: "Office Area", type: "Number", default: "", unit: "Sq Ft" },
    { name: "Annual Rent Escalation", type: "Percentage", default: "", unit: "% per year" },
    { name: "Electricity & Utilities", type: "Percentage", default: "", unit: "% of Rent" },
    { name: "Internet & Communication", type: "Currency", default: "", unit: "INR per month" },
    { name: "Legal & Professional Fees", type: "Percentage", default: "", unit: "% of Revenue" },
    { name: "Audit & Accounting Fees", type: "Currency", default: "", unit: "INR per year" },
    { name: "Insurance Premium", type: "Percentage", default: "", unit: "% of Revenue" },
    { name: "Miscellaneous Admin Expenses", type: "Percentage", default: "", unit: "% of Revenue" },
    { name: "Annual Maintenance Capex", type: "Percentage", default: "", unit: "% of Gross Block" }
  ],
  "G. Sales & Marketing": [
    { name: "Marketing & Advertising Spend", type: "Percentage", default: "", unit: "% of Revenue" },
    { name: "Sales Commission / Incentive", type: "Percentage", default: "", unit: "% of Revenue" },
    { name: "Events & Sponsorship Budget", type: "Currency", default: "", unit: "INR per year" },
    { name: "CRM / Marketing Software", type: "Currency", default: "", unit: "INR per month" }
  ],
  "H. HR & Payroll": [
    { name: "Annual Salary Increment", type: "Percentage", default: "", unit: "% per year" },
    { name: "Employer PF Contribution", type: "Percentage", default: "", unit: "% of Basic Salary" },
    { name: "Employer ESIC Contribution", type: "Percentage", default: "", unit: "% of Gross Salary" },
    { name: "Gratuity Provision", type: "Percentage", default: "", unit: "% of Basic Salary" },
    { name: "Variable Pay / Bonus", type: "Percentage", default: "", unit: "% of CTC" },
    { name: "Recruitment Cost per Hire", type: "Currency", default: "", unit: "INR per hire" },
    { name: "Staff Training & Development", type: "Percentage", default: "", unit: "% of Payroll" },
    { name: "ESOP Pool (% of Equity)", type: "Percentage", default: "", unit: "% of total equity shares" }
  ],
  "I. Technology": [
    { name: "Cloud / Hosting Cost", type: "Currency", default: "", unit: "INR per month" },
    { name: "Software Licences & SaaS Tools", type: "Currency", default: "", unit: "INR per month" },
    { name: "Cybersecurity & Compliance", type: "Currency", default: "", unit: "INR per year" },
    { name: "IT Support / AMC", type: "Currency", default: "", unit: "INR per year" }
  ]
};
