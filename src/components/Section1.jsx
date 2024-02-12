import React from 'react'
import logo from "../assets/Logo.svg"
import { RxCaretRight } from "react-icons/rx";

const Section1 = () => {
    return (
        <>
        <div className='bg lg:h-[94vh] h-[70vh]   sm:bg-center  bg-cover '>
            <div className="content lg:h-[94vh] h-[70vh] ">

                <div className='nav flex justify-between items-center lg:mx-40 mx-9 pt-7 z-10 '>
                    <img className='lg:w-[144px] w-[90px] ' src={logo} alt="" />
                    <button className='text-white px-3 py-1 bg-[rgb(229,9,20)] hover:bg-red-700 rounded-[5px]'>Sign In</button>
                </div>

                <div className="center text-white flex justify-center items-center flex-col h-[90%] text-center z-10 px-6">
                    <span className='md:text-[48px] md:font-[900] text-[33px] font-[700] tracking-tight leading-tight '>Unlimited movies, TV shows, and more</span>
                    <span className='sm:text-[24px] md:font-[400] text-[16px] pt-2'> Watch anywhere. Cancel anytime.</span>
                    <span className='md:text-[20px] md:font-[400] text-[16px] pt-4 mx-4'>Ready to watch? Enter your email to create or restart your membership.</span>
                    <div className="flex md:flex-row flex-col justify-center items-center gap-2 pt-4">
                        <input className='sm:text-[18px] text-[16px] font-[400] lg:pl-4 lg:pr-28 lg:py-3 sm:pr-16 pl-2 pr-8 py-2 rounded-[5px] inpat border-2 border-zinc-500 focus:outline outline-white' type="emsil" placeholder='Email Address' />
                        <button className='md:text-[30px] md:font-[500] mt-2 lg:mt-0 text-[18px] flex justify-center items-center bg-[rgb(229,9,20)] hover:bg-red-700 text-gray-100 lg:px-4 lg:py-1 py-2 px-5 rounded-[5px]'>Get Started <RxCaretRight className='text-4xl' /></button>
                    </div>
                </div>


            </div>
        </div>

         <div className="separation h-[8px] w-screen  "></div>

        </>
    )
}

export default Section1
