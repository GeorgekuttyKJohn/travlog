import React from 'react'
import hero_img from '../assets/hero_img.png'

const Hero = () => {
  return (

    
    <div className='flex flex-row items-center absolute h-[841px] px-0 py-16 top-[113px] inset-x-32 '>
        <div className="flex flex-col items-start gap-[43px] w-[412px] h-[577px] p-0">
            <div className="flex flex-row items-center gap-4 w-56 h-14 shadow-[0px_548px_219px_rgba(0,0,0,0.01),0px_308px_185px_rgba(0,0,0,0.04),0px_137px_137px_rgba(0,0,0,0.06),0px_34px_75px_rgba(0,0,0,0.07),0px_0px_0px_rgba(0,0,0,0.07)] px-8 py-4 rounded-[100px];background: #ffffff rounded-[100px] hover:bg-[#f7f2f2] transition duration-300 ease-in-out">
                <button className='w-[120px] h-[17px] font-normal font-bold text-sm leading-[120%] text-[#F85E9F] '>Explore the world</button>
            </div>
            <h1 className='w-[412px] h-[249px] not-italic font-bold text-[69px] leading-[120%] text-black cursor-pointer'>Travel <span className='text-[#F85E9F]'>top destination </span>of the world</h1>
            <h5 className='w-[412px] h-[87px] not-italic font-normal text-lg leading-[160%] text-[rgba(25,24,37,0.5)]'>We always make our customer happy by providing
            as many choices as possible</h5>
            <div className="flex flex-row items-start gap-4 w-[338px] h-14 flex-none order-3 grow-0 p-0">
                <button className='flex p-4 px-8 gap-2 bg-[#5D50C6] rounded-full font-bold text-sm text-[#EEEEEE] hover:bg-[#372ea4] transition duration-300 ease-in-out'>Get Started</button>
                <button className='box-border flex items-center gap-2 border font-bold text-sm text-[#222831] px-8 py-4 rounded-[100px] border-solid border-[#EEEEEE]; background: #f1f1f1 hover:bg-[#f7f2f2] transition duration-300 ease-in-out'>Watch Demo</button>
            </div>
        </div>
        <div className="w-full md:min-w-[430px] md:max-w-[1440px]">
  <img src={hero_img} alt="" className="w-full h-auto md:w-[100%] md:h-auto transform transition duration-300 ease-in-out hover:scale-105" />
</div>
      
    </div>
  )
}

export default Hero
