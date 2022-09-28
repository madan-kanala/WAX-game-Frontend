import React from 'react';
import Footer from '../components/Footer';
import AllCards from '../components/Home/Cards/AllCards';
import Hero from '../components/Home/Hero/Hero';
import SocialLinks from '../components/Home/SocialLinks/SocialLinks';

const Home = () => {
  return (
    <div>
      <Hero />
      <AllCards />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Home;
