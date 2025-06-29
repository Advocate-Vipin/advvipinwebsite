import React, { useState } from 'react';
import Footer from '../features/footer';
import Navbar from '../navbar/navbar';

// Main Tabs Component
const Tabs = ({ children, defaultTab = 0, variant = 'default', className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  const tabItems = React.Children.toArray(children);
  
  const baseClasses = "w-full";
  const variantClasses = {
    default: "bg-white rounded-lg shadow-lg",
    minimal: "bg-transparent",
    bordered: "border border-gray-200 rounded-lg bg-white"
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Tab Headers */}
      <div className="flex flex-wrap border-b border-gray-200 bg-gray-50 rounded-t-lg overflow-hidden">
        {tabItems.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              flex-1 min-w-0 px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium text-center
              transition-all duration-200 ease-in-out relative
              hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset
              ${activeTab === index
                ? 'text-blue-600 bg-white border-b-2 border-blue-600 -mb-px'
                : 'text-gray-600 hover:text-gray-800'
              }
            `}
          >
            <span className="truncate block">{tab.props.label}</span>
            {tab.props.badge && (
              <span className="ml-1 sm:ml-2 inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {tab.props.badge}
              </span>
            )}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="p-2 sm:p-4 md:p-6">
        {tabItems[activeTab]}
      </div>
    </div>
  );
};

// Tab Panel Component
const TabPanel = ({ children, label, badge }) => {
  return <div className="w-full">{children}</div>;
};

// Demo Component showing usage
const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-6 space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">Areas of Practice </h1>
        
        {/* Legal Services Example */}
        <div className="space-y-4">
          <Tabs defaultTab={0} variant="default">
            <TabPanel label="Criminal Cases" badge="7">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Criminal Cases</h3>
                </div>
                <div style={{cursor:'pointer'}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-1">
                      <h4 className="font-semibold text-red-900 text-sm sm:text-base">FIR & Bail Matters</h4>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-1">
                      <h4 className="font-semibold text-red-900 text-sm sm:text-base">Criminal Appeals</h4>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-1">
                      <h4 className="font-semibold text-red-900 text-sm sm:text-base">Cheque Bounce Cases</h4>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-1">
                      <h4 className="font-semibold text-red-900 text-sm sm:text-base">Cyber Crimes</h4>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-1">
                      <h4 className="font-semibold text-red-900 text-sm sm:text-base">Matrimonial cases</h4>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-1">
                      <h4 className="font-semibold text-red-900 text-sm sm:text-base">Any many more</h4>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            
            <TabPanel label="Notarial Services" badge="7">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Notarial Services</h3>
                  <p className="text-gray-600 text-sm sm:text-base px-2 sm:px-4 leading-relaxed">Notarization is the official certification by a Notary- Government of India under the Notaries Act, 1952, verifying the identity of signatories and the authenticity of documents. Attestation can be broader and may be include</p>
                </div>
                <div style={{cursor:'pointer'}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { name: 'Affidavits', icon: '📋' },
                    { name: 'Rent Agreements', icon: '🏠' },
                    { name: 'Declaration Letters', icon: '📄' },
                    { name: 'Academic Undertakings', icon: '✍️' },
                    { name: 'Certified Copies', icon: '📋' },
                    { name: 'Academic Documents', icon: '📄' },
                    { name: 'Other Attestation and Notarisation', icon: '📋' },

                  ].map((service, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 sm:p-4 rounded-xl border border-purple-200 hover:shadow-lg transition-all hover:scale-105">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className="text-xl sm:text-2xl">{service.icon}</span>
                        <h4 className="font-medium text-purple-900 text-xs sm:text-sm leading-tight">{service.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl sm:text-2xl">⚠️</span>
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">Important Note</h4>
                      <p className="text-yellow-800 text-xs sm:text-sm leading-relaxed">
                        Notarial services are provided in accordance with the Notaries Act, 1952, 
                        ensuring legal validity and acceptance by courts and government authorities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            
            <TabPanel label="Civil Cases" badge="1">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Civil Cases</h3>
                </div>
                <div style={{cursor:'pointer'}} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-xl border border-blue-200">
                  <div >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl sm:text-3xl">🏢</span>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-900">Property Cases</h4>
                      </div>
                      <div style={{cursor:'pointer'}} className="space-y-2 sm:space-y-3">
                        {[
                          'Legal Opinion & Advisory',
                          'Title Verification & Clearance',
                          'Sale Deed Preparation & Review',
                          'Property Registration',
                          'Gift Deed & Will Drafting',
                          'And many more'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span className="text-blue-700 text-xs sm:text-sm">{item}</span>
                          </div>
                        ))}
                      </div>            
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            
            <TabPanel label="Family Cases" badge="2">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Family Law</h3>
                </div>
                <div style={{cursor:'pointer'}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-green-900 text-base sm:text-lg">Registration</h4>
                    </div>
                    <ul className="text-green-700 text-xs sm:text-sm space-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                        <span>Marriage Registration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-green-900 text-base sm:text-lg">Divorce Proceedings</h4>
                    </div>
                    <ul className="text-green-700 text-xs sm:text-sm space-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                        <span>Mutual Consent Divorce</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                        <span>Contested Divorce</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
            
            <TabPanel label="MSME Cases" badge="2">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">MSME</h3>
                </div>
                <div style={{cursor:'pointer'}} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 sm:p-6 rounded-xl border border-indigo-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl sm:text-3xl">🏭</span>
                      <h4 className="text-lg sm:text-xl font-semibold text-indigo-900">MSME Registration</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        {[
                          'MSME Registration Process',
                          'Udyog Aadhaar Registration',
                          'Compliance & Regulatory Matters',
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-indigo-700 text-xs sm:text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 sm:p-6 rounded-xl border border-indigo-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl sm:text-3xl">⚖️</span>
                      <h4 className="text-lg sm:text-xl font-semibold text-indigo-900">MSME Dispute Resolution</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        {[
                          'Payment Delay Disputes',
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-indigo-700 text-xs sm:text-sm">{item}</span>
                          </div>
                        ))}
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