'use client';
import React from 'react';
import Image from 'next/image';
import footer from '../../public/FooterNew.png';
// import linkedin from '../../public/linkedin.png';
// import insta from '../../public/insta.png';
// import whatsapp from '../../public/whatsapp.png';
// import facebook from '../../public/facebook.png';
import C1 from "../../public/C1.png"
import C2 from "../../public/C2.png"
import C3 from "../../public/C3.png"
import C4 from "../../public/C4.png"
import C5 from "../../public/C5.png"
import logo from "../../public/JFTLLogo.jpg"
import jgroup from "../../public/jgroup.svg"

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div id='footer' className="flex h-auto w-full flex-col justify-center items-center bg-black">
      <img
        src={footer.src}
        height="auto"
        width="auto"
        className="h-auto w-full"
      />
      <div className="absolute w-1/2 bg-brandBlue h-auto rounded-2xl md:ml-96">
        <h1 className="text-center text-white text-5xl text-bold py-10">
          Contact Us
        </h1>
        <form
          action="mailto:info@jftl-bd.com"
          method="post"
          encType="text/plain"
          className="w-full justify-center text-center pb-10"
        >
          <input
            name="sname"
            type="email"
            className="px-10 md:my-5 py-5 text-lg rounded-lg mx-5"
            placeholder="e-main"
          />
          <input
            name="ssubject"
            type="text"
            className="px-10 py-5 md:mb-5 text-lg rounded-lg mx-5"
            placeholder="your query"
          />
          <button className="px-10 md:px-32 py-5 text-lg rounded-lg mx-5 bg-black text-white">
            Submit
          </button>
        </form>
      </div>
      <div className="h-[30rem] w-full bottom-[10px] flex flex-row justify-center items-center text-white">
        <div className='flex flex-col w-full bottom-[10px] h-[20rem]'>

        <div className="flex flex-col justify-start items-start w-full mb-10">
{/*           <h1 className="text-white px-10 text-5xl tracking-wide">JFTL</h1> */}
          <Image
              src={logo}
              height="100"
              width="100"
              className="text-white px-10 w-[10rem]"
            />
          <p className="px-10 tracking-wide mt-5">
            <i>Presenting Bangladeshi seafood delicacy to the rest of the World</i>
            <br />
            <b className='text-brandBlue'>Dhaka Office:</b> 228/C, Tejgaon Industrial Area, Dhaka.<br />
            <b className='text-brandBlue'>Factory:</b> Shyamnagar, Satkhira, Bangladesh
          </p>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
{/*           <h1 className="text-white px-10 text-5xl tracking-wide">JFTL</h1> */}
          <Image
              src={jgroup}
              height="100"
              width="100"
              className="text-white px-10 w-[10rem]"
            />
          <p className="px-10 tracking-wide mt-5">
            <b>J GROUP HEAD OFFICE</b>
            <br />
            2-32, Hiramatsu cho Nishinomiya, Hogo 662-0044, Japan.
            <br />
            <a
              className='hover:text-red-500/90'
              href="http://japanfoodservice.co.jp"
            >www.japanfoodservice.co.jp</a>
          </p>
        </div>
        </div>
{/*         <div className="flex flex-row justify-end items-center w-full"> */}
        <div className='text-white grid grid-cols-5 gap-10 items-center absolute right-0'> 
          
          <div className="h-auto w-[8rem] pr-10 hover:scale-90 duration-300 cursor-pointer transition-all delay-200 ease-out relative -bottom-44 tracking-wide align-text-bottom leading-10">
            <Image
              src={C1}
              height="100"
              width="100"
              className="object-contain h-auto w-full"
            />
          </div>
          <div className="h-auto w-[8rem] pr-10 hover:scale-90 duration-300 cursor-pointer transition-all delay-200 ease-out relative -bottom-44 tracking-wide align-text-bottom leading-10">
            <Image
              src={C2}
              height="100"
              width="100"
              className="object-contain h-auto w-full"
            />
          </div>
          <div className="h-auto w-[8rem] pr-10 hover:scale-90 duration-300 cursor-pointer transition-all delay-200 ease-out relative -bottom-44 tracking-wide align-text-bottom leading-10">
            <Image
              src={C3}
              height="100"
              width="100"
              className="object-contain h-auto w-full"
            />
          </div>
          <div className="h-auto w-[8rem] pr-10 hover:scale-90 duration-300 cursor-pointer transition-all delay-200 ease-out relative -bottom-44 tracking-wide align-text-bottom leading-10">
            <Image
              src={C4}
              height="100"
              width="100"
              className="object-contain h-auto w-full"
            />
          </div>
          <div className="h-auto w-[8rem] pr-10 hover:scale-90 duration-300 cursor-pointer transition-all delay-200 ease-out relative -bottom-44 tracking-wide align-text-bottom leading-10">
            <Image
              src={C5}
              height="100"
              width="100"
              className="object-contain h-auto w-full"
            />
          </div>
        </div>
      {/* </div> */}
      </div>
      <div className="w-full flex justify-center items-center bg-brandBlue h-10 text-white">
        <p className="text-center text-white text-2xl text-bold">
          © {date} JFTL
        </p>
      </div>
    </div>
  );
};

export default Footer;
