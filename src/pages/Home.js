import React from 'react';
import AllCards from '../components/Home/Cards/AllCards';
import Hero from '../components/Home/Hero/Hero';
import SocialLinks from '../components/Home/SocialLinks/SocialLinks';

const Home = () => {
  return (
    <div>
      <Hero />
      <AllCards />
      <SocialLinks />
    </div>
  );
};

export default Home;
