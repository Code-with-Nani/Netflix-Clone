import React from 'react'
import img1 from "../assets/img1.jpg"

const Section3 = () => {
    return (
        <>
            <div className='bg-black text-white   flex justify-center items-center px-5 md:flex-row flex-col-reverse py-14 pb-28'>

                <div className="left">
                    <img className='' src={img1} alt="" />
                </div>

                <div className="right">
                    <h1 className='md:text-[48px] md:font-[900] text-[33px] font-[700] text-center md:-translate-x-24 md:text-left md:pl-[90px]'>Download your shows to watch offline</h1>
                    <h2 className='md:text-[24px] font-[400] text-[16px] text-center md:text-left  md:w-[600px]'>Save your favorites easily and always have something to watch.</h2>
                </div>


            </div>

            <div className="separation h-[8px] w-screen "></div>
        </>
    )
}

export default Section3
