import React from 'react'
import paradise_img from '../assets/paradise.png'
import key_1_img from '../assets/key_1.png'
import key_2_img from '../assets/key_2.png'
import key_3_img from '../assets/key_3.png'

//  import './Footer.css'

const KeyFeatures = () => {
  return (
    <div className='flex flex-row items-start gap-[70px] absolute w-[1312px] h-[997px] px-0 py-16 left-32 top-[3377px]'>
      <div className="flex flex-col items-start gap-16 w-[549px] h-[772px] p-0">
        <div className="flex flex-col items-start gap-8 w-[549px] h-[216px] p-0">
            <div className="flex flex-col items-start gap-4 w-[549px] h-[97px] p-0">
                <h5 className=' w-[549px] h-7 not-italic font-bold text-[23px] leading-[120%] tracking-[0.2em] uppercase text-[#F85E9F]'>Key features</h5>
                <h3 className='w-[549px] h-[53px] not-italic font-bold text-[44px] leading-[120%] text-[#191825]'>We offer best services</h3>
                <h6 className='w-[549px] h-[87px] not-italic font-normal text-lg leading-[160%] text-[rgba(25,24,37,0.5)]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                from 45 BC.</h6>
            </div>
        </div>
        <div className="flex flex-col items-start w-[549px] h-[492px] p-0">
            <div className="flex flex-row items-center gap-8 w-[549px] h-[164px] p-8 rounded-[32px];background: #ffffff transform transition duration-300 ease-in-out hover:scale-105">
                <img src={key_1_img} alt=""  className='w-[100px] h-[100px]'/>
                <div className="flex flex-col items-start gap-2 w-[353px] h-[65px] p-0">
                    <h5 className=' w-[353px] h-7 not-italic font-bold text-[23px] leading-[120%] text-[#191825]'>We offer best services</h5>
                    <h6 className='w-[353px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[rgba(25,24,37,0.5)]'>Lorem Ipsum is not simply random text</h6>
                </div>

            </div>
            <div className="flex flex-row items-center gap-8 w-[549px] h-[164px] p-8 rounded-[32px];background: #ffffff transform transition duration-300 ease-in-out hover:scale-105">
                <img src={key_2_img} alt="" className='w-[100px] h-[100px]' />
                <div className="flex flex-col items-start gap-2 w-[353px] h-[65px] p-0">
                    <h5 className=' w-[353px] h-7 not-italic font-bold text-[23px] leading-[120%] text-[#191825]'>Schedule your trip</h5>
                    <h6 className='w-[353px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[rgba(25,24,37,0.5)]'>It has roots in a piece of classica</h6>
                </div>

            </div>

            <div className="flex flex-row items-center gap-8 w-[549px] h-[164px] p-8 rounded-[32px];background: #ffffff transform transition duration-300 ease-in-out hover:scale-105">
                <img src={key_3_img} alt="" className='w-[100px] h-[100px]' />
                <div className="flex flex-col items-start gap-2 w-[353px] h-[65px] p-0">
                    <h5 className=' w-[353px] h-7 not-italic font-bold text-[23px] leading-[120%] text-[#191825]'>Get discounted coupons</h5>
                    <h6 className='w-[353px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[rgba(25,24,37,0.5)]'>Lorem Ipsum is not simply random text</h6>
                </div>

            </div>
        </div>
      </div>
      <img src={paradise_img} alt="" className='transform transition duration-300 ease-in-out hover:scale-105' />
    </div>
  )
}

export default KeyFeatures
