import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Footer from "../features/footer";
import { useNavigate } from "react-router-dom";
import { MapIcon } from "@heroicons/react/24/outline";
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
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Vipin Chand Garg – Advocate & Notary Public in Meerut | Legal & Notary Services</title>
        <meta
          name="description"
          content="Vipin Chand Garg is an Advocate and Notary (Government of India) practicing in Meerut Court, Uttar Pradesh. Offers legal advice and notarial services as per Indian law."
        />
        <meta name="keywords" content="Legal Services Meerut, Notarial Services, Affidavits, Rent Agreements, Criminal Law, Document Attestation, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, Micro, Small and Medium Enterprises (MSME) Dispute Resolution, Micro, Small and Medium Enterprises (MSME) Delayed Payment References (MSMED Act, 2006), Micro and Small Enterprises Facilitation Council (MSEFC) Conciliation Proceedings, Micro and Small Enterprises Facilitation Council (MSEFC) Arbitration, Micro, Small and Medium Enterprises (MSME) Samadhaan E‑Filing, Petitions Related to Micro and Small Enterprises Facilitation Council (MSEFC) Awards, Appeals Under Section 19 (MSMED Act), Micro, Small and Medium Enterprises (MSME) delayed payment and disputes, Section 18 Proceedings, Micro and Small Enterprises Facilitation Council, Section 15 Buyer's Liability, Section 16 Interest Payment, Section 17 Amount Due, Supplier–Buyer Disputes, Conciliation then Arbitration, Award Enforcement, Execution of Micro and Small Enterprises Facilitation Council (MSEFC) Award, Recovery Proceedings, Deposit under Section 19" />
        <link rel="canonical" href="https://advocatevipinchandgarg.netlify.app/" />
      </Helmet>

      {/* Disclaimer Dialog */}
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-all duration-500 data-closed:opacity-0 data-enter:duration-500 data-enter:ease-out data-leave:duration-300 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-2xl bg-white shadow-glass-xl ring-1 ring-black/5 transition-all duration-500 data-closed:translate-y-8 data-closed:opacity-0 data-closed:scale-95 data-enter:duration-500 data-enter:ease-out data-leave:duration-300 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-4xl mx-4"
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-navy-700 via-gold-400 to-navy-700"></div>

              <div className="bg-white px-6 pt-8 pb-6 sm:p-10 sm:pb-8">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-amber-200/50 sm:mx-0">
                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="mt-4 text-center sm:mt-0 sm:ml-6 sm:text-left flex-1">
                    <DialogTitle as="h3" className="text-xl sm:text-2xl font-bold text-navy-900 mb-6">
                      Important Legal Disclaimer
                    </DialogTitle>
                    <div className="mt-4">
                      <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 max-h-72 sm:max-h-80 overflow-y-auto pr-2">
                        <div className="bg-navy-50 rounded-xl p-4 border border-navy-100">
                          <p className="text-gray-700 font-medium">
                            In adherence to the rules of Bar Council of India, Advocates are not permitted to solicit work or advertise our services. This website has been developed solely for informational purposes and by clicking <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">"I AGREE"</span> user acknowledges and agree to the following:
                          </p>
                        </div>

                        <div className="space-y-3">
                          {[
                            "There has been no advertisement, personal communication, solicitation, invitation, or any form of inducement whatsoever by Vipin Chand Garg or any of his associates to solicit any work or engage in professional services through this website.",
                            "The user wishes to gain more information about the advocate for his/her own information and personal use.",
                            "All information pertaining to him and the services offered on this website are provided to the user exclusively upon his/her/their specific request. Any information obtained or materials downloaded from this website are entirely at the user's volition. The transmission, receipt, or use of this site does not, and will not, create any lawyer-client relationship.",
                            "This website serves as a general informational resource only and, while diligent efforts are made to ensure accuracy and completeness, it is not promised or guaranteed to be exhaustive or entirely up-to-date. He does not warrant that the information contained herein is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident, or any other cause.",
                            "Advocate assumes no liability for the interpretation and/or use of the information presented on this website, nor does he offer any warranty of any kind, whether express or implied."
                          ].map((text, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                              <div className="w-6 h-6 rounded-full bg-navy-700 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-0.5">
                                {index + 1}
                              </div>
                              <p className="text-gray-600 leading-relaxed">{text}</p>
                            </div>
                          ))}

                          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200/50 mt-4">
                            <p className="text-gray-600 leading-relaxed">
                              <span className="font-semibold text-amber-800">Important:</span> The content provided on this website does not constitute, and shall not be construed as, legal advice or a substitute for professional legal advice. Users encountering any legal issues must, in all cases, seek independent legal counsel. All material and information present on this website is the intellectual property. No part thereof shall be used, with or without adaptation, copied, distributed, or modified without the express prior written consent.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse sm:px-10 gap-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center items-center rounded-xl bg-navy-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-navy-800 sm:w-auto transition-all duration-300"
                >
                  ✓ I AGREE & PROCEED
                </button>
                <button
                  type="button"
                  onClick={() => window.location.href = 'https://share.google/mWRVREO4Itym9qH9V'}
                  className="mt-3 sm:mt-0 inline-flex w-full justify-center items-center rounded-xl bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-300 sm:w-auto transition-all duration-300"
                >
                  ✗ I DISAGREE & EXIT
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
        {/* Subtle background decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-100/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-100/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-5xl">
            {/* Header */}
            <div className="mb-10 sm:mb-14">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-200/50 mb-5">
                <span className="w-1.5 h-1.5 bg-navy-600 rounded-full mr-2.5"></span>
                <span className="text-xs sm:text-sm font-semibold text-navy-700">Legal Professional • Meerut, Uttar Pradesh</span>
              </div>

              <h1 onClick={contactdetails} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-900 mb-3 cursor-pointer hover:text-navy-700 transition-colors duration-300 leading-tight tracking-tight">
                Vipin Chand Garg
              </h1>

              <p onClick={contactdetails} className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 cursor-pointer hover:text-red-700 transition-colors duration-300">
                Advocate & Notary (Government of India)
              </p>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 sm:p-8 lg:p-10 hover:shadow-card-hover transition-shadow duration-500">
              <div className="prose prose-lg max-w-none">
                <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-5 mb-8">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-navy-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                    <strong className="cursor-pointer text-navy-900 hover:text-navy-700 transition-colors duration-200" onClick={contactdetails}>Vipin Chand Garg</strong> is an Advocate enrolled with the Bar Council and has been engaged in the practice of law for over <span className="font-bold text-navy-900">25 years</span>. His professional work includes matters related to criminal law, legal documentation and drafting, and other areas of legal practice, carried out in accordance with applicable Indian legal provisions.
                  </p>

                  <p>
                    <strong onClick={contactdetails} className="cursor-pointer text-navy-900 hover:text-navy-700 transition-colors duration-200">Vipin Chand Garg</strong> also specializes in <span className="font-bold text-navy-900">Micro, Small and Medium Enterprises (MSME) legal practice</span> under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006. His professional work includes representation in delayed payment disputes, facilitation council proceedings, statutory compliance advisory, and dispute resolution matters. He provides legal assistance in Micro, Small and Medium Enterprises (MSME) registration processes, payment recovery cases, and arbitration proceedings as per the provisions of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, ensuring compliance with all regulatory requirements.
                  </p>
                  <p>
                    In addition to legal practice, <strong onClick={contactdetails} className="cursor-pointer text-navy-900 hover:text-navy-700 transition-colors duration-200">Vipin Chand Garg</strong> is a <span className="font-bold text-navy-900">Notary appointed by the Central Government of India</span> under the Notaries Act, 1952. His Notarial functions are performed in accordance with statutory provisions, including attestation, verification of documents, rent agreements and many more. He has also authored legal publications intended for academic and professional reference, covering various aspects of Indian law.
                  </p>

                  <div className="bg-navy-50/60 rounded-xl p-5 border border-navy-100">
                    <p className="mb-3 text-gray-700">
                      He practices law in <strong onClick={() => setMapOpen(true)} className="cursor-pointer text-navy-700 hover:text-navy-800 transition-colors duration-200 underline decoration-gold-400 decoration-2 underline-offset-2"> Meerut, Uttar Pradesh</strong>. Chamber is located at:
                    </p>
                    <a href="https://maps.app.goo.gl/mXPLkTq1Ui19FSmg7" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 border-l-4 border-gold-400 cursor-pointer hover:bg-gray-50 transition-colors duration-200 shadow-sm block no-underline">
                      <div className="flex items-start gap-3">
                        <MapIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                        <strong className="font-semibold text-navy-900 text-base leading-relaxed">
                          Chamber No. 79, Advocate Vipin Chand Garg, Opposite Jila Panchayat Office, Collectorate Compound, Meerut Court, Meerut, Uttar Pradesh- 250001.
                        </strong>
                      </div>
                    </a>
                  </div>

                  {/* Disclaimer */}
                  <section className="max-w-7xl mx-auto">
                    <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-5">
                      <div className="flex items-start space-x-3">
                        <ExclamationTriangleIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-1 text-sm">Professional Disclaimer</h4>
                          <p className="text-amber-700 text-sm leading-relaxed">
                            This website is intended to provide general professional information as permitted under the Bar Council of India Rules. It does not serve as a platform for solicitation or advertisement. All information is provided for educational purposes only and should not be construed as legal advice.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="pt-5 border-t border-gray-100">
                  <button
                    onClick={LearnMore}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-navy-700 border border-transparent rounded-xl hover:bg-navy-800 focus:ring-4 focus:ring-navy-200 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-2">
                      Know More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
