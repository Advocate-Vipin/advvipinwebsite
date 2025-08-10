import React, { useState } from 'react';
import Footer from '../features/footer';
import Navbar from '../navbar/navbar';
import { Helmet } from "react-helmet";

// Enhanced Tabs Component
const Tabs = ({ children, defaultTab = 0, variant = 'default', className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  const tabItems = React.Children.toArray(children);
  
  const baseClasses = "w-full relative";
  const variantClasses = {
    default: "bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl ring-1 ring-white/30 border border-slate-200/20",
    minimal: "bg-transparent",
    bordered: "border border-gray-200 rounded-3xl bg-white/80 backdrop-blur-xl"
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className} overflow-hidden`}>
      <Helmet>
        <title>Practice Areas | Legal & Notarial Services - Vipin Chand Garg, Meerut</title>
        <meta
          name="description"
          content="Information on legal and notarial services including affidavit drafting, rent agreement, power of attorney, and criminal case consultation."
        />
        <meta
          name="keywords"
          content="Legal Services Meerut, Notarial Services, Affidavits, Rent Agreements, Criminal Law, Document Attestation, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, MSME Dispute Resolution"
        />
      </Helmet>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100/20 to-transparent rounded-full blur-xl"></div>
      
      {/* Enhanced Tab Headers */}
      <div className="flex flex-wrap bg-gradient-to-r from-slate-50/50 via-blue-50/50 to-indigo-50/50 backdrop-blur-sm rounded-t-3xl overflow-hidden border-b border-slate-200/30">
        {tabItems.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              group relative flex-1 min-w-0 px-3 sm:px-4 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold text-center
              transition-all duration-300 ease-in-out overflow-hidden
              hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset
              ${activeTab === index
                ? 'text-blue-700 bg-white/60 backdrop-blur-sm shadow-lg'
                : 'text-slate-600 hover:text-slate-800'
              }
            `}
          >
            {/* Active tab indicator */}
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600"></div>
            )}
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <span className="relative truncate block font-bold">{tab.props.label}</span>
            {tab.props.badge && (
              <span className="relative ml-2 sm:ml-3 inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
                {tab.props.badge}
              </span>
            )}
          </button>
        ))}
      </div>
      
      {/* Enhanced Tab Content */}
      <div className="relative p-6 sm:p-8 md:p-12">
        {tabItems[activeTab]}
      </div>
    </div>
  );
};

// Tab Panel Component (unchanged functionality)
const TabPanel = ({ children, label, badge }) => {
  return <div className="w-full">{children}</div>;
};

