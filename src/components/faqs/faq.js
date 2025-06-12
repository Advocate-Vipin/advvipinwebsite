import React, { useState } from "react";
import Navbar from "../navbar/navbar";

export default function FAQs () {
  return (
    <div>
      <Navbar/>
      <section className="relative z-20 overflow-hidden bg-white pb-12 pt-10 dark:bg-dark lg:pb-[90px] lg:pt-[20px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Frequently Asked Questions (FAQs) - Vipin Chand Garg, Notary Public & Advocate
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Any Questions? Look Here
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              {/* Advocate Questions (Column 1 - Left) */}
              {/* Q1: Experience */}
              <AccordionItem
                header="How many years of experience do you have as an Advocate?"
                text="I have been practicing as an Advocate since 1999, bringing over 25+ years of extensive legal experience to my clients. This long-standing tenure has provided me with profound insights and practical expertise across diverse areas of Indian law."
              />
              {/* Q2: Specific areas of law, with list formatting */}
              <AccordionItem
                header="What specific areas of law does your experience cover, beyond Notary Services?"
                text={
                  <div>
                    My comprehensive legal experience spans various crucial areas. I specialize in:
                    <br/><br/>
                    <ul className="list-disc pl-5">
                        <li><strong>Criminal Cases:</strong> Offering robust consultation, representation, and assistance with matters like FIRs, Bail (including Anticipatory Bail), and appeals.</li>
                        <li><strong>Cheque Bounce Cases:</strong> Under Section 138 of the Negotiable Instruments Act, 1881, handling cases from legal notice issuance to court proceedings.</li>
                        <li><strong>Divorce & Family Law:</strong> Guiding clients through sensitive matters such as mutual consent divorce, contested divorce, alimony, and child custody.</li>
                        <li><strong>Property Law:</strong> Addressing property disputes, title verification, and offering legal advice on real estate transactions.</li>
                        <li><strong>Legal Document Drafting:</strong> Expertly crafting various legal documents, including Power of Attorney, Partnership Deeds, and Sale Deeds.</li>
                    </ul>
                  </div>
                }
              />
              {/* Q3: Legal document drafting */}
              <AccordionItem
                header="Besides notarization, what legal documents can you draft?"
                text="Beyond notarization, my expertise extends to comprehensive legal document drafting. This includes drafting General Power of Attorney, Special Power of Attorney, Partnership Deeds, Sale Deeds, all types of agreements, and legal notices, ensuring they are legally sound and tailored to your specific requirements."
              />
              {/* Q4: Rent agreement/Will (leans advocate for drafting) */}
              <AccordionItem
                header="Can you help with drafting and notarizing a Rent Agreement or Will?"
                text="Absolutely. I specialize in drafting and notarizing both Rent Agreements and Wills. I ensure these crucial documents comply with all relevant Indian laws, providing you with peace of mind."
              />
              {/* Q5: NRI services (leans legal) */}
              <AccordionItem
                header="Do you offer notary and legal services specifically for Non-Resident Indians (NRIs)?"
                text="Yes, I offer specialized notary and legal services for NRIs. This includes notarizing Powers of Attorney for property transactions, bank operations, and other matters in India, as well as drafting affidavits for OCI applications, passport services, and attesting documents for international use."
              />
              {/* Q6: Contact */}
              <AccordionItem
                header="How can I contact you to schedule an appointment or inquire about services?"
                text="You can reach me by phone at +91-9568529826 or by email at vipin.garg64@gmail.com. You can also visit my Advocate Chamber or Residence Notary Address during working hours or by appointment. All contact details and addresses are available on the 'Contact Us' page of this website."
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              {/* Notary Questions (Column 2 - Right) */}
              {/* Important Notary Question at top of right column as requested */}
              <AccordionItem
                header="What exactly is a Notary Public, and what is your appointment status?"
                text="I am Vipin Chand Garg, Government of India- appointed Notary Public under the Notaries Act, 1952. I am authorized to practice as a Notary in and throughout Meerut, Uttar Pradesh, appointed by the Government of India. My Certificate of Practice confirms my official standing and commitment to legal authentication."
              />
              {/* Remaining Notary Questions */}
              <AccordionItem
                header="What types of documents can you notarize?"
                text="I notarize a wide range of documents including affidavits, declarations, undertakings, wills, gift deeds, indemnity bonds, rent agreements, lease agreements, general power of attorney, special power of attorney, affidavits and various affidavit required for examinations, colleges and schools. I also attest true copies of original documents."
              />
              <AccordionItem
                header="What documents do I need to bring for notarization?"
                text="You typically need to bring the original document(s) that require notarization and a valid government-issued photo identification (such as your Aadhaar Card, Passport, or Driving License) for verification of the signatory(ies). It may require additional documents depending on the nature of the document being notarized."
              />
              <AccordionItem
                header="How does notarization differ from attestation?"
                text="Notarization involves the official sealing and signing by a Notary Public to certify the authenticity of a signature, the truthfulness of a document's content (in the case of an affidavit), or to attest a true copy. Attestation, in a general sense, can also refer to certification by other authorities, but as a Notary Public, my attestation carries official legal weight under the Notaries Act, 1952."
              />
              <AccordionItem
                header="Do you offer notary services at both your chamber and residence?"
                text="Yes, for your convenience, I provide notary services at both my Advocate Chamber located at Freedom Fighter Ratan Lal Garg Advocate Memorial Chamber, Near Shiv Mandir, Meerut Court, Uttar Pradesh, 250001, and at my Residence Notary Address: A23, Saraswati Lok, Delhi Road, Meerut."
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.36" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  );
}

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
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

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};