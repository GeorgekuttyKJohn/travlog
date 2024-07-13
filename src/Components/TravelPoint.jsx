// import React, { useState, useEffect } from 'react';
// import women_img from '../assets/women.png'



// const TravelPoint = () => {

    
 
    
//   return (
//     <div className='flex flex-row items-end absolute h-[825px] px-0 py-16 left-0 right-32 top-[2552px]'>
//         <img src={women_img} alt=""  className=' w-[871px] h-[697px] transform transition duration-300 ease-in-out hover:scale-105'/>
//         <div className="flex flex-col items-start gap-16 w-[441px] h-[667px] p-0">
//             <div className="flex flex-col items-start gap-8 w-[441px] h-[269px] p-0">
//                 <div className="flex flex-col items-start gap-4 w-[441px] h-[150px] p-0">
//                     <h5 className='w-[441px] h-7 not-italic font-bold text-[23px] leading-[120%] tracking-[0.2em] uppercase text-[#F85E9F]'>Travel Point</h5>
//                     <h3 className='w-[441px] h-[106px] not-italic font-bold text-[44px] leading-[120%] text-[#191825]'>We helping you find your dream location</h3>
//                     <h6 className='w-[441px] h-[87px] not-italic font-normal text-lg leading-[160%] text-[rgba(25,24,37,0.5)]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</h6>
//                 </div>
//                 </div>
//                 <div className="flex flex-col items-start gap-8 w-[441px] h-[334px] p-0">
//                     <div className="flex flex-row items-start gap-8 w-[441px] h-[151px] p-0">
//                         <div className="flex flex-col items-center gap-4 w-[204.5px] h-[151px] border p-8 rounded-[32px] border-solid border-[rgba(25,24,37,0.1)]; background: #ffffff transform transition duration-300 ease-in-out hover:scale-105">
//                             <h4 className='w-[84px] h-[42px] not-italic font-bold text-[35px] leading-[120%] text-[#FF5722]'>500+</h4>
//                             <h6 className='w-[142px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[#191825]'>Holiday Package</h6>
//                         </div>
//                         <div className="box-border flex flex-col items-center gap-4 w-[204.5px] h-[151px] border p-8 rounded-[32px] border-solid border-[rgba(25,24,37,0.1)];background: #ffffff transform transition duration-300 ease-in-out hover:scale-105">
//                             <h4 className='w-[58px] h-[42px] not-italic font-bold text-[35px] leading-[120%] text-[#FF5722]'>100</h4>
//                             <h6 className='w-[109px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[#191825]'>Luxury Hotels</h6>
//                         </div>
//                         </div>
//                         <div className="flex flex-row items-start gap-8 w-[441px] h-[151px] flex-none order-1 self-stretch grow-0 p-0">
//                         <div className=" box-border flex flex-col items-center gap-4 w-[204.5px] h-[151px] border p-8 rounded-[32px] border-solid border-[rgba(25,24,37,0.1)];background: #ffffff; transform transition duration-300 ease-in-out hover:scale-105">
//                             <h4 className='w-[18px] h-[42px] not-italic font-bold text-[35px] leading-[120%] text-[#FF5722]'>7</h4>
//                             <h6 className='w-[142px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[#191825]'>Premium Airlines</h6>
//                         </div>
//                         <div className="box-border flex flex-col items-center gap-4 w-[204.5px] h-[151px] border p-8 rounded-[32px] border-solid border-[rgba(25,24,37,0.1)];background: #ffffff; transform transition duration-300 ease-in-out hover:scale-105">
//                             <h4 className='w-[18px] h-[42px] not-italic font-bold text-[35px] leading-[120%] text-[#FF5722]'>2k+</h4>
//                             <h6 className='w-[142px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[#191825]'>Happy Customers</h6>
//                         </div>
//                         </div>
                    
//                 </div>
            
//         </div>
      
//     </div>
//   )
// }

// export default TravelPoint



import React, { useState, useEffect } from 'react';
import women_img from '../assets/women.png';

