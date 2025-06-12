import React from "react";
import { Route, Routes, BrowserRouter } from "react-router";
import LandingPage from "../landingpage/landingpage";
import FAQs from "../faqs/faq";


export default function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/faqs" element={<FAQs />} />
            </Routes>
        </BrowserRouter>
    );
}
