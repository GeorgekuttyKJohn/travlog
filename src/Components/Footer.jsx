import React from 'react'
import footer_logo from "../assets/Footer_logo.png"

const Footer = () => {
  return (
    <div className='flex flex-row items-start gap-16 absolute w-[1184px] h-[434px] px-0 py-16 left-[155px] top-[4374px]'>
        <div className="flex flex-col items-start gap-8 w-[560px] h-[183px] p-0">
            <div className="flex flex-row items-center gap-4 w-[142px] h-10 p-0">
                <img src={footer_logo} alt="" className='w-10 h-10' />
                <h2 className='w-[86px] h-10 not-italic font-black text-2xl leading-10'>Travlog</h2>
            </div>
            <div className="w-[560px] h-[111px] not-italic font-[450] text-[23px] ">
                <p >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
            </div>

        </div>

        <div className="flex flex-row items-start gap-8 w-[560px] h-[306px] p-0">
            <div className="flex flex-col items-start gap-8 w-[165.33px] h-[211px] p-0">
                <h6 className='font-bold text-[23px] leading-[27px]'>Company</h6>
                <h5 className='w-[165px] h-[29px] not-italic font-normal text-lg leading-[160%]'>About</h5>
                <h5 className='w-[165px] h-[29px] not-italic font-normal text-lg leading-[160%]'>Carrer</h5>
                <h5 className='w-[165px] h-[29px] not-italic font-normal text-lg leading-[160%]'>Mobile</h5>
                </div>

                <div className="flex flex-col items-start gap-8 w-[165.33px] h-[211px] p-0">
                    <h6 className='font-bold text-[23px] leading-[27px]'>Contact</h6>
                    <h5 className='w-[165px] h-[29px] not-italic font-normal text-lg leading-[160%]'>Why Travlog</h5>
                    <h5 className='w-[165px] h-[29px] not-italic font-normal text-lg leading-[160%]'>Partner with us</h5>
                    <h5 className='w-[165px] h-[29px] not-italic font-normal text-lg leading-[160%]'>FAQ's</h5>
                    <h5 className='w-[165px] h-[29px] not-italic font-normal text-lg leading-[160%]'>Blog</h5>

                </div>

                <div className="flex flex-col items-start gap-8 w-[165.33px] h-[211px] p-0">
                    <h6 className='font-bold text-[23px] leading-[27px]'>Meet Us</h6>
                    <h5 className='w-[165px] h-[29px] not-italic font-normal text-lg leading-[160%]'>+00 92 1234 56789</h5>
                    <h5 className='w-[165px] h-[29px] not-italic font-normal text-lg leading-[160%]'>info@travlog.com</h5>
                    <h5 className='w-[165px] h-[29px] not-italic font-normal text-lg leading-[160%]'>205.R Street,New York BD23200</h5>
                </div>
        </div>


      
    </div>
  )
}

export default Footer
