import { useState, useEffect } from "react";

import {HalfDonutChart} from "./HalfDonutChart";
import { Tabs } from "./Tabs";
import popup from "../../Assets/popup.png"
import { FullDonutChart } from "./FullDonutChart";

import readTracker from "../../Assets/readiness-tracker.svg"
import criteriaEvaluator from "../../Assets/criteria-evaluator.svg"
import personalizeStratergy from "../../Assets/personalize-stratergy.svg"
import compare from "../../Assets/compare.svg"

function TabWithPopup({ children }) {
    const [showPopup, setShowPopup] = useState(false);
    const [animatePopup, setAnimatePopup] = useState(false);
  
    useEffect(() => {
     
      const timeout = setTimeout(() => {
        setShowPopup(true);
  
  
        setTimeout(() => {
          setAnimatePopup(true);
        }, 50); 
      }, 3000);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <div className="relative w-[50%] flex flex-col justify-start">
        {children}
        {showPopup && (
          <div
            className={`absolute z-20 top-[140px] left-[300px] transition-all duration-500 ${
              animatePopup ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
            }`}
          >
            <img src={popup} className="z-30" alt="Popup" />
          </div>
        )}
      </div>
    );
  }

export function TabsUse() {
  const tabs = [
    {
      title: "Readiness Tracker",
      value: "product",
      content: (
        <div className="w-full h-full flex justify-between bg-[#FFFBF1] py-[24px] px-[37px] overflow-hidden ">
            <div className="w-[50%] flex flex-col justify-start">
                <div className="w-[64px] h-[64px] bg-[#FFF1C1] rounded-[4px] flex justify-center items-center"> <img src={readTracker}></img></div>
                <div className="mt-[28px] text-[24px] text-[#353535] font-jakarta font-medium leading-[30px]">Readiness Tracker</div>
                <div className="mt-[12px] text-[16px] leading-[28px] font-jakarta font-normal text-[#484848] ">The Readiness Tracker gives you a clear picture of where you stand. It calculates your profile's readiness percentage and recommends the visa category best suited to your strengths, so you can focus your efforts in the right direction.</div>
                    <div><button className="text-[#FEFEFE] bg-[#1641F1]  px-[26px] py-[12px] rounded-full mt-[90px] ">Start tracking for free</button></div>
            </div>
            <TabWithPopup>
            <div className="absolute top-[0px] left-[100px]">
              <HalfDonutChart />
            </div>
          </TabWithPopup>
            

        </div>
      ),
    },
    {
      title: "Criteria Evaluation",
      value: "services",
      content: (
        <div className="w-full h-full flex justify-between bg-[#FFFBF1] py-[24px] px-[37px] overflow-hidden ">
            <div className="w-[50%] flex flex-col justify-start">
                <div className="w-[64px] h-[64px] bg-[#FFF1C1] rounded-[4px] flex justify-center items-center "> <img src={criteriaEvaluator}></img></div>
                <div className="mt-[28px] text-[24px] text-[#353535] font-jakarta font-medium leading-[30px]">Criteria Evaluation</div>
                <div className="mt-[12px] text-[16px] leading-[28px] font-jakarta font-normal text-[#484848] ">Our Criteria Evaluation feature dives deep into the visa criteria, assessing your profile against each benchmark. It scores your readiness for each criterion and pinpoints areas for potential improvement, giving you the insights you need to build a stronger, more competitive profile.</div>
                <div><button className="text-[#FEFEFE] bg-[#1641F1]  px-[26px] py-[12px] rounded-full mt-[90px] ">Start tracking for free</button></div>
            </div>
            <div className="w-[50%] flex flex-col justify-start">
              <FullDonutChart/>
            </div>

        </div>
      ),
    },
    {
      title: "Personalized Strategy",
      value: "playground",
      content: (
        <div className="w-full h-full flex justify-between bg-[#FFFBF1] py-[24px] px-[37px] overflow-hidden ">
        <div className="w-[50%] flex flex-col justify-start">
            <div className="w-[64px] h-[64px] bg-[#FFF1C1] rounded-[4px] flex justify-center items-center "> <img src={personalizeStratergy}></img></div>
            <div className="mt-[28px] text-[24px] text-[#353535] font-jakarta font-medium leading-[30px]">Personalized Strategy</div>
            <div className="mt-[12px] text-[16px] leading-[28px] font-jakarta font-normal text-[#484848] ">By analyzing your unique strengths and gaps, it provides clear, customized recommendations to help you meet visa requirements. From prioritizing key achievements to actionable next steps, this feature ensures your application reflects your full potential.</div>
            <div><button className="text-[#FEFEFE] bg-[#1641F1]  px-[26px] py-[12px] rounded-full mt-[90px] ">Start tracking for free</button></div>
        </div>
        <div className="relative w-[50%] flex flex-col justify-start">
                <div className="absolute w-[450px] h-[250px] bg-[#FFFFFF] px-[35px] py-[30px] left-[100px] top-[50px] border-[1px] border-[#ECECEC] rounded-[8px]  " style={{'boxShadow':' 6.18px 7.94px 17.92px 0px #0000000F'}}>
                    <div className="text-center text-[#007EE8] text-[24px] font-inter font-medium">Opportunities for Improvement</div>
                        <div className="text-[16px] leading-[27px] text-[#646464] font-jakarta font-normal text-start mt-[22px]  ">
                        <span className="text-[#646464] font-semibold text-[16px] ">Next step:</span><br/>
                        Target prestigious organizations that require notable contributions to the field (e.g., National Academies, elite international bodies). Work on enhancing your profile to meet their criteria.</div>
                </div>
        </div>

    </div>
      ),
    },
    {
      title: "Comparative analysis",
      value: "content",
      content: (
        <div className="w-full h-full flex justify-between bg-[#FFFBF1] py-[24px] px-[37px] overflow-hidden ">
            <div className="w-[50%] flex flex-col justify-start">
                <div className="w-[64px] h-[64px] bg-[#FFF1C1] rounded-[4px] flex justify-center items-center "> <img src={compare}></img></div>
                <div className="mt-[28px] text-[24px] text-[#353535] font-jakarta font-medium leading-[30px]">Comparative analysis</div>
                <div className="mt-[12px] text-[16px] leading-[28px] font-jakarta font-normal text-[#484848] ">Our Comparative Analysis feature lets you see how your profile stacks up against successful visa applicants.  It identifies strengths to highlight and areas to enhance. Armed with these insights, you’ll know exactly where to focus your efforts to make your application truly stand out.</div>
                <div><button className="text-[#FEFEFE] bg-[#1641F1]  px-[26px] py-[12px] rounded-full mt-[90px] ">Start tracking for free</button></div>
            </div>
            <div className="relative w-[50%] flex flex-col justify-start">
              {/* 1st  */}
              <div className="absolute top-[60px] left-[100px] p-[18px] bg-[#FFFFFF] w-[290px] h-[190px] border-[#ECECEC] border-[1px] " >
                <div className="text-[18px] text-[#282828] font-jakarta font-medium">Candidate Profile</div>
                    <div className="mt-[17px] text-[#737373] leading-[24px] text-[16px] ">
                    <div>Ph.D. in Computer Science from Regional University</div>
               
                    <div className="mt-[14px] ">Online certifications in Data Analytics</div>
                  </div>
              </div>
              {/* 2nd  */}
              <div style={{boxShadow: '6.18px 7.94px 17.92px 0px #0000000F'}} className="absolute top-[210px] left-[230px] p-[18px] bg-[#007EE8] w-[290px] h-[190px] border-[#ECECEC] border-[1px] rounded-[6px] " >
                <div className="text-[18px] text-[#FFFFFF] font-jakarta font-medium">Successful Profile A</div>
                    <div className="mt-[17px] text-[#EAEAEA] leading-[24px] text-[16px] ">
                      <div>Ph.D. in Computer Science  from MIT</div>
                
                      <div className="mt-[14px] ">Additional certifications from top institutions (Coursera, edX)</div>
                  </div>
              </div>
            </div>

        </div>
      ),
    },
    
  ];

  return (
    (<div
      className="h-[20rem] md:h-[30rem] [perspective:1000px] relative  flex flex-col mx-auto w-full  items-start justify-start mt-[84px] ">
      <Tabs tabs={tabs} />
    </div>)
  );
}

const DummyContent = () => {
  return (
    (<img
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};
