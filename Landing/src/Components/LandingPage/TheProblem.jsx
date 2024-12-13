import React from 'react'
import visa from "../../Assets/visa1.svg"
import missing from "../../Assets/missing.svg"
import wallet from "../../Assets/wallet.svg"
import tools from "../../Assets/tools.svg"
import advice from "../../Assets/advice.svg"
import magnifine from "../../Assets/magnifine.svg"
import passport from "../../Assets/passport.svg"
import poc from "../../Assets/poc.svg"
import missingDoc from "../../Assets/missing-doc.svg"
import publish from "../../Assets/publish.svg"
import fix from "../../Assets/fix.svg"
import submit from "../../Assets/submit.svg"

const TheProblemData = [
    {
        logo: visa,
        text:" Am I even eligible for this visa?",
        logoBg: "bg-[#E3E6FF]",
    },
    {
        logo: missing,
        text:" What am I missing in my profile?",
        logoBg: "bg-[#FFF3D4]",
    },
    {
        logo: wallet,
        text:" Why is immigration help so expensive?",
        logoBg: "bg-[#FFE9E3]",
    },
    {
        logo: tools,
        text:" Do I need so many tools for one visa?",
        logoBg: "bg-[#FFF3D4]",
    },
    {
        logo: advice,
        text:" Where can I get trusted visa advice?",
        logoBg: "bg-[#E3E6FF]",
    },
    {
        logo: magnifine,
        text:" How do I find the right niche?",
        logoBg: "bg-[#FFE9E3]",
    },
    {
        logo: passport,
        text:" Which visa suits me best?",
        logoBg: "bg-[#FFE9E3]",
    },
    {
        logo: poc,
        text:" Which evidence matters most?",
        logoBg: "bg-[#E3E6FF]",
    },
    {
        logo: missingDoc,
        text:" What’s missing in my documents?",
        logoBg: "bg-[#FFF3D4]",
    },
    {
        logo: publish,
        text:" Do I need so many tools for one visa?",
        logoBg: "bg-[#FFF3D4]",
    },
    {
        logo: fix,
        text:" Where can I get trusted visa advice?",
        logoBg: "bg-[#E3E6FF]",
    },
    {
        logo: submit,
        text:" How do I find the right niche?",
        logoBg: "bg-[#FFE9E3]",
    },
   

]

export const TheProblem = () => {
  return (
    <div className='pt-[158px]'>
        <div className='text-center font-jakarta font-medium text-[16px] text-[#626262] leading-[20px] '>THE PROBLEM</div>
        <div className='text-[44px] text-[#202020] font-semibold font-jakarta leading-[54px] text-center mt-[12px] '>The Visa Process is Overwhelming</div>

        <div className='grid grid-cols-6 mx-[160px] mt-[64px] gap-y-[32px] justify-items-center '>
            {
                TheProblemData.map((item, index) => {
                    return (
                        <div className='border-[1px] border-[#ECECEC] w-[160px] h-[178px] rounded-[12px] flex flex-col items-center ' key={index}>
                            <div className={`mt-[28px] mb-[36px] w-[84px] h-[49px] flex justify-center items-center rounded-full ${item.logoBg}`}><img className='h-[28px] w-[28px]' src={item.logo}></img></div>
                            <div className='mx-[14px] text-center text-[#515151] text-[14px] leading-[22px] font-jakarta font-normal '>{item.text}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
