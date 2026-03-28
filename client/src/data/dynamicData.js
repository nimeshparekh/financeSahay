export const DYNAMIC_DATA = {
  "01": { name: "Traditional Trade & Retail", models: {
    "01.01": { name: "Kirana / Mom-and-Pop Store", fields: [
      { name: "Daily Customer Footfall – Year 1", type: "Number", default: "80", unit: "Customers per day" },
      { name: "Footfall Growth Rate", type: "Percentage", default: "10", unit: "% per year" },
      { name: "Average Basket Size (Transaction Value)", type: "Currency", default: "250", unit: "INR per transaction" },
      { name: "Basket Size Growth Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Gross Margin on Products", type: "Percentage", default: "14", unit: "% of Revenue" },
      { name: "Inventory Shrinkage / Wastage", type: "Percentage", default: "2", unit: "% of Inventory Value" },
      { name: "Number of SKUs Stocked", type: "Number", default: "500", unit: "Count" },
      { name: "Operating Days per Year", type: "Number", default: "330", unit: "Days" }
    ]},
    "01.02": { name: "Wholesale / Distribution", fields: [
      { name: "Monthly Volume Throughput – Year 1", type: "Number", default: "", unit: "Units per month" },
      { name: "Volume Growth Rate", type: "Percentage", default: "15", unit: "% per year" },
      { name: "Average Selling Price per Unit", type: "Currency", default: "", unit: "INR per unit" },
      { name: "Trade Margin on Purchase Price", type: "Percentage", default: "8", unit: "% of Purchase Price" },
      { name: "Credit Period Extended to Retailers", type: "Number", default: "30", unit: "Days" },
      { name: "Product Return Rate", type: "Percentage", default: "3", unit: "% of Units Sold" },
      { name: "Warehouse Cost per Month", type: "Currency", default: "", unit: "INR per month" },
      { name: "Number of Retail Clients Served", type: "Number", default: "", unit: "Count" }
    ]},
    "01.03": { name: "Street Vending / Hawking", fields: [
      { name: "Daily Sales Revenue – Year 1", type: "Currency", default: "1500", unit: "INR per day" },
      { name: "Daily Revenue Growth Rate", type: "Percentage", default: "8", unit: "% per year" },
      { name: "COGS as % of Revenue", type: "Percentage", default: "55", unit: "% of Revenue" },
      { name: "Operating Days per Year", type: "Number", default: "300", unit: "Days" },
      { name: "Cart / Stall Setup Cost", type: "Currency", default: "15000", unit: "INR one-time" }
    ]},
    "01.04": { name: "Market Stall / Mela Trading", fields: [
      { name: "Events / Haats Attended per Year", type: "Number", default: "24", unit: "Events per year" },
      { name: "Average Revenue per Event", type: "Currency", default: "8000", unit: "INR per event" },
      { name: "Revenue Growth Rate", type: "Percentage", default: "10", unit: "% per year" },
      { name: "COGS as % of Revenue", type: "Percentage", default: "50", unit: "% of Revenue" },
      { name: "Stall Setup & Transport Cost per Event", type: "Currency", default: "2000", unit: "INR per event" }
    ]},
    "01.05": { name: "Consignment Model", fields: [
      { name: "Consignment Stock Value Placed – Year 1", type: "Currency", default: "", unit: "INR per month" },
      { name: "Sell-Through Rate", type: "Percentage", default: "70", unit: "% of stock sold per period" },
      { name: "Margin on Sold Goods", type: "Percentage", default: "20", unit: "% of Selling Price" },
      { name: "Average Consignment Cycle", type: "Number", default: "60", unit: "Days per cycle" },
      { name: "Unsold Stock Return Rate", type: "Percentage", default: "30", unit: "% of Consigned Goods" }
    ]},
    "01.06": { name: "Auction / Bidding Model", fields: [
      { name: "Number of Auctions Conducted per Month", type: "Number", default: "4", unit: "Auctions per month" },
      { name: "Average Lot Value per Auction", type: "Currency", default: "", unit: "INR per auction" },
      { name: "Auctioneer Commission Rate", type: "Percentage", default: "5", unit: "% of Hammer Price" },
      { name: "Buyer Premium Charged", type: "Percentage", default: "2", unit: "% of Hammer Price" },
      { name: "Auction Volume Growth Rate", type: "Percentage", default: "10", unit: "% per year" }
    ]},
    "01.07": { name: "Agency / Commission Model", fields: [
      { name: "Number of Transactions per Month – Yr 1", type: "Number", default: "", unit: "Transactions per month" },
      { name: "Transaction Volume Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Average Transaction Value", type: "Currency", default: "", unit: "INR per transaction" },
      { name: "Commission Rate Earned", type: "Percentage", default: "5", unit: "% of Transaction Value" },
      { name: "Retainer Fee (if any)", type: "Currency", default: "0", unit: "INR per month per client" },
      { name: "Number of Active Clients", type: "Number", default: "", unit: "Count" }
    ]}
  }},
  "02": { name: "Manufacturing & Production", models: {
    "02.01": { name: "Make-to-Stock (MTS)", fields: [
      { name: "Production Volume – Year 1", type: "Number", default: "", unit: "Units per month" },
      { name: "Production Volume Growth Rate", type: "Percentage", default: "15", unit: "% per year" },
      { name: "Installed Capacity", type: "Number", default: "", unit: "Units per month" },
      { name: "Capacity Utilisation – Year 1", type: "Percentage", default: "60", unit: "%" },
      { name: "Average Selling Price per Unit", type: "Currency", default: "", unit: "INR per unit" },
      { name: "Selling Price Increase per Year", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Raw Material Cost", type: "Percentage", default: "45", unit: "% of Revenue" },
      { name: "Direct Labour Cost", type: "Percentage", default: "15", unit: "% of Revenue" },
      { name: "Manufacturing Overhead", type: "Percentage", default: "10", unit: "% of Revenue" },
      { name: "Quality Rejection Rate", type: "Percentage", default: "2", unit: "% of Production" },
      { name: "Plant & Machinery CapEx", type: "Currency", default: "", unit: "INR one-time" }
    ]},
    "02.02": { name: "Make-to-Order (MTO)", fields: [
      { name: "Number of Orders per Month – Year 1", type: "Number", default: "", unit: "Orders per month" },
      { name: "Order Volume Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Average Order Value", type: "Currency", default: "", unit: "INR per order" },
      { name: "Order Value Growth Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Raw Material Cost", type: "Percentage", default: "40", unit: "% of Revenue" },
      { name: "Direct Labour Cost", type: "Percentage", default: "18", unit: "% of Revenue" },
      { name: "Average Lead Time per Order", type: "Number", default: "15", unit: "Days" },
      { name: "Order Advance Payment Received", type: "Percentage", default: "30", unit: "% of Order Value" }
    ]},
    "02.03": { name: "Engineer-to-Order (ETO)", fields: [
      { name: "Number of Projects per Year – Year 1", type: "Number", default: "", unit: "Projects per year" },
      { name: "Project Volume Growth Rate", type: "Percentage", default: "15", unit: "% per year" },
      { name: "Average Contract / Project Value", type: "Currency", default: "", unit: "INR per project" },
      { name: "Engineering & Design Cost", type: "Percentage", default: "12", unit: "% of Revenue" },
      { name: "Material Cost", type: "Percentage", default: "40", unit: "% of Revenue" },
      { name: "Site / Installation Cost", type: "Percentage", default: "10", unit: "% of Revenue" },
      { name: "Project Milestone Billing Schedule", type: "Text", default: "30/30/30/10", unit: "% at Advance/Delivery/Commissioning/Retention" },
      { name: "Performance Retention Withheld by Client", type: "Percentage", default: "5", unit: "% of Contract Value" }
    ]},
    "02.04": { name: "Job-Work / Contract Manufacturing", fields: [
      { name: "Job-Work Revenue per Month – Year 1", type: "Currency", default: "", unit: "INR per month" },
      { name: "Revenue Growth Rate", type: "Percentage", default: "15", unit: "% per year" },
      { name: "Labour Cost", type: "Percentage", default: "35", unit: "% of Job-Work Revenue" },
      { name: "Electricity & Power Cost", type: "Percentage", default: "8", unit: "% of Job-Work Revenue" },
      { name: "Principal-Supplied Material Value", type: "Currency", default: "0", unit: "INR per month (note only)" }
    ]},
    "02.05": { name: "Cottage Industry", fields: [
      { name: "Number of Artisans / Workers", type: "Number", default: "", unit: "Count" },
      { name: "Output per Artisan per Month", type: "Number", default: "", unit: "Units per artisan per month" },
      { name: "Average Selling Price per Unit", type: "Currency", default: "", unit: "INR per unit" },
      { name: "Raw Material Cost per Unit", type: "Currency", default: "", unit: "INR per unit" },
      { name: "Artisan Wages per Month", type: "Currency", default: "", unit: "INR per artisan per month" },
      { name: "Government Subsidy / Grant Received", type: "Currency", default: "0", unit: "INR per year" }
    ]},
    "02.06": { name: "Cluster Manufacturing", fields: [
      { name: "Number of Production Units / Clusters", type: "Number", default: "", unit: "Count" },
      { name: "Revenue per Unit per Month", type: "Currency", default: "", unit: "INR per unit per month" },
      { name: "Shared Infrastructure Cost per Unit", type: "Currency", default: "", unit: "INR per unit per month" },
      { name: "Cluster Revenue Growth Rate", type: "Percentage", default: "12", unit: "% per year" },
      { name: "Export Revenue Share", type: "Percentage", default: "0", unit: "% of Total Revenue" }
    ]},
    "02.07": { name: "OEM (Original Equipment Manufacturer)", fields: [
      { name: "Units Supplied to OEM per Month – Yr 1", type: "Number", default: "", unit: "Units per month" },
      { name: "Volume Growth Rate", type: "Percentage", default: "10", unit: "% per year" },
      { name: "Average Realisation per Unit", type: "Currency", default: "", unit: "INR per unit" },
      { name: "Raw Material Cost", type: "Percentage", default: "50", unit: "% of Revenue" },
      { name: "Tooling & Mould CapEx", type: "Currency", default: "", unit: "INR one-time" },
      { name: "OEM Price Reduction Pressure per Year", type: "Percentage", default: "2", unit: "% reduction per year" }
    ]}
  }},
  "03": { name: "Service & Professional Services", models: {
    "03.01": { name: "Fee-for-Service", fields: [
      { name: "Number of Fee-Paying Clients – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "Client Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Average Fee per Client per Month", type: "Currency", default: "", unit: "INR per client per month" },
      { name: "Fee Growth Rate", type: "Percentage", default: "8", unit: "% per year" },
      { name: "Client Retention Rate", type: "Percentage", default: "75", unit: "% per year" },
      { name: "Number of Billable Professionals", type: "Number", default: "", unit: "FTEs" },
      { name: "Avg Billing Rate per Hour", type: "Currency", default: "2500", unit: "INR per hour" },
      { name: "Billable Hours per Professional per Month", type: "Number", default: "120", unit: "Hours per month" },
      { name: "Utilisation Rate", type: "Percentage", default: "75", unit: "% of available hours billed" }
    ]},
    "03.02": { name: "Retainer Model", fields: [
      { name: "Number of Retainer Clients – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "New Retainer Clients Added per Month", type: "Number", default: "", unit: "Count" },
      { name: "Average Monthly Retainer Value", type: "Currency", default: "", unit: "INR per client per month" },
      { name: "Retainer Value Growth Rate", type: "Percentage", default: "8", unit: "% per year" },
      { name: "Client Churn Rate", type: "Percentage", default: "15", unit: "% per year" }
    ]},
    "03.03": { name: "Project-Based Model", fields: [
      { name: "Number of Projects per Month – Year 1", type: "Number", default: "", unit: "Projects per month" },
      { name: "Project Volume Growth Rate", type: "Percentage", default: "25", unit: "% per year" },
      { name: "Average Project Value", type: "Currency", default: "", unit: "INR per project" },
      { name: "Project Value Growth Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Project Delivery Cost", type: "Percentage", default: "55", unit: "% of Project Value" },
      { name: "Advance Payment Received", type: "Percentage", default: "30", unit: "% of Project Value" }
    ]},
    "03.04": { name: "Time & Material (T&M)", fields: [
      { name: "Number of Billable Resources – Year 1", type: "Number", default: "", unit: "FTEs billed to clients" },
      { name: "Resource Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Avg Monthly Billing per Resource", type: "Currency", default: "", unit: "INR per resource per month" },
      { name: "Billing Rate Growth Rate", type: "Percentage", default: "8", unit: "% per year" },
      { name: "Utilisation Rate", type: "Percentage", default: "80", unit: "% of hours billed" },
      { name: "Resource Cost as % of Billing", type: "Percentage", default: "55", unit: "% of Billing Revenue" }
    ]},
    "03.05": { name: "Managed Services", fields: [
      { name: "Number of Managed Service Contracts", type: "Number", default: "", unit: "Active contracts" },
      { name: "New Contracts Added per Month", type: "Number", default: "", unit: "Count" },
      { name: "Average Monthly Contract Value", type: "Currency", default: "", unit: "INR per contract per month" },
      { name: "Contract Renewal Rate", type: "Percentage", default: "80", unit: "% per year" },
      { name: "SLA Penalty Exposure", type: "Percentage", default: "1", unit: "% of Contract Value at Risk" },
      { name: "Delivery Cost per Contract", type: "Percentage", default: "60", unit: "% of Contract Value" }
    ]},
    "03.06": { name: "Staffing / Manpower Supply", fields: [
      { name: "Number of Staff Deployed – Year 1", type: "Number", default: "", unit: "FTEs placed with clients" },
      { name: "Headcount Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Average CTC of Deployed Staff", type: "Currency", default: "", unit: "INR per FTE per month" },
      { name: "Markup on CTC Charged to Client", type: "Percentage", default: "25", unit: "% over CTC" },
      { name: "Annual Attrition Rate of Deployed Staff", type: "Percentage", default: "25", unit: "% per year" },
      { name: "Permanent Placement Fee", type: "Percentage", default: "8", unit: "% of candidate CTC" }
    ]},
    "03.07": { name: "BPO / Business Process Outsourcing", fields: [
      { name: "Number of FTEs Billed to Clients – Yr 1", type: "Number", default: "", unit: "FTEs" },
      { name: "Headcount Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Avg Monthly Revenue per FTE", type: "Currency", default: "80000", unit: "INR per FTE per month" },
      { name: "Revenue per FTE Growth Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Employee Cost as % of Revenue", type: "Percentage", default: "55", unit: "% of Revenue" },
      { name: "Seat / Infrastructure Cost per FTE", type: "Currency", default: "6000", unit: "INR per FTE per month" },
      { name: "Attrition Rate", type: "Percentage", default: "30", unit: "% per year" }
    ]}
  }},
  "04": { name: "Subscription & Membership", models: {
    "04.01": { name: "SaaS Subscription", fields: [
      { name: "Monthly Recurring Revenue (MRR) – Year 1", type: "Currency", default: "", unit: "INR per month" },
      { name: "MoM MRR Growth Rate", type: "Percentage", default: "8", unit: "% per month" },
      { name: "Monthly Churn Rate", type: "Percentage", default: "2.5", unit: "% of MRR lost per month" },
      { name: "Average Revenue per User (ARPU) – Monthly", type: "Currency", default: "", unit: "INR per user per month" },
      { name: "Free Trial Period", type: "Number", default: "14", unit: "Days" },
      { name: "Trial-to-Paid Conversion Rate", type: "Percentage", default: "20", unit: "%" },
      { name: "Net Revenue Retention (NRR)", type: "Percentage", default: "105", unit: "% (>100% = expansion > churn)" },
      { name: "Customer Acquisition Cost (CAC)", type: "Currency", default: "", unit: "INR per paid customer" },
      { name: "LTV : CAC Ratio Target", type: "Number", default: "3", unit: "x" },
      { name: "Annual Plan Discount Offered", type: "Percentage", default: "15", unit: "% off monthly price" }
    ]},
    "04.02": { name: "Content / OTT Subscription", fields: [
      { name: "Paid Subscriber Base – Year 1", type: "Number", default: "", unit: "Subscribers" },
      { name: "Subscriber Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Monthly Subscription Fee", type: "Currency", default: "", unit: "INR per subscriber per month" },
      { name: "Annual Plan Discount", type: "Percentage", default: "15", unit: "% off monthly rate" },
      { name: "Annual Subscriber Churn Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Content Cost", type: "Percentage", default: "40", unit: "% of Revenue" },
      { name: "Ad Revenue (if free tier exists)", type: "Percentage", default: "0", unit: "% of Total Revenue from Ads" },
      { name: "Bandwidth / CDN Cost", type: "Percentage", default: "5", unit: "% of Revenue" }
    ]},
    "04.03": { name: "Membership Club", fields: [
      { name: "Active Members – Year 1", type: "Number", default: "", unit: "Members" },
      { name: "New Members Added per Month", type: "Number", default: "", unit: "Members per month" },
      { name: "Annual Membership Fee", type: "Currency", default: "", unit: "INR per member per year" },
      { name: "Member Renewal Rate", type: "Percentage", default: "65", unit: "% per year" },
      { name: "Ancillary Revenue per Member per Year", type: "Currency", default: "0", unit: "INR (F&B, events, merchandise)" },
      { name: "Member Servicing Cost per Member", type: "Currency", default: "", unit: "INR per member per year" }
    ]},
    "04.04": { name: "Newspaper / Magazine Subscription", fields: [
      { name: "Subscriber Base – Year 1", type: "Number", default: "", unit: "Subscribers" },
      { name: "Subscriber Growth Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Monthly Subscription Fee – Digital", type: "Currency", default: "", unit: "INR per subscriber per month" },
      { name: "Annual Churn Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Print vs Digital Split", type: "Percentage", default: "30", unit: "% of subs that are Print" },
      { name: "Print Distribution Cost per Copy", type: "Currency", default: "", unit: "INR per copy" },
      { name: "Ad Revenue as % of Total Revenue", type: "Percentage", default: "40", unit: "%" }
    ]},
    "04.05": { name: "Subscription Box", fields: [
      { name: "Active Subscribers – Year 1", type: "Number", default: "", unit: "Subscribers" },
      { name: "Subscriber Growth Rate", type: "Percentage", default: "25", unit: "% per year" },
      { name: "Monthly Box Price (charged to customer)", type: "Currency", default: "", unit: "INR per box per month" },
      { name: "Subscriber Churn Rate", type: "Percentage", default: "5", unit: "% per month" },
      { name: "COGS per Box (products inside)", type: "Currency", default: "", unit: "INR per box" },
      { name: "Packaging Cost per Box", type: "Currency", default: "80", unit: "INR per box" },
      { name: "Shipping Cost per Box", type: "Currency", default: "120", unit: "INR per box" },
      { name: "Return Rate", type: "Percentage", default: "3", unit: "% of boxes" }
    ]},
    "04.06": { name: "Insurance Premium Model", fields: [
      { name: "Gross Written Premium (GWP) – Year 1", type: "Currency", default: "", unit: "INR per year" },
      { name: "GWP Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Claims Loss Ratio", type: "Percentage", default: "70", unit: "% of Net Earned Premium" },
      { name: "Expense Ratio", type: "Percentage", default: "25", unit: "% of Net Earned Premium" },
      { name: "Combined Ratio", type: "Percentage", default: "95", unit: "%" },
      { name: "Reinsurance Ceded", type: "Percentage", default: "20", unit: "% of GWP ceded to reinsurer" },
      { name: "Investment Yield on Float", type: "Percentage", default: "7", unit: "% per year on investable float" },
      { name: "Policy Renewal Rate", type: "Percentage", default: "75", unit: "% of policies renewed" }
    ]},
    "04.07": { name: "EMI / Instalment Revenue", fields: [
      { name: "Loan / Credit Book Size – Year 1", type: "Currency", default: "", unit: "INR total outstanding" },
      { name: "Book Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Average Interest Rate Charged", type: "Percentage", default: "18", unit: "% per year" },
      { name: "Processing Fee per Loan", type: "Percentage", default: "2", unit: "% of Loan Amount" },
      { name: "Average Loan Tenure", type: "Number", default: "12", unit: "Months" },
      { name: "NPA / Default Rate", type: "Percentage", default: "3", unit: "% of Book" },
      { name: "Cost of Funds", type: "Percentage", default: "10", unit: "% per year" }
    ]}
  }},
  "05": { name: "Platform & Marketplace", models: {
    "05.01": { name: "Two-Sided Marketplace", fields: [
      { name: "Gross Merchandise Value (GMV) – Year 1", type: "Currency", default: "", unit: "INR per month" },
      { name: "GMV Growth Rate", type: "Percentage", default: "60", unit: "% per year" },
      { name: "Platform Take Rate / Commission", type: "Percentage", default: "12", unit: "% of GMV" },
      { name: "Average Order Value (AOV)", type: "Currency", default: "650", unit: "INR per order" },
      { name: "Orders per Active Buyer per Month", type: "Number", default: "1.5", unit: "Orders per buyer per month" },
      { name: "Active Buyer Base – Year 1", type: "Number", default: "", unit: "Buyers" },
      { name: "Active Buyer Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Active Seller Count – Year 1", type: "Number", default: "", unit: "Sellers" },
      { name: "Seller Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Seller Listing Fee", type: "Currency", default: "0", unit: "INR per seller per month" },
      { name: "Payment Gateway Cost", type: "Percentage", default: "2", unit: "% of GMV" },
      { name: "Customer Acquisition Cost (CAC)", type: "Currency", default: "", unit: "INR per buyer" },
      { name: "Logistics / Fulfilment Cost", type: "Percentage", default: "8", unit: "% of GMV" }
    ]},
    "05.02": { name: "Aggregator Model", fields: [
      { name: "GMV / Booking Value – Year 1", type: "Currency", default: "", unit: "INR per month" },
      { name: "GMV Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Commission on Each Booking", type: "Percentage", default: "18", unit: "% of Booking Value" },
      { name: "Average Booking Value", type: "Currency", default: "", unit: "INR per booking" },
      { name: "Bookings per Day – Year 1", type: "Number", default: "", unit: "Bookings per day" },
      { name: "Number of Service Providers / Partners", type: "Number", default: "", unit: "Onboarded providers" },
      { name: "Partner Onboarding Growth", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Customer Acquisition Cost", type: "Currency", default: "", unit: "INR per customer" },
      { name: "Customer Retention Rate", type: "Percentage", default: "60", unit: "% per year" }
    ]},
    "05.03": { name: "Gig / Freelance Platform", fields: [
      { name: "Total GMV of Projects – Year 1", type: "Currency", default: "", unit: "INR per month" },
      { name: "GMV Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Platform Commission on Each Project", type: "Percentage", default: "15", unit: "% of Project Value" },
      { name: "Number of Active Freelancers – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "Freelancer Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Number of Active Job Posters – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "Job Poster Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Featured Listing Fee", type: "Currency", default: "0", unit: "INR per listing (optional)" }
    ]},
    "05.04": { name: "Job / Recruitment Board", fields: [
      { name: "Number of Employer Clients – Year 1", type: "Number", default: "", unit: "Active employers" },
      { name: "Employer Growth Rate", type: "Percentage", default: "25", unit: "% per year" },
      { name: "Job Postings per Employer per Month", type: "Number", default: "3", unit: "Postings per employer" },
      { name: "Price per Job Posting", type: "Currency", default: "3000", unit: "INR per posting" },
      { name: "Resume Database Access – Annual Fee", type: "Currency", default: "", unit: "INR per employer per year" },
      { name: "Featured / Priority Listing Premium", type: "Percentage", default: "50", unit: "% premium over base price" }
    ]},
    "05.05": { name: "B2B Marketplace", fields: [
      { name: "GMV – Year 1", type: "Currency", default: "", unit: "INR per month" },
      { name: "GMV Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Platform Commission", type: "Percentage", default: "3", unit: "% of GMV" },
      { name: "Number of Buyer Businesses – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "Number of Supplier / Seller Businesses", type: "Number", default: "", unit: "Count" },
      { name: "Average Order Value", type: "Currency", default: "", unit: "INR per order" },
      { name: "Subscription Fee from Sellers", type: "Currency", default: "0", unit: "INR per seller per month" }
    ]},
    "05.06": { name: "Real Estate Portal", fields: [
      { name: "Number of Paying Builders / Agents – Yr 1", type: "Number", default: "", unit: "Count" },
      { name: "Client Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Average Revenue per Client per Month", type: "Currency", default: "", unit: "INR per client per month" },
      { name: "Client Churn Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Pay-per-Lead Revenue", type: "Currency", default: "0", unit: "INR per lead delivered" },
      { name: "Leads Generated per Month", type: "Number", default: "0", unit: "Count" }
    ]},
    "05.07": { name: "Matrimonial Platform", fields: [
      { name: "Paid Member Base – Year 1", type: "Number", default: "", unit: "Paid members" },
      { name: "Member Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Average Revenue per Paid Member", type: "Currency", default: "", unit: "INR per member per year" },
      { name: "Member Renewal Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Premium Profile / Spotlight Revenue", type: "Currency", default: "0", unit: "INR per upgrade" }
    ]},
    "05.08": { name: "Service Marketplace", fields: [
      { name: "Bookings per Month – Year 1", type: "Number", default: "", unit: "Service bookings per month" },
      { name: "Booking Volume Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Average Booking Value", type: "Currency", default: "800", unit: "INR per booking" },
      { name: "Platform Commission per Booking", type: "Percentage", default: "20", unit: "% of Booking Value" },
      { name: "Number of Service Professionals – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "Professional Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Customer Acquisition Cost", type: "Currency", default: "", unit: "INR per customer" }
    ]}
  }},
  "06": { name: "E-Commerce & D2C", models: {
    "06.01": { name: "Direct-to-Consumer (D2C)", fields: [
      { name: "Monthly Orders – Year 1", type: "Number", default: "", unit: "Orders per month" },
      { name: "Order Volume Growth Rate", type: "Percentage", default: "60", unit: "% per year" },
      { name: "Average Order Value (AOV)", type: "Currency", default: "800", unit: "INR per order" },
      { name: "AOV Growth Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Gross Margin on Products", type: "Percentage", default: "55", unit: "% of Revenue" },
      { name: "Customer Acquisition Cost (CAC)", type: "Currency", default: "400", unit: "INR per new customer" },
      { name: "Repeat Purchase Rate", type: "Percentage", default: "35", unit: "% of customers buying again in 12 months" },
      { name: "Customer Return Rate (Product Returns)", type: "Percentage", default: "8", unit: "% of Orders" },
      { name: "RTO Rate (Return to Origin)", type: "Percentage", default: "15", unit: "% of orders" },
      { name: "COD Orders Share", type: "Percentage", default: "50", unit: "% of Total Orders" },
      { name: "Fulfilment & Shipping Cost per Order", type: "Currency", default: "120", unit: "INR per order" },
      { name: "Marketplace Commission (if selling on Amz/Flipkart)", type: "Percentage", default: "15", unit: "% of Revenue through marketplace" },
      { name: "% Revenue from Own Website vs Marketplace", type: "Percentage", default: "40", unit: "% from own website" }
    ]},
    "06.02": { name: "Private Label / White Label", fields: [
      { name: "Monthly Units Sold – Year 1", type: "Number", default: "", unit: "Units per month" },
      { name: "Sales Volume Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Average Selling Price per Unit", type: "Currency", default: "", unit: "INR per unit" },
      { name: "Manufacturer Cost per Unit", type: "Currency", default: "", unit: "INR per unit" },
      { name: "Gross Margin", type: "Percentage", default: "50", unit: "% of Revenue" },
      { name: "Platform Commission (Marketplace)", type: "Percentage", default: "15", unit: "% of Revenue on marketplace channel" },
      { name: "Branding & Packaging Cost", type: "Currency", default: "", unit: "INR per unit" }
    ]},
    "06.03": { name: "Dropshipping", fields: [
      { name: "Monthly Orders – Year 1", type: "Number", default: "", unit: "Orders per month" },
      { name: "Order Volume Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Average Order Value", type: "Currency", default: "", unit: "INR per order" },
      { name: "Supplier Cost as % of Revenue", type: "Percentage", default: "70", unit: "% of Revenue" },
      { name: "Platform / Shopify Fees", type: "Currency", default: "3000", unit: "INR per month" },
      { name: "Customer Acquisition Cost", type: "Currency", default: "", unit: "INR per customer" },
      { name: "Return Rate", type: "Percentage", default: "10", unit: "% of Orders" }
    ]},
    "06.04": { name: "Quick Commerce (Q-Commerce)", fields: [
      { name: "Number of Dark Stores – Year 1", type: "Number", default: "", unit: "Dark stores" },
      { name: "Dark Store Expansion per Year", type: "Number", default: "", unit: "New stores added per year" },
      { name: "Dark Store Setup CapEx", type: "Currency", default: "2500000", unit: "INR per store" },
      { name: "Orders per Dark Store per Day", type: "Number", default: "200", unit: "Orders per store per day" },
      { name: "Average Order Value", type: "Currency", default: "450", unit: "INR per order" },
      { name: "Delivery Fee per Order", type: "Currency", default: "25", unit: "INR per order" },
      { name: "Platform Commission / Mark-up on Products", type: "Percentage", default: "8", unit: "% of Order Value" },
      { name: "Delivery Cost per Order", type: "Currency", default: "40", unit: "INR per order" },
      { name: "Dark Store Rent per Month", type: "Currency", default: "", unit: "INR per store per month" },
      { name: "Inventory Wastage / Expiry", type: "Percentage", default: "3", unit: "% of Inventory Value" }
    ]},
    "06.05": { name: "Social Commerce", fields: [
      { name: "Number of Active Resellers – Year 1", type: "Number", default: "", unit: "Resellers" },
      { name: "Reseller Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Average GMV per Reseller per Month", type: "Currency", default: "8000", unit: "INR per reseller per month" },
      { name: "Platform Margin on Sales", type: "Percentage", default: "10", unit: "% of GMV" },
      { name: "Reseller Commission Paid", type: "Percentage", default: "8", unit: "% of GMV" }
    ]},
    "06.06": { name: "Live Commerce", fields: [
      { name: "Live Streams per Month", type: "Number", default: "8", unit: "Sessions per month" },
      { name: "Average Viewers per Stream", type: "Number", default: "", unit: "Viewers per session" },
      { name: "Conversion Rate (Viewers to Buyers)", type: "Percentage", default: "5", unit: "%" },
      { name: "Average Order Value", type: "Currency", default: "600", unit: "INR per order" },
      { name: "Gross Margin on Products", type: "Percentage", default: "45", unit: "% of Revenue" },
      { name: "Host / Influencer Cost per Stream", type: "Currency", default: "", unit: "INR per stream" }
    ]},
    "06.07": { name: "Rental Commerce", fields: [
      { name: "Active Rental SKUs – Year 1", type: "Number", default: "", unit: "Number of products available for rent" },
      { name: "SKU Expansion Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Average Rental Fee per Month", type: "Currency", default: "", unit: "INR per SKU per month" },
      { name: "Average SKU Utilisation Rate", type: "Percentage", default: "60", unit: "% of time a SKU is rented out" },
      { name: "SKU Purchase Cost", type: "Currency", default: "", unit: "INR per unit (treated as CapEx)" },
      { name: "SKU Useful Life", type: "Number", default: "36", unit: "Months before replacement" },
      { name: "Damage / Loss Rate", type: "Percentage", default: "3", unit: "% of active SKUs per year" }
    ]}
  }},
  "07": { name: "Advertising & Media", models: {
    "07.01": { name: "Display Advertising", fields: [
      { name: "Monthly Active Users (MAU) – Year 1", type: "Number", default: "", unit: "Users" },
      { name: "MAU Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Ad Revenue per 1,000 Users (eCPM)", type: "Currency", default: "120", unit: "INR per 1,000 users per month" },
      { name: "Ad Fill Rate", type: "Percentage", default: "65", unit: "% of ad inventory sold" },
      { name: "Number of Advertiser Clients", type: "Number", default: "", unit: "Count" },
      { name: "Average Advertiser Spend per Month", type: "Currency", default: "", unit: "INR per advertiser per month" },
      { name: "Content / Platform Operating Cost", type: "Percentage", default: "30", unit: "% of Revenue" }
    ]},
    "07.02": { name: "Search Advertising", fields: [
      { name: "Monthly Search Queries – Year 1", type: "Number", default: "", unit: "Queries per month" },
      { name: "Query Volume Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Click-Through Rate (CTR)", type: "Percentage", default: "3", unit: "% of queries resulting in ad click" },
      { name: "Average Cost per Click (CPC)", type: "Currency", default: "15", unit: "INR per click" },
      { name: "Revenue Share with Platform", type: "Percentage", default: "0", unit: "% paid if on third-party platform" }
    ]},
    "07.03": { name: "Influencer Marketing", fields: [
      { name: "Number of Active Creator Partners – Yr 1", type: "Number", default: "", unit: "Creators" },
      { name: "Creator Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Average Revenue per Creator per Month", type: "Currency", default: "", unit: "INR per creator per month" },
      { name: "Creator Payout Share", type: "Percentage", default: "60", unit: "% of revenue shared with creator" },
      { name: "Brand Campaign Revenue per Month", type: "Currency", default: "", unit: "INR per month" }
    ]},
    "07.04": { name: "Affiliate Marketing", fields: [
      { name: "Monthly Website / Platform Visitors – Yr 1", type: "Number", default: "", unit: "Visitors per month" },
      { name: "Traffic Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Affiliate Click-Through Rate", type: "Percentage", default: "5", unit: "% of visitors clicking affiliate links" },
      { name: "Affiliate Conversion Rate", type: "Percentage", default: "3", unit: "% of clicks converting to sale" },
      { name: "Average Commission per Sale", type: "Currency", default: "", unit: "INR per sale" },
      { name: "Affiliate Payout Cost", type: "Percentage", default: "5", unit: "% of affiliate-driven revenue paid out" }
    ]},
    "07.05": { name: "Freemium Model", fields: [
      { name: "Total Registered Users – Year 1", type: "Number", default: "", unit: "Users" },
      { name: "User Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Free-to-Paid Conversion Rate", type: "Percentage", default: "3", unit: "% of free users upgrading to paid" },
      { name: "Paid Plan Monthly Price", type: "Currency", default: "", unit: "INR per user per month" },
      { name: "Churn Rate (Paid Users)", type: "Percentage", default: "3", unit: "% per month" },
      { name: "Ad Revenue from Free Users (eCPM)", type: "Currency", default: "60", unit: "INR per 1,000 free users per month" },
      { name: "Server / Infrastructure Cost per User", type: "Currency", default: "5", unit: "INR per MAU per month" }
    ]},
    "07.06": { name: "Free + Ads (Ad-Supported Free)", fields: [
      { name: "Monthly Active Users (MAU) – Year 1", type: "Number", default: "", unit: "Users" },
      { name: "MAU Growth Rate", type: "Percentage", default: "35", unit: "% per year" },
      { name: "Ad Revenue per User per Month (ARPU-Ads)", type: "Currency", default: "4", unit: "INR per MAU per month" },
      { name: "Number of Ad Slots per User Session", type: "Number", default: "3", unit: "Ad impressions per session" },
      { name: "Content / Streaming Cost", type: "Percentage", default: "35", unit: "% of Revenue" },
      { name: "Bandwidth / CDN Cost", type: "Percentage", default: "8", unit: "% of Revenue" }
    ]},
    "07.07": { name: "Sponsored Content / Native Ads", fields: [
      { name: "Number of Brand Content Campaigns – Yr 1", type: "Number", default: "", unit: "Campaigns per month" },
      { name: "Campaign Volume Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Average Revenue per Campaign", type: "Currency", default: "", unit: "INR per campaign" },
      { name: "Content Production Cost per Campaign", type: "Currency", default: "", unit: "INR per campaign" },
      { name: "Editorial Team Cost", type: "Percentage", default: "30", unit: "% of Revenue" }
    ]}
  }},
  "08": { name: "Fintech & Financial Services", models: {
    "08.01": { name: "Lending / NBFC Model", fields: [
      { name: "Loan Book (AUM) – Year 1", type: "Currency", default: "", unit: "INR Crores" },
      { name: "AUM Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Yield on Advances", type: "Percentage", default: "18", unit: "% per year" },
      { name: "Cost of Funds (Borrowing Rate)", type: "Percentage", default: "10", unit: "% per year" },
      { name: "Net Interest Margin (NIM)", type: "Percentage", default: "8", unit: "%" },
      { name: "Processing / Origination Fee", type: "Percentage", default: "2", unit: "% of each loan disbursed" },
      { name: "Gross NPA Ratio", type: "Percentage", default: "3", unit: "% of Gross Advances" },
      { name: "Credit Loss / Provision Rate", type: "Percentage", default: "1.5", unit: "% of Average Book" },
      { name: "Average Loan Ticket Size", type: "Currency", default: "", unit: "INR per borrower" },
      { name: "Average Loan Tenure", type: "Number", default: "18", unit: "Months" },
      { name: "Number of Loans Disbursed per Month – Yr 1", type: "Number", default: "", unit: "Count" }
    ]},
    "08.02": { name: "Payment Gateway", fields: [
      { name: "Total Payment Volume (TPV) – Year 1", type: "Currency", default: "", unit: "INR Crores per month" },
      { name: "TPV Growth Rate", type: "Percentage", default: "60", unit: "% per year" },
      { name: "Merchant Discount Rate (MDR) Charged", type: "Percentage", default: "1.5", unit: "% of TPV" },
      { name: "Interchange / Network Cost", type: "Percentage", default: "0.9", unit: "% of TPV" },
      { name: "Number of Active Merchants – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "Merchant Onboarding Rate", type: "Number", default: "", unit: "New merchants per month" },
      { name: "Flat Fee per Transaction (if any)", type: "Currency", default: "0", unit: "INR per transaction" }
    ]},
    "08.03": { name: "UPI / Digital Wallet", fields: [
      { name: "Transaction Volume (UPI/Wallet) – Year 1", type: "Currency", default: "", unit: "INR Crores per month" },
      { name: "Transaction Volume Growth Rate", type: "Percentage", default: "80", unit: "% per year" },
      { name: "Revenue per ₹1 Lakh of Transactions", type: "Currency", default: "150", unit: "INR" },
      { name: "Number of Active Users – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "User Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Wallet Float Interest Income", type: "Percentage", default: "5", unit: "% per year on average wallet balance" },
      { name: "Merchant Fee Revenue (non-UPI)", type: "Percentage", default: "0.5", unit: "% of non-UPI transaction volume" }
    ]},
    "08.04": { name: "Wealth Management / MF Distribution", fields: [
      { name: "Assets Under Management (AUM) – Year 1", type: "Currency", default: "", unit: "INR Crores" },
      { name: "AUM Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Trailing Commission / TER Earned", type: "Percentage", default: "0.5", unit: "% of AUM per year" },
      { name: "Advisory / Platform Fee", type: "Percentage", default: "0.5", unit: "% of AUM per year" },
      { name: "Number of Active Investors – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "Avg Portfolio Size per Investor", type: "Currency", default: "", unit: "INR per investor" },
      { name: "Investor Acquisition Cost", type: "Currency", default: "", unit: "INR per new investor" }
    ]},
    "08.05": { name: "Insurance Distribution / Broking", fields: [
      { name: "Total Premium Facilitated – Year 1", type: "Currency", default: "", unit: "INR Crores per year" },
      { name: "Premium Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Avg Commission Rate Earned", type: "Percentage", default: "12", unit: "% of Premium" },
      { name: "Policy Renewal Rate", type: "Percentage", default: "70", unit: "% per year" },
      { name: "Number of Policies Sold per Month", type: "Number", default: "", unit: "Count" },
      { name: "Customer Acquisition Cost per Policy", type: "Currency", default: "", unit: "INR per policy" }
    ]},
    "08.06": { name: "Buy Now Pay Later (BNPL)", fields: [
      { name: "BNPL GMV Facilitated – Year 1", type: "Currency", default: "", unit: "INR Crores per month" },
      { name: "GMV Growth Rate", type: "Percentage", default: "80", unit: "% per year" },
      { name: "Merchant Fee Charged (on GMV)", type: "Percentage", default: "2.5", unit: "% of GMV" },
      { name: "Average Ticket Size", type: "Currency", default: "3000", unit: "INR per BNPL transaction" },
      { name: "Average Repayment Period", type: "Number", default: "3", unit: "Months" },
      { name: "Default / NPA Rate", type: "Percentage", default: "3", unit: "% of GMV" },
      { name: "Interest Income on Overdue", type: "Percentage", default: "24", unit: "% per year on overdue amount" }
    ]},
    "08.07": { name: "Neobank / Digital Bank", fields: [
      { name: "Number of Active Accounts – Year 1", type: "Number", default: "", unit: "Accounts" },
      { name: "Account Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Revenue per Account per Month", type: "Currency", default: "200", unit: "INR" },
      { name: "Premium Account Subscription Fee", type: "Currency", default: "", unit: "INR per premium account per month" },
      { name: "% of Accounts on Premium Plan", type: "Percentage", default: "15", unit: "%" },
      { name: "Interchange Income per Account", type: "Currency", default: "50", unit: "INR per active account per month" },
      { name: "Loan Cross-Sell AUM per Account", type: "Currency", default: "0", unit: "INR" }
    ]},
    "08.08": { name: "Microfinance (MFI)", fields: [
      { name: "Loan Book (AUM) – Year 1", type: "Currency", default: "", unit: "INR Crores" },
      { name: "AUM Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Avg Interest Rate on Micro Loans", type: "Percentage", default: "22", unit: "% per year" },
      { name: "Average Loan Ticket Size", type: "Currency", default: "35000", unit: "INR per borrower" },
      { name: "Loan Tenure", type: "Number", default: "24", unit: "Months" },
      { name: "Group Size (JLG Model)", type: "Number", default: "5", unit: "Members per Joint Liability Group" },
      { name: "Cost of Funds", type: "Percentage", default: "12", unit: "% per year" },
      { name: "Gross NPA Rate", type: "Percentage", default: "2", unit: "% of Portfolio" }
    ]}
  }},
  "09": { name: "Agriculture & Food", models: {
    "09.01": { name: "Farm-to-Fork / Agri-tech Platform", fields: [
      { name: "GMV of Produce Transacted – Year 1", type: "Currency", default: "", unit: "INR Crores per year" },
      { name: "GMV Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Platform Commission on Transactions", type: "Percentage", default: "5", unit: "% of GMV" },
      { name: "Number of Farmer Sellers – Year 1", type: "Number", default: "", unit: "Farmers" },
      { name: "Number of Buyer Clients – Year 1", type: "Number", default: "", unit: "Buyers" },
      { name: "Input Supply Revenue (seeds, fertilisers)", type: "Currency", default: "0", unit: "INR per month" },
      { name: "Logistics & Cold Chain Cost", type: "Percentage", default: "8", unit: "% of GMV" }
    ]},
    "09.02": { name: "Contract Farming", fields: [
      { name: "Number of Contracted Farmers – Year 1", type: "Number", default: "", unit: "Farmers" },
      { name: "Contracted Acreage", type: "Number", default: "", unit: "Acres under contract" },
      { name: "Guaranteed Buyback Price per Unit", type: "Currency", default: "", unit: "INR per kg / quintal" },
      { name: "Market Price Uplift Charged to Buyers", type: "Percentage", default: "8", unit: "% premium over buyback price" },
      { name: "Yield per Acre", type: "Number", default: "", unit: "Kg per acre per season" },
      { name: "Seasons per Year", type: "Number", default: "2", unit: "Cropping seasons" },
      { name: "Input Supply Cost to Farmers", type: "Currency", default: "", unit: "INR per acre per season" }
    ]},
    "09.03": { name: "Food Delivery Platform", fields: [
      { name: "Daily Orders – Year 1", type: "Number", default: "", unit: "Orders per day" },
      { name: "Order Volume Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Average Order Value", type: "Currency", default: "380", unit: "INR per order" },
      { name: "Restaurant Commission Rate", type: "Percentage", default: "22", unit: "% of Order Value" },
      { name: "Delivery Fee Charged to Consumer", type: "Currency", default: "35", unit: "INR per order" },
      { name: "Delivery Partner Payout per Order", type: "Currency", default: "50", unit: "INR per order" },
      { name: "Platform Ads Revenue (from restaurants)", type: "Percentage", default: "5", unit: "% of Total Revenue" },
      { name: "Customer Acquisition Cost", type: "Currency", default: "", unit: "INR per new customer" }
    ]},
    "09.04": { name: "Cloud Kitchen / Ghost Kitchen", fields: [
      { name: "Number of Kitchens – Year 1", type: "Number", default: "", unit: "Kitchen units" },
      { name: "Kitchen Expansion per Year", type: "Number", default: "", unit: "New kitchens per year" },
      { name: "Kitchen Setup CapEx", type: "Currency", default: "1000000", unit: "INR per kitchen" },
      { name: "Orders per Kitchen per Day", type: "Number", default: "150", unit: "Orders per day" },
      { name: "Average Order Value", type: "Currency", default: "350", unit: "INR per order" },
      { name: "Food Cost (Ingredients)", type: "Percentage", default: "30", unit: "% of Revenue" },
      { name: "Packaging Cost per Order", type: "Currency", default: "20", unit: "INR per order" },
      { name: "Delivery Platform Commission", type: "Percentage", default: "22", unit: "% of Revenue" },
      { name: "Kitchen Rent per Month", type: "Currency", default: "", unit: "INR per kitchen per month" },
      { name: "Chef & Kitchen Staff Cost per Kitchen", type: "Currency", default: "", unit: "INR per kitchen per month" },
      { name: "Own Delivery vs Platform Split", type: "Percentage", default: "0", unit: "% of orders delivered by own fleet" }
    ]},
    "09.05": { name: "Commodity Trading", fields: [
      { name: "Trading Volume – Year 1", type: "Currency", default: "", unit: "INR Crores per month" },
      { name: "Volume Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Avg Net Spread per Trade", type: "Percentage", default: "2", unit: "% of Trade Value" },
      { name: "Inventory Holding Period", type: "Number", default: "7", unit: "Days" },
      { name: "Commodity Price Volatility Provision", type: "Percentage", default: "1", unit: "% of Inventory Value" }
    ]},
    "09.06": { name: "Dairy Co-operative", fields: [
      { name: "Number of Farmer Members – Year 1", type: "Number", default: "", unit: "Members" },
      { name: "Milk Procurement per Member per Day", type: "Number", default: "8", unit: "Litres per farmer per day" },
      { name: "Procurement Price Paid to Farmers", type: "Currency", default: "35", unit: "INR per litre" },
      { name: "Processed Milk Selling Price", type: "Currency", default: "55", unit: "INR per litre" },
      { name: "Product Mix – Value-Added Products", type: "Percentage", default: "40", unit: "% of Revenue from value-added" },
      { name: "Processing Plant CapEx", type: "Currency", default: "", unit: "INR" },
      { name: "Surplus Distributed to Members", type: "Percentage", default: "70", unit: "% of Net Profit returned to farmers" }
    ]}
  }},
  "10": { name: "EdTech & Education", models: {
    "10.01": { name: "Tutoring / Coaching Centre", fields: [
      { name: "Student Enrolments – Year 1", type: "Number", default: "", unit: "Students" },
      { name: "Enrolment Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Annual Fee per Student", type: "Currency", default: "", unit: "INR per student per year" },
      { name: "Fee Growth Rate", type: "Percentage", default: "8", unit: "% per year" },
      { name: "Batch Size", type: "Number", default: "30", unit: "Students per batch" },
      { name: "Faculty Cost per Batch per Month", type: "Currency", default: "", unit: "INR per batch per month" },
      { name: "Classroom / Centre Rent", type: "Currency", default: "", unit: "INR per month" },
      { name: "Course Completion Rate", type: "Percentage", default: "70", unit: "%" }
    ]},
    "10.02": { name: "Online Course / MOOC Platform", fields: [
      { name: "Registered Users – Year 1", type: "Number", default: "", unit: "Users" },
      { name: "User Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Course Purchase Conversion Rate", type: "Percentage", default: "5", unit: "% of users buying a course" },
      { name: "Average Course Price", type: "Currency", default: "", unit: "INR per course" },
      { name: "Courses in Catalogue", type: "Number", default: "", unit: "Number of courses" },
      { name: "Subscription Plan Price (if offered)", type: "Currency", default: "0", unit: "INR per user per month" },
      { name: "Subscription Subscribers", type: "Number", default: "0", unit: "Count" },
      { name: "Content Production Cost", type: "Currency", default: "", unit: "INR per course (one-time CapEx)" },
      { name: "Instructor Revenue Share", type: "Percentage", default: "40", unit: "% of course revenue paid to instructor" }
    ]},
    "10.03": { name: "Bootcamp / Upskilling Program", fields: [
      { name: "Students Enrolled per Cohort", type: "Number", default: "", unit: "Students per batch" },
      { name: "Cohorts Run per Year", type: "Number", default: "4", unit: "Batches per year" },
      { name: "Program Fee per Student", type: "Currency", default: "", unit: "INR per student" },
      { name: "Placement Rate", type: "Percentage", default: "70", unit: "% of graduates placed" },
      { name: "Faculty & Curriculum Cost per Cohort", type: "Currency", default: "", unit: "INR per cohort" },
      { name: "Job Placement / Hiring Partner Revenue", type: "Currency", default: "0", unit: "INR per placed student" }
    ]},
    "10.04": { name: "Income Share Agreement (ISA)", fields: [
      { name: "Students Enrolled per Year – Year 1", type: "Number", default: "", unit: "Students per year" },
      { name: "Enrolment Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Training Cost per Student", type: "Currency", default: "", unit: "INR per student" },
      { name: "Placement Rate", type: "Percentage", default: "70", unit: "% of students placed" },
      { name: "Minimum Qualifying Salary", type: "Currency", default: "500000", unit: "INR per year" },
      { name: "ISA Rate", type: "Percentage", default: "17", unit: "% of monthly salary collected" },
      { name: "ISA Collection Period", type: "Number", default: "36", unit: "Months" },
      { name: "ISA Cap (max collectible)", type: "Currency", default: "", unit: "INR" }
    ]},
    "10.05": { name: "Institutional / B2B EdTech", fields: [
      { name: "Number of Schools / Institutions – Year 1", type: "Number", default: "", unit: "Clients" },
      { name: "Client Growth Rate", type: "Percentage", default: "25", unit: "% per year" },
      { name: "Annual Licence Fee per Institution", type: "Currency", default: "", unit: "INR per institution per year" },
      { name: "Client Renewal Rate", type: "Percentage", default: "80", unit: "% per year" },
      { name: "Students per Institution", type: "Number", default: "500", unit: "Average students per school" },
      { name: "Per-Student Licence Fee (if applicable)", type: "Currency", default: "0", unit: "INR per student per year" }
    ]},
    "10.06": { name: "Test Prep / Mock Test Platform", fields: [
      { name: "Paid Subscribers – Year 1", type: "Number", default: "", unit: "Subscribers" },
      { name: "Subscriber Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Monthly Subscription Price", type: "Currency", default: "", unit: "INR per student per month" },
      { name: "Annual Plan Discount", type: "Percentage", default: "20", unit: "% off monthly rate" },
      { name: "Monthly Churn Rate", type: "Percentage", default: "5", unit: "% per month" },
      { name: "Content & Question Bank Development Cost", type: "Currency", default: "", unit: "INR per year (CapEx)" }
    ]}
  }},
  "11": { name: "Healthtech & Healthcare", models: {
    "11.01": { name: "Clinic / Hospital (OPD / IPD)", fields: [
      { name: "OPD Consultations per Day – Year 1", type: "Number", default: "", unit: "Patients per day" },
      { name: "OPD Growth Rate", type: "Percentage", default: "15", unit: "% per year" },
      { name: "Average OPD Consultation Fee", type: "Currency", default: "500", unit: "INR per visit" },
      { name: "Number of Beds (IPD)", type: "Number", default: "", unit: "Beds (0 if OPD-only)" },
      { name: "Bed Occupancy Rate", type: "Percentage", default: "65", unit: "%" },
      { name: "Average Revenue per Occupied Bed per Day", type: "Currency", default: "8000", unit: "INR per bed per day" },
      { name: "Surgery / Procedure Revenue Share", type: "Percentage", default: "30", unit: "% of Total Revenue" },
      { name: "Diagnostic Revenue Share", type: "Percentage", default: "20", unit: "% of Total Revenue" },
      { name: "Pharmacy Revenue Share", type: "Percentage", default: "15", unit: "% of Total Revenue" },
      { name: "Medical Equipment CapEx", type: "Currency", default: "", unit: "INR one-time" },
      { name: "Doctor Cost (% of Clinical Revenue)", type: "Percentage", default: "25", unit: "%" },
      { name: "Medical Consumables Cost", type: "Percentage", default: "12", unit: "% of Revenue" }
    ]},
    "11.02": { name: "Diagnostic / Pathology Lab", fields: [
      { name: "Tests per Day – Year 1", type: "Number", default: "", unit: "Tests per day" },
      { name: "Test Volume Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Average Revenue per Test", type: "Currency", default: "400", unit: "INR per test" },
      { name: "Reagents & Consumables Cost", type: "Percentage", default: "25", unit: "% of Revenue" },
      { name: "Home Collection Fee", type: "Currency", default: "100", unit: "INR per home visit" },
      { name: "% of Tests via Home Collection", type: "Percentage", default: "20", unit: "%" },
      { name: "Lab Equipment CapEx", type: "Currency", default: "", unit: "INR one-time" }
    ]},
    "11.03": { name: "Online Pharmacy / e-Pharma", fields: [
      { name: "Monthly Orders – Year 1", type: "Number", default: "", unit: "Orders per month" },
      { name: "Order Volume Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Average Order Value", type: "Currency", default: "600", unit: "INR per order" },
      { name: "Gross Margin on Medicines", type: "Percentage", default: "22", unit: "% of Revenue" },
      { name: "Return Rate", type: "Percentage", default: "3", unit: "% of Orders" },
      { name: "Delivery Cost per Order", type: "Currency", default: "40", unit: "INR per order" },
      { name: "Prescription-based vs OTC Split", type: "Percentage", default: "60", unit: "% of Revenue from Rx drugs" }
    ]},
    "11.04": { name: "Telemedicine / Online Consultation", fields: [
      { name: "Consultations per Month – Year 1", type: "Number", default: "", unit: "Consultations per month" },
      { name: "Consultation Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Average Consultation Fee", type: "Currency", default: "350", unit: "INR per consultation" },
      { name: "Doctor Revenue Share", type: "Percentage", default: "60", unit: "% of Fee paid to doctor" },
      { name: "Number of Doctors on Platform", type: "Number", default: "", unit: "Count" },
      { name: "Avg Consultations per Doctor per Day", type: "Number", default: "8", unit: "Consultations" },
      { name: "Platform Subscription for Doctors", type: "Currency", default: "0", unit: "INR per doctor per month" }
    ]},
    "11.05": { name: "Health Insurance / TPA", fields: [
      { name: "Lives Covered – Year 1", type: "Number", default: "", unit: "Insured individuals" },
      { name: "Lives Growth Rate", type: "Percentage", default: "25", unit: "% per year" },
      { name: "Average Premium per Life per Year", type: "Currency", default: "8000", unit: "INR per insured life" },
      { name: "Claims Ratio", type: "Percentage", default: "70", unit: "% of Net Premium" },
      { name: "TPA Admin Fee", type: "Percentage", default: "5", unit: "% of Premium Processed" },
      { name: "Policy Renewal Rate", type: "Percentage", default: "75", unit: "%" }
    ]},
    "11.06": { name: "Wellness / Preventive Health", fields: [
      { name: "Active Members / Subscribers – Year 1", type: "Number", default: "", unit: "Members" },
      { name: "Member Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Monthly Subscription Fee", type: "Currency", default: "", unit: "INR per member per month" },
      { name: "Monthly Churn Rate", type: "Percentage", default: "4", unit: "% per month" },
      { name: "Pay-per-Session Revenue", type: "Currency", default: "0", unit: "INR per session" },
      { name: "Coach / Trainer Cost per Member", type: "Currency", default: "", unit: "INR per active member per month" },
      { name: "App / Digital Platform Cost", type: "Currency", default: "", unit: "INR per month" }
    ]}
  }},
  "12": { name: "Real Estate & Infrastructure", models: {
    "12.01": { name: "Property Development & Sales", fields: [
      { name: "Total Saleable Area", type: "Number", default: "", unit: "Square Feet" },
      { name: "Sales Velocity", type: "Number", default: "", unit: "Units sold per month" },
      { name: "Average Selling Price", type: "Currency", default: "", unit: "INR per sq ft" },
      { name: "Selling Price Appreciation", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Land Cost", type: "Currency", default: "", unit: "INR per sq ft of total area" },
      { name: "Construction Cost", type: "Currency", default: "2500", unit: "INR per sq ft" },
      { name: "Construction Cost Escalation", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Approvals & Legal Cost", type: "Percentage", default: "3", unit: "% of Total Project Cost" },
      { name: "Marketing & Brokerage Cost", type: "Percentage", default: "4", unit: "% of Revenue" },
      { name: "Booking Advance Collected", type: "Percentage", default: "10", unit: "% of Unit Price at Booking" },
      { name: "Collection Milestone Schedule", type: "Text", default: "10/30/30/20/10", unit: "% at Booking/Foundation/Slab/Handover/OC" }
    ]},
    "12.02": { name: "Build-Operate-Transfer (BOT)", fields: [
      { name: "Total Project Cost (CapEx)", type: "Currency", default: "", unit: "INR Crores" },
      { name: "Concession Period", type: "Number", default: "25", unit: "Years" },
      { name: "Revenue Commencement Year", type: "Number", default: "2", unit: "Year from project start" },
      { name: "Annual Revenue from Operations", type: "Currency", default: "", unit: "INR Crores per year" },
      { name: "Annual Revenue Growth Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Annual O&M Cost", type: "Percentage", default: "3", unit: "% of Project Cost per year" },
      { name: "Revenue Share to Government", type: "Percentage", default: "10", unit: "% of Gross Revenue" }
    ]},
    "12.03": { name: "REIT", fields: [
      { name: "Total Leasable Area", type: "Number", default: "", unit: "Square Feet" },
      { name: "Occupancy Rate", type: "Percentage", default: "90", unit: "%" },
      { name: "Avg Rent per Sq Ft per Month", type: "Currency", default: "", unit: "INR per sq ft per month" },
      { name: "Annual Rent Escalation", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Total Asset Value", type: "Currency", default: "", unit: "INR Crores" },
      { name: "Dividend Distribution Ratio", type: "Percentage", default: "90", unit: "% of distributable cash flow" },
      { name: "Interest Cost on Debt", type: "Percentage", default: "8", unit: "% per year" }
    ]},
    "12.04": { name: "Co-Working Space", fields: [
      { name: "Total Seats Available", type: "Number", default: "", unit: "Seats" },
      { name: "Seat Occupancy Rate", type: "Percentage", default: "70", unit: "%" },
      { name: "Average Revenue per Seat per Month", type: "Currency", default: "8000", unit: "INR per occupied seat per month" },
      { name: "Revenue Mix – Flexible vs Managed", type: "Percentage", default: "40", unit: "% Flexible Desks" },
      { name: "Managed Office Premium Multiplier", type: "Number", default: "1.5", unit: "x of flexible desk rate" },
      { name: "Master Lease Cost per Seat per Month", type: "Currency", default: "4000", unit: "INR per seat per month" },
      { name: "CapEx per Seat (fit-out)", type: "Currency", default: "50000", unit: "INR per seat one-time" },
      { name: "Ancillary Revenue per Member", type: "Currency", default: "500", unit: "INR per member per month" }
    ]},
    "12.05": { name: "Coliving / PG / Hostel", fields: [
      { name: "Total Beds Available", type: "Number", default: "", unit: "Beds" },
      { name: "Bed Occupancy Rate", type: "Percentage", default: "80", unit: "%" },
      { name: "Average Revenue per Bed per Month", type: "Currency", default: "12000", unit: "INR per occupied bed per month" },
      { name: "Services Included (Meals etc.)", type: "Dropdown", default: "Included", unit: "", options: ["Included","Excluded"] },
      { name: "Food Cost per Resident per Month", type: "Currency", default: "3000", unit: "INR" },
      { name: "Housekeeping & Utilities per Bed", type: "Currency", default: "1500", unit: "INR per bed per month" },
      { name: "Lease Cost per Bed per Month", type: "Currency", default: "", unit: "INR per bed per month" }
    ]},
    "12.06": { name: "Property Management Services", fields: [
      { name: "Number of Properties Managed – Year 1", type: "Number", default: "", unit: "Properties" },
      { name: "Property Portfolio Growth Rate", type: "Percentage", default: "20", unit: "% per year" },
      { name: "Average Monthly Rent of Managed Property", type: "Currency", default: "", unit: "INR per property per month" },
      { name: "Management Fee Rate", type: "Percentage", default: "8", unit: "% of Monthly Rent collected" },
      { name: "Leasing / Finding Fee", type: "Number", default: "1", unit: "Months of Rent (one-time per new tenant)" }
    ]}
  }},
  "13": { name: "Logistics & Supply Chain", models: {
    "13.01": { name: "3PL (Third-Party Logistics)", fields: [
      { name: "Shipments per Month – Year 1", type: "Number", default: "", unit: "Shipments per month" },
      { name: "Shipment Volume Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Average Revenue per Shipment", type: "Currency", default: "60", unit: "INR per shipment" },
      { name: "Revenue per Shipment Growth Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Fuel & Vehicle Cost", type: "Percentage", default: "20", unit: "% of Revenue" },
      { name: "Warehouse Cost", type: "Percentage", default: "15", unit: "% of Revenue" },
      { name: "Fleet Size – Year 1", type: "Number", default: "", unit: "Vehicles" },
      { name: "Fleet CapEx per Vehicle", type: "Currency", default: "1500000", unit: "INR per vehicle" },
      { name: "Fuel Price Assumption", type: "Currency", default: "100", unit: "INR per litre" }
    ]},
    "13.02": { name: "Freight Brokerage / Truck Aggregator", fields: [
      { name: "Freight Bookings per Month – Year 1", type: "Number", default: "", unit: "Bookings per month" },
      { name: "Booking Volume Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Average Freight Value per Booking", type: "Currency", default: "", unit: "INR per booking" },
      { name: "Platform Margin / Spread", type: "Percentage", default: "5", unit: "% of Freight Value" },
      { name: "Number of Registered Truck Owners", type: "Number", default: "", unit: "Truck owners on platform" },
      { name: "Platform Subscription Fee (Trucks)", type: "Currency", default: "0", unit: "INR per truck per month" }
    ]},
    "13.03": { name: "Cold Chain / Specialised Logistics", fields: [
      { name: "Shipments per Month – Year 1", type: "Number", default: "", unit: "Shipments" },
      { name: "Shipment Growth Rate", type: "Percentage", default: "25", unit: "% per year" },
      { name: "Average Revenue per Shipment", type: "Currency", default: "", unit: "INR per shipment" },
      { name: "Refrigeration / Cold Storage Running Cost", type: "Percentage", default: "25", unit: "% of Revenue" },
      { name: "Reefer Vehicle CapEx", type: "Currency", default: "3500000", unit: "INR per vehicle" },
      { name: "Cold Storage Warehouse Cost", type: "Currency", default: "", unit: "INR per sq ft per month" }
    ]},
    "13.04": { name: "Toll / Toll-Operate-Transfer", fields: [
      { name: "Daily Traffic Volume – Year 1", type: "Number", default: "", unit: "Vehicles per day" },
      { name: "Traffic Growth Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Average Toll per Vehicle", type: "Currency", default: "75", unit: "INR per vehicle" },
      { name: "Toll Revision Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "O&M Cost per Year", type: "Currency", default: "", unit: "INR per year" },
      { name: "Concession Period", type: "Number", default: "20", unit: "Years" }
    ]},
    "13.05": { name: "Courier / Parcel Delivery", fields: [
      { name: "Parcels Delivered per Month – Year 1", type: "Number", default: "", unit: "Parcels per month" },
      { name: "Parcel Volume Growth Rate", type: "Percentage", default: "25", unit: "% per year" },
      { name: "Average Revenue per Parcel", type: "Currency", default: "55", unit: "INR per parcel" },
      { name: "Fuel Cost per Parcel", type: "Currency", default: "12", unit: "INR per parcel" },
      { name: "Last-Mile Delivery Agent Cost", type: "Currency", default: "15", unit: "INR per parcel" },
      { name: "Failed Delivery Rate", type: "Percentage", default: "5", unit: "% of parcels" }
    ]}
  }},
  "14": { name: "Franchise & Licensing", models: {
    "14.01": { name: "Franchise Model", fields: [
      { name: "Total Franchise Outlets – Year 1", type: "Number", default: "", unit: "Outlets" },
      { name: "New Outlets Added per Year", type: "Number", default: "", unit: "Outlets per year" },
      { name: "One-Time Franchise Fee per Outlet", type: "Currency", default: "500000", unit: "INR per outlet" },
      { name: "Royalty Rate", type: "Percentage", default: "5", unit: "% of Franchisee Revenue" },
      { name: "Average Monthly Revenue per Outlet", type: "Currency", default: "", unit: "INR per outlet per month" },
      { name: "Equipment / Supply Sales to Franchisee", type: "Currency", default: "0", unit: "INR per outlet per month" },
      { name: "Brand Marketing Fund Contribution", type: "Percentage", default: "2", unit: "% of Franchisee Revenue" }
    ]},
    "14.02": { name: "Master Franchise", fields: [
      { name: "Number of Sub-Franchisees – Year 1", type: "Number", default: "", unit: "Sub-franchisees" },
      { name: "Sub-Franchisee Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Master Franchise Fee (one-time)", type: "Currency", default: "", unit: "INR" },
      { name: "Sub-Franchise Fee Collected (one-time)", type: "Currency", default: "", unit: "INR per sub-franchisee" },
      { name: "Royalty Collected from Sub-Franchisees", type: "Percentage", default: "5", unit: "% of Sub-Franchisee Revenue" },
      { name: "Royalty Paid to Master Brand", type: "Percentage", default: "2", unit: "% of Total System Sales" },
      { name: "Avg Monthly Revenue per Sub-Franchisee", type: "Currency", default: "", unit: "INR per outlet per month" }
    ]},
    "14.03": { name: "Licensing (IP / Brand)", fields: [
      { name: "Number of Licensees – Year 1", type: "Number", default: "", unit: "Companies licensing the IP" },
      { name: "New Licensees per Year", type: "Number", default: "", unit: "Count" },
      { name: "Upfront Licence Fee per Licensee", type: "Currency", default: "", unit: "INR per licensee" },
      { name: "Royalty Rate on Licensee Revenue", type: "Percentage", default: "5", unit: "% of Licensee Revenue" },
      { name: "Avg Annual Revenue of Each Licensee", type: "Currency", default: "", unit: "INR per licensee per year" },
      { name: "IP Maintenance / Legal Cost", type: "Currency", default: "", unit: "INR per year" }
    ]},
    "14.04": { name: "Technology Licensing", fields: [
      { name: "Number of Technology Licensees – Year 1", type: "Number", default: "", unit: "Licensees" },
      { name: "New Licensees per Year", type: "Number", default: "", unit: "Count" },
      { name: "Annual Licence Fee per Licensee", type: "Currency", default: "", unit: "INR per licensee per year" },
      { name: "Royalty per Unit Produced by Licensee", type: "Currency", default: "0", unit: "INR per unit" },
      { name: "R&D / IP Maintenance Cost", type: "Currency", default: "", unit: "INR per year" }
    ]}
  }},
  "15": { name: "Govt, PSU & Social Sector", models: {
    "15.01": { name: "Public Utility / Tariff Model", fields: [
      { name: "Service Volume – Year 1", type: "Number", default: "", unit: "Units" },
      { name: "Volume Growth Rate", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Average Tariff per Unit", type: "Currency", default: "", unit: "INR per unit of service" },
      { name: "Tariff Revision Frequency", type: "Text", default: "Annual", unit: "Annual / Biennial / Per regulator" },
      { name: "Cost of Service Delivery per Unit", type: "Currency", default: "", unit: "INR per unit" },
      { name: "Government Subsidy Received", type: "Currency", default: "0", unit: "INR per year" },
      { name: "Collection Efficiency", type: "Percentage", default: "85", unit: "% of billed revenue actually collected" }
    ]},
    "15.02": { name: "PPP (Public-Private Partnership)", fields: [
      { name: "Private Partner Capital Investment", type: "Currency", default: "", unit: "INR Crores" },
      { name: "Government Capital Grant (VGF)", type: "Currency", default: "0", unit: "INR Crores" },
      { name: "Concession Period", type: "Number", default: "25", unit: "Years" },
      { name: "Annual Revenue from Operations", type: "Currency", default: "", unit: "INR Crores per year" },
      { name: "Annual Revenue Growth", type: "Percentage", default: "5", unit: "% per year" },
      { name: "Revenue Share to Government", type: "Percentage", default: "10", unit: "% of Gross Revenue" },
      { name: "O&M Cost", type: "Percentage", default: "4", unit: "% of Capital Cost per year" }
    ]},
    "15.03": { name: "Grant / Subsidy-Funded NGO", fields: [
      { name: "Annual Grant Income – Year 1", type: "Currency", default: "", unit: "INR per year" },
      { name: "Grant Growth Rate", type: "Percentage", default: "10", unit: "% per year" },
      { name: "CSR Income", type: "Currency", default: "", unit: "INR per year" },
      { name: "Fee / Service Income (if any)", type: "Currency", default: "0", unit: "INR per year" },
      { name: "Programme Delivery Cost", type: "Percentage", default: "70", unit: "% of Total Income" },
      { name: "Admin & Overhead Ratio", type: "Percentage", default: "15", unit: "% of Total Income" },
      { name: "Beneficiaries Served per Year", type: "Number", default: "", unit: "People / units of impact" }
    ]},
    "15.04": { name: "Government Contract / Tender", fields: [
      { name: "Number of Active Contracts – Year 1", type: "Number", default: "", unit: "Contracts" },
      { name: "New Contracts Won per Year", type: "Number", default: "", unit: "Count" },
      { name: "Average Contract Value", type: "Currency", default: "", unit: "INR Crores per contract" },
      { name: "Average Contract Duration", type: "Number", default: "24", unit: "Months" },
      { name: "Bid Win Rate", type: "Percentage", default: "25", unit: "% of tenders bid that are won" },
      { name: "Number of Bids Filed per Year", type: "Number", default: "", unit: "Bids per year" },
      { name: "Payment Collection Lag", type: "Number", default: "90", unit: "Days from invoice to receipt" },
      { name: "Performance Retention Withheld", type: "Percentage", default: "5", unit: "% of Contract Value" },
      { name: "Execution Cost", type: "Percentage", default: "70", unit: "% of Contract Value" }
    ]},
    "15.05": { name: "Cross-Subsidy Model", fields: [
      { name: "Premium Segment Revenue – Year 1", type: "Currency", default: "", unit: "INR per year" },
      { name: "Premium Segment Growth Rate", type: "Percentage", default: "10", unit: "% per year" },
      { name: "Subsidised Segment Revenue", type: "Currency", default: "", unit: "INR per year" },
      { name: "Subsidised Segment Cost", type: "Currency", default: "", unit: "INR per year" },
      { name: "Cross-Subsidy Transfer Amount", type: "Currency", default: "", unit: "INR per year" },
      { name: "Government Subsidy Received", type: "Currency", default: "0", unit: "INR per year" }
    ]}
  }},
  "16": { name: "Energy & Sustainability", models: {
    "16.01": { name: "Power Purchase Agreement (PPA)", fields: [
      { name: "Installed Capacity", type: "Number", default: "", unit: "MW" },
      { name: "Plant Load Factor (PLF)", type: "Percentage", default: "22", unit: "%" },
      { name: "PPA Tariff", type: "Currency", default: "2.80", unit: "INR per kWh" },
      { name: "PPA Tariff Escalation", type: "Percentage", default: "0", unit: "% per year" },
      { name: "CapEx per MW", type: "Currency", default: "45000000", unit: "INR per MW" },
      { name: "O&M Cost per MW per Year", type: "Currency", default: "800000", unit: "INR per MW per year" },
      { name: "Panel / Turbine Degradation Rate", type: "Percentage", default: "0.7", unit: "% per year" },
      { name: "PPA Contract Duration", type: "Number", default: "25", unit: "Years" },
      { name: "Debt Funding of CapEx", type: "Percentage", default: "70", unit: "% of CapEx funded by debt" }
    ]},
    "16.02": { name: "Energy-as-a-Service (EaaS)", fields: [
      { name: "Number of Client Sites – Year 1", type: "Number", default: "", unit: "Sites" },
      { name: "New Sites per Year", type: "Number", default: "", unit: "Sites per year" },
      { name: "Energy Consumption per Site per Month", type: "Number", default: "", unit: "kWh per site per month" },
      { name: "Price Charged per kWh (to client)", type: "Currency", default: "8", unit: "INR per kWh" },
      { name: "Cost of Energy Procured / Generated", type: "Currency", default: "4", unit: "INR per kWh" },
      { name: "Equipment CapEx per Site", type: "Currency", default: "", unit: "INR per site" },
      { name: "Contract Duration per Site", type: "Number", default: "10", unit: "Years" }
    ]},
    "16.03": { name: "Carbon Credit Trading", fields: [
      { name: "Carbon Credits Generated per Year – Yr 1", type: "Number", default: "", unit: "tCO2e per year" },
      { name: "Carbon Credit Price", type: "Currency", default: "800", unit: "INR per tCO2e" },
      { name: "Carbon Price Growth Rate", type: "Percentage", default: "8", unit: "% per year" },
      { name: "Credit Verification & Registry Cost", type: "Currency", default: "", unit: "INR per year" },
      { name: "Project Development Cost", type: "Currency", default: "", unit: "INR one-time" }
    ]},
    "16.04": { name: "Waste-to-Energy / Recycling", fields: [
      { name: "Waste Processed per Month – Year 1", type: "Number", default: "", unit: "Metric Tonnes per month" },
      { name: "Waste Volume Growth Rate", type: "Percentage", default: "10", unit: "% per year" },
      { name: "Gate / Tipping Fee from Municipality", type: "Currency", default: "500", unit: "INR per tonne" },
      { name: "Recovered Material / Energy Revenue", type: "Currency", default: "", unit: "INR per tonne processed" },
      { name: "Processing Cost per Tonne", type: "Currency", default: "", unit: "INR per tonne" },
      { name: "Plant CapEx", type: "Currency", default: "", unit: "INR one-time" }
    ]},
    "16.05": { name: "EV Charging Network", fields: [
      { name: "Number of Charging Stations – Year 1", type: "Number", default: "", unit: "Stations" },
      { name: "Stations Added per Year", type: "Number", default: "", unit: "New stations per year" },
      { name: "Chargers per Station", type: "Number", default: "4", unit: "Charge points per station" },
      { name: "Avg Charging Sessions per Charger per Day", type: "Number", default: "8", unit: "Sessions per day" },
      { name: "Average Energy per Session", type: "Number", default: "10", unit: "kWh per session" },
      { name: "Charging Tariff", type: "Currency", default: "15", unit: "INR per kWh" },
      { name: "Electricity Purchase Rate", type: "Currency", default: "7", unit: "INR per kWh" },
      { name: "Station Setup CapEx", type: "Currency", default: "1500000", unit: "INR per station" },
      { name: "O&M Cost per Station per Month", type: "Currency", default: "5000", unit: "INR per station per month" },
      { name: "Network Software / Subscription Revenue", type: "Currency", default: "0", unit: "INR per station per month" }
    ]}
  }},
  "17": { name: "Emerging & Digital-Native", models: {
    "17.01": { name: "API-as-a-Product", fields: [
      { name: "API Calls per Month – Year 1", type: "Number", default: "", unit: "Calls per month" },
      { name: "API Call Volume Growth Rate", type: "Percentage", default: "80", unit: "% per year" },
      { name: "Revenue per 1,000 API Calls", type: "Currency", default: "", unit: "INR per 1,000 calls" },
      { name: "Free Tier API Calls (monthly)", type: "Number", default: "10000", unit: "Free calls per developer per month" },
      { name: "Paid Developer / Client Count – Year 1", type: "Number", default: "", unit: "Paying clients" },
      { name: "Client Growth Rate", type: "Percentage", default: "60", unit: "% per year" },
      { name: "Infrastructure / Cloud Cost", type: "Percentage", default: "20", unit: "% of Revenue" },
      { name: "Enterprise Licence Fee (if applicable)", type: "Currency", default: "0", unit: "INR per enterprise client per year" }
    ]},
    "17.02": { name: "Data Monetisation", fields: [
      { name: "Total Registered Users / Data Sources", type: "Number", default: "", unit: "Count" },
      { name: "User / Data Source Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Data Product Revenue per 1,000 Users", type: "Currency", default: "", unit: "INR per 1,000 users per month" },
      { name: "Number of B2B Data Clients", type: "Number", default: "", unit: "Clients buying data" },
      { name: "Avg Annual Revenue per Data Client", type: "Currency", default: "", unit: "INR per client per year" },
      { name: "Data Processing & Storage Cost", type: "Percentage", default: "15", unit: "% of Revenue" }
    ]},
    "17.03": { name: "Token / Web3 Economy", fields: [
      { name: "Total Token Holders – Year 1", type: "Number", default: "", unit: "Wallet addresses / users" },
      { name: "User Growth Rate", type: "Percentage", default: "100", unit: "% per year" },
      { name: "Transaction Volume on Platform", type: "Currency", default: "", unit: "INR equivalent per month" },
      { name: "Platform Fee on Transactions", type: "Percentage", default: "2.5", unit: "% of Transaction Value" },
      { name: "Token Price Assumption", type: "Currency", default: "", unit: "INR per token" },
      { name: "Token Treasury Reserve", type: "Percentage", default: "20", unit: "% of Total Token Supply reserved" }
    ]},
    "17.04": { name: "Gaming / In-App Purchases", fields: [
      { name: "Daily Active Users (DAU) – Year 1", type: "Number", default: "", unit: "DAU" },
      { name: "DAU Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "DAU / MAU Ratio", type: "Percentage", default: "25", unit: "%" },
      { name: "Paying User Conversion Rate", type: "Percentage", default: "3", unit: "% of DAU who make purchases" },
      { name: "Avg Revenue per Paying User per Month", type: "Currency", default: "250", unit: "INR per paying user per month" },
      { name: "Avg Revenue per DAU per Day (ARPDAU)", type: "Currency", default: "0.80", unit: "INR per DAU per day" },
      { name: "Ad Revenue per 1,000 DAU per Day", type: "Currency", default: "5", unit: "INR per 1,000 DAU per day" },
      { name: "User Acquisition Cost per Install", type: "Currency", default: "", unit: "INR per install" },
      { name: "Day-30 Retention Rate", type: "Percentage", default: "15", unit: "%" },
      { name: "Server Cost per 1,000 DAU", type: "Currency", default: "20", unit: "INR per 1,000 DAU per day" }
    ]},
    "17.05": { name: "Co-operative / Community-Owned", fields: [
      { name: "Number of Members – Year 1", type: "Number", default: "", unit: "Members" },
      { name: "Member Growth Rate", type: "Percentage", default: "15", unit: "% per year" },
      { name: "Membership Share Capital per Member", type: "Currency", default: "", unit: "INR per member" },
      { name: "Annual Surplus / Revenue per Member", type: "Currency", default: "", unit: "INR per member per year" },
      { name: "% Surplus Distributed to Members", type: "Percentage", default: "70", unit: "%" },
      { name: "Co-operative Reserve Fund", type: "Percentage", default: "25", unit: "% of Net Surplus retained" }
    ]},
    "17.06": { name: "Reverse Auction / Buyer-Driven Pricing", fields: [
      { name: "Number of Buyer Organisations – Year 1", type: "Number", default: "", unit: "Active buyers on platform" },
      { name: "Buyer Growth Rate", type: "Percentage", default: "25", unit: "% per year" },
      { name: "Auctions / RFQs per Buyer per Month", type: "Number", default: "3", unit: "Events per buyer per month" },
      { name: "Average Contract Value per Auction", type: "Currency", default: "", unit: "INR per auction" },
      { name: "Platform Fee per Auction (from buyer)", type: "Currency", default: "0", unit: "INR per auction" },
      { name: "SaaS Subscription Fee from Buyers", type: "Currency", default: "", unit: "INR per buyer per month" },
      { name: "Supplier Commission per Won Bid", type: "Percentage", default: "1", unit: "% of Contract Value" }
    ]},
    "17.07": { name: "SaaS + Marketplace Hybrid", fields: [
      { name: "SaaS Subscriber Count – Year 1", type: "Number", default: "", unit: "Paying SaaS customers" },
      { name: "SaaS Subscriber Growth Rate", type: "Percentage", default: "30", unit: "% per year" },
      { name: "Monthly SaaS Subscription Fee", type: "Currency", default: "", unit: "INR per subscriber per month" },
      { name: "SaaS Churn Rate", type: "Percentage", default: "2", unit: "% per month" },
      { name: "GMV on Marketplace – Year 1", type: "Currency", default: "", unit: "INR per month" },
      { name: "GMV Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Marketplace Transaction Commission", type: "Percentage", default: "3", unit: "% of GMV" },
      { name: "SaaS Revenue as % of Total Revenue", type: "Percentage", default: "40", unit: "%" }
    ]},
    "17.08": { name: "Open Source + Commercial", fields: [
      { name: "Open Source Community Users – Year 1", type: "Number", default: "", unit: "Active users" },
      { name: "Community Growth Rate", type: "Percentage", default: "50", unit: "% per year" },
      { name: "Community-to-Paid Conversion Rate", type: "Percentage", default: "2", unit: "%" },
      { name: "Paid Enterprise Customers – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "Enterprise Customer Growth Rate", type: "Percentage", default: "40", unit: "% per year" },
      { name: "Annual Enterprise Licence Fee", type: "Currency", default: "", unit: "INR per enterprise per year" },
      { name: "Hosting / Cloud Subscription Fee", type: "Currency", default: "", unit: "INR per user per month" },
      { name: "Cloud Hosting Users – Year 1", type: "Number", default: "", unit: "Count" },
      { name: "Support & Professional Services Revenue", type: "Currency", default: "0", unit: "INR per year" }
    ]}
  }}
};
