import React from 'react';
import bgImage from '../../../assets/images/hero-bg.png';
import Content from './Content';
const Hero = () => {
  return (
    <div style={{ background: `url(${bgImage})`, minHeight: '100vh' }}>
      <Content />
    </div>
  );
};

export default Hero;
