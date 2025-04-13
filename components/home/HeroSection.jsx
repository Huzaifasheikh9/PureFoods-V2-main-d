"use client";

import React, { useState } from "react";
import Wrapper from "../../shared/Wrapper";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";



const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);


  return (
    <div className="mt-[20px] md:mt-0">
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center justify-between px-[20px] md:px-[50px] mb-[80px] min-h-[75vh]">
          <div  className="max-w-[608px] mt-[50px] lg:mt-0 border border-[#508F21] p-[30px] md:p-[50px] rounded-[60px] flex flex-col gap-[7px] relative">
            <h1 data-aos="fade-right" className="text-3xl md:text-6xl text-[#727272] bebas">
              Welcome to <span className="text-[#508F21]">PureFoods</span>{" "}
            </h1>
            <h5 data-aos="fade-right" className="text-xl text-[#828282] poetson ">
              Nourishing your body and soul with wholesome goodness.
            </h5>
            <Button className="mt-[30px] !text-white md:!w-[192px] !w-[150px] !h-[50px] md:!h-[68px] !rounded-full !bg-[#80CC28] !text-xl md:!text-2xl bebas">
              {/* Meet the menu */}
              <Link onClick={closeMenu} href="/menu" className="text-xl text-[#727272] bebas">Meet the Menu</Link>
            </Button>
            <img
              src="/images/home/bg1.png"
              alt="home image"
              className="absolute bottom-[-200px] lg:bottom-[-237px] left-[-100px] lg:left-0 hidden md:block w-[300px] object-contain lg:w-[745px] md:h-[295px]"
            />
          </div>
          <Image
            src="/images/home/img1.svg"
            width={600}
            height={615}
            alt="home image"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between px-[20px] md:px-[50px]  mb-[80px]">
          <Image
            src="/images/home/img2.svg"
            width={600}
            height={615}
            alt="home image"
            className=" order-2 md:order-1"
          />
          <div   className="max-w-[608px] border border-[#508F21] p-[30px] md:p-[50px] rounded-[60px] flex flex-col gap-[7px] relative order-1 md:order-2">
            <h1 data-aos="fade-left" className="text-3xl md:text-6xl text-[#508F21] bebas">
              our story
            </h1>
            <h5 data-aos="fade-left" className="text-xl text-[#828282] poetson ">
              Discover the passion that drives Purefoods and our commitments.{" "}
            </h5>
            <Button className="mt-[30px] !text-white md:!w-[262px] !w-[170px] !h-[50px] md:!h-[68px] !rounded-full !bg-[#80CC28] !text-xl md:!text-2xl bebas">
            <Link href="/about" className="text-xl text-[#727272] bebas">Explore Our Mission</Link>
            </Button>
            <img
              src="/images/home/bg2.png"
              width={745}
              height={295}
              alt="home image"
              className="absolute top-[-200px] lg:top-[-310px] right-[-100px] lg:right-0 hidden md:block w-[300px] object-contain lg:w-[745px] md:h-[295px]"
            />
            <img
              src="/images/home/bg3.png"
              width={745}
              height={295}
              alt="home image"
              className="absolute bottom-[-200px] lg:bottom-[-260px] left-[-100px] lg:right-0 hidden md:block w-[300px] object-contain lg:w-[745px] md:h-[295px]"
              
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between px-[20px] md:px-[50px] mb-[80px] min-h-[70vh]">
          <div   className="max-w-[654px] border border-[#508F21] p-[30px] md:p-[40px] rounded-[60px] flex flex-col gap-[7px] relative">
            <h1 data-aos="fade-right" className="text-3xl md:text-6xl text-[#727272] bebas">
              good for you{" "}
              <span className="text-[#508F21]">good for earth</span>{" "}
            </h1>
            <h5 data-aos="fade-right" className="text-xl text-[#828282] poetson ">
              Discover how Purefoods is committed to sustainable practices.
            </h5>
            <Button className="mt-[30px] !text-white md:!w-[262px] !w-[170px] !h-[50px] md:!h-[68px] !rounded-full !bg-[#80CC28] !text-xl md:!text-2xl bebas">
            <Link href="/sustainability" className="text-xl text-[#727272] bebas">Know Your Greens</Link>
            </Button>
            <img
              src="/images/home/bg4.png"
             
              alt="home image"
              className="absolute w-[130px] lg:w-[295px] lg:h-[295px] object-contain bottom-[-100px] left-[-100px] lg:top-[-280px]  hidden md:block"
            />
            <Image
              src="/images/home/bg5.png"
              width={622}
              height={228}
              alt="home image"
              className="absolute bottom-[-280px] hidden lg:block"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/home/img3.svg"
              width={600}
              height={615}
              alt="home image"
            />
            <img
              src="/images/home/bg6.png"
              alt="home image"
              className="object-contain h-[295px] absolute bottom-[-245px] left-0 lg:left-[27%] w-[150px] lg:w-[295px] hidden md:block"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
