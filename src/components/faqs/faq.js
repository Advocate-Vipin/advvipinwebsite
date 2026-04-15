import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../features/footer";
import { Helmet } from "react-helmet";

export default function FAQs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-navy-100/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gold-100/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <Navbar />
      
      <Helmet>
        <title>FAQs | Advocate & Notary - Vipin Chand Garg, Meerut</title>
        <meta
          name="description"
          content="Explore frequently asked legal and notarial questions related to affidavits, rent agreements, power of attorney, criminal law, and more as per Indian legal procedures."
        />
        <meta name="keywords" content="Legal Services Meerut, Notarial Services, Affidavits, Rent Agreements, Criminal Law, Document Attestation, Advocate Meerut, Notary Public Meerut, Legal Documentation, Affidavits, Notary India, Legal Drafting, Rent Agreement, Will Notarization, Meerut Court Lawyer, Notary Services Meerut, Affidavit Preparation, Rent Agreement Drafting, Power of Attorney, Will Drafting, Sale Deed Documentation, Legal Notice Drafting, Document Attestation, True Copy Certification, Notarial Services, Criminal Law Consultation, Civil Law Matters, Property Disputes Documentation, Legal Document Drafting, Declaration and Undertaking, NRI Document Notarization, FIR & Bail Matters, Criminal Trials, Anticipatory Bail, Cheque Bounce Cases (Sec 138 NI Act), Quashing of FIR, Appeals & Revisions, Legal Opinion & Advisory, Title Verification & Clearance, Sale Deed Preparation & Review, Property Registration, Gift Deed & Will Drafting, Property Cases, Marriage Registration, Mutual Consent Divorce, Contested Divorce, Declaration Letters, Academic Undertakings, Certified Copies, Academic Documents, Other Attestation and Notarisation, Payment Delay Disputes, Matrimonial Cases, Micro, Small and Medium Enterprises (MSME) Dispute Resolution, Micro, Small and Medium Enterprises (MSME) Delayed Payment References (MSMED Act, 2006), Micro and Small Enterprises Facilitation Council (MSEFC) Conciliation Proceedings, Micro and Small Enterprises Facilitation Council (MSEFC) Arbitration, Micro, Small and Medium Enterprises (MSME) Samadhaan E‑Filing, Petitions Related to Micro and Small Enterprises Facilitation Council (MSEFC) Awards, Appeals Under Section 19 (MSMED Act), Micro, Small and Medium Enterprises (MSME) delayed payment and disputes, Section 18 Proceedings, Micro and Small Enterprises Facilitation Council, Section 15 Buyer's Liability, Section 16 Interest Payment, Section 17 Amount Due, Supplier–Buyer Disputes, Conciliation then Arbitration, Award Enforcement, Execution of Micro and Small Enterprises Facilitation Council (MSEFC) Award, Recovery Proceedings, Deposit under Section 19" />
        <link rel="canonical" href="https://advocatevipinchandgarg.netlify.app/faq" />
      </Helmet>

      <section className="relative z-20 pb-16 pt-8 sm:pt-12 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="flex flex-wrap justify-center mb-12 sm:mb-16">
            <div className="w-full text-center">
              <div className="mx-auto max-w-4xl">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-50 border border-navy-200/40 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-600"></span>
                  <span className="text-xs sm:text-sm font-semibold text-navy-700">
                    Legal Professional • Answers
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
                  <span className="block text-navy-900">Frequently Asked</span>
                  <span className="block text-navy-800">Questions</span>
                </h1>
                
                <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                  Find answers to common questions about legal and notarial services under Indian law
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="flex flex-wrap -mx-3 lg:-mx-4">
            <div className="w-full px-3 lg:px-4 lg:w-1/2">
              <AccordionItem
                header="How many years of legal experience is considered substantial?"
                text="Legal practice experience spanning over 20 years (twenty years plus) is often considered extensive. This duration allows a practitioner to gain deep insights across civil, criminal, and documentation-related matters."
              />

              <AccordionItem
                header="Are rent agreements commonly drafted and notarized?"
                text="Yes. Rent agreements are among the most frequently prepared documents. They may be both drafted and notarized to ensure compliance with legal requirements."
              />

              <AccordionItem
                header="What is the difference between notarization and attestation?"
                text="Notarization is the official certification by a Notary Public under law, verifying the identity of signatories and the authenticity of documents. Attestation, on the other hand, is a broader term that may include notarization but can also refer to the verification of documents by other authorities or individuals."
              />

              <AccordionItem
                header="What types of documents can be notarized?"
                text="Documents that may be notarized include affidavits, declarations, undertakings, wills, rent agreements, certified true copies for academic or official use and many more."
              />

              <AccordionItem
                header="What types of legal documents are commonly drafted?"
                text="Legal professionals may draft documents such as legal notices, Sale Deeds, rent agreements, and many more. These documents are prepared to comply with Indian legal standards."
              />

              <AccordionItem
                header="What documents are required for notarization?"
                text="Generally, the original document requiring notarization and a valid government-issued ID are needed. Depending on the document type, additional documents may be required."
              />
            </div>

            <div className="w-full px-3 lg:px-4 lg:w-1/2">
              <AccordionItem
                header="What is a Notary Public under Indian law?"
                text="A Notary Public is an individual appointed under the Notaries Act, 1952, authorized to verify, attest, and notarize documents for legal purposes. Appointments are made by the Central or State Government."
              />

              <AccordionItem
                header="What areas of law are commonly addressed in legal consultations?"
                text={
                  <div>
                    Legal consultations may cover a variety of legal domains. Some commonly addressed areas include:
                    <br /><br />
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Criminal Law:</strong> Matters involving FIRs, bail (including anticipatory bail), and criminal appeals.
                      </li>
                      <li>
                        <strong>Cheque Bounce Cases:</strong> Issues under Section 138 of the Negotiable Instruments Act, 1881.
                      </li>
                      <li>
                        <strong>Divorce & Family Law:</strong> Topics like mutual consent divorce, contested divorce, maintenance, and custody.
                      </li>
                      <li>
                        <strong>Property Law:</strong> Property disputes, title checks, and guidance on immovable property transactions.
                      </li>
                      <li>
                        <strong>Legal Drafting:</strong> Drafting of Power of Attorney, Partnership Deeds, Sale Deeds, and other legal documents.
                      </li>
                    </ul>
                  </div>
                }
              />

              <AccordionItem
                header="Are notarial services applicable to Non-Resident Indians (NRIs)?"
                text="Yes. Notarial services are often availed by NRIs for documents such as Power of Attorney for property dealings, banking, or legal matters. These may also include affidavits for visa, OCI, and passport-related documentation."
              />

              <AccordionItem
                header="Where are notarial services typically offered?"
                text="Notarial services may be provided at authorized chambers within court premises and, in some cases, from a designated residence office, subject to approval and official practice jurisdiction."
              />

              <AccordionItem
                header="Are notarized documents legally valid?"
                text="Yes. Documents notarized under the Notaries Act, 1952 carry legal validity and are recognized by courts and government authorities."
              />
            </div>
          </div>

          {/* Professional Notice */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
            <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-amber-800 mb-2">Professional Disclaimer</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    <span className="font-semibold">Important:</span> These FAQs are provided for general informational purposes only, as permitted under the Bar Council of India Rules. They do not constitute legal advice and should not be relied upon as a substitute for consultation with a qualified legal professional. Each legal matter is unique and requires individual assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// AccordionItem Component
const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-4 lg:mb-5 w-full group relative">
      <div className="relative bg-white rounded-xl shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300 overflow-hidden">
        <button
          className="faq-btn flex w-full text-left items-start p-5 sm:p-6 group/button"
          onClick={handleToggle}
        >
          {/* Icon */}
          <div className={`mr-3 sm:mr-4 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg flex-shrink-0 transition-all duration-300 ${
            active ? 'bg-navy-700 text-white' : 'bg-navy-50 text-navy-600'
          }`}>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${active ? "rotate-180" : ""}`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              stroke="currentColor"
            >
              <path
                d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              />
            </svg>
          </div>

          <div className="w-full min-w-0">
            <h4 className="text-base sm:text-lg font-semibold text-navy-900 leading-tight pr-4">
              {header}
            </h4>
          </div>
        </button>

        {/* Content */}
        {active && (
          <div className="ml-12 sm:ml-[52px] px-5 pb-5 animate-fadeIn">
            <div className="w-full h-px bg-gray-100 mb-4"></div>
            <div className="text-sm sm:text-base leading-relaxed text-gray-600 break-words">
              {text}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
