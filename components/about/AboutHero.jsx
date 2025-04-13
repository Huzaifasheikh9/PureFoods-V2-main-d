import React from "react";
import Wrapper from "../../shared/Wrapper";
import { Button } from "antd";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="bg-[#80CC2885] relative">
      <Wrapper>
        <div className="min-h-[70vh] flex flex-col md:flex-row justify-around items-center p-[20px]">
          <Image
            src="/images/about/bg1.png"
            width={179}
            height={74}
            alt="about us image"
            className="absolute top-0 right-0 hidden lg:block" 
          />
           <Image
            src="/images/about/bg1.png"
            width={179}
            height={74}
            alt="about us image"
            className="absolute bottom-4 left-0 hidden lg:block"
          />
          <div className="flex flex-col w-full md:w-[50%] lg:w-[27%] gap-[10px] md:gap-[30px] items-center md:items-start text-center md:text-start my-[30px] my:mt-0">
            <h2  data-aos="fade-right" className="text-3xl md:text-6xl bebas text-[#508F21] tracking-wide">
              Thinking to get Purefoods meals?
            </h2>
            {/* <h6  data-aos="fade-right" className="text-xl font-bold text-[#508F21] poppins tracking-wide">
             
            </h6> */}
          </div>
          <Image
            src="/images/about/img1.svg"
            width={483}
            height={442}
            alt="about us image"
            className="mb-[30px]"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutHero;
