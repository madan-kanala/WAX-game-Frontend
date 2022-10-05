import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Corner from './components/Hustle/Corner';
import Home from './pages/Home';
import Consignment from './pages/Hustle/Consignment';
import SafeHouse from './pages/SafeHouse';

const App = () => {
  return (
    <div>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <div className='md:pt-20'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/safe-house' element={<SafeHouse />} />
              <Route path='/consignment' element={<Consignment />} />
              <Route path='/the-corner' element={<Corner />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
