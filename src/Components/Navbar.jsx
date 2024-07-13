import React, { useRef, useState } from 'react'
import logo from '../assets/logo.png'
import open_menu from '../assets/open_menu.png'
import close_menu from '../assets/close_menu.png'

const Navbar = () => {
  

  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (

    <div className='flex flex-row justify-between items-center py-8 gap-[160px] absolute h-[113px] left-[128px] right-[128px] top-0'>
       <div className='flex items-center '>
       <img src={logo} alt="" className='w-10 h-10 cursor-pointer' />
       <a className='text-neutral-900 text-[38px] gap-10w-[86px] h-10 cursor-pointer  font-black text-2xl leading-[40px] text-[#191825] font-semibold no-underline;  '>Travlog</a>
       </div>


<ul  className=' flex items-center list-none gap-12 text-black text-lg  '>
    <li  onClick={() => handleItemClick('Home')} className={`cursor-pointer ${activeItem === 'Home' ? 'font-bold' : ''}`}>Home</li>
    <li  onClick={() => handleItemClick('Discover')} className={`cursor-pointer ${activeItem === 'Discover' ? 'font-bold' : ''}`}>Discover</li>
    <li  onClick={() => handleItemClick('Special Deals')} className={`cursor-pointer ${activeItem === 'Special Deals' ? 'font-bold' : ''}`}>Special Deals</li>
    <li  onClick={() => handleItemClick('Contact')} className={`cursor-pointer ${activeItem === 'Contact' ? 'font-bold' : ''}`}>Contact</li>
  </ul>

  <div className='flex items-center gap-10 mr-5'>
    <a className='cursor-pointer ' >Log In</a>
    <button className="bg-[#5d50c6] text-white  px-8 py-2 rounded-full text-lg font-medium font-poppins hover:bg-[#4338ca] transition duration-300 ease-in-out">Sign Up</button>

  </div>
      
    </div>
  )
}

export default Navbar


