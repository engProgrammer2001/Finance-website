import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer/Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";
import OurLoans from "../pages/OurLoans";
import loanOptions from "../data/LoanData";
import LoanDetails from "../components/LoanData/LoanDetails";
import FaqPage from "../pages/FaqPage";
import CreaditeCard from "../pages/CreaditeCard";
import CrediteCardDetails from "../components/CrediteCardDetails/CrediteCardDetails";
import Insurance from "../pages/Insurance";
import InsuranceDetails from "../components/InsuranceDetails/InsuranceDetails";
import insuranceData from "../data/InsuranceData";
import ApplyLoan from "../pages/ApplyLoan";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import Profile from "../pages/Profile";
import PrivacyAndPolicy from "../components/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsAndCondition from "../components/TermsAndCondition/TermsAndCondition";
import CreditCardData from "../data/creditCardData";
import ExqueryForm from "../components/enqueryForm/EnqueryForm";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navbar />
        <ExqueryForm/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-loans" element={<OurLoans />} />
        <Route
          path="/loan-detail/:id"
          element={<LoanDetails loanOptions={loanOptions} />}
        />
        <Route path="/our-faq" element={<FaqPage />} />
        <Route path="/sb-finance/credit-card" element={<CreaditeCard />} />
        <Route
          path="/credite-card-details/:id"
          element={<CrediteCardDetails CreditCardData={CreditCardData} />}
        />
        <Route path="/sb-finance/insurance" element={<Insurance />} />
        <Route
          path="/sb-finance/insurance/insurance-details/:id"
          element={<InsuranceDetails insuranceData={insuranceData} />}
        />
        <Route path="/sb-finance/apply-loan" element={<ApplyLoan />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/privacy-and-policy" element={<PrivacyAndPolicy />} />
        <Route path="/term-and-conditions" element={<TermsAndCondition />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
