import React from "react";
import Wrapper from "../../shared/Wrapper";
import { Button } from "antd";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col gap-[50px] items-center px-[20px] md:px-[50px]">
          <h1 className=" text-4xl md:text-8xl text-[#508F21] bebas">
            Make a Change!
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-between px-[20px] md:px-[50px] mb-[80px] min-h-[70vh]">
            <div className="max-w-[698px] min-h-[339px] p-[30px] md:px-[40px] md:py-[60px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-between">
              <h1 data-aos="fade-right" className="text-3xl md:text-6xl text-[#727272] bebas">
                Fueling a kinder future,
                <span className="text-[#508F21]">
                  one delicious bite at a time.
                </span>{" "}
              </h1>
              <h5 data-aos="fade-right" className="text-xl text-[#828282] poetson ">
                Experience the joy of plant-based living with our menu of
                creative, flavorful dishes. Savor the goodness, knowing your
                choices make a difference.
              </h5>
              {/* <Button className="underline !text-[#508F21] md:!w-[262px] !w-[170px] !h-[50px] md:!h-[68px] !rounded-full !bg-white !text-xl md:!text-2xl bebas">
                Find out about us 
              </Button> */}
            </div>
            <Image
              src="/images/home/img3.svg"
              width={600}
              height={615}
              alt="home image"
            />
          </div>
        </div>
        <Image
          src="/images/home/img4.svg"
          width={875}
          height={18}
          alt="wave img"
          className="mx-auto mb-[80px] px-[20px] md:px-[50px]"
        />
        <video
          className="w-full h-full object-cover my-[50px] rounded-2xl border-[20px] border-[#E7F9CF]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/home.mp4" type="video/mp4" />
        </video>
        <div className="max-w-full min-h-[339px] mx-[20px] md:mx-[50px] p-[30px] md:px-[80px] md:pr-[140px] md:py-[60px] mb-[80px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-between">
          <h1 data-aos="fade-right" className="text-2xl md:text-5xl text-[#727272] bebas">
            Wholesome Food,
            <span className="text-[#508F21]">for a Healthier Planet</span>{" "}
          </h1>
          <h5 data-aos="fade-right" className="text-2xl text-[#828282] poetson ">
            At PureFoods, we believe that every meal is an opportunity to nourish both body and planet. Our menu celebrates the flavors of nature, crafted with love and care, to bring you deliciously wholesome dishes that are kind to you and the Earth.
          </h5>
          <div className="flex justify-end sm:items-center flex-col sm:flex-row items-start gap-[20px]">
            {/* <Button className=" !text-[#508F21] md:!w-[453px] !w-[280px] !h-[50px] md:!h-[68px] !rounded-full !bg-white !text-xl md:!text-3xl bebas">
          Explore Our Plant-Based Delights 
          </Button> */}
              <video
                className=" object-cover w-[100px] h-[100px] rounded-full "
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/world.mp4" type="video/mp4" />
              </video>
          </div>
        </div>
        <Image
          src="/images/home/img6.svg"
          width={1275}
          height={310}
          alt="wave img"
          className="mx-auto mb-[50px] px-[20px] md:px-[50px]"
        />
        <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] mb-[30px]">
          <Image
            src="/images/home/img7.svg"
            width={329}
            height={329}
            alt="wave img"
            className=""
          />
          <Image
            src="/images/home/img8.svg"
            width={295}
            height={295}
            alt="wave img"
            className=""
          />
          <Image
            src="/images/home/img9.svg"
            width={269}
            height={61}
            alt="wave img"
            className=""
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutUsSection;
