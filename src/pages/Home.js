import React, { useLayoutEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Home/Hero/Hero';
import SocialLinks from '../components/Home/SocialLinks/SocialLinks';
import useInnerSize from '../hooks/useInnerSize';

const Home = () => {
  const { height } = useInnerSize();
  const ref = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref) {
      setContentHeight(ref?.current?.clientHeight);
    }
  }, []);

  return (
    <div className={`bg-black ${height > contentHeight ? 'min-h-screen' : ''}`}>
      <div ref={ref}>
        <Hero />
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
