import React, { useState, useEffect } from 'react';
import Footer from '../features/footer';
import Navbar from '../navbar/navbar';
import { Helmet } from "react-helmet";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import './services.css';


const Services = () => {
  const [activeServiceTab, setActiveServiceTab] = useState('msme');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Tab configuration matching notary.js structure
  const serviceTabs = [
    { id: 'msme', label: 'MSME Cases', badge: '6' },
    { id: 'criminal', label: 'Criminal Cases', badge: '7' },
    { id: 'notarial', label: 'Notarial Services', badge: '7' },
    { id: 'civil', label: 'Civil Cases', badge: '1' },
    { id: 'family', label: 'Family Cases', badge: '2' }
  ];

  return (
    <div className="min-h-screen relative bg-white">
      <Helmet>
        <title>Practice Areas | Legal & Notarial Services - Vipin Chand Garg, Meerut</title>
        <meta
          name="description"
          content="Information on legal and notarial services including affidavit drafting, rent agreement, power of attorney, and criminal case consultation."
        />
        <meta name="keywords" content="Legal Services Meerut, Notarial Services, Affidavits, Rent Agreements, Criminal Law, Document Attestation, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, Micro, Small and Medium Enterprises (MSME) Dispute Resolution, Micro, Small and Medium Enterprises (MSME) Delayed Payment References (MSMED Act, 2006), Micro and Small Enterprises Facilitation Council (MSEFC) Conciliation Proceedings, Micro and Small Enterprises Facilitation Council (MSEFC) Arbitration, Micro, Small and Medium Enterprises (MSME) Samadhaan E‑Filing, Petitions Related to Micro and Small Enterprises Facilitation Council (MSEFC) Awards, Appeals Under Section 19 (MSMED Act), Micro, Small and Medium Enterprises (MSME) delayed payment and disputes, Section 18 Proceedings, Micro and Small Enterprises Facilitation Council, Section 15 Buyer's Liability, Section 16 Interest Payment, Section 17 Amount Due, Supplier–Buyer Disputes, Conciliation then Arbitration, Award Enforcement, Execution of Micro and Small Enterprises Facilitation Council (MSEFC) Award, Recovery Proceedings, Deposit under Section 19" />
      </Helmet>

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-navy-100/12 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gold-100/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <Navbar />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14 cursor-pointer">
        {/* Header */}
        <div id="services-section" className={`text-center mb-8 sm:mb-10 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-50 border border-navy-200/40 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-navy-600"></span>
            <span className="text-xs sm:text-sm font-semibold text-navy-700">
              Legal Professional • Areas of Practice
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight tracking-tight">
            <span className="block text-navy-900">Areas of Practice</span>
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 sm:mb-10 cursor-pointer">
          <div className="bg-gray-50 rounded-xl p-1.5 border border-gray-100">
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveServiceTab(tab.id)}
                  className={`
                    group relative px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm
                    transition-all duration-300
                    ${activeServiceTab === tab.id
                      ? 'bg-navy-700 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-white hover:text-navy-700 hover:shadow-sm'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tab.label}
                    <span className={`
                      inline-flex items-center justify-center min-w-[18px] h-4.5 px-1.5 rounded-full text-xs font-bold
                      ${activeServiceTab === tab.id
                        ? 'bg-white/20 text-white'
                        : 'bg-navy-100 text-navy-600'
                      }
                    `}>
                      {tab.badge}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative cursor-pointer">
          {/* MSME Tab */}
          {activeServiceTab === 'msme' && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3 px-4">
                  Micro, Small and Medium Enterprises (MSME) Cases Under Micro, Small and Medium Enterprises Development (MSMED) Act, 2006
                </h3>
                <p className="text-gray-500 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed px-4">
                  Micro, Small and Medium Enterprises (MSME)-related legal matters under the Micro, Small and Medium Enterprises Development Act, 2006
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {/* Delayed Payment */}
                <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⏰</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-navy-900">Delayed Payment Disputes</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3">
                    Recovery proceedings for delayed payments under Sections 15-18 of Micro, Small and Medium Enterprises Development (MSMED) Act, 2006
                  </p>
                  <ul className="space-y-1.5">
                    {['Filing cases under Section 15-18', 'Statutory interest calculation', 'Payment recovery proceedings', 'Compound interest claims'].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                        <span className="text-gold-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* MSEFC Proceedings */}
                <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">👥</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-navy-900">Micro and Small Enterprises Facilitation Council (MSEFC) Proceedings</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3">
                    Conciliation requests and subsequent arbitration before the Micro and Small Enterprises Facilitation Council (MSEFC) facilitated per rules.
                  </p>
                  <ul className="space-y-1.5">
                    {['Conciliation proceedings under Section 18', 'Arbitration representation before Council', 'Filing applications and documentation', 'Award enforcement matters'].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                        <span className="text-gold-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* MSME Compliance */}
                <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📋</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-navy-900">Micro, Small and Medium Enterprises (MSME) Compliance</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {['Udyam registration', 'Compliance', 'Documentation review'].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                        <span className="text-gold-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recovery & Enforcement */}
                <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">💰</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-navy-900">Recovery & Enforcement</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3">
                    Legal proceedings for recovery of outstanding dues and award enforcement
                  </p>
                  <ul className="space-y-1.5">
                    {['Award execution under Section 18', 'Recovery certificate applications', 'Bank account attachment proceedings', 'Property attachment actions'].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                        <span className="text-gold-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Documentation */}
                <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📄</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-navy-900">Legal Documentation</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3">
                    Drafting and review of Micro, Small and Medium Enterprises (MSME)- related legal documents
                  </p>
                  <ul className="space-y-1.5">
                    {['Supply agreements and contracts', 'Purchase orders documentation', 'Legal notices under Micro, Small and Medium Enterprises Development (MSMED) Act', 'Agreement review and advisory'].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                        <span className="text-gold-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* MSME Info Notice */}
              <div className="bg-navy-50/50 rounded-xl p-5 sm:p-6 border border-navy-100 mt-6">
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="w-9 h-9 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">ℹ️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-2 text-sm sm:text-base">Information on Micro, Small and Medium Enterprises (MSME) Cases</h4>
                    <p className="text-navy-700 text-xs sm:text-sm leading-relaxed">
                      This information is provided for general understanding of Micro, Small and Medium Enterprises (MSME) legal matters under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, as permitted under the Bar Council of India Rules. 
                      It does not constitute legal advice and should not be relied upon as a substitute for consultation with a qualified legal professional. 
                      Each Micro, Small and Medium Enterprises (MSME) matter requires individual assessment based on specific facts and applicable statutory provisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Criminal Cases Tab */}
          {activeServiceTab === 'criminal' && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3 px-4">
                  Criminal Law Practice
                </h3>
                <p className="text-gray-500 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed px-4">
                  Comprehensive criminal law representation and consultation services
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { name: 'FIR & Bail Matters', icon: '🚨' },
                  { name: 'Criminal Appeals', icon: '⚖️' },
                  { name: 'Cheque Bounce Cases', icon: '💳' },
                  { name: 'Cyber Crimes', icon: '🔒' },
                  { name: 'Matrimonial Cases', icon: '💑' },
                  { name: 'And Many More', icon: '📋' }
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 text-center">
                    <span className="text-2xl sm:text-3xl block mb-3">{service.icon}</span>
                    <h4 className="font-bold text-navy-900 text-sm sm:text-base">{service.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notarial Services Tab */}
          {activeServiceTab === 'notarial' && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3 px-4">
                  Notarial Services
                </h3>
                <div className="max-w-4xl mx-auto px-4">
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
                    Official certification by a Notary - Government of India under the Notaries Act, 1952, verifying the identity of signatories and the authenticity of documents.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { name: 'Affidavits', icon: '📋' },
                  { name: 'Rent Agreements', icon: '🏠' },
                  { name: 'Declaration Letters', icon: '📄' },
                  { name: 'Academic Undertakings', icon: '✍️' },
                  { name: 'Certified Copies', icon: '📋' },
                  { name: 'Academic Documents', icon: '📄' },
                  { name: 'Other Attestation and Notarisation', icon: '📋' },
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-xl sm:text-2xl flex-shrink-0">{service.icon}</span>
                      <h4 className="font-bold text-navy-900 text-xs sm:text-sm leading-tight">{service.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Civil Cases Tab */}
          {activeServiceTab === 'civil' && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3 px-4">
                  Civil Law Practice
                </h3>
              </div>
              
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-card">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-5">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl sm:text-3xl">🏢</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center sm:text-left">Property Cases</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Legal Opinion & Advisory', 'Title Verification & Clearance', 'Sale Deed Preparation & Review', 'Property Registration', 'Gift Deed & Will Drafting', 'And Many More'].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <span className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Family Cases Tab */}
          {activeServiceTab === 'family' && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3 px-4">
                  Family Law Practice
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-11 h-11 mx-auto rounded-xl bg-navy-50 flex items-center justify-center mb-3">
                      <span className="text-2xl">💍</span>
                    </div>
                    <h4 className="font-bold text-navy-900 text-base sm:text-lg">Registration</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm font-medium">Marriage Registration</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-11 h-11 mx-auto rounded-xl bg-navy-50 flex items-center justify-center mb-3">
                      <span className="text-2xl">📄</span>
                    </div>
                    <h4 className="font-bold text-navy-900 text-base sm:text-lg">Divorce Proceedings</h4>
                  </div>
                  <ul className="space-y-2">
                    {['Mutual Consent Divorce', 'Contested Divorce'].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <span className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <section className="mt-10 sm:mt-14">
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
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
