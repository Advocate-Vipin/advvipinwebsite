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
  MinusIcon
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
      icon: <ShieldCheckIcon className="h-8 w-8 text-purple-600" />,
      services: [
        {
          icon: <DocumentCheckIcon className="h-6 w-6 text-green-600" />,
          title: "Legal Validity",
          description: "Ensures acceptance in courts and official processes",
          details: "Notarized documents carry legal weight and are accepted by all judicial and administrative bodies across India."
        },
        {
          icon: <ShieldCheckIcon className="h-6 w-6 text-blue-600" />,
          title: "Fraud Prevention",
          description: "Acts as impartial witnesses to prevent forgery and coercion",
          details: "Notaries act as impartial witnesses to ensure that signatories enter into agreements willingly and without coercion, while authentication by a certified notary significantly reduces document tampering and fraudulent activities."
        },
        {
          icon: <BriefcaseIcon className="h-6 w-6 text-indigo-600" />,
          title: "Simplifying Complex Transactions",
          description: "Streamlines property transfers, business agreements, and affidavits",
          details: "Professional notarization ensures smooth processing of complex legal and business transactions."
        },
        {
          icon: <BuildingOfficeIcon className="h-6 w-6 text-orange-600" />,
          title: "Government Compliance",
          description: "Documents comply with all applicable laws, regulations, and formalities",
          details: "A Central Government appointed Notary ensures full compliance with Indian legal framework and regulatory acceptance at all levels across India."
        },
        {
          icon: <CheckBadgeIcon className="h-6 w-6 text-emerald-600" />,
          title: "Verify Authenticity",
          description: "Ensures documents are genuine and properly executed through thorough verification",
          details: "Our notary services ensure that your documents are genuine and properly executed through thorough verification by registered professionals with Central Government authority."
        },
        {
          icon: <StarIcon className="h-6 w-6 text-amber-600" />,
          title: "Provide Credibility",
          description: "Enhanced validity through impartial third-party verification",
          details: "Notarized documents are more credible and valid because they have been verified by an impartial third party - a certified Central Government notary public."
        },
        {
          icon: <HandRaisedIcon className="h-6 w-6 text-pink-600" />,
          title: "Protect Rights",
          description: "Safeguards rights and interests of individuals and organizations",
          details: "Notaries protect the rights and interests of individuals and organizations, ensuring legal security in complex transactions and important documentation."
        }
      ]
    },
    documents: {
      title: "Documents Required for Notary Services",
      icon: <DocumentDuplicateIcon className="h-8 w-8 text-emerald-600" />,
      services: [
        {
          icon: <IdentificationIcon className="h-6 w-6 text-purple-600" />,
          title: "Valid ID Proof",
          description: "Aadhaar Card, Passport, or PAN Card",
          details: "Government-issued photo identification is mandatory for all notarial services to verify identity."
        },
        {
          icon: <DocumentTextIcon className="h-6 w-6 text-blue-600" />,
          title: "Original Documents",
          description: "Must be presented in their original form",
          details: "All documents requiring notarization must be presented in original form for authenticity verification."
        },
        {
          icon: <ClipboardDocumentListIcon className="h-6 w-6 text-green-600" />,
          title: "Supporting Documents",
          description: "Any additional paperwork relevant to the notarization",
          details: "Additional supporting documents may be required based on the specific nature of notarization."
        }
      ]
    },
    affidavit: {
      title: "Comprehensive Affidavit Services",
      icon: <DocumentCheckIcon className="h-8 w-8 text-blue-600" />,
      services: []
    },
    faq: {
      title: "Frequently Asked Questions",
      icon: <QuestionMarkCircleIcon className="h-8 w-8 text-indigo-600" />,
      services: []
    }
  };

  const affidavitServices = [
    { category: "Name & Identity", icon: <UserIcon className="h-5 w-5" />, services: [
      "Affidavit for Name Change",
      "Affidavit Service for Change of Name in Gazette",
      "Affidavit Services for Change of Name After Marriage",
      "Affidavit Services for Change of Signature",
      "Affidavit Services for One and the Same Person Proof",
      "Affidavit Services for Change of Name for Minor"
    ]},
    { category: "Address & Residence", icon: <HomeIcon className="h-5 w-5" />, services: [
      "Affidavit Services for Proof of Address",
      "Affidavit Services for Domicile Certificate"
    ]},
    { category: "Personal Records", icon: <CalendarDaysIcon className="h-5 w-5" />, services: [
      "Affidavit Services for Proof of Date of Birth",
      "Affidavit Services for Declaration of Non Criminal Record",
      "Affidavit Services for First Born Child"
    ]},
    { category: "Financial & Income", icon: <CreditCardIcon className="h-5 w-5" />, services: [
      "Affidavit Services for Proof of Income",
      "Affidavit Services for Claim Settlement in the Bank",
      "Affidavit Services for PF cum Indemnity Bond"
    ]},
    { category: "Marriage & Family", icon: <HeartIcon className="h-5 w-5" />, services: [
      "Affidavit Services for Joint Marriage Affidavit",
      "Affidavit Services for Marriage Registration"
    ]},
    { category: "Education", icon: <AcademicCapIcon className="h-5 w-5" />, services: [
      "Affidavit Services for Education Loan",
      "Affidavit Services for Gap in Education",
      "Affidavit Services for Anti-ragging",
      "Affidavit Services for Duplicate Mark Sheet",
      "Common Affidavit for School/College Purposes",
      "Parent No Objection Affidavit",
      "Student No Objection Affidavit",
      "No Objection Affidavit for student studying in foreign Country",
    ]},
    { category: "Utilities & Gas", icon: <FireIcon className="h-5 w-5" />, services: [
      "Affidavit Services for LPG Annexure A",
      "Affidavit Services for HP Gas",
      "Affidavit Services for Indane Gas",
      "Affidavit Services for Bharat Gas"
    ]},
    { category: "Employment & Licensing", icon: <BriefcaseIcon className="h-5 w-5" />, services: [
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
    
        <section 
          id="services-section" 
          className={`py-8 lg:py-8 bg-white relative overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-200/50 mb-6">
                <DocumentCheckIcon className="h-6 w-6 text-purple-600 mr-2" />
                <span className="text-sm font-semibold text-gray-700">Comprehensive Notary Services</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
                Professional Notary
                <br className="sm:hidden" />
                <span className="text-purple-600"> & Affidavit Services</span>
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience comprehensive notarial services backed by Central Government authority, 
                ensuring legal validity and acceptance across India and internationally.
              </p>
              <br/>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                <DocumentCheckIcon className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Legal Validity</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                <ShieldCheckIcon className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Fraud Prevention</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                <GlobeAltIcon className="h-5 w-5 text-emerald-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Pan-India Validity</span>
              </div>
            </div>




            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8 lg:mb-12">
              <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/60 shadow-lg shadow-purple-500/10 overflow-x-auto no-scrollbar">
                {Object.entries(serviceData).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setActiveServiceTab(key)}
                    className={`px-4 sm:px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeServiceTab === key
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    {data.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Content */}
            {activeServiceTab === 'essential' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 cursor-pointer">
                {serviceData.essential.services.map((service, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-purple-200/50 p-6 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        {service.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeServiceTab === 'documents' && (
              <div className="grid md:grid-cols-3 gap-8 mb-12 cursor-pointer">
                {serviceData.documents.services.map((document, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-emerald-200/50 p-8 shadow-lg shadow-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2">
                      
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4">
                          {document.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {document.title}
                        </h3>
                        <p className="text-emerald-600 font-medium">
                          {document.description}
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-4 border border-emerald-200/50">
                        <p className="text-sm text-gray-700 text-center">
                          {document.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeServiceTab === 'affidavit' && (
              <div className="space-y-8 cursor-pointer">
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search affidavit services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg shadow-blue-500/10 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Affidavit Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
                  {(searchTerm ? filteredAffidavitServices : affidavitServices).map((category, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-blue-200/50 p-6 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
                        
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="p-2 bg-blue-100 rounded-xl">
                            {category.icon}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {category.category}
                          </h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                            {category.services.length}
                          </span>
                        </div>

                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex items-start space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                              <CheckCircleIcon className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {searchTerm && filteredAffidavitServices.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <MagnifyingGlassIcon className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                    <p className="text-gray-600">Try adjusting your search terms</p>
                  </div>
                )}
              </div>
            )}

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
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-indigo-200/50 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-500">
              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-3xl"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-2 bg-indigo-100 rounded-xl flex-shrink-0">
                    <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {faq.question}
                    </h3>
                    {expandedFAQ !== index && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {faq.answer.substring(0, 100)}...
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <div className={`w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    expandedFAQ === index ? 'bg-indigo-600 text-white rotate-180' : 'text-indigo-600'
                  }`}>
                    {expandedFAQ === index ? (
                      <MinusIcon className="h-5 w-5" />
                    ) : (
                      <PlusIcon className="h-5 w-5" />
                    )}
                  </div>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="ml-14 pl-4 border-l-2 border-indigo-200">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 sm:p-6 border border-indigo-200/50">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}

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
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Helmet>
        <title>Notary Services - Vipin Chand Garg | Central Government Appointed Notary</title>
        <meta 
          name="description" 
          content="Professional notary services by Central Government appointed Advocate Vipin Chand Garg. Comprehensive affidavit services, document authentication, and legal validity across India." 
        />
        <meta 
          name="keywords" 
          content="notary services, affidavit services, document authentication, central government notary, legal validity, fraud prevention" 
        />
      </Helmet>
    
      
      <main >
        {/* Hero Section */}

        {/* Notary Services Section */}
        <NotaryServicesSection />

        {/* Legal Disclaimer */}
        <section className="py-8 sm:py-12 bg-gray-50/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-amber-100 rounded-full border border-amber-200 mb-4">
                <span className="text-sm font-semibold text-amber-800">
                  This website is intended to provide general professional information as permitted under the Bar Council of India Rules. 
                  It does not serve as a platform for solicitation or advertisement. All information is provided for educational purposes 
                  only and should not be construed as legal advice.
                </span>
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
