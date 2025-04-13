"use client";
import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Button } from "antd";

const FloatingInput = ({ id, label, type = "text", placeholder }) => {
  const [value, setValue] = useState("");

  return (   

    <div className="relative w-full ">
      {/* Input Field */}
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`peer w-full border border-gray-400 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-1 focus:ring-[#508F21] focus:border-[#508F21] bg-transparent 
          ${type === "date" ? "appearance-none relative text-[#508F21] custom-date-input" : ""} 
        `}
        placeholder={type !== "date" ? " " : ""} // Keep empty placeholder for Date Input
      />

      {/* Custom Placeholder for Date Field */}
      {type === "date" && !value && (
        <span className="absolute left-3 top-3 text-[#508F21] text-base pointer-events-none">
          {placeholder}
        </span>
      )}

      {/* Floating Label */}
      <label
        htmlFor={id}
        className="absolute left-3 -top-2 bg-white px-1 text-[#508F21] text-sm transition-all 
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#508F21] 
          peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#508F21]"
      >
        {label}
      </label>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="mt-[100px]">
      <Wrapper>
        <div className="flex flex-col gap-3 md:gap-[50px]">
          <Image
            src="/images/contact/img1.svg"
            width={1440}
            height={679}
            alt="contact us"
            className="w-full"
          />
          <div className="flex flex-col lg:flex-row gap-[30px] items-center justify-between mx-[20px] md:mx-[50px] mb-[50px]">
            <div className="flex flex-col gap-[30px] md:gap-[100px] w-full lg:w-[48%] ">
              <h3 className="text-2xl md:text-[40px] text-[#508F21] font-bold poppins">
                Finding a Meal to suit your mood will soon be easy...
              </h3>
              <div className="flex flex-col gap-[10px] md:gap-[30px]">
                <h4 className="text-base md:text-xl text-[#508F21] poppins font-bold">
                  Get notified when we go live
                </h4>
                {/* Floating Inputs */}
                <div className="flex flex-col gap-4 w-full">
                  <FloatingInput id="date" label="DATE" type="date" placeholder="" />
                  <FloatingInput id="name" label="TIME" type="text" placeholder="TIME" />
                  <FloatingInput id="email" label="EMAIL" type="email" placeholder="EMAIL" />
                  <FloatingInput id="name" label="Would you like to book a tour?" type="text" placeholder="Would you like to book a tour?" />
                  <FloatingInput id="name" label="Tour Booking Time" type="text" placeholder="Tour Booking Time" />
                    <Button className=" !h-[50px] md:!h-[64px] !rounded-[8px] !bg-[#88CF35] text-xl poppins !text-white !font-bold !w-full">Submit</Button>
                </div>
              </div>
            </div>
            <Image src="/images/contact/img2.svg" width={686} height={1024} alt="contact page image"  />
          </div>
        </div>
      </Wrapper>

     
    </div>
  );
};

export default ContactPage;
