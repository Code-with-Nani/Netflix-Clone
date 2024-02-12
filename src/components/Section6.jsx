import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { RxCaretRight } from "react-icons/rx";

const Section6 = () => {
    return (

        <>
            <div className='bg-black text-white  py-20'>
                <h2 className='md:text-[48px] md:font-[900] text-[33px] font-[700] text-center'>Frequently Asked Questions</h2>


                <div className="box py-3 space-y-[10px] cursor-pointer">

                    <div className="flex justify-between items-center mx-6 lg:mx-40 p-[1.5rem] bg2 ">
                        <h3 className='md:text-[24px] font-[400] text-[17px] '>What is Netflix?</h3>
                        <span className='text-3xl'><AiOutlinePlus /></span>
                    </div>

                    <div className="flex justify-between items-center mx-6 lg:mx-40 p-[1.5rem] bg2 ">
                        <h3 className='md:text-[24px] font-[400] text-[17px] '>How much does Netflix cost?</h3>
                        <span className='text-3xl'><AiOutlinePlus /></span>
                    </div>

                    <div className="flex justify-between items-center mx-6 lg:mx-40 p-[1.5rem] bg2 ">
                        <h3 className='md:text-[24px] font-[400] text-[17px] '>Where can I watch?</h3>
                        <span className='text-3xl'><AiOutlinePlus /></span>
                    </div>

                    <div className="flex justify-between items-center mx-6 lg:mx-40 p-[1.5rem] bg2 ">
                        <h3 className='md:text-[24px] font-[400] text-[17px] '>How do I cancel?</h3>
                        <span className='text-3xl'><AiOutlinePlus /></span>
                    </div>

                    <div className="flex justify-between items-center mx-6 lg:mx-40 p-[1.5rem] bg2 ">
                        <h3 className='md:text-[24px] font-[400] text-[17px] '>What can I watch on Netflix?</h3>
                        <span className='text-3xl'><AiOutlinePlus /></span>
                    </div>

                    <div className="flex justify-between items-center mx-6 lg:mx-40 p-[1.5rem] bg2 ">
                        <h3 className='md:text-[24px] font-[400] text-[17px] '>Is Netflix good for kids?</h3>
                        <span className='text-3xl'><AiOutlinePlus /></span>
                    </div>

                </div>

                <h3 className="md:text-[20px] font-[400] text-[17px] mx-10 md:text-center text-center mt-10">Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="flex md:flex-row flex-col justify-center items-center gap-2 pt-4">
                    <input className='sm:text-[18px] text-[16px] font-[400] lg:pl-4 lg:pr-28 lg:py-3 sm:pr-16 pl-4 pr-10 py-2 rounded-[5px] bg3 border-2 border-zinc-500 focus:outline outline-white' type="emsil" placeholder='Email Address' />
                    <button className='md:text-[30px] md:font-[500] mt-2 lg:mt-0 text-[18px] flex justify-center items-center bg-[rgb(229,9,20)] hover:bg-red-700 text-gray-100 lg:px-4 lg:py-1 py-2 px-5 rounded-[5px]'>Get Started <RxCaretRight className='text-4xl' /></button>
                </div>


            </div>

            <div className="separation h-[8px] w-screen">

</div>

        </>
    )
}

export default Section6
