import React from 'react'
import visa from "../../Assets/visa1.svg"
import dataDriven from "../../Assets/data-driven-1.svg"
import precision from "../../Assets/precision.svg"
import guidance from "../../Assets/guidance.svg"
const TheSolutionData = [
    {
        logo: dataDriven,
        head: "Data-Driven Insights",
        content: "Leverages insights from 10  million data profiles of real-world profiles to provide accurate and actionable feedback.",
        logoBg: "bg-[#EAF2FF]",

    },
    {
        logo: precision,
        head: "Visa-Specific Precision",
        content: "Our patented AI model analyzes your profile against EB1A, O1A, and EB2-NIW criteria, offering tailored recommendations.",
        logoBg: "bg-[#EAF2FF]",

    },
    {
        logo: guidance,
        head: "Actionable Guidance",
        content: "Compares your profile against top-performing applicants and provides easy-to-follow steps to strengthen your application.",
        logoBg: "bg-[#EAF2FF]",

    },
]
export const TheSolution = () => {
  return (
    <div className='pt-[158px] pb-[162px] '>
        <div className='text-center font-jakarta font-medium text-[16px] text-[#626262] leading-[20px] '>THE SOLUTION</div>
        <div className='text-[44px] text-[#202020] font-semibold font-jakarta leading-[54px] text-center mt-[12px] '>Smart Features, Smarter Results</div>

        <div className='grid grid-cols-3 mx-[160px] mt-[64px] gap-y-[32px] justify-items-center gap-[46px] '>
            {
                TheSolutionData.map((item, index) => {
                    return (
                        <div className=' w-[390px] flex flex-col justify-start pl-[20px] pt-[20px] ' key={index}>
                            <div className={` h-[76px] w-[76px] flex items-center justify-center ${item.logoBg}`}><img src={item.logo}></img></div>
                            <div className=' text-[24px] text-[#353535] leading-[30px] font-jakarta font-medium mt-[28px] '>{item.head}</div>
                                <div className=' text-[#484848] font-jakarta text-[16px] leading-[28px] my-[12px] text-start pr-[10px] font-normal'>{item.content}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
