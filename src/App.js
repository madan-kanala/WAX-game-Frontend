import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Corner from './components/Hustle/Corner';
import Home from './pages/Home';
import Consignment from './pages/Hustle/Consignment';

import Profile from './pages/Profile';

const App = () => {
  return (
    <div>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/consignment' element={<Consignment />} />
            <Route path='/the-corner' element={<Corner />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
