import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { MdRemove, MdAdd } from "react-icons/md";

const menuData = [
  {
    heading: "Pie",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu16.jpg",
        title: "Tropical Tart",
        description:
          "Passion fruit pie crowned with fresh strawberries and blueberries",
        buttonLabels: ["VG", "DF", "NF", "GF"],
        id:34
      },
      {
        image: "/images/menu/cmenu17.jpg",
        title: "Cinnamon Crust",
        description: "Warm spiced apple filling encased in a buttery, flaky crust, with a hint of cinnamon",
        buttonLabels: ["GF", "NF", "VG", "DF"],
        id:35
      },
      {
        image: "/images/menu/cmenu18.jpg",
        title: "Nutty Nibble",
        description: "Rich, buttery pecan pie with a golden crust and caramelized sugar glaze",
        buttonLabels: ["GF","VG", "DF"],
        id:36
      },
      {
        image: "/images/menu/cmenu19.jpg",
        title: "Spiced Symphony",
        description:
          "a flaky pie crust filled with spiced pumpkin topped with a dollop of vegan whipped cream",
        buttonLabels: ["VG", "DF", "NF", "GF"],
        id:37
      },
    ],
  },
  {
    heading: "Sorbet",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu38.jpg",
        title: "Nutty Nirvana",
        description: "Creamy pistachio sorbet topped with coconut flakes, sweet banana slices, and crunchy nuts",
        buttonLabels: ["GF", "VG", "DF"],
        id:38
      },
      {
        image: "/images/menu/cmenu39.jpg",
        title: "Berry Burst",
        description: "Refreshing raspberry sorbet covered in blueberries, strawberries, and fragrant basil",
        buttonLabels: ["GF","VG", "DF"],
        id:39
      },
      {
        image: "/images/menu/cmenu40.jpg",
        title: "Blue Breeze",
        description: "Vibrant blueberry sorbet paired with fresh fruits and delicate flavorings",
        buttonLabels: ["GF", "VG", "DF"],
        id:40
      },
    ],
  },
  {
    heading: "Ice Cream",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu41.jpg",
        title: "Swirl Scoop",
        description: "Dreamy duo of chocolate and vanilla ice cream topped with crispy chocolate and chocolate sprinkles sprinkles",
        buttonLabels: ["GF", "VG", "DF"],
        id:41
      },
      {
        image: "/images/menu/cmenu42.jpg",
        title: "Brownie Bliss",
        description: "Warm, gooey brownie topped with rich vanilla ice cream and sprinkled with chocolate chips",
        buttonLabels: ["GF","VG", "DF"],
        id:42
      },
      {
        image: "/images/menu/cmenu43.jpg",
        title: "Pistachio Pleasure",
        description: "Creamy pistachio ice cream studded with crunchy pistachios",
        buttonLabels: ["GF", "VG", "DF"],
        id:43
      },
    ],
  },
  {
    heading: "Cakes",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu44.jpg",
        title: "Red Radiance",
        description: "airy red velvet cupcakes topped an assortment of mixed berries",
        buttonLabels: ["GF", "VG", "DF"],
        id:44
      },
      {
        image: "/images/menu/cmenu45.jpg",
        title: "Citrus Cheer",
        description: "zesty lemon cupcakes crowned with candied lemons and lemon basil",
        buttonLabels: ["GF","VG", "DF"],
        id:45
      },
      {
        image: "/images/menu/cmenu46.jpg",
        title: "Espresso Explosion",
        description: "rich coffee-soaked sponge layers topped with a dusting of cocoa powder and rich frosting",
        buttonLabels: ["GF", "VG", "DF"],
        id:46
      },
      {
        image: "/images/menu/cmenu47.jpg",
        title: "Mango Marvel",
        description: "a mini sponge cake consisting of layers of creamy mango mousse, topped with fresh mangos",
        buttonLabels: ["GF","VG", "DF"],
        id:47
      },
      {
        image: "/images/menu/cmenu48.jpg",
        title: "Chocolate Crumble",
        description: "a moist chocolate cake filled with vanilla and chocolate frosting dusted in cocoa powder",
        buttonLabels: ["GF", "VG", "DF"],
        id:48
      },
    ],
  },
];

const Desserts = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto bg-[#80CC2885] min-h-[70vh] rounded-[26px] p-3 md:py-[50px] md:px-[70px] ">
      {menuData.map((section, index) => (
        <div key={index} className="mb-10 ">
          <h2 className="text-3xl font-bold text-[#508F21] mb-5 underline  uppercase">
            {section.heading}
          </h2>
          {/* Fixed Positioned Image on the Right */}

          <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-lg flex flex-col items-center text-center rounded-xl "
                id={item.id}
              >
                {/* Card Image */}
                <div className="w-full">
                  <Image
                    src={item.image}
                    width={314}
                    height={220}
                    alt={item.title}
                    className="w-full h-[220px] object-cover rounded-t-lg"
                  />
                </div>

                {/* Card Content */}
                <div className="w-full flex flex-col items-center text-center pb-[20px] uppercase relative">
                <h3 className="text-base font-bold font-sans uppercase  w-full mt-[15px]">
                    {item.title}
                    <p>$48</p>

                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {item.description}
                  </p>

                  {/* Dynamic Circular Buttons */}
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

export default Desserts
