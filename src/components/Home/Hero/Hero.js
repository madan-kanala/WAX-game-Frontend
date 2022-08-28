import React from 'react';
import bgImage from '../../../assets/images/hero-bg.png';
import Header from '../../Header/Header';
const Hero = () => {
  return (
    <div style={{ background: `url(${bgImage})`, height: '100vh' }}>
      <Header />
      <h2>Hero</h2>
    </div>
  );
};

export default Hero;
