import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Footer from "../features/footer";
import { useNavigate } from "react-router-dom";
import {MapIcon} from "@heroicons/react/24/outline";
import ChamberLocation from "../features/chamberLocation";
import { Helmet } from "react-helmet";
import {
  CheckCircleIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  BuildingLibraryIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentCheckIcon,
  IdentificationIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  HomeIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  DocumentDuplicateIcon,
  ComputerDesktopIcon,
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  FireIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  HandRaisedIcon,
  QuestionMarkCircleIcon,
  PlusIcon,
  MinusIcon,
  GlobeAsiaAustraliaIcon
} from '@heroicons/react/24/outline';

const NotaryServicesSection = () => {
  const [activeServiceTab, setActiveServiceTab] = useState('essential');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const serviceData = {
    essential: {
      title: "Why Notary Services Are Essential",
      icon: <ShieldCheckIcon className="h-7 w-7 text-navy-700" />,
      services: [
        {
          icon: <DocumentCheckIcon className="h-5 w-5 text-emerald-600" />,
          title: "Legal Validity",
          description: "Ensures acceptance in courts and official processes",
          details: "Notarized documents carry legal weight and are accepted by all judicial and administrative bodies across India."
        },
        {
          icon: <ShieldCheckIcon className="h-5 w-5 text-navy-600" />,
          title: "Fraud Prevention",
          description: "Acts as impartial witnesses to prevent forgery and coercion",
          details: "Notaries act as impartial witnesses to ensure that signatories enter into agreements willingly and without coercion, while authentication by a certified notary significantly reduces document tampering and fraudulent activities."
        },
        {
          icon: <BriefcaseIcon className="h-5 w-5 text-indigo-600" />,
          title: "Simplifying Complex Transactions",
          description: "Streamlines property transfers, business agreements, and affidavits",
          details: "Professional notarization ensures smooth processing of complex legal and business transactions."
        },
        {
          icon: <BuildingOfficeIcon className="h-5 w-5 text-orange-600" />,
          title: "Government Compliance",
          description: "Documents comply with all applicable laws, regulations, and formalities",
          details: "A Central Government appointed Notary ensures full compliance with Indian legal framework and regulatory acceptance at all levels across India."
        },
        {
          icon: <CheckBadgeIcon className="h-5 w-5 text-emerald-600" />,
          title: "Verify Authenticity",
          description: "Ensures documents are genuine and properly executed through thorough verification",
          details: "Notarisation ensure that your documents are genuine and properly executed through thorough verification by Central Government appointed Notary."
        },
        {
          icon: <StarIcon className="h-5 w-5 text-gold-500" />,
          title: "Provide Credibility",
          description: "Enhanced validity through impartial third-party verification",
          details: "Notarized documents are more credible and valid because they have been verified by an impartial third party - a certified Central Government Notary."
        },
        {
          icon: <HandRaisedIcon className="h-5 w-5 text-pink-600" />,
          title: "Protect Rights",
          description: "Safeguards rights and interests of individuals and organizations",
          details: "Notaries protect the rights and interests of individuals and organizations, ensuring legal security in complex transactions and important documentation."
        }
      ]
    },
    documents: {
      title: "Documents Required for Notary Services",
      icon: <DocumentDuplicateIcon className="h-7 w-7 text-emerald-600" />,
      services: [
        {
          icon: <IdentificationIcon className="h-5 w-5 text-navy-600" />,
          title: "Valid ID Proof",
          description: "Aadhaar Card, Passport, or PAN Card",
          details: "Government-issued photo identification is mandatory for all notarial services to verify identity."
        },
        {
          icon: <UserGroupIcon className="h-5 w-5 text-pink-500" />,
          title: "Photograph",
          description: "Passport size photograph",
          details: "A recent passport size photograph is required. This helps further verify identity and supports the completeness of the documentation process."
        },
        {
          icon: <DocumentTextIcon className="h-5 w-5 text-blue-600" />,
          title: "Original Documents",
          description: "Must be presented in their original form",
          details: "All documents requiring notarization must be presented in original form for authenticity verification."
        },
        {
          icon: <ClipboardDocumentListIcon className="h-5 w-5 text-emerald-600" />,
          title: "Supporting Documents",
          description: "Any additional paperwork relevant to the notarization",
          details: "Additional supporting documents may be required based on the specific nature of notarization."
        }
      ]
    },
    affidavit: {
      title: "Comprehensive Affidavit Services",
      icon: <DocumentCheckIcon className="h-7 w-7 text-blue-600" />,
      services: []
    },
    faq: {
      title: "Frequently Asked Questions",
      icon: <QuestionMarkCircleIcon className="h-7 w-7 text-navy-700" />,
      services: []
    }
  };

  const affidavitServices = [
    { category: "Name & Identity", icon: <UserIcon className="h-4 w-4" />, services: [
      "Affidavit for Name Change",
      "Affidavit Service for Change of Name in Gazette",
      "Affidavit Services for Change of Name After Marriage",
      "Affidavit Services for Change of Signature",
      "Affidavit Services for One and the Same Person Proof",
      "Affidavit Services for Change of Name for Minor"
    ]},
    { category: "Address & Residence", icon: <HomeIcon className="h-4 w-4" />, services: [
      "Affidavit Services for Proof of Address",
      "Affidavit Services for Domicile Certificate"
    ]},
    { category: "Personal Records", icon: <CalendarDaysIcon className="h-4 w-4" />, services: [
      "Affidavit Services for Proof of Date of Birth",
      "Affidavit Services for Declaration of Non Criminal Record",
      "Affidavit Services for First Born Child"
    ]},
    { category: "Financial & Income", icon: <CreditCardIcon className="h-4 w-4" />, services: [
      "Affidavit Services for Proof of Income",
      "Affidavit Services for Claim Settlement in the Bank",
      "Affidavit Services for PF cum Indemnity Bond"
    ]},
    { category: "Marriage & Family", icon: <HeartIcon className="h-4 w-4" />, services: [
      "Affidavit Services for Joint Marriage Affidavit",
      "Affidavit Services for Marriage Registration"
    ]},
    { category: "Education", icon: <AcademicCapIcon className="h-4 w-4" />, services: [
      "Affidavit Services for Education Loan",
      "Affidavit Services for Gap in Education",
      "Affidavit Services for Anti-ragging",
      "Affidavit Services for Duplicate Mark Sheet",
      "Common Affidavit for School/College Purposes",
      "Parent No Objection Affidavit",
      "Student No Objection Affidavit",
      "No Objection Affidavit for student studying in foreign Country",
    ]},
    { category: "Utilities & Gas", icon: <FireIcon className="h-4 w-4" />, services: [
      "Affidavit Services for LPG Annexure A",
      "Affidavit Services for HP Gas",
      "Affidavit Services for Indane Gas",
      "Affidavit Services for Bharat Gas"
    ]},
    { category: "Employment & Licensing", icon: <BriefcaseIcon className="h-4 w-4" />, services: [
      "Affidavit Services for Gap in Employment",
      "Affidavit Services for Duplicate License"
    ]}
  ];

  const filteredAffidavitServices = affidavitServices.map(category => ({
    ...category,
    services: category.services.filter(service => 
      service.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.services.length > 0);

  return (
    
    <div className="min-h-screen bg-white">
        <Helmet>
            <meta
            name="description"
            content="Contact Vipin Chand Garg, Advocate & Notary in Meerut Court, for general professional inquiries related to legal and notarial services under Indian law."
            />
            <meta name="keywords" content="Legal Services Meerut, Notarial Services, Affidavits, Rent Agreements, Criminal Law, Document Attestation, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, Micro, Small and Medium Enterprises (MSME) Dispute Resolution, Micro, Small and Medium Enterprises (MSME) Delayed Payment References (MSMED Act, 2006), Micro and Small Enterprises Facilitation Council (MSEFC) Conciliation Proceedings, Micro and Small Enterprises Facilitation Council (MSEFC) Arbitration, Micro, Small and Medium Enterprises (MSME) Samadhaan E‑Filing, Petitions Related to Micro and Small Enterprises Facilitation Council (MSEFC) Awards, Appeals Under Section 19 (MSMED Act), Micro, Small and Medium Enterprises (MSME) delayed payment and disputes, Section 18 Proceedings, Micro and Small Enterprises Facilitation Council, Section 15 Buyer's Liability, Section 16 Interest Payment, Section 17 Amount Due, Supplier–Buyer Disputes, Conciliation then Arbitration, Award Enforcement, Execution of Micro and Small Enterprises Facilitation Council (MSEFC) Award, Recovery Proceedings, Deposit under Section 19" />
            <link rel="canonical" href="https://yourdomain.com/contact" />
        </Helmet>
        <Navbar />
        <ChamberLocation mapOpen={mapOpen} setMapOpen={setMapOpen} />
    
        <section 
          id="services-section" 
          className={`py-8 lg:py-10 relative overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Background */}
          <div className="absolute top-20 right-20 w-80 h-80 bg-navy-100/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-gold-100/8 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-navy-50 border border-navy-200/40 mb-5">
                <DocumentCheckIcon className="h-4 w-4 text-navy-700 mr-2" />
                <span className="text-xs sm:text-sm font-semibold text-navy-700">Comprehensive Notary Services</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-3 tracking-tight">
                Professional Notary
                <br className="sm:hidden" />
                <span className="text-navy-700"> & Affidavit Services</span>
              </h2>
              
              <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Experience comprehensive notarial services backed by Central Government authority, 
                ensuring legal validity and acceptance across India and internationally.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap justify-center gap-2.5 mt-6">
                {[
                  { icon: <DocumentCheckIcon className="h-4 w-4 text-navy-600" />, text: 'Legal Validity' },
                  { icon: <ShieldCheckIcon className="h-4 w-4 text-navy-600" />, text: 'Fraud Prevention' },
                  { icon: <GlobeAltIcon className="h-4 w-4 text-emerald-600" />, text: 'Pan-India Validity' },
                  { icon: <GlobeAsiaAustraliaIcon className="h-4 w-4 text-emerald-600" />, text: 'International Validity' },
                ].map((pill, idx) => (
                  <div key={idx} className="flex items-center px-3.5 py-1.5 bg-gray-50 rounded-full border border-gray-100">
                    {pill.icon}
                    <span className="text-xs font-medium text-gray-600 ml-1.5">{pill.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="bg-gray-50 rounded-xl p-1.5 border border-gray-100 max-w-fit mx-auto">
                <div className="flex flex-wrap gap-1 overflow-x-auto no-scrollbar">
                  {Object.entries(serviceData).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setActiveServiceTab(key)}
                      className={`px-3.5 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                        activeServiceTab === key
                          ? 'bg-navy-700 text-white shadow-sm'
                          : 'text-gray-500 hover:text-navy-700 hover:bg-white'
                      }`}
                    >
                      {data.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Essential Tab */}
            {activeServiceTab === 'essential' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 cursor-pointer animate-fadeIn">
                {serviceData.essential.services.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-100 p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-bold text-navy-900">
                          {service.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {service.details}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Documents Tab */}
            {activeServiceTab === 'documents' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 cursor-pointer animate-fadeIn">
                {serviceData.documents.services.map((document, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-100 p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 text-center">
                    <div className="w-12 h-12 mx-auto bg-navy-50 rounded-xl flex items-center justify-center mb-3">
                      {document.icon}
                    </div>
                    <h3 className="text-base font-bold text-navy-900 mb-1.5">
                      {document.title}
                    </h3>
                    <p className="text-gold-600 font-medium text-sm mb-3">
                      {document.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <p className="text-xs text-gray-600">
                        {document.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Affidavit Tab */}
            {activeServiceTab === 'affidavit' && (
              <div className="space-y-6 cursor-pointer animate-fadeIn">
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search affidavit services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-card focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Affidavit Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
                  {(searchTerm ? filteredAffidavitServices : affidavitServices).map((category, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-100 p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-navy-50 rounded-lg">
                          {category.icon}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-navy-900">
                          {category.category}
                        </h3>
                        <span className="px-2 py-0.5 bg-navy-50 text-navy-700 text-xs font-bold rounded-full">
                          {category.services.length}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-start space-x-2 p-1.5 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <CheckCircleIcon className="h-3.5 w-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-600">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {searchTerm && filteredAffidavitServices.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-3">
                      <MagnifyingGlassIcon className="h-8 w-8 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">No services found</h3>
                    <p className="text-gray-400 text-sm">Try adjusting your search terms</p>
                  </div>
                )}
              </div>
            )}

            {/* FAQ Tab */}
            {activeServiceTab === 'faq' && (
              <NotaryFAQSection />
            )}

          </div>

        </section>
    </div>
  );
};

const NotaryFAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqData = [
    {
      question: "What is a notary?",
      answer: "A notary is a person authorized by the government to witness the signing of important documents, verify the identities of the signers, and administer oaths to ensure the document's legality and authenticity."
    },
    {
      question: "Why do I need a notarized document?",
      answer: "Notarization ensures that a document is legally binding, preventing fraud and verifying that the parties involved understand and agree to the terms."
    },
    {
      question: "What types of documents require notarization?",
      answer: "Property agreements (rental, lease, sale, or purchase), Affidavits and declarations, Power of attorney, Legal contracts and agreements, Loan or financial documents."
    },
    {
      question: "How long does the notarization process take?",
      answer: "With Central Government authority and professional expertise, notarization can typically be completed efficiently on the same day, depending on document complexity and requirements."
    },
    {
      question: "What documents do I need to bring for notarization?",
      answer: "You typically need: The original document(s) to be notarized, Valid government-issued identification (e.g., passport, driver's license, Aadhaar card), Witnesses (if required by the document type). It depends on the specific document."
    },
    {
      question: "Is notarization mandatory for rental agreements?",
      answer: "In most states, notarization is mandated for rental agreements of less than 11 months. For longer duration agreements need to get registered."
    },
    {
      question: "Is notarization valid across state boundaries?",
      answer: "Yes, notarized documents are valid throughout India, irrespective of the state in which they were notarized. Central Government appointed notaries provide enhanced pan-India validity."
    },
    {
      question: "What happens if I lose a notarized document?",
      answer: "You must re-execute the document and get it notarized again. Some notaries maintain a logbook that might help in recovering details of the original transaction."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <div className="space-y-3">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:ring-offset-1 rounded-xl"
            >
              <div className="flex items-start space-x-3 flex-1">
                <div className="p-1.5 bg-navy-50 rounded-lg flex-shrink-0">
                  <QuestionMarkCircleIcon className="h-4 w-4 text-navy-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-0.5">
                    {faq.question}
                  </h3>
                  {expandedFAQ !== index && (
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {faq.answer.substring(0, 100)}...
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex-shrink-0 ml-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  expandedFAQ === index ? 'bg-navy-700 text-white' : 'bg-navy-50 text-navy-600'
                }`}>
                  {expandedFAQ === index ? (
                    <MinusIcon className="h-4 w-4" />
                  ) : (
                    <PlusIcon className="h-4 w-4" />
                  )}
                </div>
              </div>
            </button>

            {expandedFAQ === index && (
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 animate-fadeIn">
                <div className="ml-9 pl-3 border-l-2 border-navy-200">
                  <div className="bg-navy-50/50 rounded-lg p-4 border border-navy-100">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function NotaryPage() {
  const [mapOpen, setMapOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Helmet>
        <title>Notary - Vipin Chand Garg | Central Government Appointed Notary</title>
        <meta 
          name="description" 
          content="Professional notary services by Central Government appointed Advocate Vipin Chand Garg. Comprehensive affidavit services, document authentication, and legal validity across India." 
        />
        <meta name="keywords" content="Legal Services Meerut, Notarial Services, Affidavits, Rent Agreements, Criminal Law, Document Attestation, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, Micro, Small and Medium Enterprises (MSME) Dispute Resolution, Micro, Small and Medium Enterprises (MSME) Delayed Payment References (MSMED Act, 2006), Micro and Small Enterprises Facilitation Council (MSEFC) Conciliation Proceedings, Micro and Small Enterprises Facilitation Council (MSEFC) Arbitration, Micro, Small and Medium Enterprises (MSME) Samadhaan E‑Filing, Petitions Related to Micro and Small Enterprises Facilitation Council (MSEFC) Awards, Appeals Under Section 19 (MSMED Act), Micro, Small and Medium Enterprises (MSME) delayed payment and disputes, Section 18 Proceedings, Micro and Small Enterprises Facilitation Council, Section 15 Buyer's Liability, Section 16 Interest Payment, Section 17 Amount Due, Supplier–Buyer Disputes, Conciliation then Arbitration, Award Enforcement, Execution of Micro and Small Enterprises Facilitation Council (MSEFC) Award, Recovery Proceedings, Deposit under Section 19" />
      </Helmet>
    
      
      <main >
        {/* Notary Services Section */}
        <NotaryServicesSection />

        {/* Legal Disclaimer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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
        
      </main>

      {/* Chamber Location Modal */}
      {mapOpen && (
        <ChamberLocation 
          isOpen={mapOpen} 
          onClose={() => setMapOpen(false)} 
        />
      )}
      
      <Footer />
    </div>
  );
}
