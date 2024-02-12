import React from 'react'
import tvimg from "../assets/tvimg.png"
import video from "../assets/video1.m4v"

const Section2 = () => {
    return (
        <>
        <div className='bg-black text-white   flex justify-center items-center px-5 sm:flex-row flex-col py-14 z-10'>
            <div className="left">
                <h1 className='md:text-[48px] md:font-[900] text-[33px] font-[700] text-center md:-translate-x-24'>Enjoy on your TV</h1>
                <h2 className='md:text-[24px] font-[400] text-[16px] text-center md:text-left  md:w-[600px]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </div>
            <div className="right relative z-10  bg-black">
                <img className='relative z-10 w-[555px]  ' src={tvimg} alt="" />
                <video className='absolute top-14 right-0 left-0 bottom-0 w-[470px] ' src={video} autoPlay loop muted></video>
            </div>
         
        </div>
        <div className="separation h-[8px] w-screen">

        </div>
        </>
    )
}

export default Section2
