import React from 'react'
import destination_img from '../assets/destination.png'
import booking_img from '../assets/bokking.png'
import cloudy_img from '../assets/cloudy.png'


const Services = () => {

    
  return (
    <div className='flex flex-row items-center absolute h-[571px]  px-0 py-16 left-32 -right-56 top-[1114px] '>
        <div className="flex flex-col items-start gap-4 w-[444px] h-[150px] p-0">
            <h5 className='w-[444px] h-7 not-italic font-bold text-[23px] leading-[120%] tracking-[0.2em] uppercase text-[#F85E9F]'>Services</h5>
            <h3 className='w-[444px] h-[106px] not-italic font-bold text-[44px] leading-[120%] text-[#191825]'>Our top value categories for you</h3>
        </div>
        <div className="flex flex-row items-start gap-[21px] w-[1092px] h-[443px] p-0 ">
            <div className=" box-border flex flex-col items-center p-16 gap-16 w-[350px] h-[443px] bg-white border border-[rgba(25,24,37,0.1)] rounded-[32px] transform transition duration-300 ease-in-out hover:scale-105">
                <img src={destination_img} alt=""  className='w-16 h-16'/>
                <div className="flex flex-col items-center gap-8 w-[222px] h-[153px] p-0">
                    <h5 className='w-[222px] h-[34px] not-italic font-bold text-[28px] leading-[120%] text-center text-[#191825]'>Best Tour Guide</h5>
                    <h6 className=' w-[222px] h-[87px] not-italic font-normal text-lg leading-[160%] text-center text-[rgba(25,24,37,0.5)]'>What looked like a small patch of purple grass, above five feet.</h6>
                </div>

            </div>

            <div className="box-border flex flex-col items-center p-16 gap-16 w-[350px] h-[443px] bg-white border border-[rgba(25,24,37,0.1)] rounded-[32px] transform transition duration-300 ease-in-out hover:scale-105">
                <img src={booking_img} alt=""  className='w-16 h-16'/>
                <div className="flex flex-col items-center gap-8 w-[222px] h-[153px] p-0">
                    <h5 className='w-[222px] h-[34px] not-italic font-bold text-[28px] leading-[120%] text-center text-[#191825]'>Easy Booking</h5>
                    <h6 className=' w-[222px] h-[87px] not-italic font-normal text-lg leading-[160%] text-center text-[rgba(25,24,37,0.5)]'>Square, was moving across the sand in their direction.</h6>
                </div>

            </div>

            <div className="box-border flex flex-col items-center p-16 gap-16 w-[350px] h-[443px] bg-white border border-[rgba(25,24,37,0.1)] rounded-[32px] transform transition duration-300 ease-in-out hover:scale-105">
                <img src={cloudy_img} alt="" className='w-16 h-16' />
                <div className="flex flex-col items-center gap-8 w-[222px] h-[153px] p-0">
                    <h5 className='w-[222px] h-[34px] not-italic font-bold text-[28px] leading-[120%] text-center text-[#191825]'>Weather Forecast</h5>
                    <h6 className=' w-[222px] h-[87px] not-italic font-normal text-lg leading-[160%] text-center text-[rgba(25,24,37,0.5)]'>What looked like a small patch of purple grass,</h6>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Services
