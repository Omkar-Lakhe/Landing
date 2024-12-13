import React from 'react'
import nich from "../../Assets/nich-det.gif"
export const ComingSoon = () => {
  return (
    <div className='mt-[152px] '>
        <div className='text-center font-jakarta font-medium text-[16px] text-[#626262] leading-[20px] '>COMING SOON</div>
        <div className='text-[44px] text-[#202020] font-semibold font-jakarta leading-[54px] text-center mt-[12px] '>We’re Just Getting Started!</div>
        {/* tools  */}
        <div className='mx-[160px] mt-[64px] '>
            {/* top  */}
            <div className='flex gap-[32px] justify-center '>
                    {/* 1st  */}
                    <div className='w-[550px]  pt-[36px]  border-[1px] border-[#ECECEC] bg-[#FFFFFF] rounded-[12px] '>
                        <div className='text-[#353535] ml-[36px] text-[24px] font-jakarta font-medium '>Niche Determinator</div>
                        <div className='text-[#484848] ml-[36px] font-normal font-jakarta text-[16px] w-[470px] mt-[16px] '>Discover the perfect niche for your profile to align with visa requirements and stand out as a top candidate.</div>
                        <div className='flex justify-center'><img src={nich}></img></div>
                    </div>
                    {/* 2nd  */}
                    <div className='w-[550px]  pt-[36px]  border-[1px] border-[#ECECEC] bg-[#FFFFFF] rounded-[12px] '>
                        <div className='text-[#353535] ml-[36px] text-[24px] font-jakarta font-medium '>Technical Paper Writer</div>
                        <div className='text-[#484848] ml-[36px] font-normal font-jakarta text-[16px] w-[470px] mt-[16px] '>Simplify complex research writing with tailored support to craft impactful technical papers that strengthen your case.</div>
                        <div className='flex justify-center'><img src={nich}></img></div>
                    </div>
            </div>

            {/* bottom  */}
            <div className='flex gap-[40px] justify-center mt-[32px] '>
                    {/* 1st  */}
                    <div className='w-[350px]  pt-[36px]  border-[1px] border-[#ECECEC] bg-[#FFFFFF] rounded-[12px] '>
                        <div className='text-[#353535] ml-[36px] text-[24px] font-jakarta font-medium '>Introduction Writer</div>
                        <div className='text-[#484848] mx-[36px] font-normal font-jakarta text-[16px] leading-[24px]  mt-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div>
                        <div className='flex justify-center'><img src={nich}></img></div>
                    </div>
                    {/* 2nd  */}
                    <div className='w-[350px] pt-[36px]  border-[1px] border-[#ECECEC] bg-[#FFFFFF] rounded-[12px] '>
                        <div className='text-[#353535] ml-[36px] text-[24px] font-jakarta font-medium '>Evidence Analyzer</div>
                        <div className='text-[#484848] mx-[36px] font-normal font-jakarta text-[16px] leading-[24px]  mt-[16px] '>Get a detailed analysis of each of evidence to strengthen your profile.</div>
                        <div className='flex justify-center'><img src={nich}></img></div>
                    </div>
                    <div className='w-[350px]  pt-[36px]  border-[1px] border-[#ECECEC] bg-[#FFFFFF] rounded-[12px] '>
                        <div className='text-[#353535] ml-[36px] text-[24px] font-jakarta font-medium '>RFE Gap Analyzer</div>
                        <div className='text-[#484848] mx-[36px] font-normal font-jakarta text-[16px] leading-[24px]  mt-[16px] '>Spot and fix gaps to avoid RFEs and strengthen your application.</div>
                        <div className='flex justify-center'><img src={nich}></img></div>
                    </div>
            </div>
        </div>

    </div>
  )
}
