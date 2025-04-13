import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#9dcf9d]">
      <Wrapper>
        <div className="flex flex-col min-h-[465px]">
          <div className="flex flex-col md:flex-row flex-wrap p-[30px] md:p-[60px] !pt-[30px] justify-between">
            <div className="flex flex-col min-h-[400px] justify-between ">
              <Image
                src="/images/logo.svg"
                width={139}
                height={139}
                alt="logo"
              />
              <div className="max-w-[453px] border border-[#508F21] p-[30px] md:p-[40px] rounded-[60px] flex flex-col gap-[7px] relative">
                <h5 className="text-xl text-[#828282] poetson ">
                  PureFoods is the haven of plant-based lovers. Delicious and
                  whole meals are prepared with fresh organic ingredients. Our
                  menu features a range of vegan and vegetarian options.
                </h5>
              </div>
            </div>

            <div className="w-[300px] h-[195px] mt-[40px]">
              <h3 className="text-xl md:text-4xl bebas text-[#508F21] mb-[10px]">useful links</h3>
              <div className="flex flex-col gap-[10px]">
                <Link href="/" className="text-base md:text-2xl bebas text-[#828282] underline">Home</Link>
                <Link href="/about" className="text-base md:text-2xl bebas text-[#828282] underline">About</Link>
                <Link href="/menu" className="text-base md:text-2xl bebas text-[#828282] underline">Menu</Link>
                <Link href="/sustainability" className="text-base md:text-2xl bebas text-[#828282] underline">Sustainability</Link>
                
              </div>
            </div>
            <div className="w-[300px] h-[195px] mt-[40px]">
              {/* <Link href="/contact" className="text-xl md:text-4xl bebas text-[#508F21] underline"></Link> */}
              <h3 className="text-xl md:text-4xl bebas text-[#508F21] mb-[10px]">Contact us</h3>
              <div className="flex flex-col gap-[10px]  mt-[10px]">
                <p className="text-base md:text-2xl bebas text-[#828282]">Pennslyvania, US</p>
                <p className="text-base md:text-2xl bebas text-[#828282]">onlypurefoods01@gmail.com</p>
                <p className="text-base md:text-2xl bebas text-[#828282] underline"><a href="https://forms.gle/2CyYK9Bi7m7AGaJ38" target="_blank">Feedback Form</a></p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
