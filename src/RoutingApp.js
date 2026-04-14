import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Splash from './Pages/Splash';
import Onboarding1 from './Pages/Onboarding1';
import Onboarding2 from './Pages/Onboarding2';
import Onboarding3 from './Pages/Onboarding3';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

const RoutingApp = () => {
    return (
        
    <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Splash />} /> */}
        <Route path="/" element={<Onboarding1 />} />
        <Route path="/Onboarding2" element={<Onboarding2 />} />
        <Route path="/Onboarding3" element={<Onboarding3 />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />

    </Routes>
    </BrowserRouter>
    
     );
};
 
export default RoutingApp;