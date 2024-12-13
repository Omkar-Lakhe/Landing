import React from 'react'
import "./DonutChart.css"
import { useState, useEffect } from 'react';
import membershipCard from "../../Assets/membership-card.svg";
import award from "../../Assets/award.svg";

export const FullDonutChart = () => {
    const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 80) {
          clearInterval(interval);
          return 80;  // Stop at 80%
        }
        return prev + 1;
      });
    }, 20);  // Adjust speed as necessary

    return () => clearInterval(interval);  // Cleanup on unmount
  }, []);

  return (
    <div>
        {/* main  */}
        <div className='relative '> 
            {/* single card  */}
            <div className='absolute top-[50px] left-[100px] flex w-[450px] h-[170px] bg-[#FFFFFF] border-[1px] border-[#ECECEC] rounded-[8px]  '>
                {/* first part  */}
                <div className='relative flex flex-col justify-center items-center'>
                    <div className=" full-donut blue margin" 
                        style={{ '--percentage': percentage, "--fill": "#007EE8 " }}>       
                    </div>
                    <div className='absolute   '>
                        <img src={membershipCard}></img>
                    </div>
                </div>
                <div className='mt-[27px] mr-[15px] ml-[22px]  '>
                    <div className='font-inter text-[#646464] text-[18px]  '>Membership</div>
                    <div className='text-[#737373] text-[10px] font-normal font-jakarta mt-[6px] pr-[4px] leading-[15px]'>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </div>
                    <div className=' h-[29px] flex items-end mt-[10px] '>
                        <span className='h-full flex items-center text-[#B9B9B9] text-[13px] font-normal font-jakarta'>Current readiness:</span>
                        <span className='text-[#007EE8] text-[23px] font-jakarta font-medium ml-[5px] '>81%</span>
                        <span className=' text-[#007EE8] text-[14px] font-jakarta font-normal ml-[5px] '>Moderate</span>
                    </div>
                </div>
                {/* second part */}
            </div>

            {/* 2nd card  */}
            {/* single card  */}
            <div style={{boxShadow: "6.18px 7.94px 17.92px 0px #0000000F"}} className='absolute top-[200px] left-[30px] flex w-[450px] h-[170px] bg-[#FFFFFF] border-[1px] border-[#ECECEC] rounded-[8px]  '>
                {/* first part  */}
                <div className='relative flex flex-col justify-center items-center'>
                    <div className=" full-donut red margin" 
                        style={{ '--percentage': percentage, "--fill": "#FF684E " }}>       
                    </div>
                    <div className='absolute h-[64px] w-[64px]  '>
                        <img src={award}></img>
                    </div>
                </div>
                <div className='mt-[27px] mr-[15px] ml-[22px]  '>
                    <div className='font-inter text-[#646464] text-[18px]  '>Award</div>
                    <div className='text-[#737373] text-[10px] font-normal font-jakarta mt-[6px] pr-[4px] leading-[15px]'>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </div>
                    <div className=' h-[29px] flex items-end mt-[10px] '>
                        <span className='h-full flex items-center text-[#B9B9B9] text-[13px] font-normal font-jakarta'>Current readiness:</span>
                        <span className='text-[#FF684E] text-[23px] font-jakarta font-medium ml-[5px] '>30%</span>
                        <span className=' text-[#FF684E] text-[14px] font-jakarta font-normal ml-[5px] '>Low</span>
                    </div>
                </div>
                {/* second part */}
            </div>
        </div>
    </div>
  )
}
