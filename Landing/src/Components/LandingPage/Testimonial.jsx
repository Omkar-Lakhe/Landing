import React from "react";
import { ThestimonialCard } from "../ui/ThestimonialCard";
import deepa from "../../Assets/deepa.svg";
import arjun from "../../Assets/arjun-sharma.svg";
import simran from "../../Assets/simran.svg";
import karthik from "../../Assets/karthik.svg";
import ranjit from "../../Assets/ranjit.svg";
import tanya from "../../Assets/Tanya.svg";
import sonia from "../../Assets/sonia.svg";
import sameer from "../../Assets/sameer.svg";
import farah from "../../Assets/farah.svg";


const testimonials = [
  [
    {
      name: "Deepa Nair",
      testimonialText:
        "This tool is worth every penny! The readiness tracker and detailed report gave me a clear roadmap to strengthen my application. And the way it breaks down complex visa criteria into easy-to-understand insights is brilliant. I felt empowered and prepared to take on the process with confidence.",
      userImage: deepa,
      starRating: 4,
    },
    {
      name: "Karthik Subramanian",
      testimonialText:
        "The readiness score was eye-opening. I loved how it showed me exactly where I stood and the steps to boost my chances. It felt like having a personal coach guiding me.",
      userImage: karthik,
      starRating: 5,
    },
    {
        name: "Sonia Kushwaha",
        testimonialText:
          "The detailed report was such a game-changer. It highlighted every aspect of my profile and gave me clear, actionable advice to strengthen my case.",
        userImage: sonia,
        starRating: 4,
      },
  ],
  [
    {
      name: "Arjun Sharma",
      testimonialText:
        "Having all the tools in one place saved me so much time and hassle. No more juggling consultants and spreadsheets—everything I needed was right here.",
      userImage: arjun,
      starRating: 4,
    },
    {
      name: "Ranjit Barua",
      testimonialText:
        "I loved how the AI compared my profile to successful applicants and showed me exactly where I stood. The insights were so detailed and precise that I knew what areas to work on immediately. It’s like having a personal visa coach, and it made all the difference in my application.",
      userImage: ranjit,
      starRating: 4,
    },
    {
        name: "Sameer Joshi",
        testimonialText:
          "I was blown away by how personalized the recommendations were. The tool really understood my achievements and helped me present them in the best light.",
        userImage: sameer,
        starRating: 5,
      },
  ],
  [
    {
      name: "Simran Kaur",
      testimonialText:
        "Smart Immigrant AI made my immigration journey stress-free. The profile evaluator gave me clear insights into my readiness and what I needed to improve. For the first time, I felt like I had a real plan!",
      userImage: simran,
      starRating: 5,
    },
    {
        name: "Tanya Ralte",
        testimonialText:
          "I was so unsure about which visa category to apply for, but Smart Immigrant AI’s suggestions cleared everything up. It helped me choose the perfect fit with confidence.",
        userImage: tanya,
        starRating: 5,
    },
    {
        name: "Farah Khan",
        testimonialText:
          "Applying for a visa always felt overwhelming and confusing, but this tool simplified the process like never before.  Smart Immigrant AI guided me every step of the way. I finally felt like I understood what was expected and how to deliver it.",
        userImage: farah,
        starRating: 4,
    },
  ],
];

export const Testimonial = () => {
  return (
    <div className="mt-[152px]">
      <div className="text-center font-jakarta font-medium text-[16px] text-[#626262] leading-[20px]">
        TESTIMONIALS
      </div>
      <div className="text-[44px] text-[#202020] font-semibold font-jakarta leading-[54px] text-center mt-[12px]">
        For Those Who Chose Smarter,<br /> Better, Faster
      </div>

      <div className="flex mt-[60px] flex-row mx-[160px] gap-[32px]">
        {testimonials.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-[32px]">
            {row.map((item, index) => (
              <ThestimonialCard
                key={index}
                userName={item.name}
                testimonialText={item.testimonialText}
                userImage={item.userImage}
                starRating={item.starRating}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
