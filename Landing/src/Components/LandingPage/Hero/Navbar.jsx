import React from 'react'
import logo from "../../../Assets/logoBlue.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
            <div style={{"boxShadow": "0px 4px 20px 0px #79A4FF66" }} className='bg-[#FFFFFF] border-[#D6C7FA] border-[1px] mt-[72px] flex justify-between items-center h-[72px] max-w-[928px] gap-[65px] rounded-full pl-[44px] pr-[8px] '>
            <div className='w-[125px] h-[34px]'><img src={logo}></img></div>
            <div className='flex justify-between gap-[44px] '>
                <Link><div>Solution</div></Link>
                <Link><div>Products</div></Link>
                <Link><div>Testimonials</div></Link>
                <Link><div>FAQs</div></Link>
            </div>
            <button className='w-[219px] h-[56px] rounded-full bg-[#1641F1] flex justify-center items-center text-[#FEFEFE]'>Start tracking for free</button>
        </div>
    
  )
}

export default Navbar