import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../features/footer";
import { Helmet } from "react-helmet";
import {
  CheckCircleIcon,
  ScaleIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  BuildingOfficeIcon,
  HandRaisedIcon,
  QuestionMarkCircleIcon,
  PlusIcon,
  MinusIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  ChevronRightIcon,
  BanknotesIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

const MSMEServices = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const element = document.getElementById('msme-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const msmeOverview = {
    title: "MSME Legal Services Under MSMED Act 2006",
    description: "Professional legal representation for Micro, Small and Medium Enterprise matters in accordance with the Micro, Small and Medium Enterprises Development Act, 2006",
    keyPoints: [
      "Delayed payment dispute resolution under Sections 15-24 of MSMED Act 2006",
      "MSEFC (Micro and Small Enterprise Facilitation Council) proceedings",
      "Statutory interest claims on delayed payments",
      "Legal documentation and compliance under MSME regulations",
      "Recovery proceedings for outstanding dues from buyers"
    ]
  };

  const services = [
    {
      id: 'delayed-payment',
      title: "Delayed Payment Disputes",
      icon: <ClockIcon className="w-8 h-8" />,
      description: "Legal representation for delayed payment claims under Section 15 of MSMED Act 2006",
      details: [
        "Claims for payments delayed beyond 45 days from acceptance of goods/services",
        "Interest calculation at three times the bank rate notified by RBI",
        "Compound interest with monthly rests as per statutory provisions",
        "Recovery of principal amount along with statutory interest"
      ]
    },
    {
      id: 'msefc-proceedings',
      title: "MSEFC Council Proceedings", 
      icon: <ScaleIcon className="w-8 h-8" />,
      description: "Representation before Micro and Small Enterprise Facilitation Council",
      details: [
        "Filing applications before MSEFC under Section 18 of MSMED Act",
        "Preparation and presentation of cases within 90-day statutory timeline",
        "Ensuring compliance with documentary requirements",
        "Follow-up on MSEFC directions and implementation"
      ]
    },
    {
      id: 'recovery-proceedings',
      title: "Recovery and Enforcement",
      icon: <BanknotesIcon className="w-8 h-8" />,
      description: "Legal proceedings for recovery of awarded amounts",
      details: [
        "Execution of MSEFC awards under Section 17 of MSMED Act",
        "Recovery proceedings as per statutory provisions",
        "Enforcement of payment directions issued by authorities",
        "Legal action against non-compliant buyers"
      ]
    },
    {
      id: 'compliance',
      title: "MSME Compliance & Documentation",
      icon: <DocumentCheckIcon className="w-8 h-8" />,
      description: "Legal assistance for MSME registration and compliance matters",
      details: [
        "Udyam Registration process and documentation",
        "Legal review of supplier agreements and contracts",
        "Compliance with MSME classification requirements",
        "Advisory on statutory provisions and obligations"
      ]
    }
  ];

  const legalProcess = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Review of delayed payment claim and supporting documentation under MSMED Act provisions"
    },
    {
      step: "02", 
      title: "Application Filing",
      description: "Preparation and filing of application before appropriate MSEFC authority"
    },
    {
      step: "03",
      title: "Proceedings",
      description: "Representation during MSEFC proceedings and presentation of case"
    },
    {
      step: "04",
      title: "Award Implementation", 
      description: "Follow-up on MSEFC directions and recovery proceedings if required"
    }
  ];

  const faqs = [
    {
      question: "What is the time limit for payment to MSME suppliers under MSMED Act 2006?",
      answer: "Under Section 15 of MSMED Act 2006, buyers are required to make payment within 45 days of acceptance of goods or services supplied by MSME units. Failure to pay within this period attracts interest liability."
    },
    {
      question: "What interest rate applies on delayed payments to MSMEs?",
      answer: "Section 16 of MSMED Act 2006 provides that delayed payments attract compound interest at three times the bank rate notified by Reserve Bank of India, calculated with monthly rests from the due date."
    },
    {
      question: "How can MSMEs file complaints for delayed payments?",
      answer: "MSME units can file applications before the Micro and Small Enterprise Facilitation Council (MSEFC) under Section 18 of MSMED Act 2006 for recovery of delayed payments along with interest."
    },
    {
      question: "What is the time limit for MSEFC to decide delayed payment cases?",
      answer: "Under MSMED Act 2006, every reference made to MSEFC shall be decided within 90 days from the date of filing the application, ensuring speedy resolution of disputes."
    },
    {
      question: "Can courts entertain appeals against MSEFC awards?",
      answer: "Under Section 19 of MSMED Act 2006, no court can entertain an application for setting aside MSEFC awards unless the appellant deposits 75% of the awarded amount, ensuring protection for MSME suppliers."
    }
  ];

  const tabContent = {
    overview: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">MSME Legal Services Overview</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {msmeOverview.description}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {msmeOverview.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 sm:mt-12 cursor-pointer">
        <div className="relative group">
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-white/90 to-indigo-50/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-indigo-200/50">
            <h4 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4 sm:mb-6 flex items-center">
                <span className="text-2xl sm:text-3xl mr-3">📜</span>
                Key Provisions of MSMED Act 2006
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white/60 rounded-xl p-4 border border-indigo-100">
                <h5 className="font-bold text-indigo-800 mb-2 text-sm sm:text-base">Section 15 - Buyer's Liability</h5>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Buyer shall make payment to the supplier on or before the appointed day. If no day is agreed, payment shall be made before the appointed day as per the Act.
                </p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border border-indigo-100">
                <h5 className="font-bold text-indigo-800 mb-2 text-sm sm:text-base">Section 16 - Interest Payment</h5>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If buyer fails to make payment on appointed day, shall be liable to pay compound interest with monthly rests to the supplier at three times the bank rate notified by RBI.
                </p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border border-indigo-100">
                <h5 className="font-bold text-indigo-800 mb-2 text-sm sm:text-base">Section 17 - Recovery Provisions</h5>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Award of MSEFC is enforceable and recoverable as a decree of civil court. Recovery certificate can be issued for execution of award.
                </p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border border-indigo-100">
                <h5 className="font-bold text-indigo-800 mb-2 text-sm sm:text-base">Section 18 - MSEFC Reference</h5>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Disputes may be referred to MSEFC for conciliation and arbitration. Council shall conduct proceedings as per prescribed procedures.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h4>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                    <ChevronRightIcon className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
    process: (
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Legal Process for MSME Disputes</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional legal representation following statutory procedures under MSMED Act 2006
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
          <div className="space-y-8">
            {legalProcess.map((step, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    faqs: (
      <div className="space-y-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-xl text-gray-600">
            Common questions about MSME legal matters under MSMED Act 2006
          </p>
        </div>
        
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            >
              <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
              {expandedFaq === index ? (
                <MinusIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
              ) : (
                <PlusIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
              )}
            </button>
            {expandedFaq === index && (
              <div className="px-6 pb-4">
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  };

  return (
    <>
      <Helmet>
        <title>MSME Legal Services - Vipin Chand Garg, Advocate</title>
        <meta name="description" content="Professional MSME legal services under MSMED Act 2006. Delayed payment disputes, MSEFC proceedings, and MSME compliance matters." />
        <meta name="keywords" content="MSME lawyer, MSMED Act 2006, delayed payment disputes, MSEFC proceedings, Meerut advocate" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
                <BriefcaseIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> MSME</span> Cases
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Professional legal representation for Micro, Small and Medium Enterprise matters under the Micro, Small and Medium Enterprises Development Act, 2006
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2">
            <nav className="flex space-x-2">
              {[
                { id: 'overview', label: 'Services Overview', icon: <DocumentTextIcon className="w-5 h-5" /> },
                { id: 'process', label: 'Legal Process', icon: <ScaleIcon className="w-5 h-5" /> },
                { id: 'faqs', label: 'FAQs', icon: <QuestionMarkCircleIcon className="w-5 h-5" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Content Section */}
        <section id="msme-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {tabContent[activeTab]}
          </div>
        </section>

        {/* Important Notice */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Professional Disclaimer</h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  This information is provided for general understanding of MSME legal matters under Indian law, as permitted under the Bar Council of India Rules. 
                  It does not constitute legal advice and should not be relied upon as a substitute for consultation with a qualified legal professional. 
                  Each MSME matter requires individual assessment based on specific facts and applicable statutory provisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MSMEServices;
