import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Splash from './Pages/Splash';
import Onboarding1 from './Pages/Onboarding1';
import Onboarding2 from './Pages/Onboarding2';
import Onboarding3 from './Pages/Onboarding3';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Deals from './Pages/Deals';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import Notifications from './Pages/Notifications';
import SharedList from './Pages/SharedList';
import SharedList2 from './Pages/SharedList2';
import ItemsFinder from './Pages/ItemsFinder';
import ItemFinder from './Pages/ItemFinder';
import ItemFinderAR from './Pages/ItemFinderAR';
import Recipes from './Pages/Recipes';
import Ingredients from './Pages/Ingredients';
import ItemsCompare from './Pages/ItemsCompare';
import Compare from './Pages/Compare';
import BarcodeScanner from './Pages/BarcodeScanner';
import Checkout from './Pages/Checkout';

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
        <Route path="/Deals" element={<Deals />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/SharedList" element={<SharedList />} />
        <Route path="/SharedList2" element={<SharedList2 />} />
        <Route path="/ItemsFinder" element={<ItemsFinder />} />
        <Route path="/ItemFinder/:id" element={<ItemFinder />} />
        <Route path="/ItemFinderAR" element={<ItemFinderAR />} />
        <Route path="/BarcodeScanner" element={<BarcodeScanner />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Ingredients/:id" element={<Ingredients />} />
        <Route path="/ItemsCompare" element={<ItemsCompare />} />
        <Route path="/Compare" element={<Compare />} />

    </Routes>
    </BrowserRouter>
    
     );
};
 
export default RoutingApp;