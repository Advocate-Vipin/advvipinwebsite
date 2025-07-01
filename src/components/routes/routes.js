import React from "react";
import { Route, Routes, BrowserRouter } from "react-router";
import LandingPage from "../landingpage/landingpage";
import FAQs from "../faqs/faq";
import ContactUs from "../contactus/contactus";
import Services from "../services/services";


export default function MyRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/contactdetails" element={<ContactUs />} />
                <Route path="/practicearea" element={<Services />} />
            </Routes>
        </div>
    );
}
