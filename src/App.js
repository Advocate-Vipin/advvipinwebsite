import React from "react";
import MyRoutes from "./components/routes/routes";
import { BrowserRouter } from 'react-router-dom';

export default function App(){
    return(
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    );
}
