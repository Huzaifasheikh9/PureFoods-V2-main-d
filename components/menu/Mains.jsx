import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { MdRemove, MdAdd } from "react-icons/md";

const menuData = [
  {
    heading: "Pizza",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/menu16.svg",
        title: "Classic Cheese",
        description:
          "classic cheese pizza, with a generous layer of melted vegan cheese on a perfectly crispy crust",
        buttonLabels: ["VG", "DF"],
        price: 48,
        id: 49,
      },
      {
        image: "/images/menu/menu17.svg",
        title: "Crispy Creation",
        description:
          "Freshly baked pizza topped with juicy tomatoes, aromatic basil, and savory tofu",
        buttonLabels: ["GF", "NF", "VG", "DF"],
        price: 52,
        id: 50,
      },
      {
        image: "/images/menu/menu18.svg",
        title: "Lively Layers",
        description:
          "classic flavors of tomato and basil on this lighter pizza with 50% less vegan cheese",
        buttonLabels: ["GF", "VG", "DF"],
        price: 46,
        id: 51,
      },
      {
        image: "/images/menu/menu4.jpg",
        title: "Garden Gourmet",
        description:
          "delightful combination of juicy tomatoes, tender broccoli, savory olives, and a fragrant blend of herbs",
        buttonLabels: ["VG", "DF"],
        price: 50,
        id: 77,
      },
      {
        image: "/images/menu/menu5.jpg",
        title: "Pocket Pizza",
        description:
          "Crispy rolls filled with savory tomato sauce, melted vegan cheese, and savory pizza seasonings",
        buttonLabels: ["GF", "NF", "VG", "DF"],
        price: 45,
        id: 78,
      },
      {
        image: "/images/menu/menu6.jpg",
        title: "Veggie Vitality",
        description:
          "flavorful combination of juicy tomatoes, sweet bell peppers, and savory onions",
        buttonLabels: ["GF", "VG", "DF"],
        price: 47,
        id: 79,
      },
    ],
  },
  {
    heading: "Pasta",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/menu18.jpg",
        title: "Tomato Tango",
        description:
          "Penne pasta coated in a rich, flavorful tomato marinara sauce with herbs",
        buttonLabels: ["GF", "VG", "DF"],
        price: 44,
        id: 52,
      },
      {
        image: "/images/menu/menu19.jpg",
        title: "Layered Love",
        description:
          "Lasagna layered with savory tomato sauce, fresh herbs, and creamy vegan cheese",
        buttonLabels: ["GF", "VG", "DF"],
        price: 49,
        id: 53,
      },
      {
        image: "/images/menu/menu20.jpg",
        title: "Cheese Cascade",
        description:
          "Penne pasta smothered in Alfredo sauce, topped with vegan cheeses and herbs",
        buttonLabels: ["GF", "VG", "DF"],
        price: 50,
        id: 54,
      },
      {
        image: "/images/menu/menu21.jpg",
        title: "Green Gnocchi",
        description:
          "Gnocchi covered in a creamy spinach sauce with a touch of herbs, walnuts, and vegan cheese",
        buttonLabels: ["GF", "VG", "DF"],
        price: 53,
        id: 80,
      },
      {
        image: "/images/menu/menu22.jpg",
        title: "Pesto Passion",
        description:
          "Farfalle pasta tossed in fragrant pesto, sprinkled with coconut shreds and fresh basil",
        buttonLabels: ["GF", "VG", "DF"],
        price: 51,
        id: 81,
      },
    ],
  },
  {
    heading: "Risotto",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/menu11.jpg",
        title: "Mushroom Magic",
        description:
          "creamy and flavorful risotto bursting with the earthy goodness of mushrooms",
        buttonLabels: ["GF", "VG", "DF"],
        price: 46,
        id: 55,
      },
      {
        image: "/images/menu/menu12.jpg",
        title: "Golden Griddle",
        description: "sunny and flavorful risotto, made with ripe tomatoes",
        buttonLabels: ["GF", "VG", "DF"],
        price: 44,
        id: 56,
      },
      {
        image: "/images/menu/menu13.jpg",
        title: "Pea Paragon",
        description: "flavorful risotto featuring tender peas and a creamy texture",
        buttonLabels: ["GF", "VG", "DF"],
        price: 43,
        id: 57,
      },
    ],
  },
  {
    heading: "Grain Bowls",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/menu14.jpg",
        title: "Scallion Sizzle",
        description:
          "flavorful fried rice dish with fragrant scallions, vibrant carrots, and brown rice",
        buttonLabels: ["GF", "VG", "DF"],
        price: 42,
        id: 60,
      },
      {
        image: "/images/menu/menu15.jpg",
        title: "Chili Chomp",
        description:
          "bowl filled with spicy chili chickpeas, fresh lettuce, fragrant rice, and a side of wholesome grain bread",
        buttonLabels: ["GF", "VG", "DF"],
        price: 46,
        id: 61,
      },
      {
        image: "/images/menu/menu16.jpg",
        title: "Creamy Cuddle",
        description:
          "creamy vegan cheese-covered tofu served alongside fluffy rice and vibrant broccoli florets",
        buttonLabels: ["GF", "VG", "DF"],
        price: 47,
        id: 62,
      },
      {
        image: "/images/menu/menu17.jpg",
        title: "Grain Greens",
        description:
          "satisfying bowl with hearty whole grain bread, spicy chili chickpeas, fragrant rice, and roasted brussel sprouts",
        buttonLabels: ["GF", "VG", "DF"],
        price: 48,
        id: 59,
      },
    ],
  },
];

const Mains = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto bg-[#80CC2885] min-h-[70vh] rounded-[26px] p-3 md:py-[50px] md:px-[70px]">
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
                    alt={`Image of ${item.title}`}
                    className="w-full h-[220px] object-cover rounded-t-lg"
                  />
                </div>

                <div className="w-full flex flex-col items-center text-center pb-[20px] uppercase relative">
                  <h3 className="text-base font-bold font-sans uppercase w-full mt-[15px]">
                    {item.title}
                    <p className="text-[#508F21] text-lg font-bold">
                      ${item.price}
                    </p>
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 normal-case">
                    {item.description}
                  </p>

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

export default Mains;
