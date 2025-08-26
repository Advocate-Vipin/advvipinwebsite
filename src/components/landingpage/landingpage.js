import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Footer from "../features/footer";
import { useNavigate } from "react-router-dom";
import {MapIcon} from "@heroicons/react/24/outline";
import ChamberLocation from "../features/chamberLocation";
import { Helmet } from "react-helmet";

export default function LandingPage() {
  const [open, setOpen] = useState(true);
  const [mapOpen, setMapOpen] = useState(false);

  const navigate = useNavigate();
  
  const LearnMore = () => {
    navigate("/practicearea");
  }

  const contactdetails = () => {
    navigate("/contactdetails");
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Vipin Chand Garg – Advocate & Notary Public in Meerut | Legal & Notary Services</title>
        <meta
          name="description"
          content="Vipin Chand Garg is an Advocate and Notary (Government of India) practicing in Meerut Court, Uttar Pradesh. Offers legal advice and notarial services as per Indian law."
        />
        <meta
          name="keywords"
          content="Advocate Meerut, Notary Public Meerut, Legal Documentation, Criminal Law Meerut, Notary India, Notary Services Meerut, Legal Services Meerut, Vipin Chand Garg Advocate, Meerut Advocate, Notary Government of India, Notary, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, MSME Dispute Resolution"
        />
        <link rel="canonical" href="https://advocatevipinchandgarg.netlify.app/" />
      </Helmet>

        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-all duration-500 data-closed:opacity-0 data-enter:duration-500 data-enter:ease-out data-leave:duration-300 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/20 transition-all duration-500 data-closed:translate-y-8 data-closed:opacity-0 data-closed:scale-95 data-enter:duration-500 data-enter:ease-out data-leave:duration-300 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-4xl mx-4 border border-slate-200/50"
                    >
                        {/* Gradient Header */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                        
                        <div className="bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl px-6 pt-8 pb-6 sm:p-10 sm:pb-8">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 shadow-lg ring-4 ring-white/50 sm:mx-0">
                                    <ExclamationTriangleIcon aria-hidden="true" className="h-8 w-8 text-amber-600 drop-shadow-sm" />
                                </div>
                                <div className="mt-4 text-center sm:mt-0 sm:ml-8 sm:text-left flex-1">
                                    <DialogTitle as="h3" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
                                        Important Legal Disclaimer
                                    </DialogTitle>
                                    <div className="mt-4">
                                        <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4 max-h-72 sm:max-h-80 overflow-y-auto pr-2">
                                            <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl p-4 border border-blue-200/30">
                                                <p className="text-slate-600 font-medium">
                                                    In adherence to the rules of Bar Council of India, Advocates are not permitted to solicit work or advertise our services. This website has been developed solely for informational purposes and by clicking <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">"I AGREE"</span> user acknowledges and agree to the following:
                                                </p>
                                            </div>
                                            
                                            <div className="space-y-4">
                                                {[
                                                    "There has been no advertisement, personal communication, solicitation, invitation, or any form of inducement whatsoever by Vipin Chand Garg or any of his associates to solicit any work or engage in professional services through this website.",
                                                    "The user wishes to gain more information about the advocate for his/her own information and personal use.",
                                                    "All information pertaining to him and the services offered on this website are provided to the user exclusively upon his/her/their specific request. Any information obtained or materials downloaded from this website are entirely at the user's volition. The transmission, receipt, or use of this site does not, and will not, create any lawyer-client relationship.",
                                                    "This website serves as a general informational resource only and, while diligent efforts are made to ensure accuracy and completeness, it is not promised or guaranteed to be exhaustive or entirely up-to-date. He does not warrant that the information contained herein is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident, or any other cause.",
                                                    "Advocate assumes no liability for the interpretation and/or use of the information presented on this website, nor does he offer any warranty of any kind, whether express or implied."
                                                ].map((text, index) => (
                                                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50/50 transition-colors duration-200">
                                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                                                            {index + 1}
                                                        </div>
                                                        <p className="text-slate-600 leading-relaxed">{text}</p>
                                                    </div>
                                                ))}
                                                
                                                <div className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 rounded-xl p-4 border border-amber-200/30 mt-6">
                                                    <p className="text-slate-600 leading-relaxed">
                                                        <span className="font-semibold text-amber-800">Important:</span> The content provided on this website does not constitute, and shall not be construed as, legal advice or a substitute for professional legal advice. Users encountering any legal issues must, in all cases, seek independent legal counsel. All material and information present on this website is the intellectual property. No part thereof shall be used, with or without adaptation, copied, distributed, or modified without the express prior written consent.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-slate-50/80 to-slate-100/80 backdrop-blur-xl px-6 py-5 sm:flex sm:flex-row-reverse sm:px-10 gap-4 border-t border-slate-200/50">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="group relative inline-flex w-full justify-center items-center rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 px-8 py-4 text-sm font-bold text-white shadow-xl hover:shadow-2xl sm:w-auto transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                <span className="relative flex items-center gap-2">
                                    ✓ I AGREE & PROCEED
                                </span>
                            </button>
                            <button
                                type="button"
                                onClick={() => window.location.href = 'https://share.google/qDX4FH3pJTHJ2rbAe'}
                                className="group relative mt-3 sm:mt-0 inline-flex w-full justify-center items-center rounded-2xl bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 px-8 py-4 text-sm font-bold text-white shadow-xl hover:shadow-2xl sm:w-auto transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                <span className="relative flex items-center gap-2">
                                    ✗ I DISAGREE & EXIT
                                </span>
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>

      {/* Chamber Location Map Dialog */}
      <ChamberLocation mapOpen={mapOpen} setMapOpen={setMapOpen} />

      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1">
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-12 lg:pt-22 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-5xl">
            {/* Header */}
            <div className="mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <span className="text-sm font-medium text-blue-700">Legal Professional • Meerut, Uttar Pradesh</span>
              </div>
              
              <h1 onClick={contactdetails} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 cursor-pointer hover:text-blue-900 transition-colors duration-300 leading-tight">
                Vipin Chand Garg
              </h1>
              
              <p onClick={contactdetails} className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 cursor-pointer hover:text-red-700 transition-colors duration-300">
                Advocate & Notary (Government of India)
              </p>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 lg:p-12 hover:shadow-2xl transition-shadow duration-300">
              <div className="prose prose-lg max-w-none">
                <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-6 mb-10">
                  <p className="text-gray-600 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                    <strong className="cursor-pointer text-gray-900 hover:text-blue-700 transition-colors duration-200" onClick={contactdetails}>Vipin Chand Garg</strong> is an Advocate enrolled with the Bar Council and has been engaged in the practice of law for over <span className="font-semibold text-gray-900">25 years</span>. His professional work includes matters related to criminal law, legal documentation and drafting, and other areas of legal practice, carried out in accordance with applicable Indian legal provisions.
                  </p>
                  
                  <p className="text-gray-600">
                    In addition to legal practice, <strong onClick={contactdetails} className="cursor-pointer text-gray-900 hover:text-blue-700 transition-colors duration-200">Vipin Chand Garg</strong> is a <span className="font-semibold text-gray-900">Notary appointed by the Central Government of India</span> under the Notaries Act, 1952. His Notarial functions are performed in accordance with statutory provisions, including attestation, verification of documents, rent agreements and many more. He has also authored legal publications intended for academic and professional reference, covering various aspects of Indian law.
                  </p>
                  
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <p className="mb-4 text-gray-700">
                      He practices law in <strong onClick={()=> setMapOpen(true)} className="cursor-pointer text-blue-700 hover:text-blue-800 transition-colors duration-200 underline"> Meerut, Uttar Pradesh</strong>. Chamber is located at:
                    </p>
                    <div onClick={()=> setMapOpen(true)} className="bg-white rounded-lg p-4 border-l-4 border-blue-500 cursor-pointer hover:bg-gray-50 transition-colors duration-200 shadow-sm">
                      <div className="flex items-start gap-3">
                        <MapIcon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <strong className="font-semibold text-gray-900 text-base leading-relaxed">
                          Freedom Fighter Ratan Lal Garg Advocate Memorial Chamber, Beside Shiv Mandir, Opposite Election Office, Meerut Court, Uttar Pradesh— 250001, India.
                        </strong>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 bg-amber-50 border border-amber-200 rounded-lg p-4 italic">
                    This website is intended to provide general professional information as permitted under the Bar Council of India Rules. It does not serve as a platform for solicitation or advertisement.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={LearnMore}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span className="flex items-center gap-2">
                      Know More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
