import React from 'react'
import phone from "../../Assets/phone.png"

const PoweredByAi = () => {
    return (
        <div className='relative my-[240px] '>
            <div className='absolute top-0 w-[77%] h-[400px] flex mx-[160px] bg-[#FFFBF1] '>
                <div className='w-[50%] pl-[73px] '>
                    <div className='mt-[50px] text-[44px] leading-[53px] text-[#282828] font-jakarta font-semibold'>Powered by AI, Built<br/> for Your Success</div>
                    <div className='mt-[12px] text-[18px] leading-[29px] font-jakarta font-normal text-[#404040] w-[450px] '>Let advanced algorithms and data-driven insights take the guesswork out of your visa application.</div>
                </div>
                <div className='w-[50%]' >
                    <img src={phone} alt="Phone" className=' z-20 w-[370px] translate-y-[-100px] object-contain mx-auto cursor-pointer hover:translate-y-[-140px] transition-transform duration-500' />
                </div>
            </div>
            <div className='absolute w-[77%] top-[400px]  h-[400px] flex mx-[160px] bg-[#ffffff] z-40 '>
                
            </div>
        </div>
    )
}

export default PoweredByAi

