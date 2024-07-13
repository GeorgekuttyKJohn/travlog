import React from 'react'
import backward_img from '../assets/backward.png'
import forward_img from "../assets/forward.png"
import beach_img from '../assets/beach.jpeg'
import fish_img from '../assets/fish.jpeg'
import  mountain_img from '../assets/mountain.jpeg'
import star_img from '../assets/star.png'



const Topdestinations = () => {
  return (
    <div className='flex flex-col items-start gap-16 absolute w-[1184px] h-[867px] px-0 py-16 left-32 top-[1685px] '>
      <div className="flex flex-row items-center w-[1184px] h-[100px] p-0">
      <div className="flex flex-col items-start gap-4 w-[952px] h-[97px]">
        <h6 className='w-[952px] h-7 not-italic font-bold text-[23px] leading-[120%] tracking-[0.2em] uppercase text-[#F85E9F]'>Top Destination</h6>
        <h3 className='w-[952px] h-[53px] not-italic font-bold text-[44px] leading-[120%] text-[#191825]'>Explore top destination</h3>
     </div>

     <div className="flex flex-row items-start gap-8 w-[232px] h-[100px] p-0">
        <img src={backward_img} alt="" className='w-[100px] h-[100px] transform transition duration-300 ease-in-out hover:scale-105' />
        <img src={forward_img} alt="" className='w-[100px] h-[100px] transform transition duration-300 ease-in-out hover:scale-105' />
    </div>

      </div>
    <div className="flex flex-row items-start gap-8 w-[1184px] h-[575px] p-0">
        <div className="flex flex-col items-start w-[373.33px] h-[575px] p-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img src={beach_img} alt=""  className=' w-[373.33px] h-[350px] rounded-[32px_32px_0px_0px] '/>
            <div className="flex flex-col items-start p-8 gap-8 w-[373.33px] h-[225px] bg-white shadow-[0_513px_205px_rgba(0,0,0,0.01),0_288px_173px_rgba(0,0,0,0.03),0_128px_128px_rgba(0,0,0,0.04),0_32px_71px_rgba(0,0,0,0.05),0_0_0_rgba(0,0,0,0.05)] rounded-b-[32px]">
                <div className="flex flex-col items-start gap-4 w-[309.33px] h-[101px] p-0">
                <div className="flex flex-row items-start w-[309.33px] h-14 p-0">
                    <h6 className='w-[228.33px] h-14 not-italic font-bold text-[23px] leading-[120%] text-[#191825]'>Paradise Beach, Bantayan Island</h6>
                    <h6 className=' w-[81px] h-7 not-italic font-bold text-[23px] leading-[120%] text-[#F85E9F]'>$550.16</h6>
                </div>
                <h4 className='pw-[309.33px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[rgba(25,24,37,0.75)]'>Rome, Italy</h4>
                </div>
                <div className="flex flex-row items-center gap-2 w-[66px] h-7 p-0;">
                    <h6 className='w-[34px] h-7 not-italic font-bold text-[23px] leading-[120%] text-[#FF5722]'>4.8</h6>
                    <img src={star_img} alt="" className='w-6 h-6' />
                </div>

            </div>
        </div>

        <div className="flex flex-col items-start w-[373.33px] h-[575px] p-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img src={fish_img} alt="" className='w-[373.33px] h-[350px] rounded-[32px_32px_0px_0px]' />
            <div className="flex flex-col items-start p-8 gap-8 w-[373.33px] h-[225px] bg-white shadow-[0_513px_205px_rgba(0,0,0,0.01),0_288px_173px_rgba(0,0,0,0.03),0_128px_128px_rgba(0,0,0,0.04),0_32px_71px_rgba(0,0,0,0.05),0_0_0_rgba(0,0,0,0.05)] rounded-b-[32px]">
                <div className="flex flex-col items-start gap-4 w-[309.33px] h-[101px] p-0">
                <div className="flex flex-row items-start w-[309.33px] h-14 p-0">
                    <h6 className='w-[228.33px] h-14 not-italic font-bold text-[23px] leading-[120%] text-[#191825]'>Ocean with full of Colors</h6>
                    <h6 className='w-[81px] h-7 not-italic font-bold text-[23px] leading-[120%] text-[#F85E9F]'>$20.99</h6>
                </div>
                <h4 className='pw-[309.33px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[rgba(25,24,37,0.75)]'>Maldives</h4>
                </div>
                <div className="flex flex-row items-center gap-2 w-[66px] h-7 p-0;">
                    <h6 className='w-[34px] h-7 not-italic font-bold text-[23px] leading-[120%] text-[#FF5722]rating'>4.5</h6>
                    <img src={star_img} alt=""  className='w-6 h-6'/>
                </div>

            </div>
        </div>


        <div className="flex flex-col items-start w-[373.33px] h-[575px] p-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img src={mountain_img} alt=""  className='w-[373.33px] h-[350px] rounded-[32px_32px_0px_0px]'/>
            <div className="flex flex-col items-start p-8 gap-8 w-[373.33px] h-[225px] bg-white shadow-[0_513px_205px_rgba(0,0,0,0.01),0_288px_173px_rgba(0,0,0,0.03),0_128px_128px_rgba(0,0,0,0.04),0_32px_71px_rgba(0,0,0,0.05),0_0_0_rgba(0,0,0,0.05)] rounded-b-[32px]">
                <div className="flex flex-col items-start gap-4 w-[309.33px] h-[101px] p-0">
                <div className="flex flex-row items-start w-[309.33px] h-14 p-0">
                    <h6 className='w-[228.33px] h-14 not-italic font-bold text-[23px] leading-[120%] text-[#191825]'>Mountain View, Above the cloud</h6>
                    <h6 className='w-[81px] h-7 not-italic font-bold text-[23px] leading-[120%] text-[#F85E9F]'>$150.99</h6>
                </div>
                <h4 className='pw-[309.33px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[rgba(25,24,37,0.75)]'>United Arab Emeries</h4>
                </div>
                <div className="flex flex-row items-center gap-2 w-[66px] h-7 p-0;">
                    <h6 className='ratw-[34px] h-7 not-italic font-bold text-[23px] leading-[120%] text-[#FF5722]ing'>5</h6>
                    <img src={star_img} alt=""  className='w-6 h-6'/>
                </div>

            </div>
        </div>






    </div>
    </div>
  )
}

export default Topdestinations
