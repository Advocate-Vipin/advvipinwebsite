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
    <div className="min-h-screen relative overflow-hidden">
      <Helmet>
        <title>Practice Areas | Legal & Notarial Services - Vipin Chand Garg, Meerut</title>
        <meta
          name="description"
          content="Information on legal and notarial services including affidavit drafting, rent agreement, power of attorney, and criminal case consultation."
        />
        <meta name="keywords" content="Legal Services Meerut, Notarial Services, Affidavits, Rent Agreements, Criminal Law, Document Attestation, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, Micro, Small and Medium Enterprises (MSME) Dispute Resolution, Micro, Small and Medium Enterprises (MSME) Delayed Payment References (MSMED Act, 2006), Micro and Small Enterprises Facilitation Council (MSEFC) Conciliation Proceedings, Micro and Small Enterprises Facilitation Council (MSEFC) Arbitration, Micro, Small and Medium Enterprises (MSME) Samadhaan E‑Filing, Petitions Related to Micro and Small Enterprises Facilitation Council (MSEFC) Awards, Appeals Under Section 19 (MSMED Act), Micro, Small and Medium Enterprises (MSME) delayed payment and disputes, Section 18 Proceedings, Micro and Small Enterprises Facilitation Council, Section 15 Buyer’s Liability, Section 16 Interest Payment, Section 17 Amount Due, Supplier–Buyer Disputes, Conciliation then Arbitration, Award Enforcement, Execution of Micro and Small Enterprises Facilitation Council (MSEFC) Award, Recovery Proceedings, Deposit under Section 19" />
      </Helmet>

      {/* Modern Animated Background */}
      <div className="fixed inset-0 -z-10 cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40"></div>
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-100/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-tr from-emerald-100/20 to-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-100/10 to-pink-100/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navbar />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 cursor-pointer">
        {/* Enhanced Header Section */}
        <div id="services-section" className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/30 shadow-lg mb-6 sm:mb-8">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Legal Professional • Areas of Practice
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" style={{ animationDelay: '500ms' }}></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight px-4">
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent drop-shadow-sm">
              Areas of Practice
            </span>
          </h1>

        </div>

        {/* Tab Navigation - Matching Notary.js Style */}
        <div className="mb-8 sm:mb-12 cursor-pointer">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-2 sm:p-3 border border-indigo-200/50 shadow-lg">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveServiceTab(tab.id)}
                  className={`
                    group relative px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-bold text-xs sm:text-sm md:text-base
                    transition-all duration-300 ease-out
                    ${activeServiceTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                      : 'bg-white/60 text-gray-700 hover:bg-white/80 hover:shadow-md hover:scale-102'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.label}
                    <span className={`
                      inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-xs font-bold
                      ${activeServiceTab === tab.id
                        ? 'bg-white/30 text-white'
                        : 'bg-indigo-100 text-indigo-700'
                      }
                    `}>
                      {tab.badge}
                    </span>
                  </span>
                  {activeServiceTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-xl animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative cursor-pointer">
          {/* Micro, Small and Medium Enterprises (MSME) Tab Content */}
          {activeServiceTab === 'msme' && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8 md:space-y-10">
              {/* Header Section */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-700 to-indigo-800 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
                  Micro, Small and Medium Enterprises (MSME) Cases Under MSMED Act 2006
                </h3>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4">
                  Micro, Small and Medium Enterprises (MSME)-related legal matters under the Micro, Small and Medium Enterprises Development Act, 2006
                </p>
              </div>

              {/* Key Services Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Delayed Payment Disputes Card */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50/80 to-indigo-100/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-indigo-200/50 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-200/30 flex-shrink-0">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-indigo-900">Delayed Payment Disputes</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-indigo-700 leading-relaxed mb-3">
                      Recovery proceedings for delayed payments under Sections 15-18 of MSMED Act 2006
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Filing cases under Section 15-18',
                        'Statutory interest calculation',
                        'Payment recovery proceedings',
                        'Compound interest claims'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-indigo-600">
                          <span className="text-indigo-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* MSEFC Proceedings Card */}
                <div className="group relative cursor-pointer">
                  <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-200/50 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-200/30 flex-shrink-0">
                        <span className="text-2xl">👥</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-purple-900">Micro and Small Enterprises Facilitation Council (MSEFC) Proceedings</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-purple-700 leading-relaxed mb-3">
                      Conciliation requests and subsequent arbitration before the Micro and Small Enterprises Facilitation Council facilitated per rules
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Conciliation proceedings under Section 18',
                        'Arbitration representation before Council',
                        'Filing applications and documentation',
                        'Award enforcement matters'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-purple-600">
                          <span className="text-purple-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Micro, Small and Medium Enterprises (MSME) Registration & Compliance Card */}
                <div className="group relative cursor-pointer">
                  <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-200/50 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-200/30 flex-shrink-0">
                        <span className="text-2xl">📋</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-blue-900">Micro, Small and Medium Enterprises (MSME) Compliance</h4>
                    </div>
                    <ul className="space-y-2">
                      {[
                        'Udyam registration',
                        'Compliance',
                        'Documentation review',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-blue-600">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recovery & Enforcement Card */}
                <div className="group relative cursor-pointer">
                  <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-emerald-50/80 to-emerald-100/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-emerald-200/50 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-200/30 flex-shrink-0">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-emerald-900">Recovery & Enforcement</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed mb-3">
                      Legal proceedings for recovery of outstanding dues and award enforcement
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Award execution under Section 18',
                        'Recovery certificate applications',
                        'Bank account attachment proceedings',
                        'Property attachment actions'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-emerald-600">
                          <span className="text-emerald-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Legal Documentation Card */}
                <div className="group relative cursor-pointer">
                  <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-orange-50/80 to-orange-100/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-orange-200/50 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-200/30 flex-shrink-0">
                        <span className="text-2xl">📄</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-orange-900">Legal Documentation</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-orange-700 leading-relaxed mb-3">
                      Drafting and review of MSME-related legal documents
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Supply agreements and contracts',
                        'Purchase orders documentation',
                        'Legal notices under MSMED Act',
                        'Agreement review and advisory'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-orange-600">
                          <span className="text-orange-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* MSME Act Information Notice - BCI Compliant */}
              <div className="relative group mt-6 sm:mt-8 cursor-pointer">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl sm:rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-blue-200/50">
                  <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center border border-blue-200/30 flex-shrink-0">
                      <span className="text-xl sm:text-2xl">ℹ️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Information on MSME Cases</h4>
                      <p className="text-blue-800 text-xs sm:text-sm md:text-base leading-relaxed">
                        This information is provided for general understanding of MSME legal matters under the Micro, Small and Medium Enterprises Development Act, 2006, as permitted under the Bar Council of India Rules. 
                        It does not constitute legal advice and should not be relied upon as a substitute for consultation with a qualified legal professional. 
                        Each MSME matter requires individual assessment based on specific facts and applicable statutory provisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Criminal Cases Tab Content */}
          {activeServiceTab === 'criminal' && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8 md:space-y-10">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
                  Criminal Law Practice
                </h3>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
                  Comprehensive criminal law representation and consultation services
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {[
                  { name: 'FIR & Bail Matters', icon: '🚨' },
                  { name: 'Criminal Appeals', icon: '⚖️' },
                  { name: 'Cheque Bounce Cases', icon: '💳' },
                  { name: 'Cyber Crimes', icon: '🔒' },
                  { name: 'Matrimonial Cases', icon: '💑' },
                  { name: 'And Many More', icon: '📋' }
                ].map((service, index) => (
                  <div key={index} className="group relative cursor-pointer">
                    <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-red-50/80 to-red-100/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-red-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                      <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                        <span className="text-2xl sm:text-3xl md:text-4xl">{service.icon}</span>
                        <h4 className="font-bold text-red-900 text-xs sm:text-sm md:text-base leading-tight">{service.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notarial Services Tab Content */}
          {activeServiceTab === 'notarial' && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8 md:space-y-10">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 to-purple-800 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
                  Notarial Services
                </h3>
                <div className="max-w-4xl mx-auto px-4">
                  <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                    Official certification by a Notary - Government of India under the Notaries Act, 1952, verifying the identity of signatories and the authenticity of documents.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {[
                  { name: 'Affidavits', icon: '📋' },
                  { name: 'Rent Agreements', icon: '🏠' },
                  { name: 'Declaration Letters', icon: '📄' },
                  { name: 'Academic Undertakings', icon: '✍️' },
                  { name: 'Certified Copies', icon: '📋' },
                  { name: 'Academic Documents', icon: '📄' },
                  { name: 'Other Attestation and Notarisation', icon: '📋' },
                ].map((service, index) => (
                  <div key={index} className="group relative cursor-pointer">
                    <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-purple-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className="text-xl sm:text-2xl md:text-3xl flex-shrink-0">{service.icon}</span>
                        <h4 className="font-bold text-purple-900 text-xs sm:text-sm leading-tight">{service.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Important Legal Notice - BCI Compliant */}

            </div>
          )}

          {/* Civil Cases Tab Content */}
          {activeServiceTab === 'civil' && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8 md:space-y-10">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
                  Civil Law Practice
                </h3>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl sm:rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-blue-200/50 hover:shadow-2xl transition-all duration-300">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center border border-blue-200/30 flex-shrink-0">
                        <span className="text-2xl sm:text-3xl md:text-4xl">🏢</span>
                      </div>
                      <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 text-center sm:text-left">Property Cases</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                      {[
                        'Legal Opinion & Advisory',
                        'Title Verification & Clearance',
                        'Sale Deed Preparation & Review',
                        'Property Registration',
                        'Gift Deed & Will Drafting',
                        'And Many More'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-blue-100/50 transition-colors duration-200">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                          <span className="text-blue-700 text-xs sm:text-sm md:text-base font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Family Cases Tab Content */}
          {activeServiceTab === 'family' && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8 md:space-y-10">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
                  Family Law Practice
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="group relative">
                  <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-green-50/80 to-green-100/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-green-200/50 hover:shadow-xl transition-all duration-300">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-200/30 mb-3 sm:mb-4">
                        <span className="text-2xl sm:text-3xl">💍</span>
                      </div>
                      <h4 className="font-bold text-green-900 text-base sm:text-lg md:text-xl">Registration</h4>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg hover:bg-green-100/50 transition-colors duration-200">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                        <span className="text-green-700 text-xs sm:text-sm md:text-base font-medium">Marriage Registration</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-green-50/80 to-green-100/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-green-200/50 hover:shadow-xl transition-all duration-300">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-200/30 mb-3 sm:mb-4">
                        <span className="text-2xl sm:text-3xl">📄</span>
                      </div>
                      <h4 className="font-bold text-green-900 text-base sm:text-lg md:text-xl">Divorce Proceedings</h4>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {[
                        'Mutual Consent Divorce',
                        'Contested Divorce'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg hover:bg-green-100/50 transition-colors duration-200">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                          <span className="text-green-700 text-xs sm:text-sm md:text-base font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BCI Compliant Professional Disclaimer */}
        <section className="mt-12 sm:mt-16">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Professional Disclaimer</h4>
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
