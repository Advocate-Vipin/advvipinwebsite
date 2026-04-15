import React,{useState} from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../features/footer';
import ChamberLocation from '../features/chamberLocation';
import { Helmet } from "react-helmet";
import {ExclamationTriangleIcon} from '@heroicons/react/24/outline';


export default function ContactUs() {
  const [mapOpen, setMapOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact | Advocate & Notary - Vipin Chand Garg, Meerut</title>
        <meta
          name="description"
          content="Contact Vipin Chand Garg, Advocate & Notary in Meerut Court, for general professional inquiries related to legal and notarial services under Indian law."
        />
        <meta name="keywords" content="Legal Services Meerut, Notarial Services, Affidavits, Rent Agreements, Criminal Law, Document Attestation, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, Micro, Small and Medium Enterprises (MSME) Dispute Resolution, Micro, Small and Medium Enterprises (MSME) Delayed Payment References (MSMED Act, 2006), Micro and Small Enterprises Facilitation Council (MSEFC) Conciliation Proceedings, Micro and Small Enterprises Facilitation Council (MSEFC) Arbitration, Micro, Small and Medium Enterprises (MSME) Samadhaan E‑Filing, Petitions Related to Micro and Small Enterprises Facilitation Council (MSEFC) Awards, Appeals Under Section 19 (MSMED Act), Micro, Small and Medium Enterprises (MSME) delayed payment and disputes, Section 18 Proceedings, Micro and Small Enterprises Facilitation Council, Section 15 Buyer's Liability, Section 16 Interest Payment, Section 17 Amount Due, Supplier–Buyer Disputes, Conciliation then Arbitration, Award Enforcement, Execution of Micro and Small Enterprises Facilitation Council (MSEFC) Award, Recovery Proceedings, Deposit under Section 19" />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>
      <Navbar />
      <ChamberLocation mapOpen={mapOpen} setMapOpen={setMapOpen} />
      
      <section className="relative py-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-navy-100/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gold-100/10 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-50 border border-navy-200/40 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-navy-600"></span>
            <span className="text-xs sm:text-sm font-semibold text-navy-700">
              Legal Professional • Contact Information
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          </div>
        </div>

        <div className="relative container px-6 py-8 mx-auto">
          <div className="text-center mb-6">
            <h1 className="mt-2 text-3xl md:text-5xl font-bold text-navy-900 leading-tight tracking-tight">
              Contact
            </h1>
          </div>

          <div style={{cursor:'pointer'}} className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">

            {/* Address Card */}
            <a href="https://maps.app.goo.gl/mXPLkTq1Ui19FSmg7" target="_blank" rel="noopener noreferrer" style={{cursor:'pointer'}} className="group relative flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 transform hover:-translate-y-1 border border-gray-100 overflow-hidden no-underline">
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              <span className="relative p-3.5 text-white rounded-xl bg-navy-700 shadow-sm group-hover:scale-105 transition-transform duration-300 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              
              <div className="relative">
                <h2 className="mt-2 text-lg font-bold text-navy-900">
                  Chamber Address
                </h2>
                <p className="mt-2 text-gold-600 font-semibold leading-relaxed text-sm">
                  Chamber No. 79, Advocate Vipin Chand Garg, Opposite Jila Panchayat Office, Collectorate Compound, Meerut Court, Meerut, Uttar Pradesh- 250001
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <div style={{cursor:'pointer'}} className="group relative flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              <span className="relative p-3.5 text-white rounded-xl bg-emerald-600 shadow-sm group-hover:scale-105 transition-transform duration-300 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              
              <a href="tel:+919568529826" className="relative no-underline">
                <h2 className="mt-2 text-lg font-bold text-navy-900">
                  Phone Number
                </h2>
                <p className="mt-2 text-emerald-600 font-semibold text-base">
                  +91 9568529826
                </p>
              </a>
            </div>

            {/* Email Card */}
            <div className="group relative flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              <span className="relative p-3.5 text-white rounded-xl bg-blue-600 shadow-sm group-hover:scale-105 transition-transform duration-300 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>

              <div className="relative">
                <h2 className="mt-2 text-lg font-bold text-navy-900">
                  Email Address
                </h2>
                <p className="mt-2 text-blue-600 font-semibold text-base">
                  vipin.garg64@gmail.com
                </p>
              </div>
            </div>

            {/* Direction Card */}
            <a href="https://maps.app.goo.gl/mXPLkTq1Ui19FSmg7" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 transform hover:-translate-y-1 border border-gray-100 overflow-hidden no-underline">
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              <span className="relative p-3.5 text-white rounded-xl bg-orange-500 shadow-sm group-hover:scale-105 transition-transform duration-300 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.158.69-.158 1.006 0l4.994 2.497c.317.158.69.158 1.007 0z" />
                </svg>
              </span>

              <div className="relative">
                <h2 className="mt-2 text-lg font-bold text-navy-900">
                  Get Directions
                </h2>
                <p className="mt-2 text-orange-500 font-semibold text-base">
                  Navigate to Chamber
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-4">
          <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-5">
            <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-1 text-sm">Professional Disclaimer</h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  This website is intended to provide general professional information as permitted under the Bar Council of India Rules. 
                  It does not serve as a platform for solicitation or advertisement. All information is provided for educational purposes 
                  only and should not be construed as legal advice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}