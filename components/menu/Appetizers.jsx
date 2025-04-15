import React from "react";
import Image from "next/image";
import { Button } from "antd";

// Updated menu data with price inside each item
const menuData = [
  {
    heading: "Soups",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/menu1.svg",
        title: "Pumpkin Paradise",
        description:
          "Pumpkin soup with a hint of spice, served with crispy, golden bread sticks",
        buttonLabels: ["VG", "DF"],
        price: 6.5,
        id: 1,
      },
      {
        image: "/images/menu/menu2.svg",
        title: "Citrus Crave",
        description:
          "Refreshing blend of sweet carrots and zesty orange, topped with fragrant basil",
        buttonLabels: ["GF", "NF", "VG", "DF"],
        price: 6.75,
        id: 2,
      },
      {
        image: "/images/menu/menu3.svg",
        title: "Tomato Treat",
        description:
          "Creamy tomato soup with toasted nuts and fresh basil leaves",
        buttonLabels: ["GF", "VG", "DF"],
        price: 6.25,
        id: 3,
      },
    ],
  },
  {
    heading: "Quiches",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/menu4.svg",
        title: "Spinach Scramble",
        description:
          "Blend of spinach and tofu baked to perfection in a flaky crust",
        buttonLabels: ["GF", "VG", "DF"],
        price: 7.5,
        id: 4,
      },
      {
        image: "/images/menu/menu5.svg",
        title: "Veggie Vibe",
        description:
          "Quiche bursting with juicy tomatoes, savory onions, soft tofu, and tender spinach",
        buttonLabels: ["GF", "VG", "DF"],
        price: 7.75,
        id: 5,
      },
      {
        image: "/images/menu/menu6.svg",
        title: "Golden Goodness",
        description:
          "Roasted sweet potatoes combined with the richness of caramelized onions",
        buttonLabels: ["GF", "VG", "DF"],
        price: 7.25,
        id: 6,
      },
    ],
  },
];

const Appetizers = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto bg-[#80CC2885] min-h-[70vh] rounded-[26px] p-3 md:py-[50px] md:px-[70px] mt-25">
      {menuData.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-3xl font-bold text-[#508F21] mb-5 underline uppercase">
            {section.heading}
          </h2>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg flex flex-col items-center text-center rounded-xl"
              >
                <div className="w-full">
                  <Image
                    src={item.image}
                    width={314}
                    height={220}
                    alt={item.title}
                    className="w-full h-[220px] object-cover rounded-t-lg"
                  />
                </div>

                <div className="w-full flex flex-col items-center text-center pb-[20px] uppercase relative">
                  <h3 className="text-base font-bold font-sans uppercase w-full mt-[15px]">
                    {item.title}
                    <p className="text-[#508F21] font-bold mt-1">${item.price}</p>
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>

                  <div className="flex gap-3 mt-4">
                    {item.buttonLabels.map((label, idx) => (
                      <Button
                        key={idx}
                        shape="circle"
                        className="bg-[#508F21] text-white text-lg font-bold"
                      >
                        {label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appetizers;
