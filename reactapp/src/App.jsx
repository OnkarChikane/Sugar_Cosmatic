import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Carousel from './components/Carousel';
import HotDeals from './components/Hotdeals';
import Cream from './components/Mousee';
import Refer from './components/Refer';
import { Cards } from './components/Bestseller';
import Iconic from './components/Iconicproducts';
import Beauty from './components/Sugarbeauty';
import Lets from './components/Lets';
import Exclusive from './components/Exclusive';
import Footer from './components/Footer';
import { ExclusiveRange } from './components/Exclusiverange';
import { Skincare } from './components/Skincare';
import { Makeupkit } from './components/Makeupkit';

import Header from './components/Header';
import Login from './components/Login';

import Lips from './components/Lips';
import Eyes from './components/Eyes';
import Face from './components/Face';
import Nails from './components/Nails';
import Skin from './components/Skin';
import Accessories from './components/Accessories';
import Gifting from './components/Gifting';
import Best from './components/Best';
import Newlaunches from './components/Newlaunches';
import Offer from './components/Offer';
import Sugarplay from './components/Sugarplay';





function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Cards />
            <HotDeals />
            <ExclusiveRange />
            <Iconic />
            <Makeupkit />
            <Exclusive />
            <Cream />
            <Refer />
            <Skincare />
            <Beauty />
            <Lets />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/lips" element={<Lips />} />
        <Route path='/eyes' element={<Eyes />} />
        <Route path='/face' element={<Face />} />
        <Route path='/nails' element={<Nails />} />
        <Route path='/skin' element={<Skin />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/gifting' element={<Gifting />} />
        <Route path='/best' element={<Best />} />
        <Route path='/launches' element={<Newlaunches />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/sugarplay' element={<Sugarplay />} />
        
        
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
