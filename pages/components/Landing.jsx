import React from 'react';
import styles from './Landing.module.css';
import pic from "../../public/crabfry2.jpeg"
import pic1 from "../../public/crabBurger.jpg"
import pic2 from "../../public/crabPlatter.jpg"
import pic3 from "../../public/fried-soft.jpg"
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Landing = () => {
  return (
    <div id='home' className="h-screen w-full flex flex-col md:flex-row justify-center items-center">
      <div
        id='landImage' 
        className="w-1/2 left-0 absolute h-screen opacity-100"
      />
      <video
        className="w-full h-full object-cover"
        src="https://jftl-bd.com/landingVid2.webm"
        controls={false}
        muted={true}
        autoPlay={true}
        loop={true}
      />
      {/* Main Element */}
      <section className="absolute flex flex-row justify-center items-center w-full h-full">
        <div className="flex flex-row justify-center items-center h-full w-full">
          <div className='grid grid-col-1 row-auto'>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl md:text-4xl lg:text-5xl leading-tight text-white font-bold text-center">
                  <span className="text-red-500/90 bg-white px-2 rounded-lg">
                    JAPAN
                  </span>{' '}
                  <span className="text-white bg-[#3D7138]/90 px-2 rounded-lg">
                  FAST
                  TRADE LTD
                  </span>
                </h1>
                <p className="flex text-center justify-center items-center text-lg lg:text-lg text-black p-4 rounded-md lg:pb-2 lg:pt-2 mt-5 pb-4 bg-white">
                  Presenting Bangladeshi seafood delicacy <br /> to the rest of the World
                </p>
              <div className='mt-10 px-5 max-h-[20rem] w-2/3 origin-top'>

                <Carousel
                  showStatus={false}
                  infiniteLoop
                  autoPlay
                  dynamicHeight
                  className='origin-top'
                >
                  <div className='max-h-fit rounded-lg w-full'>
                    <Image className='rounded-lg object-contain' src={pic} />
                    
                  </div>
                  <div className='max-h-fit rounded-lg w-full'>
                    <Image className='rounded-lg object-contain' src={pic2} />
                    
                  </div>
                  <div className='max-h-fit rounded-lg w-full'>
                    <Image className='rounded-lg object-contain' src={pic3} />
                    
                  </div>
                  <div className='max-h-fit rounded-lg w-full'>
                    <Image className='rounded-lg object-contain' src={pic1} />
                    
                  </div>
                </Carousel>
              </div>

              </div>
            </div>
          </div>

        <div className="text-right flex flex-row justify-center items-center h-full w-full">

        </div>
      </section>
    </div>
  );
};

export default Landing;
