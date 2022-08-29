import React from 'react';
import bgImage from '../../../assets/images/hero-bg.png';
import Header from '../../Header/Header';
import Content from './Content';
const Hero = () => {
  return (
    <div style={{ background: `url(${bgImage})`, minHeight: '100vh' }}>
      <Header />
      <Content />
    </div>
  );
};

export default Hero;