const TravelPoint = () => {
  const [holidayPackages, setHolidayPackages] = useState(0);
  const [luxuryHotels, setLuxuryHotels] = useState(0);
  const [premiumAirlines, setPremiumAirlines] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);

  useEffect(() => {
    const holidayPackagesInterval = setInterval(() => {
      setHolidayPackages((prev) => {
        if (prev >= 500) {
          clearInterval(holidayPackagesInterval);
          return 500;
        }
        return prev + 1;
      });
    }, 100);

    const luxuryHotelsInterval = setInterval(() => {
      setLuxuryHotels((prev) => {
        if (prev >= 100) {
          clearInterval(luxuryHotelsInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 200);

    const premiumAirlinesInterval = setInterval(() => {
      setPremiumAirlines((prev) => {
        if (prev >= 7) {
          clearInterval(premiumAirlinesInterval);
          return 7;
        }
        return prev + 1;
      });
    }, 200);

    const happyCustomersInterval = setInterval(() => {
      setHappyCustomers((prev) => {
        if (prev >= 2000) {
          clearInterval(happyCustomersInterval);
          return 2000;
        }
        return prev + 10; 
      });
    }, 200);


  }, []);

  return (
    <div className='flex flex-row items-end absolute h-[825px] px-0 py-16 left-0 right-32 top-[2552px]'>
      <img src={women_img} alt="" className='w-[871px] h-[697px] transform transition duration-300 ease-in-out hover:scale-105' />
      <div className="flex flex-col items-start gap-16 w-[441px] h-[667px] p-0">
        <div className="flex flex-col items-start gap-8 w-[441px] h-[269px] p-0">
          <div className="flex flex-col items-start gap-4 w-[441px] h-[150px] p-0">
            <h5 className='w-[441px] h-7 not-italic font-bold text-[23px] leading-[120%] tracking-[0.2em] uppercase text-[#F85E9F]'>Travel Point</h5>
            <h3 className='w-[441px] h-[106px] not-italic font-bold text-[44px] leading-[120%] text-[#191825]'>We helping you find your dream location</h3>
            <h6 className='w-[441px] h-[87px] not-italic font-normal text-lg leading-[160%] text-[rgba(25,24,37,0.5)]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</h6>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 w-[441px] h-[334px] p-0">
          <div className="flex flex-row items-start gap-8 w-[441px] h-[151px] p-0">
            <div className="flex flex-col items-center gap-4 w-[204.5px] h-[151px] border p-8 rounded-[32px] border-solid border-[rgba(25,24,37,0.1)] background: #ffffff transform transition duration-300 ease-in-out hover:scale-105">
              <h4 className='w-[84px] h-[42px] not-italic font-bold text-[35px] leading-[120%] text-[#FF5722]'>{holidayPackages}</h4>
              <h6 className='w-[142px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[#191825]'>Holiday Package</h6>
            </div>
            <div className="box-border flex flex-col items-center gap-4 w-[204.5px] h-[151px] border p-8 rounded-[32px] border-solid border-[rgba(25,24,37,0.1)] background: #ffffff transform transition duration-300 ease-in-out hover:scale-105">
              <h4 className='w-[58px] h-[42px] not-italic font-bold text-[35px] leading-[120%] text-[#FF5722]'>{luxuryHotels}</h4>
              <h6 className='w-[109px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[#191825]'>Luxury Hotels</h6>
            </div>
          </div>
          <div className="flex flex-row items-start gap-8 w-[441px] h-[151px] flex-none order-1 self-stretch grow-0 p-0">
            <div className="box-border flex flex-col items-center gap-4 w-[204.5px] h-[151px] border p-8 rounded-[32px] border-solid border-[rgba(25,24,37,0.1)] background: #ffffff transform transition duration-300 ease-in-out hover:scale-105">
              <h4 className='w-[18px] h-[42px] not-italic font-bold text-[35px] leading-[120%] text-[#FF5722]'>{premiumAirlines}</h4>
              <h6 className='w-[142px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[#191825]'>Premium Airlines</h6>
            </div>
            <div className="box-border flex flex-col items-center gap-4 w-[204.5px] h-[151px] border p-8 rounded-[32px] border-solid border-[rgba(25,24,37,0.1)] background: #ffffff transform transition duration-300 ease-in-out hover:scale-105">
              <h4 className='w-[18px] h-[42px] not-italic font-bold text-[35px] leading-[120%] text-[#FF5722]'>{happyCustomers}</h4>
              <h6 className='w-[142px] h-[29px] not-italic font-normal text-lg leading-[160%] text-[#191825]'>Happy Customers</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPoint;

