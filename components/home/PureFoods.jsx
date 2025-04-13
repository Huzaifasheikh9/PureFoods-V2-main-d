import React from "react";
import Wrapper from "../../shared/Wrapper";
import Image from "next/image";

const PureFoods = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col gap-[50px] px-[20px] md:px-[50px] mb-[40px]">
          <h1 className="mx-auto text-4xl md:text-6xl text-[#508F21] bebas">
            Why purefoods?
          </h1>
          <div className="flex-col md:flex-row w-full md:w-[80%] mx-auto flex justify-start gap-[30px] md:gap-[100px] items-center">
            <Image
              src="/images/home/img10.svg"
              width={369}
              height={365}
              alt="cards images"
              className=""
            />
            <div className="relative">
              <h3 className="text-4xl bebas text-[#4B4B4C] ">
                Thoughtfully Sourced Ingredients
              </h3>
              <Image
                src="/images/home/arrow1.png"
                width={155}
                height={155}
                alt="arrow"
                className="hidden md:block absolute top-[100px]"
              />
            </div>
          </div>
          <div className="flex-col md:flex-row w-full md:w-[80%] mx-auto flex justify-end gap-[30px] md:gap-[100px] items-center">
            <div className="relative order-2 lg:order-1">
              <h3 className="text-4xl bebas text-[#4B4B4C] ">
                Crafted with Care and Skill
              </h3>
              <Image
                src="/images/home/arrow2.png"
                width={155}
                height={155}
                alt="arrow"
                className="hidden md:block absolute  lg:top-[100px] "
              />
            </div>
            <Image
              src="/images/home/img11.svg"
              width={369}
              height={365}
              alt="cards images"
              className=" order-1 lg:order-2"
            />
          </div>
          <div className="flex-col md:flex-row w-full md:w-[80%] mx-auto flex justify-start gap-[30px] md:gap-[100px] items-center">
            <Image
              src="/images/home/img12.svg"
              width={369}
              height={365}
              alt="cards images"
              className=""
            />
            <h3 className="text-4xl bebas text-[#4B4B4C] ">
              Nourishing Mind & Body
            </h3>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PureFoods;
