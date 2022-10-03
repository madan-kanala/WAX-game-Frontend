import React from 'react';
import icon1 from '../../../assets/images/gitbook.png';
import img1 from '../../../assets/images/home/hero.png';
const Hero = () => {
  return (
    <div className='bg-black min-h-screen md:min-h-max'>
      <div className='md:w-7/12 mx-3 md:mx-auto pt-10 text-primary text-center'>
        <div className='flex justify-center'>
          <div className='w-[500px] h-[360px]'>
            <img src={img1} alt='' className='w-full h-full object-contain' />
          </div>
        </div>
        <h2 className='text-money-green text-5xl font-bold capitalize'>
          Welcome To the Hustle
        </h2>
        <p className='text-primary text-xl mt-2'>
          "The NFT game where no dream is too big"
        </p>
        <div className='mt-10'>
          <p className='text-lg text-primary'>Checkout our whitepaper</p>
          <div className='flex justify-center mt-4'>
            <a
              href='https://thehustlegame.gitbook.io/whitepaper/'
              target={'_blank'}
              className='w-10 h-10 block'
              rel='noreferrer'
            >
              <img
                src={icon1}
                alt=''
                className='w-full h-full object-contain'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
