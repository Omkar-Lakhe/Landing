import React from 'react'

import goldStar from "../../Assets/gold-star.svg"
import blackStar from "../../Assets/black-star.svg"
export const ThestimonialCard = ({ 
    testimonialText, 
    userName, 
    userImage, 
    starRating, 
    maxStars = 5 
  }) => {
    // Create an array to render stars based on the starRating
    const stars = Array.from({ length: maxStars }, (_, index) => (
      <img 
        key={index} 
        src={index < starRating ? goldStar : blackStar} 
        alt={index < starRating ? "gold star" : "black star"} 
      />
    ));
  return (
    <div className='bg-[#FFFFFF] border-[1px] border-[#ECECEC] w-[352px] h-auto px-[24px] py-[20px] '>
            <div className='font-medium font-jakarta text-[#515151] text-[14px] leading-[24px] '>{testimonialText}</div>
        <div className='flex justify-start mt-[16px] '>
            <div ><img src={userImage}></img></div>
            <div className='flex flex-col ml-[16px]'>
                <div className='text-[16px] font-jakarta font-medium leading-[18px] text-[#373737] '>{userName}</div>
                <div className='flex mt-[8px] gap-[6px]'>
                    {stars}
                </div>
                
            </div>
        </div>
        
    </div>
  )
}
