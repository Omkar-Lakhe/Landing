import React from 'react'
import profile from "../../Assets/pe-profile.png"
import { TabsUse } from '../ui/TabsUse'
export const WhatInside = () => {
  return (
    <div className='flex justify-center h-[150vh] '>
        <div className='w-[90%] bg-[#FFFBF1] px-[80px] pt-[111px] h-auto '>
            <div className='flex'>
                <div className='w-[50%]'>
                        <div className='text-[#626262] text-[16px] font-medium leading-[20px] font-jakarta'>PROFILE EVALUATOR</div>
                        <div className='text-[44px] text-[#202020] leading-[54px] font-semibold font-jakarta mt-[12px] '>What’s Inside? <br/> Let’s Take a Look</div>
                        <div className='mt-[20px] text-[18px] leading-[30px] text-[#404040] font-normal font-jakarta'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
                <div className='w-[50%] flex justify-center' >
                   <div className='relative overflow-hidden w-[278px] h-[278px] rounded-full bg-[#FFDD81]'> <img className='absolute ' src={profile} alt="profile"></img></div>
                </div>
            </div>
            <TabsUse/>
        </div>
         
    </div>
  )
}
