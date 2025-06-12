import React from "react";
import { Route, Routes, BrowserRouter } from "react-router";
import LandingPage from "../landingpage/landingpage";

export default function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}
