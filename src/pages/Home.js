import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Home/Hero/Hero';
import SocialLinks from '../components/Home/SocialLinks/SocialLinks';

const Home = () => {
  return (
    <div>
      <Hero />

      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Home;
