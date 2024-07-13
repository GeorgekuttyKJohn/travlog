import React from 'react'
import partners_img from '../assets/Partners.png'


const Partners = () => {
  return (
    <div className='flex flex-row justify-between items-start absolute w-[1184px] h-40 left-[calc(50%_-_1184px/2)] top-[954px] transform transition duration-300 ease-in-out hover:scale-105'>
        <img src={partners_img} alt="" />

      
    </div>
  )
}

export default Partners
