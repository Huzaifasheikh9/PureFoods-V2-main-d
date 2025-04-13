import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { MdRemove, MdAdd } from "react-icons/md";

const menuData = [
  {
    heading: "Salads",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu1.jpg",
        title: "Leafy Luxe",
        description:
          "Mix of red leaf lettuce, romaine, and arugula, tossed for a fresh, crunchy bite",
        buttonLabels: ["VG", "DF", "NF", "GF"],
        id:63
      },
      {
        image: "/images/menu/cmenu2.jpg",
        title: "Grain Garden",
        description: "Refreshing salad with tangy tofu, crisp vegetables, and fragrant herbs",
        buttonLabels: ["GF", "NF", "VG", "DF"],
        id:64
      },
      {
        image: "/images/menu/cmenu3.jpg",
        title: "Mediterranean Mix",
        description: "Colorful mix of tofu, olives, juicy tomatoes, crunchy cucumbers, and onion",
        buttonLabels: ["GF","VG", "DF"],
        id:65
      },
      {
        image: "/images/menu/cmenu4.jpg",
        title: "Fruit Fantasy",
        description:
          "Dragonfruit puree, mango, kiwi, strawberries, and blueberries, topped with coconut and sesame seeds",
        buttonLabels: ["VG", "DF", "NF", "GF"],
        id:65
      },
      {
        image: "/images/menu/cmenu5.jpg",
        title: "Nutty Nectar",
        description: "Sweet and nutty blend of sesame seeds, bananas, kiwi, and strawberries with a touch of oats",
        buttonLabels: ["GF", "NF", "VG", "DF"],
        id:66
      },
      {
        image: "/images/menu/cmenu6.jpg",
        title: "Berry Bonanza",
        description: "Creamy acai puree topped with raspberries, blueberries, nuts, and shredded coconut",
        buttonLabels: ["GF","VG", "DF"],
        id:67
      },
    ],
  },
  {
    heading: "Breads",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu7.jpg",
        title: "Garlicky Grace",
        description: "fragrant garlic naan bread and creamy, flavorful malai kofta rice",
        buttonLabels: ["GF", "VG", "DF"],
        id:68
      },
      {
        image: "/images/menu/cmenu8.jpg",
        title: "Pita Perfection",
        description: "soft pita bread with creamy hummus, topped with fresh parsley and savory chickpeas",
        buttonLabels: ["GF","VG", "DF"],
        id:69
      },
      {
        image: "/images/menu/cmenu9.jpg",
        title: "Buttery Bites",
        description: "classic combination of wholesome whole wheat bread and creamy vegan butter",
        buttonLabels: ["GF", "VG", "DF"],
        id:70
      },
    ],
  },
  {
    heading: "Roasted/Grilled Veggies",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu10.jpg",
        title: "Golden Grains",
        description: "sweet and smoky roasted corn on the cob rice",
        buttonLabels: ["GF", "VG", "DF"],
        id:71
      },
      {
        image: "/images/menu/cmenu11.jpg",
        title: "Carrot Crush",
        description: "combination of sweetness and crunch in these perfectly roasted carrots",
        buttonLabels: ["GF","VG", "DF"],
        id:72
      },
      {
        image: "/images/menu/cmenu12.jpg",
        title: "Ember Embrace",
        description: "grilled eggplant, perfectly charred on the outside and tender on the inside",
        buttonLabels: ["GF", "VG", "DF"],
        id:73
      },
    ],
  },
  {
    heading: "Kid's Specials",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu13.jpg",
        title: "Golden Greatness",
        description: "cut to perfection, and baked to crispy goodness sweet potato fries",
        buttonLabels: ["GF", "VG", "DF"],
        id:74
      },
      {
        image: "/images/menu/cmenu14.jpg",
        title: "Melty Mac",
        description: "perfectly baked pasta drenched in a creamy vegan cheese sauce and topped with fresh herbs",
        buttonLabels: ["GF","VG", "DF"],
        id:75
      },
      {
        image: "/images/menu/cmenu15.jpg",
        title: "Glamorous Guacamole",
        description: "creamy guacamole served alongside crispy tortilla chips",
        buttonLabels: ["GF", "VG", "DF"],
        id:76
      },
    ],
  },
];

const Sides = () => {
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

export default Sides
