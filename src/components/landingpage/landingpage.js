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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
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
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-4xl data-closed:sm:translate-y-0 data-closed:sm:scale-95 mx-4"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-xl sm:text-2xl font-bold text-gray-900">
                      Disclaimer
                    </DialogTitle>
                    <div className="mt-2">
                      <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2 max-h-60 sm:max-h-80 overflow-y-auto">
                        <p>
                          In adherence to the rules of Bar Council of India, Advocates are not permitted to solicit work or advertise our services. This website has been developed solely for informational purposes and by clicking "I AGREE" user acknowledges and agree to the following:
                        </p>
                        <p>
                          <strong>1.</strong> There has been no advertisement, personal communication, solicitation, invitation, or any form of inducement whatsoever by Vipin Chand Garg or any of his associates to solicit any work or engage in professional services through this website.
                        </p>
                        <p>
                          <strong>2.</strong> The user wishes to gain more information about the advocate for his/her own information and personal use.
                        </p>
                        <p>
                          <strong>3.</strong> All information pertaining to him and the services offered on this website are provided to the user exclusively upon his/her/their specific request. Any information obtained or materials downloaded from this website are entirely at the user's volition. The transmission, receipt, or use of this site does not, and will not, create any lawyer-client relationship.
                        </p>
                        <p>
                          <strong>4.</strong> This website serves as a general informational resource only and, while diligent efforts are made to ensure accuracy and completeness, it is not promised or guaranteed to be exhaustive or entirely up-to-date. He does not warrant that the information contained herein is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident, or any other cause.
                        </p>
                        <p>
                          <strong>5.</strong> Advocate assumes no liability for the interpretation and/or use of the information presented on this website, nor does he offer any warranty of any kind, whether express or implied.
                        </p>
                        <p>
                          The content provided on this website does not constitute, and shall not be construed as, legal advice or a substitute for professional legal advice. Users encountering any legal issues must, in all cases, seek independent legal counsel, as the material contained herein does not constitute or substitute the professional advice that may be required before acting on any matter. He is not liable for any consequence resulting from any action taken by the user based on material or information provided on this website or through any external links displayed thereon. All material and information (excluding any statutory instruments or judicial precedents) present on this website is the intellectual property. No part thereof shall be used, with or without adaptation, copied, distributed, or modified without the express prior written consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:w-auto transition-colors"
                >
                  I AGREE
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => window.location.href = 'https://www.google.com'}
                  className="mt-3 sm:mt-0 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto transition-colors"
                >
                  I DISAGREE
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
      <main className="flex-1 bg-white">
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <h1 onClick={contactdetails} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 cursor-pointer">
                Vipin Chand Garg
              </h1>
              <p onClick={contactdetails} className="text-base sm:text-lg text-red-600 cursor-pointer">
                Advocate & Notary (Government of India)
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-gray max-w-none">
              <div className="text-sm sm:text-base text-black-700 leading-relaxed space-y-4 sm:space-y-6 mb-8">
                <p>
                  <strong className="cursor-pointer" onClick={contactdetails}>Vipin Chand Garg</strong> is an Advocate enrolled with the Bar Council and has been engaged in the practice of law for over 25 years. His professional work includes matters related to criminal law, legal documentation and drafting, and other areas of legal practice, carried out in accordance with applicable Indian legal provisions.
                </p>
                
                <p>
                  In addition to legal practice, <strong onClick={contactdetails} className="cursor-pointer">Vipin Chand Garg</strong> is a Notary appointed by the Central Government of India under the Notaries Act, 1952. His Notarial functions are performed in accordance with statutory provisions, including attestation, verification of documents, rent agreements and many more. He has also authored legal publications intended for academic and professional reference, covering various aspects of Indian law.
                </p>
                
                <div>
                  <p className="mb-2">
                    He practices law in <strong onClick={()=> setMapOpen(true)} className="cursor-pointer"> Meerut, Uttar Pradesh</strong>. Chamber is located at:
                  </p>
                  <div onClick={()=> setMapOpen(true)} className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-400 cursor-pointer hover:bg-gray-100 transition-colors">
                    <strong className="font-medium text-gray-900 text-sm sm:text-base">
                      Freedom Fighter Ratan Lal Garg Advocate Memorial Chamber, Beside Shiv Mandir, Opposite Election Office, Meerut Court, Uttar Pradesh— 250001, India.
                    </strong>
                  </div>
                </div>
                
                <p>
                  This website is intended to provide general professional information as permitted under the Bar Council of India Rules. It does not serve as a platform for solicitation or advertisement.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={LearnMore}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Know More
                </button>
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