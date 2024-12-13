import React, { useState, useEffect } from "react";
import "./DonutChart.css";

export const HalfDonutChart = () => {
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
    <div className="relative w-[330px] flex flex-col justify-end items-center h-[250px] bg-[#FFFFFF] border-[1px] border-[#ECECEC] rounded-[8px] " >
        <div className="w-auto text-start absolute top-4 left-4 text-[#303030] text-[15px] font-medium font-jakarta">Profile Readiness</div>
        <div
        className=" z-10 semi-donut margin  "
        style={{ '--percentage': percentage }}
      >
          
      </div>
      <div className="absolute bottom-[-5px] text-[#000000] text-[52px] font-medium font-jakarta ">{percentage}</div>
      <div className="absolute text-[#777777] text-[10px] font-medium font-jakarta left-[35px] bottom-[20px] z-20 ">0</div>
      <div className="absolute text-[#777777] text-[10px] font-medium font-jakarta left-[70px] bottom-[100px] z-20 ">25</div>
      <div className="absolute text-[#777777] text-[10px] font-medium font-jakarta left-[50%] translate-x-[-50%] bottom-[135px] z-20 ">50</div>
      <div className="absolute text-[#777777] text-[10px] font-medium font-jakarta right-[70px] bottom-[100px] z-20 ">75</div>
      <div className="absolute text-[#777777] text-[10px] font-medium font-jakarta right-[35px] bottom-[20px] z-20 ">100</div>
      
       
    </div>
  );
};
