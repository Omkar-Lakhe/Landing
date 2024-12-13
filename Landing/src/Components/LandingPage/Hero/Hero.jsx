import React from 'react';
import Navbar from './Navbar';
import play from "../../../Assets/play-button.svg"
import dashboard from "../../../Assets/dashboard-image.png"
import dashboardData from "../../../Assets/dashboard-data.svg"
import costEffective from "../../../Assets/cost-effective.svg"
import aiDriven from "../../../Assets/ai-driven.svg"
import dataDriven from "../../../Assets/data-driven.svg"


const Hero = () => {
  return (
    <div className="relative bg-herobg h-[1186px]  rounded-bl-[24px] rounded-br-[24px]">
      <div className='absolute rounded-bl-[24px] rounded-full rounded-br-[24px]'>
        <div className=' flex justify-center'>
            <Navbar/>
        </div>
        <div className='font-jakarta font-bold text-[56px] leading-[80px] text-[#121212] mx-[320px] text-center mt-[52px] '>Stop Guessing. Start Building Your <span className='text-[#F35A40]'>Winning Visa Profile</span></div>
        <div className='mx-[350px] mt-[12px] text-center font-jakarta font-normal text-[#3A3A3A] text-[20px] leading-[38px]'>AI-powered insights, personalized strategies, and smarter decisions—all in one tool to fast-track your immigration success</div>
        <div className='mx-[467px] flex gap-[32px] mt-[56px] justify-center '>
            <button style={{'boxShadow': '0px 4px 12.5px 0px #9BBEFFCC'}} className='font-jakarta font-medium text-[18px] text-[#2A2A2A] leading-[32px] w-[240px] h-[64px] rounded-full flex justify-center items-center bg-[#ffffff] '>Start tracking for free</button>
            <button   className='font-jakarta font-medium text-[18px] text-[#1C1C1C] leading-[32px] w-[240px] h-[64px] rounded-full flex justify-center items-center  border-[#FFFFFF] border-[1px] gap-[12px] '><img src={play}></img> <div>See how it works</div></button>
        </div> 
        <div className='relative w-full flex justify-center mt-[76px] '>
            <img className='absolute '  src={dashboard}></img>
            {/* <img className='border-[#ECECEC] border-[0.83px] absolute top-[200px] right-[380px]'  src={dashboardData}></img> */}
            <div style={{boxShadow: '10px 11px 17.2px 0px #00000014'}} className='border-[#ECECEC] border-[0.83px] absolute top-[200px] right-[380px] bg-[#FFFFFF] flex flex-col h-auto rounded-[7px] w-[252px] pl-[16px] py-[16px]'>
                <div className='font-jakarta text-[13px] font-medium text-[#303030] '>Evidence Quality</div>
                <div  className='font-jakarta text-[11px] font-medium text-[#FF0B0B] mt-[15px]' > High Chance of RFE <br/> <span className='text-[8px] text-[#000000]'>0-5</span> </div>
                <div  className='font-jakarta text-[11px] font-medium text-[#16BA00] mt-[14px]' > Low Chance of RFE <br/> <span className='text-[8px] text-[#000000]'>5-10</span> </div>
                <div  className='font-jakarta text-[11px] font-medium text-[#303030] mt-[30px]' > Low Chance of RFE <br/> <span className='mt-[6px] text-[10px] text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span> </div>
                

            </div>
            <img style={{'boxShadow': ' 5px 4px 8.3px 0px #0000000F'}} className='absolute top-[-40px] right-[250px]'  src={aiDriven}></img>
            <img style={{'boxShadow': ' 5px 4px 8.3px 0px #0000000F'}} className='absolute top-[400px] right-[100px]'  src={costEffective}></img>
            <img style={{'boxShadow': ' 5px 4px 8.3px 0px #0000000F'}} className='absolute top-[200px] left-[100px]'  src={dataDriven}></img>
           


        </div>
      </div>
      <div className='w-full bg-herobg h-full flex 'style={{
        // background: 'linear-gradient(87deg, rgba(252,164,147,1) 0%, rgba(255,255,255,1) 58%, rgba(121,164,255,1) 100%)',
        }}
      >
        <div
          className="w-full  rounded-bl-[24px] rounded-br-[24px]  "
          style={{
            
            background: `
              linear-gradient(90deg, #FCA493 0%, #FBE3E3 49%, #79A4FF 100%), 
              linear-gradient(180deg, #ffffff 0%, #FCA493 60%, #79A4FF 100%)`,
            backgroundBlendMode: 'overlay',
          }}
        >
        </div>
      </div>
      
    </div>
  );
};

export default Hero;



{/* <div className="absolute w-full h-full left-0 top-0 flex">
      
        <div
          className="w-[50%]"
          style={{
            background: 'linear-gradient(to right, #FCA493 0%, #FBE3E3 100%)',
          }}
        ></div>
        
        <div
          className="w-[50%]"
          style={{
            background: 'linear-gradient(to right, #FFFFFF00 0%, #79A4FF 100%)',
          }}
        ></div>
      </div> */}