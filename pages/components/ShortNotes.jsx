'use-client';
import React from 'react';
import Image from 'next/image';
import { FaFeatherAlt } from 'react-icons/fa';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { MdOutlineImportExport } from 'react-icons/md';
import { GiSadCrab } from 'react-icons/gi';
import { TbCertificate } from 'react-icons/tb';
import { CgFlagAlt } from 'react-icons/cg';
import jgroup from "../../public/jgroup.svg"
import bdjp from "../../public/bdjp.png"

const ShortNotes = () => {
  return (
    <div id='shortNotes' className="dark:bg-transparent h-screen w-full bg-slate-300 snap snap-y bg-transparent">
      <div className='bg-[url("/crabbgf.png")] bg-no-repeat bg-center bg-cover min-h-screen w-[100%] absolute -z-20 opacity-20' />
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-7xl py-10 w-full text-center text-bold font-black text-brandBlue">
          Short Notes
        </h1>
        {/* Top */}
        <div className="flex flex-row justify-center items-center w-full snap snap-y p-4">
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
            <div className="text-left w-full">
              <div className="h-16 w-16 hidden bg-trasnparent shadow-xl md:flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                {/* <FaFeatherAlt
                  size={30}
                  className="animate-wiggle text-brandBlue"
                /> */}
                <Image className='w-full' src={bdjp}/>
                
              </div>
            </div>

            <p className="text-left w-full md:text-md">
              A Joint Venture between <br />
              <span className="font-bold text-brandBlue">
                Japan & Bangladesh
              </span>
            </p>
          </div>
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
            <div className="text-left w-full">
              <div className="hidden h-16 w-16 bg-trasnparent shadow-xl md:flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue bg-contain object-contain">
                {/* <MdOutlineBusinessCenter
                  size={30}
                  className="animate-wiggle text-brandBlue"
                /> */}
                <Image className='w-2/3' src={jgroup}/>
              </div>
            </div>

            <p className="text-left w-full md:text-md">
              An Associate of <br />
              <a href='http://japanfoodservice.co.jp' className="font-bold text-brandBlue hover:underline hover:text-red-500/90">J Group Japan</a>
            </p>
          </div>
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
            <div className="text-left w-full">
              <div className="h-16 w-16 hidden bg-trasnparent shadow-xl md:flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                <MdOutlineImportExport
                  size={30}
                  className="animate-wiggle text-brandBlue"
                />
              </div>
            </div>

            <p className="text-left w-full md:text-md">
              A <span className="font-bold text-brandBlue">100% export</span>
              <br />
              oriented company
            </p>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-row justify-center items-center w-full snap snap-y p-4">
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg mb-10">
            <div className="text-left w-full">
              <div className="h-16 w-16 hidden bg-trasnparent shadow-xl md:flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                <GiSadCrab
                  size={30}
                  className="animate-wiggle text-brandBlue"
                />
              </div>
            </div>

            <p className="text-left text-[8px] md:text-md w-full md:text-md sm:text-xs">
              <span className="font-bold text-brandBlue">Mud Crab Farming</span>
              , (Frozen Mud Crab / Frozen Soft Shell Crab / Live Mud Crabs /
              Hard Shell Crab) <span className="font-bold text-brandBlue">Processing & Export</span>
            </p>
          </div>
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg mb-10">
            <div className="text-left w-full">
              <div className="h-16 w-16 hidden bg-trasnparent shadow-xl md:flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                <TbCertificate
                  size={30}
                  className="animate-wiggle text-brandBlue"
                />
              </div>
            </div>

            <p className="text-left w-full md:text-md">
              <span className="font-bold text-brandBlue">BRCGS</span>,{' '}
              <span className="font-bold text-brandBlue">EU</span>,{' '}
              <span className="font-bold text-brandBlue">HACCP</span>, {' '}
              <span className="font-bold text-brandBlue">Halal Certified</span> & {' '} <br />
              <span className="font-bold text-brandBlue">USFDA</span> registered facility {' '}
              Certified
            </p>
          </div>
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg mb-10">
            <div className="text-left w-full">
              <div className="h-16 w-16 hidden bg-trasnparent shadow-xl md:flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                <CgFlagAlt size={30} className="animate-wiggle text-brandBlue" />
              </div>
            </div>

            <p className="text-left w-full md:text-md">
              Shayamnagar, Satkhira, <br />
              <span className="font-bold text-brandBlue">Bangladesh</span>
            </p>
          </div>

{/*           <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image className="h-48 w-full object-cover md:h-full md:w-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8TktZ-Y-qkyv4_J3IuTCJfUGQIvhHWRSWw&usqp=CAU" height={20} width={20} alt="Modern building architecture"/>
              </div>
              <div className="p-8">
                <p className="mt-2 text-slate-500">Shayamnagar, Satkhira, Bangladesh.</p>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default ShortNotes;
