import { useState } from "react";
import upArrow from "../../Assets/up-arrow.svg"
import downArrow from "../../Assets/down-arrow.svg"

const FAQData = [
  {
    id: 1,
    head: "Who is Smart Immigrant AI designed for?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    head: "What makes SI AI different from hiring consultants?",
    content:
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    head: "How does Smart Immigrant AI keep my data safe?",
    content:
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    head: "Can the tools help with preparing my documents?",
    content:
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    head: "What happens if I don’t meet the visa criteria?",
    content:
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const FAQ = () => {
  const [openItemId, setOpenItemId] = useState(1); 

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id); // Toggle open/close
  };

  return (
    <div className="w-full mt-[160px] ">
      <div className='text-center font-jakarta font-medium text-[16px] text-[#626262] leading-[20px] '>FAQs</div>
      <div className='text-[44px] text-[#202020] font-semibold font-jakarta leading-[54px] text-center mt-[12px] '>Find Your Answers Here</div>
        

        {/* FAQ Box */}
        <div>
          {FAQData.map((item) => (
            <div key={item.id} className="w-full flex justify-center">
              {/* Main Div */}
              <div
                onClick={() => toggleItem(item.id)}
                className={`bg-white lg:w-[70%] w-[100%] mt-[30px] mx-[12px] flex justify-between items-center rounded-[14px] relative lg:p-10  lg:border-[#C5E7FF] sm:border-b-[#E8E8E8] border-b-[1px] cursor-pointer ${
                  openItemId === item.id ? "h-auto" : "min-h-[100px]"
                }`}
                style={
                  window.innerWidth >= 1024 // Checks if the device is larger than the breakpoint (1024px, lg)
                    ? {
                        boxShadow:
                          openItemId === item.id
                            ? "0px 6px 12px 0px #4A3AFF30"
                            : "0px 5px 16px 0px #080F340F",
                      }
                    : undefined // No boxShadow for smaller devices
                }
              >
                <div className="flex flex-col lg:w-[85%] w-full ">
                  <div className=" flex w-full text-[20px] lg:text-[24px] font-medium text-[#2C2C2C] h-auto">
                    <div className="lg:w-full w-[90%] leading-[30px]  font-switzer-variable">
                      {item.head}
                    </div>
                    <div
                      className="flex justify-center items-center h-[42px] w-[42px] rounded-full lg:border-[1px] lg:hidden "
                      style={
                        window.innerWidth >= 1024 ? {
                        boxShadow: "0px 2.99px 9.58px 0px #080F340F",
                      }: 
                        undefined
                      }
                    >
                      <img
                        className="h-[22px] w-[22px]"
                        src={
                          openItemId === item.id
                            ? upArrow
                            : downArrow
                        }
                        alt="Toggle arrow"
                      />
                    </div>
                  </div>
                  {openItemId === item.id && (
                    <div className="text-[14px] leading-[24px] lg:text-[16px] font-normal text-[#525252] mt-[10px] font-sans">
                      {item.content}
                    </div>
                  )}
                </div>
                <div
                  className="lg:flex justify-center items-center h-[42px] w-[42px] rounded-full border-[1px] hidden "
                  style={{
                    boxShadow: "0px 2.99px 9.58px 0px #080F340F",
                  }}
                >
                  <img
                    className="h-[22px] w-[22px]"
                    src={
                      openItemId === item.id
                        ? upArrow
                        : downArrow
                    }
                    alt="Toggle arrow"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
};
