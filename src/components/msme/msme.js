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
    title: "Micro, Small and Medium Enterprises (MSME) Cases Under Micro, Small and Medium Enterprises Development (MSMED) Act 2006",
    description: "Matters concerning Micro, Small and Medium Enterprises (MSME) under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, undertaken before Micro and Small Enterprise Facilitation Council (MSEFC).",
    keyPoints: [
      "Delayed payment dispute resolution under Sections 15-24 of Micro, Small and Medium Enterprises Development (MSMED) Act 2006",
      "Micro and Small Enterprises Facilitation Council (MSEFC) proceedings",
      "Statutory interest claims on delayed payments",
      "Legal documentation and compliance under Micro, Small and Medium Enterprises (MSME) regulations",
      "Recovery proceedings for outstanding dues from buyers"
    ]
  };

  const services = [
    {
      id: 'delayed-payment',
      title: "Delayed Payment Disputes",
      icon: <ClockIcon className="w-7 h-7" />,
      description: "Legal proceedings for delayed payment claims under Sections 15–18 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006",
      details: [
        "Claims for payments delayed beyond 45 days from acceptance of goods/services",
        "Interest calculation at three times the bank rate notified by RBI",
        "Compound interest with monthly rests as per statutory provisions",
        "Recovery of principal amount along with statutory interest"
      ]
    },
    {
      id: 'msefc-proceedings',
      title: "Micro and Small Enterprises Facilitation Council (MSEFC) Council Proceedings", 
      icon: <ScaleIcon className="w-7 h-7" />,
      description: "Proceedings before the Facilitation Council taken up within the timelines contemplated by the Act.",
      details: [
        "Filing applications before Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18 of Micro, Small and Medium Enterprises Development (MSMED) Act",
        "Preparation and presentation of cases within 90-day statutory timeline",
        "Ensuring compliance with documentary requirements",
        "Follow-up on Micro and Small Enterprises Facilitation Council (MSEFC) directions and implementation"
      ]
    },
    {
      id: 'recovery-proceedings',
      title: "Recovery and Enforcement",
      icon: <BanknotesIcon className="w-7 h-7" />,
      description: "Legal proceedings for recovery of awarded amounts",
      details: [
        "Execution of Micro and Small Enterprises Facilitation Council (MSEFC) awards under Section 17 of Micro, Small and Medium Enterprises Development (MSMED) Act",
        "Recovery proceedings as per statutory provisions",
        "Enforcement of payment directions issued by authorities",
        "Legal action against non-compliant buyers"
      ]
    },
    {
      id: 'compliance',
      title: "Micro, Small and Medium Enterprises (MSME) Compliance & Documentation",
      icon: <DocumentCheckIcon className="w-7 h-7" />,
      details: [
        "Udyam Registration process and documentation",
        "Legal review of supplier agreements and contracts",
        "Compliance with Micro, Small and Medium Enterprises (MSME) classification requirements",
      ]
    }
  ];

  const legalProcess = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Review of delayed payment claim and supporting documentation under Micro, Small and Medium Enterprises Development (MSMED) Act provisions"
    },
    {
      step: "02", 
      title: "Application Filing",
      description: "Preparation and filing of application before appropriate Micro and Small Enterprises Facilitation Council (MSEFC) authority"
    },
    {
      step: "03",
      title: "Proceedings",
      description: "Representation during Micro and Small Enterprises Facilitation Council (MSEFC) proceedings and presentation of case"
    },
    {
      step: "04",
      title: "Award Implementation", 
      description: "Follow-up on Micro and Small Enterprises Facilitation Council (MSEFC) directions and recovery proceedings if required"
    }
  ];

  const faqs = [
    {
      question: "What is the time limit for payment to Micro, Small and Medium Enterprises (MSME) suppliers under Micro, Small and Medium Enterprises Development (MSMED) Act 2006?",
      answer: "Under Section 15 of Micro, Small and Medium Enterprises Development (MSMED) Act 2006, buyers are required to make payment within 45 days of acceptance of goods or services supplied by Micro, Small and Medium Enterprises (MSME) units. Failure to pay within this period attracts interest liability."
    },
    {
      question: "What interest rate applies on delayed payments to MSMEs?",
      answer: "Section 16 of Micro, Small and Medium Enterprises Development (MSMED) Act 2006 provides that delayed payments attract compound interest at three times the bank rate notified by Reserve Bank of India, calculated with monthly rests from the due date."
    },
    {
      question: "How can MSMEs file complaints for delayed payments?",
      answer: "Micro, Small and Medium Enterprises (MSME) units can file applications before the Micro and Small Enterprise Facilitation Council (MSEFC) under Section 18 of Micro, Small and Medium Enterprises Development (MSMED) Act 2006 for recovery of delayed payments along with interest."
    },
    {
      question: "What is the time limit for Micro and Small Enterprises Facilitation Council (MSEFC) to decide delayed payment cases?",
      answer: "Under Micro, Small and Medium Enterprises Development (MSMED) Act 2006, every reference made to Micro and Small Enterprises Facilitation Council (MSEFC) shall be decided within 90 days from the date of filing the application, ensuring speedy resolution of disputes."
    },
    {
      question: "Can courts entertain appeals against Micro and Small Enterprises Facilitation Council (MSEFC) awards?",
      answer: "Under Section 19 of Micro, Small and Medium Enterprises Development (MSMED) Act 2006, no court can entertain an application for setting aside Micro and Small Enterprises Facilitation Council (MSEFC) awards unless the appellant deposits 75% of the awarded amount, ensuring protection for Micro, Small and Medium Enterprises (MSME) suppliers."
    }
  ];

  const tabContent = {
    overview: (
      <div className="space-y-6">
        <div className="bg-navy-50/50 rounded-xl p-6 border border-navy-100">
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">Micro, Small and Medium Enterprises (MSME) Cases Overview</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            {msmeOverview.description}
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {msmeOverview.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-2.5">
                <CheckCircleIcon className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Provisions */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-card">
          <h4 className="text-lg sm:text-xl font-bold text-navy-900 mb-4 flex items-center">
            <span className="text-xl mr-2">📜</span>
            Key Provisions of Micro, Small and Medium Enterprises Development (MSMED) Act 2006
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h5 className="font-bold text-navy-800 mb-2 text-sm">Section 15 - Buyer's Liability</h5>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Buyer shall make payment to the supplier on or before the appointed day. If no day is agreed, payment shall be made before the appointed day as per the Act.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h5 className="font-bold text-navy-800 mb-2 text-sm">Section 16 - Interest Payment</h5>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                If buyer fails to make payment on appointed day, shall be liable to pay compound interest with monthly rests to the supplier at three times the bank rate notified by RBI.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h5 className="font-bold text-navy-800 mb-2 text-sm">Section 17 - Recovery Provisions</h5>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Award of Micro and Small Enterprises Facilitation Council (MSEFC) is enforceable and recoverable as a decree of civil court. Recovery certificate can be issued for execution of award.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h5 className="font-bold text-navy-800 mb-2 text-sm">Section 18 - Micro and Small Enterprises Facilitation Council (MSEFC) Reference</h5>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Disputes may be referred to Micro and Small Enterprises Facilitation Council (MSEFC) for conciliation and arbitration. Council shall conduct proceedings as per prescribed procedures.
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-5 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2.5 bg-navy-50 rounded-lg text-navy-700">
                  {service.icon}
                </div>
                <h4 className="text-base font-bold text-navy-900 ml-3">{service.title}</h4>
              </div>
              <p className="text-gray-500 text-sm mb-3">{service.description}</p>
              <ul className="space-y-1.5">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                    <ChevronRightIcon className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
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
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">Legal Process for Micro, Small and Medium Enterprises (MSME) Disputes</h3>
        </div>
        
        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-navy-200 hidden md:block"></div>
          <div className="space-y-5">
            {legalProcess.map((step, index) => (
              <div key={index} className="relative flex items-start space-x-5">
                <div className="flex-shrink-0 w-14 h-14 bg-navy-700 text-white rounded-xl flex items-center justify-center font-bold text-base z-10">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-xl p-5 border border-gray-100 shadow-card">
                  <h4 className="text-lg font-bold text-navy-900 mb-1.5">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    faqs: (
      <div className="space-y-5">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">Frequently Asked Questions</h3>
          <p className="text-base text-gray-500">
            Common questions about Micro, Small and Medium Enterprises (MSME) legal matters under Micro, Small and Medium Enterprises Development (MSMED) Act 2006
          </p>
        </div>
        
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
            <button
              className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            >
              <span className="text-sm sm:text-base font-semibold text-navy-900 pr-4">{faq.question}</span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                expandedFaq === index ? 'bg-navy-700 text-white' : 'bg-navy-50 text-navy-600'
              }`}>
                {expandedFaq === index ? (
                  <MinusIcon className="w-4 h-4" />
                ) : (
                  <PlusIcon className="w-4 h-4" />
                )}
              </div>
            </button>
            {expandedFaq === index && (
              <div className="px-5 pb-4 animate-fadeIn">
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
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
        <title>Micro, Small and Medium Enterprises (MSME) Cases- Vipin Chand Garg, Advocate</title>
        <meta name="description" content="Micro, Small and Medium Enterprises (MSME) matters under the Micro, Small and Medium Enterprises (MSME) Development Act, 2006: delayed payment disputes, claims and references, Section 18 proceedings before the Facilitation Council (conciliation and arbitration), Micro, Small and Medium Enterprises (MSME) Samadhaan e‑filing; petitions related to Micro and Small Enterprises Facilitation Council (MSEFC) awards; appeals under Section 19; and Micro, Small and Medium Enterprises (MSME) compliance information." />

        <meta name="keywords" content="Legal Services Meerut, Notarial Services, Affidavits, Rent Agreements, Criminal Law, Document Attestation, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, Micro, Small and Medium Enterprises (MSME) Dispute Resolution, MSME Delayed Payment References (MSMED Act, 2006), Micro and Small Enterprises Facilitation Council (MSEFC) Conciliation Proceedings, Micro and Small Enterprises Facilitation Council (MSEFC) Arbitration, MSME Samadhaan E‑Filing, Petitions Related to Micro and Small Enterprises Facilitation Council (MSEFC) Awards, Appeals Under Section 19 (MSMED Act), MSME delayed payment and disputes, Section 18 Proceedings, Micro and Small Enterprises Facilitation Council, Section 15 Buyer's Liability, Section 16 Interest Payment, Section 17 Amount Due, Supplier–Buyer Disputes, Conciliation then Arbitration, Award Enforcement, Execution of Micro and Small Enterprises Facilitation Council (MSEFC) Award, Recovery Proceedings, Deposit under Section 19" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero */}
        <section className="relative pt-8 pb-2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-50/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center p-2 bg-navy-50 rounded-xl mb-4">
                <BriefcaseIcon className="w-7 h-7 text-navy-700" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4 leading-tight tracking-tight">
                 <span className="text-navy-700"> Micro, Small and Medium Enterprises</span> <br/>
                  <span className="text-navy-700"> MSME </span> Cases
              </h1>
              <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Proceedings under Section 18 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006
              </p>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-gray-50 rounded-xl p-1.5 border border-gray-100">
            <nav className="flex space-x-1.5">
              {[
                { id: 'overview', label: 'Services Overview', icon: <DocumentTextIcon className="w-4 h-4" /> },
                { id: 'process', label: 'Legal Process', icon: <ScaleIcon className="w-4 h-4" /> },
                { id: 'faqs', label: 'FAQs', icon: <QuestionMarkCircleIcon className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-navy-700 text-white shadow-sm'
                      : 'text-gray-500 hover:text-navy-700 hover:bg-white'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Content */}
        <section id="msme-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {tabContent[activeTab]}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-5">
            <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-1 text-sm">Professional Disclaimer</h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  This information is provided for general understanding of Micro, Small and Medium Enterprises (MSME) legal matters under Indian law, as permitted under the Bar Council of India Rules. 
                  It does not constitute legal advice and should not be relied upon as a substitute for consultation with a qualified legal professional. 
                  Each Micro, Small and Medium Enterprises (MSME) matter requires individual assessment based on specific facts and applicable statutory provisions.
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
