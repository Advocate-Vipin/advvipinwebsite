import React,{useState} from "react";
import Navbar from "../navbar/navbar";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Footer from "../features/footer";

export default function LandingPage() {
    const [open, setOpen] = useState(true);

  return (
    <div>

        <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-4xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-2xl font-bold text-gray-900">
                      Disclaimer
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-black-500">
                        In adherence to the rules of Bar Council of India, Advocates are not permitted to solicit work or advertise our services. This website has been developed solely for informational purposes and by clicking "I AGREE" user acknowledges and agree to the following-
                        <br/>
                        1. There has been no advertisement, personal communication, solicitation, invitation, or any form of inducement whatsoever by Vipin Chand Garg or any of his associates to solicit any work or engage in professional services through this website.
                        <br/>
                        2. The user wishes to gain more information about the advocate for his/her own information and personal use.
                        <br/>
                        3. All information pertaining to him and the services offered on this website are provided to the user exclusively upon his/her/their specific request. Any information obtained or materials downloaded from this website are entirely at the user’s volition. The transmission, receipt, or use of this site does not, and will not, create any lawyer-client relationship.      
                        <br/>
                        4. This website serves as a general informational resource only and, while diligent efforts are made to ensure accuracy and completeness, it is not promised or guaranteed to be exhaustive or entirely up-to-date. He does not warrant that the information contained herein is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident, or any other cause.
                        <br/>
                        5. Advocate assumes no liability for the interpretation and/or use of the information presented on this website, nor does he offer any warranty of any kind, whether express or implied.
                        <br/>
                        The content provided on this website does not constitute, and shall not be construed as, legal advice or a substitute for professional legal advice. Users encountering any legal issues must, in all cases, seek independent legal counsel, as the material contained herein does not constitute or substitute the professional advice that may be required before acting on any matter. He is not liable for any consequence resulting from any action taken by the user based on material or information provided on this website or through any external links displayed thereon. All material and information (excluding any statutory instruments or judicial precedents) present on this website is the intellectual property. No part thereof shall be used, with or without adaptation, copied, distributed, or modified without the express prior written consent. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                  I AGREE
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => window.location.href = 'https://www.google.com'}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  I DISAGREE
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
        </Dialog>

        <Navbar/>
        <div>
          Hello, welcome to the landing page!
          <p>This is a sample landing page content.</p>
          <p>Feel free to explore the features and services we offer.</p> 
        </div>

        <Footer/>
    </div>
  );
}












// import React from react;
// import Navbar from "../Navbar/Navbar/Navbar";
// import MyTags from "./MyTags";
// import MyFavourites from "./MyFavourites";
// import SearchResult from "../Page/SearchResult";
// import { TabItem, Tabs, Icon } from "@aws-amplify/ui-react";



// export default function UserCollectionDashboard() {

// return (

// <div style={{ height: "100%" }}>

//   <Navbar />

// <div style={{ minHeight: "83vh" }}>

// <Tabs className="mb-3" mountOnEnter unmountonexit>

// <TabItem eventkey="favourite" title="Favourite">

// <div>

// <MyFavourites />

// <div
//     style={{
//     overflow: "auto",
//     backgroundColor: "white",
//     marginLeft: "20px",
//     marginRight: "20px",
//     marginBottom: "20px",
//     cursor: pointer"
//     }}
// >
// <SearchResult />
// </div>
// </div>

// </TabItem>
// <TabItem eventkey="tags" title="Tags">

// <div>

// <MyTags />

// <div

// style={{
// overflow: "auto",

// backgroundColor: "white",

// marginLeft: "20px",

// marginRight: "20px",

// cursor: "pointer",

// marginBottom: "20px",

// }}

// <SearchResult />

// </div>

// </div>

// </TabItem>

// </Tabs>

// </div>

//   <div style={{ textAlign: "center" }}>
//     <p>
//       (C) Copyright (new Date().getFullYear()), Tata Consultancy Services.All Rights Reserved.
//     </p>
//   </div>

// </div>

// );
// }