// Enhanced Services Component
const Services = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-emerald-100/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-100/10 to-pink-100/10 rounded-full blur-2xl animate-bounce duration-[3000ms]"></div>
      </div>

      <Navbar />
      
      <div className="relative max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 space-y-8 sm:space-y-12">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/30 shadow-lg mb-8">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Legal Professional • Areas of Practice
            </span>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse delay-500"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent drop-shadow-sm">
              Areas of Practice
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal and notarial services in accordance with Indian law
          </p>
        </div>
        
        {/* Enhanced Legal Services Tabs */}
        <div className="space-y-6">
          <Tabs defaultTab={0} variant="default">
            <TabPanel label="Criminal Cases" badge="7">
              <div className="space-y-8 sm:space-y-10">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent mb-4">
                    Criminal Law Practice
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                    Comprehensive criminal law representation and consultation services
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { name: 'FIR & Bail Matters', icon: '🚨' },
                    { name: 'Criminal Appeals', icon: '⚖️' },
                    { name: 'Cheque Bounce Cases', icon: '💳' },
                    { name: 'Cyber Crimes', icon: '🔒' },
                    { name: 'Matrimonial Cases', icon: '💑' },
                    { name: 'And Many More', icon: '📋' }
                  ].map((service, index) => (
                    <div key={index} className="group relative cursor-pointer">
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative bg-gradient-to-br from-red-50/80 to-red-100/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-red-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex flex-col items-center text-center space-y-3">
                          <span className="text-3xl sm:text-4xl">{service.icon}</span>
                          <h4 className="font-bold text-red-900 text-sm sm:text-base leading-tight">{service.name}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
            
            <TabPanel label="Notarial Services" badge="7">
              <div className="space-y-8 sm:space-y-10">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 to-purple-800 bg-clip-text text-transparent mb-4">
                    Notarial Services
                  </h3>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                      Official certification by a Notary - Government of India under the Notaries Act, 1952, verifying the identity of signatories and the authenticity of documents.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-purple-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl sm:text-3xl">{service.icon}</span>
                          <h4 className="font-bold text-purple-900 text-xs sm:text-sm leading-tight">{service.name}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-r from-amber-50/80 to-orange-50/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-amber-200/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-200/30 flex-shrink-0">
                        <span className="text-2xl">⚠️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-3 text-base sm:text-lg">Important Legal Notice</h4>
                        <p className="text-amber-800 text-sm sm:text-base leading-relaxed">
                          Notarial services are provided in accordance with the Notaries Act, 1952, 
                          ensuring legal validity and acceptance by courts and government authorities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            
            <TabPanel label="Civil Cases" badge="1">
              <div className="space-y-8 sm:space-y-10">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
                    Civil Law Practice
                  </h3>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-blue-200/50 hover:shadow-2xl transition-all duration-300">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center border border-blue-200/30">
                          <span className="text-3xl sm:text-4xl">🏢</span>
                        </div>
                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">Property Cases</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {[
                          'Legal Opinion & Advisory',
                          'Title Verification & Clearance',
                          'Sale Deed Preparation & Review',
                          'Property Registration',
                          'Gift Deed & Will Drafting',
                          'And Many More'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-blue-100/50 transition-colors duration-200">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                            <span className="text-blue-700 text-sm sm:text-base font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            
            <TabPanel label="Family Cases" badge="2">
              <div className="space-y-8 sm:space-y-10">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent mb-4">
                    Family Law Practice
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-green-50/80 to-green-100/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-green-200/50 hover:shadow-xl transition-all duration-300">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-200/30 mb-4">
                          <span className="text-3xl">💍</span>
                        </div>
                        <h4 className="font-bold text-green-900 text-lg sm:text-xl">Registration</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-100/50 transition-colors duration-200">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                          <span className="text-green-700 text-sm sm:text-base font-medium">Marriage Registration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-green-50/80 to-green-100/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-green-200/50 hover:shadow-xl transition-all duration-300">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-200/30 mb-4">
                          <span className="text-3xl">📄</span>
                        </div>
                        <h4 className="font-bold text-green-900 text-lg sm:text-xl">Divorce Proceedings</h4>
                      </div>
                      <ul className="space-y-3">
                        {[
                          'Mutual Consent Divorce',
                          'Contested Divorce'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-100/50 transition-colors duration-200">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                            <span className="text-green-700 text-sm sm:text-base font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            
            <TabPanel label="MSME Cases" badge="2">
              <div className="space-y-8 sm:space-y-10">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-700 to-indigo-800 bg-clip-text text-transparent mb-4">
                    MSME Legal Services
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-indigo-50/80 to-indigo-100/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-indigo-200/50 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-200/30">
                          <span className="text-3xl sm:text-4xl">🏭</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-indigo-900">MSME Registration</h4>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          'MSME Registration Process',
                          'Udyog Aadhaar Registration',
                          'Compliance & Regulatory Matters',
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-indigo-100/50 transition-colors duration-200">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-indigo-700 text-sm sm:text-base font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-indigo-50/80 to-indigo-100/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-indigo-200/50 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-200/30">
                          <span className="text-3xl sm:text-4xl">⚖️</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-indigo-900">MSME Disputes</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-indigo-100/50 transition-colors duration-200">
                          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                            1
                          </div>
                          <span className="text-indigo-700 text-sm sm:text-base font-medium">Payment Delay Disputes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
export { Tabs, TabPanel };
