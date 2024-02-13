import React from 'react'
import img2 from "../assets/img2.png"

const Section5 = () => {
    return (
        <>
            <div className='bg-black text-white   flex justify-center items-center px-5 lg:flex-row flex-col-reverse py-14 gap-10'>
                <div className="left">
                    <img className=' ' src={img2} alt="" />

                </div>
                <div className="right">
                    <h1 className='md:text-[48px] md:font-[900] text-[33px] font-[700] text-center md:-translate-x-6'>Create profiles for kids</h1>
                    <h2 className='md:text-[24px] font-[400] text-[16px] text-center md:text-left  md:w-[600px]'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                </div>


            </div>
            <div className="separation h-[8px] w-screen">

            </div>
        </>
    )
}

export default Section5
