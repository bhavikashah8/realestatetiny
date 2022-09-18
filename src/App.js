import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Fav from './components/Fav';


// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <div className='s'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/property/:id' element={<PropertyDetails />} /> */}
        <Route path='/Fav' element={<Fav />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
