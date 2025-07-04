import React,{useState} from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../features/footer';
import ChamberLocation from '../features/chamberLocation';
import { Helmet } from "react-helmet";



export default function ContactUs() {
  const [mapOpen, setMapOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Helmet>
        <meta
          name="description"
          content="Contact Vipin Chand Garg, Advocate & Notary in Meerut Court, for general professional inquiries related to legal and notarial services under Indian law."
        />
        <meta
          name="keywords"
          content="Legal Services Meerut, Notarial Services, Affidavits, Rent Agreements, Criminal Law, Document Attestation, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, MSME Dispute Resolution"
        />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>
      <Navbar />
      <ChamberLocation mapOpen={mapOpen} setMapOpen={setMapOpen} />
      <section className="relative py-2 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative container px-6 py-12 mx-auto">
          <div className="text-center mb-16">

            <h1 className="mt-2 text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent leading-tight">
              Contact
            </h1>
            {/* <p className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-lg mb-2 animate-fade-in">
              Get in touch and consult with us
            </p> */}
          </div>

          <div style={{cursor:'pointer'}} className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">


            {/* Address Card */}
            <div onClick={()=> setMapOpen(true)}  style={{cursor:'pointer'}}  className="group relative flex flex-col items-center justify-center text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative p-4 text-white rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl group-hover:scale-110 transition-transform duration-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              
              <div className="relative">
                <h2 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                  Chamber Address
                </h2>
                <p className="mt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold leading-relaxed">
                  Freedom Fighter Ratan Lal Garg Advocate Memorial Chamber, beside Shiv Mandir, Opposite Election Office, Meerut Court, Distt- Meerut, Uttar Pradesh – 250001
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div style={{cursor:'pointer'}} className="group relative flex flex-col items-center justify-center text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative p-4 text-white rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-xl group-hover:scale-110 transition-transform duration-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              
              <a href="tel:+919568529826" className="relative">
                <h2 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                  Phone Number
                </h2>
                <p className="mt-3 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-semibold text-lg">
                  +91 9568529826
                </p>
              </a>
            </div>

            {/* Email Card */}
            <div className="group relative flex flex-col items-center justify-center text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative p-4 text-white rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl group-hover:scale-110 transition-transform duration-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>

              <div className="relative">
                <h2 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                  Email Address
                </h2>
                <p className="mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-lg">
                  vipin.garg64@gmail.com
                </p>
              </div>
            </div>

            {/* Direction Card */}
            <div onClick={()=> setMapOpen(true)} className="group relative flex flex-col items-center justify-center text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative p-4 text-white rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-xl group-hover:scale-110 transition-transform duration-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.158.69-.158 1.006 0l4.994 2.497c.317.158.69.158 1.007 0z" />
                </svg>
              </span>

              <a 
                
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <h2 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                  Get Directions
                </h2>
                <p className="mt-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 font-semibold text-lg">
                  Navigate to Chamber
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}