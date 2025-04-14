"use client"
import React from "react";
import Wrapper from "../../shared/Wrapper";
import Image from "next/image";
import Link from "next/link";

let cards_date = [
  {
    heading: "Citrus Crave",
    para: "Sweet, citrusy warmth to brighten cold days",
    img: "/images/home/card1.svg",
    id: 2,
    link:"Appetizers"
  },
  {
    heading: "Layered Love",
    para: "Warm, comforting layers to cozy up winter",
    img: "/images/home/card2.svg",
    id: 53,
    link:"Mains"
  },
  {
    heading: "Grain Garden",
    para: "Bright, refreshing flavors to energize winter days",
    img: "/images/home/card3.svg",
    id: 64,
    link:"Sides"
  },
  {
    heading: "Cinnamon Crust",
    para: "Spiced apple warmth to comfort winter moods",
    img: "/images/home/card4.svg",
    id: 35,
    link:"Desserts"
  },
  {
    heading: "Cocoa Comfort",
    para: "Rich, creamy hot chocolate to warm you",
    img: "/images/home/card5.svg",
    id: 16,
    link:"Beverages"
  },
  {
    heading: "Melty Mac",
    para: "Perfectly baked pasta drenched in a creamy vegan cheese sauce and topped with fresh herbs",
    img: "/images/home/card6.svg",
    id: 75,
    link:"Sides"
  },
];

const FeatureSection = () => {
  const handleClick = (id) => {
    localStorage.setItem("activeMenuTab", id);
  };

  return (
    <div>
      <Wrapper>
        <div className="flex flex-col gap-[50px] items-center px-[20px] md:px-[50px]">
          <h1 className="text-4xl md:text-6xl text-[#508F21] bebas">
            Featured Menu Items
          </h1>
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between mb-[40px] min-h-[70vh] w-full relative">
            <Image
              src="/images/home/bg7.svg"
              width={236}
              height={244}
              alt="cards images"
              className="hidden lg:block absolute top-[-100px] left-[-100px] z-0"
            />
            <Image
              src="/images/home/bg8.svg"
              width={230}
              height={261}
              alt="cards images"
              className="hidden lg:block absolute top-[-250px] right-[-40px] z-0"
            />
            <div className="flex flex-wrap gap-2 justify-center items-center">
            {cards_date.map((item, index) => (
              <Link
                href={`/menu#${item.id}`}
                key={index}
                className="bg-[#F9F9F7] md:min-h-[626px] w-full md:w-[45%] lg:w-[32%] max-w-[416px] mb-[30px] rounded-[12px] flex flex-col items-start p-[30px] gap-[20px] z-10"
                onClick={() => handleClick(item.link)}
              >
                <Image
                  src={item.img}
                  width={285}
                  height={292}
                  alt="cards images"
                  className="mx-auto"
                />
                <h2 className="text-xl md:text-4xl bebas text-[#508F21] underline mt-[30px]">
                  {item.heading}
                </h2>
                <h5 className="text-xl poetson text-[#828282]">{item.para}</h5>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FeatureSection;
