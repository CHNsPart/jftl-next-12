import React from 'react';
import Image from 'next/image';
import lab1 from '../../public/lab1.png';
import lab2 from '../../public/lab2.png';
import lab3 from '../../public/lab3.png';
import lab4 from '../../public/lab4.png';
import lab5 from '../../public/lab5.png';
import lab6 from '../../public/lab6.png';
import lab7 from '../../public/lab7.png';
import lab8 from '../../public/lab8.png';
import haccp from '../../public/HACCP.png';
import becgs from '../../public/brcgs.png';
import C3 from "../../public/C3.png"
import C4 from "../../public/C4.png"
import C5 from "../../public/C5.png"
import { GiCrab, GiBuyCard } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';

const CrabFarming = () => {
  return (
  <div className="bg-[#020721] dark:bg-transparent min-h-screen my-16 relative flex flex-col justify-center items-center w-full snap snap-y">
    <div className='w-full flex flex-row justify-center items-center opacity-20 gap-10'>
     <GiBuyCard size={50}/>
     <GiCrab size={50}/>
     <FaTruck size={50}/>
     <GiBuyCard size={50}/>
     <GiCrab size={50}/>
     <FaTruck size={50}/>
     <GiBuyCard size={50}/>
     <GiCrab size={50}/>
     <FaTruck size={50}/>
     <GiBuyCard size={50}/>
     <GiCrab size={50}/>
     <FaTruck size={50}/>
     <GiBuyCard size={50}/>
     <GiCrab size={50}/>
     <FaTruck size={50}/>
    </div>
    <div className='flex flex-col justify-center items-center bg-transparent mt-16'>
      <h1 className="text-7xl w-full text-center text-bold font-black text-brandBlue">
        JFTL Soft Shell Crab Processing
      </h1>

    <div className='grid grid-cols-1 w-3/4 gap-2 my-20 hover:gap-4 transition-all duration-300 ease-in-out'>
      <div className="grid grid-cols-4 gap-2 hover:gap-4 transition-all duration-300 ease-in-out">
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={lab8} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-t-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={lab7} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-b-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={lab6} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full  w-full border transition-all duration-300 ease-in-out rounded-r-full" src={lab5} />
      </div>
      <div 
        className
          ="grid grid-cols-4 gap-2
            hover:gap-4
            transition-all duration-300 ease-in-out"
        >
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={lab2} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-t-full rounded-r-full w-full border transition-all duration-300 ease-in-out" src={lab3} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-b-full rounded-r-full w-full border transition-all duration-300 ease-in-out" src={lab1} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full w-full border transition-all duration-300 ease-in-out rounded-r-full" src={lab4} />
      </div>
      <p className='w-full mt-2 text-center italic font-sans text-gray-400'>Internationally recognized Food Safety Standards are strictly followed in JFTL soft crab processing.
The Quality Manual also covers protocols for COVID management</p>
    </div>
      <div className="flex bg-brandBlue/20 my-2 p-5 pb-10 rounded-xl flex-row justify-center items-center md:px-0 md:grid md:grid-cols-1 lg:flex lg:flex-row lg:justify-center lg:items-center sm:grid sm:gap-10 sm:py-10">
        
{/*         <div className="w-full md:w-1/2 lg:flex lg:flex-col lg:justify-center lg:m-0 lg:justify-self-start lg:items-center md:px-0 md:mb-10 md:grid md:grid-cols-1">
          <div className="w-[30rem] px-10">
            <div className="h-20 w-20 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
              <Image className="object-cover px-2 w-full" src={becgs} />
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            The Quality Manual also covers protocols for COVID management
          </p>
          <div className="w-[30rem] px-10"></div>
        </div> */}

{/*         <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-20 w-20 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
              <Image className="object-cover brightness-150 p-0 w-full" src={haccp} />
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Internationally recognized Food Safety Standards are strictly
            followed in JFTL soft crab processing
          </p>
          <div className="w-[30rem] px-10"></div>
        </div> */}

        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-full px-10">
            <div className='w-full flex flex-row gap-5 items-center'>
              <div className="h-20 w-20 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
                <Image className="object-cover brightness-150 p-0 w-full" src={haccp} />
              </div>
              <div className="h-20 w-20 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
                <Image className="object-cover px-2 w-full" src={becgs} />
              </div>
              <div className="h-20 w-20 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
                <Image className="object-cover px-2 w-full" src={C3} />
              </div>
              <div className="h-20 w-20 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
                <Image className="object-cover px-2 w-full" src={C4} />
              </div>
              <div className="h-20 w-20 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
                <Image className="object-cover px-2 w-full" src={C5} />
              </div>
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            The Quality Manual also covers protocols for COVID management. 
            Internationally recognized Food Safety Standards are strictly
            followed in JFTL soft crab processing
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>

      </div>
      </div>
   </div>
  );
};

export default CrabFarming;
