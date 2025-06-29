import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../features/footer";

export default function FAQs() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="relative z-20 bg-white pb-12 pt-10 dark:bg-dark lg:pb-[90px] lg:pt-[20px]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center">
            <div className="w-full">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                {/* <span className="mb-2 block text-lg font-semibold text-primary">
                  Frequently Asked Questions (FAQs)
                </span> */}
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[30px]/[48px]">
                  Frequently Asked Questions (FAQs)
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 lg:-mx-4">
            <div className="w-full px-2 lg:px-4 lg:w-1/2">
              <AccordionItem
                header="How many years of legal experience is considered substantial?"
                text="Legal practice experience spanning over 25 years+ (twenty five years plus) is often considered extensive. This duration allows a practitioner to gain deep insights across civil, criminal, and documentation-related matters."
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
                text="Legal professionals may draft documents such as legal notices, Sale Deeds, rent agreements, and many more . These documents are prepared to comply with Indian legal standards."
              />

              <AccordionItem
                header="What documents are required for notarization?"
                text="Generally, the original document requiring notarization and a valid government-issued ID are needed. Depending on the document type, additional documents may be required."
              />
            </div>

            <div className="w-full px-2 lg:px-4 lg:w-1/2">
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
        </div>
      </section>
      <Footer />
    </div>
  );
}

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-6 lg:mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-6 lg:p-8">
      <button
        className="faq-btn flex w-full text-left items-start"
        onClick={handleToggle}
      >
        <div className="mr-3 sm:mr-5 flex h-8 w-8 sm:h-10 sm:w-10 max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5 flex-shrink-0">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full min-w-0">
          <h4 className="text-base sm:text-lg font-semibold text-dark dark:text-white leading-tight">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-11 sm:pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <div className="py-3 text-sm sm:text-base leading-relaxed text-body-color dark:text-dark-6 break-words">
          {text}
        </div>
      </div>
    </div>
  );
};