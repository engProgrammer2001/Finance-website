const loanOptions = [
  {
    id: 1,
    title: "Personal Loans",
    shortDescription:
      "Quick, flexible loans for personal needs like medical expenses or travel.",
    description:
      "A Personal Loan is designed to provide financial assistance for a variety of personal needs such as medical expenses, home renovation, wedding costs, or travel. Our flexible personal loans offer a quick approval process, allowing you to borrow anywhere between ₹50,000 to ₹5,00,000. With a loan tenure ranging from 12 to 60 months, you can comfortably repay your loan in easy monthly installments. To be eligible, applicants must be between the ages of 21 and 58 years, with a CIBIL score of 650 or above. The necessary documents required include Aadhar Card, PAN Card, and Bank Statements. The loan comes with a competitive interest rate of 11.5%, along with a processing fee of 1% of the loan amount. The repayment is done via EMI through your bank account. Additionally, there are no prepayment charges for this loan, making it an ideal option for those who need quick financial assistance without any collateral. The loan features include fast approval and no collateral requirement, making it a great option for individuals in urgent need of funds.",
    image: "/assets/loanImaes/pl1.jpg",
    interestRate: "11.5%",
    loanAmount: "₹50,000 - ₹5,00,000",
    loanTenure: "12 - 60 months",
    eligibility: "Age: 21-58 years, CIBIL score: 650+",
    documentsRequired: [
      "Aadhar Card",
      "PAN Card",
      "Bank Statements",
      "3 - Months Salary Slip",
      "3 - Bank Statement",
      "1 - Passphort Size Photo",
    ],
    processingFee: "1% of loan amount",
    repaymentMode: "Auto debit and EMI via bank account",
    prepaymentCharges: "No prepayment charges",
    features: ["Quick approval", "No collateral needed", "Low interest rate"],
    customerSupport: "loanadvisor.roshan@gmail.com",
  },
  {
    id: 2,
    title: "Home Loans",
    shortDescription:
      "Affordable loans to purchase your dream home or property.",
    description:
      "Home Loans are designed to help individuals purchase their dream home or property. With our affordable home loans, you can secure a loan amount ranging from ₹5,00,000 to ₹1,00,00,000. The loan tenure can range from 5 to 30 years, giving you flexibility in your repayment. To be eligible for this loan, applicants need to be between the ages of 23 and 60 years, with a minimum CIBIL score of 700. Required documents include Aadhar Card, PAN Card, Income Proof, and Property Documents. The loan comes with a low interest rate of 8.5%, along with a minimal processing fee of 0.5% of the loan amount. Repayment is made through easy EMIs via a bank account. This loan offers flexible repayment options and tax benefits, making it the perfect choice for those looking to invest in their dream home. Additionally, the loan does have a prepayment charge of 1% of the outstanding loan amount. With our home loans, you can fulfill your dreams of homeownership with a simple and hassle-free process.",
    image: "/assets/loanImaes/hl2.jpg",
    interestRate: "8.5%",
    loanAmount: "₹5,00,000 - ₹1,00,00,000",
    loanTenure: "5 - 30 years",
    eligibility: "Age: 23-60 years, CIBIL score: 700+",
    documentsRequired: [
      "Aadhar Card",
      "PAN Card",
      "Income Proof",
      "Property Documents",
    ],
    processingFee: "0.5% of loan amount",
    repaymentMode: "EMI via bank account",
    prepaymentCharges: "1% of outstanding loan amount",
    features: [
      "Low interest rates",
      "Flexible repayment options",
      "Tax benefits",
    ],
    customerSupport: "loanadvisor.roshan@gmail.com",
  },
  {
    id: 3,
    title: "Car Loans",
    shortDescription: "Low-interest loans for buying your car, with easy EMIs.",
    description:
      "Whether it's your first car or an upgrade, our Car Loans offer attractive terms and easy access to the funds you need. You can avail a car loan ranging from ₹1,00,000 to ₹50,00,000, with a flexible tenure ranging from 12 to 84 months. To qualify, applicants need to be between the ages of 21 and 65 years, and have a minimum CIBIL score of 700. The necessary documents include Aadhar Card, PAN Card, Income Proof, and RC Book of the car. With a competitive interest rate of 9.75%, you can repay the loan in easy EMIs through your bank account. The processing fee for this loan is 0.5% of the loan amount, and there are no prepayment charges. This loan comes with various benefits such as low EMIs, quick disbursal, and flexible tenure options, making it the ideal choice for car buyers looking for a convenient and affordable financing option.",
    image: "/assets/loanImaes/cl3.avif",
    interestRate: "9.75%",
    loanAmount: "₹1,00,000 - ₹50,00,000",
    loanTenure: "12 - 84 months",
    eligibility: "Age: 21-65 years, CIBIL score: 700+",
    documentsRequired: ["Aadhar Card", "PAN Card", "Income Proof", "RC Book"],
    processingFee: "0.5% of loan amount",
    repaymentMode: "EMI via bank account",
    prepaymentCharges: "No prepayment charges",
    features: ["Low EMIs", "Quick disbursal", "Flexible tenure options"],
    customerSupport: "loanadvisor.roshan@gmail.com",
  },
  {
    id: 4,
    title: "Business Loans",
    shortDescription:
      "Loans to support business growth with flexible terms and quick disbursal.",
    description:
      "Business Loans are designed to help entrepreneurs and business owners grow their businesses. The loan amount ranges from ₹2,00,000 to ₹50,00,000, with a repayment tenure ranging from 12 to 60 months. The eligibility criteria require applicants to be between the ages of 21 and 65 years, with a minimum CIBIL score of 700. Documents required include Aadhar Card, PAN Card, and Business Documents. The loan comes with an interest rate of 14.5%, and the processing fee is 1% of the loan amount. Repayment is done through EMI via a bank account, and there are no prepayment charges. This loan is perfect for business owners who need quick financial support for expansion, inventory purchase, or business improvements.",
    image: "/assets/loanImaes/bl5.jpeg",
    interestRate: "14.5%",
    loanAmount: "₹2,00,000 - ₹50,00,000",
    loanTenure: "12 - 60 months",
    eligibility: "Age: 21-65 years, CIBIL score: 700+",
    documentsRequired: ["Aadhar Card", "PAN Card", "Business Documents"],
    processingFee: "1% of loan amount",
    repaymentMode: "EMI via bank account",
    prepaymentCharges: "No prepayment charges",
    features: [
      "Unsecured loan options",
      "Fast processing",
      "No collateral required",
    ],
    customerSupport: "loanadvisor.roshan@gmail.com",
  },

  {
    id: 5,
    title: "Gold Loans",
    shortDescription:
      "Quick financial support with gold as collateral. Loan amount: ₹10,000 - ₹25,00,000. Interest Rate: 7.5%. Tenure: 3 - 24 months.",
    description:
      "Gold Loans are ideal for individuals looking for quick financial support by using their gold as collateral. The loan amount can range from ₹10,000 to ₹25,00,000, with a loan tenure ranging from 3 to 24 months. This loan is available for individuals aged between 18 and 70 years, with no minimum CIBIL score required. Required documents include Aadhar Card and Gold Valuation Certificate. The loan comes with an interest rate of 7.5%, and the processing fee is 1.5% of the loan amount. Repayment is made through EMI via a bank account, and the prepayment charge is 0.5% of the loan amount. Gold loans are perfect for those who need immediate funds and have gold that can be used as collateral.",
    image: "/assets/loanImaes/gl.avif",
    interestRate: "7.5%",
    loanAmount: "₹10,000 - ₹25,00,000",
    loanTenure: "3 - 24 months",
    eligibility: "Age: 18-70 years, CIBIL score: Not required",
    documentsRequired: ["Aadhar Card", "Gold Valuation Certificate"],
    processingFee: "1.5% of loan amount",
    repaymentMode: "EMI via bank account",
    prepaymentCharges: "0.5% of loan amount",
    features: [
      "Instant disbursal",
      "Low interest rates",
      "No credit score check",
    ],
    customerSupport: "loanadvisor.roshan@gmail.com",
  },
  {
    id: 6,
    title: "Property Loans",
    shortDescription:
      "Finance real estate investments with loans ranging from ₹5,00,000 to ₹20,00,000. Interest Rate: 8.0%. Tenure: 5 - 20 years.",
    description:
      "Property Loans are designed to help individuals finance their real estate investments, whether it’s for residential or commercial purposes. The loan amount ranges from ₹5,00,000 to ₹20,00,000, with a loan tenure of 5 to 20 years. The eligibility criteria include being between the ages of 21 and 60 years, with a CIBIL score of 650 or above. Required documents include Aadhar Card, PAN Card, and Property Documents. The loan comes with an interest rate of 8.0%, and the processing fee is 0.75% of the loan amount. Repayment is done via EMI through a bank account, and the prepayment charges are 2% of the outstanding loan amount. This loan offers benefits such as low interest rates and flexible repayment options, making it ideal for individuals looking to invest in property.",
    image: "/assets/loanImaes/prol.webp",
    interestRate: "8.0%",
    loanAmount: "₹5,00,000 - ₹20,00,000",
    loanTenure: "5 - 20 years",
    eligibility: "Age: 21-60 years, CIBIL score: 650+",
    documentsRequired: ["Aadhar Card", "PAN Card", "Property Documents"],
    processingFee: "0.75% of loan amount",
    repaymentMode: "EMI via bank account",
    prepaymentCharges: "2% of outstanding loan amount",
    features: ["Low interest rates", "Flexible repayment options"],
    customerSupport: "loanadvisor.roshan@gmail.com",
  },
  {
    id: 7,
    title: "Education Loans",
    shortDescription:
      "Comprehensive financial support for your education. Loan amount: ₹50,000 - ₹10,00,000. Interest Rate: 8.5%. Tenure: 12 - 84 months.",
    description:
      "Education Loans are designed to help students achieve their academic aspirations by covering tuition fees, living expenses, and other educational costs. The loan amount ranges from ₹50,000 to ₹10,00,000, with a tenure of 12 to 84 months. The eligibility criteria include being between 18 and 35 years old, with a co-applicant having a stable income and a CIBIL score of 650 or above. Required documents include Aadhar Card, Admission Letter, Fee Structure, and Income Proof. The loan comes with an interest rate of 8.5%, and the processing fee is 1% of the loan amount. Repayment is made through EMI via a bank account, and there are no prepayment charges. This loan is perfect for students seeking financial support for higher education.",
    image: "/assets/loanImaes/cl.png",
    interestRate: "10.0%",
    loanAmount: "₹50,000 - ₹10,00,000",
    loanTenure: "12 - 84 months",
    eligibility: "Age: 18-35 years, Co-applicant with CIBIL score: 650+",
    documentsRequired: [
      "Aadhar Card",
      "Admission Letter",
      "Fee Structure",
      "Income Proof",
    ],
    processingFee: "1% of loan amount",
    repaymentMode: "EMI via bank account",
    prepaymentCharges: "No prepayment charges",
    features: [
      "Instant approval",
      "Quick disbursal",
      "Medical emergency support",
      "Affordable interest rates",
      "Flexible repayment options",
      "Covers tuition and living expenses",
    ],
    customerSupport: "loanadvisor.roshan@gmail.com",
  },
  {
    id: 8,
    title: "Corporate Loans",
    shortDescription:
      "Empowering businesses with financial solutions. Loan amount: ₹1,00,000 - ₹50,00,000. Interest Rate: 12.0%. Tenure: 12 - 60 months.",
    description:
      "Corporate Loans are designed to provide businesses with the financial support they need to expand operations, purchase equipment, or manage working capital. The loan amount ranges from ₹1,00,000 to ₹50,00,000, with a tenure of 12 to 60 months. The eligibility criteria include a business registration of at least 2 years, a CIBIL score of 700 or above, and a minimum annual turnover of ₹20,00,000. Required documents include Business Registration Certificate, PAN Card, GST Returns, and Financial Statements. The loan comes with an interest rate of 12.0%, and the processing fee is 2% of the loan amount. Repayment is made through EMI via a bank account, and there are flexible prepayment options. This loan is ideal for businesses looking to achieve growth and manage their financial requirements efficiently.",
    image: "/assets/loanImaes/cl.png",
    interestRate: "12.0%",
    loanAmount: "₹1,00,000 - ₹50,00,000",
    loanTenure: "12 - 60 months",
    eligibility: "Business registration: 2+ years, CIBIL score: 700+, Annual turnover: ₹20,00,000+",
    documentsRequired: ["Business Registration Certificate", "PAN Card", "GST Returns", "Financial Statements"],
    processingFee: "2% of loan amount",
    repaymentMode: "EMI via bank account",
    prepaymentCharges: "Flexible prepayment options",
    features: [
      "Tailored financial solutions for businesses",
      "Supports working capital and expansion needs",
      "Competitive interest rates and flexible tenures"
    ],
    customerSupport: "corporateloan.support@gmail.com",
  }
  

];

export default loanOptions;
