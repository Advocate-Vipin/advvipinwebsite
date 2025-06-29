import React from "react";
import { Route, Routes, BrowserRouter } from "react-router";
import LandingPage from "../landingpage/landingpage";
import FAQs from "../faqs/faq";
import ContactUs from "../contactus/contactus";
import Services from "../services/services";
import About from "../about/about";


export default function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
