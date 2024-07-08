
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import OurTeam from './components/pages/OurTeam';
import Blog from './components/pages/Blog';
import Shop from './components/pages/Shop';
import BuyDogs from './components/pages/BuyDogs';
import ContactUs from './components/pages/ContactUs';
import './App.css';
import MainHeader from './components/headers/MainHeader';
import TopHeader from './components/headers/TopHeader';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <TopHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="ourteam" element={<OurTeam />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shop" element={<Shop />} />
            <Route path="buydogs" element={<BuyDogs />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
           <Footer />
    </div>
  );
}

export default App;
