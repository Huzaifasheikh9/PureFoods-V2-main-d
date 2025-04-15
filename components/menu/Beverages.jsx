import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { MdRemove, MdAdd } from "react-icons/md";

const menuData = [
  {
    heading: "Kid's Classics",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu20.jpg",
        title: "Cocoa Comfort",
        description:
          "rich hot chocolate topped with a cloud of velvety almond milk foam and sweet marshmallows",
        buttonLabels: ["VG", "DF", "NF", "GF"],
        price: 48,
        id: 16,
      },
      {
        image: "/images/menu/cmenu21.jpg",
        title: "Lemon Zest",
        description: "refreshing lemonade, bursting with the zesty flavor of fresh lemons",
        buttonLabels: ["GF", "NF", "VG", "DF"],
        price: 42,
        id: 17,
      },
      {
        image: "/images/menu/cmenu22.jpg",
        title: "Sparkling Spritz",
        description: "crisp and bubbly water to refresh",
        buttonLabels: ["GF", "VG", "DF"],
        price: 39,
        id: 18,
      },
    ],
  },
  {
    heading: "Smoothie",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu23.jpg",
        title: "Berry Blast",
        description:
          "refreshing smoothie, blended with strawberries, raspberries, banana, almond milk, vanilla yogurt, and a touch of homemade honey (made with agave syrup)",
        buttonLabels: ["GF", "VG", "DF"],
        price: 55,
        id: 19,
      },
      {
        image: "/images/menu/cmenu24.jpg",
        title: "Watermelon Wonder",
        description: "refreshing smoothie packed with the sweet and juicy flavor of watermelon",
        buttonLabels: ["GF", "VG", "DF"],
        price: 50,
        id: 20,
      },
      {
        image: "/images/menu/cmenu25.jpg",
        title: "Peanut Punch",
        description: "sweet strawberries and blueberries with a creamy peanut butter swirl",
        buttonLabels: ["GF", "VG", "DF"],
        price: 52,
        id: 21,
      },
      {
        image: "/images/menu/cmenu26.jpg",
        title: "Berry Blend",
        description: "delicious and nutritious blend of almond milk, banana, and sweet strawberries",
        buttonLabels: ["GF", "VG", "DF"],
        price: 50,
        id: 22,
      },
      {
        image: "/images/menu/cmenu27.jpg",
        title: "Watermelon Wave",
        description: "vibrant smoothie, combining the sweet watermelon flavor with a tangy lime kick",
        buttonLabels: ["GF", "VG", "DF"],
        price: 53,
        id: 23,
      },
    ],
  },
  {
    heading: "Milkshake",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu28.jpg",
        title: "Cocoa Cloud",
        description: "chocolate milkshake, topped with crunchy chocolate sprinkles to enhance the chocolatey taste",
        buttonLabels: ["GF", "VG", "DF"],
        price: 57,
        id: 24,
      },
      {
        image: "/images/menu/cmenu29.jpg",
        title: "Strawberry Sunrise",
        description: "vibrant strawberry milkshake, with a swirl of sweet strawberries",
        buttonLabels: ["GF", "VG", "DF"],
        price: 56,
        id: 25,
      },
      {
        image: "/images/menu/cmenu30.jpg",
        title: "Velvety Vogue",
        description: "vanilla milkshake that is luxuriously smooth topped with a cloud-like layer of vegan whipped cream",
        buttonLabels: ["GF", "VG", "DF"],
        price: 58,
        id: 26,
      },
      {
        image: "/images/menu/cmenu31.jpg",
        title: "Creamy Crunch",
        description: "Cookies and cream milkshake, vanilla ice cream with crunchy cookie bits",
        buttonLabels: ["GF", "VG", "DF"],
        price: 59,
        id: 27,
      },
      {
        image: "/images/menu/cmenu32.jpg",
        title: "Majestic Mango",
        description: "tropical taste in every sip, this mango milkshake is a burst of sweet and juicy flavor",
        buttonLabels: ["GF", "VG", "DF"],
        price: 55,
        id: 28,
      },
    ],
  },
  {
    heading: "Coffee",
    image: "/images/menu/bg3.svg",
    items: [
      {
        image: "/images/menu/cmenu33.jpg",
        title: "Espresso Energy",
        description: "rich and robust, expertly brewed espresso",
        buttonLabels: ["GF", "VG", "DF"],
        price: 45,
        id: 29,
      },
      {
        image: "/images/menu/cmenu34.jpg",
        title: "Mocha Mingle",
        description: "our Mocha combines the rich aroma of coffee with the sweet indulgence of chocolate",
        buttonLabels: ["GF", "VG", "DF"],
        price: 50,
        id: 30,
      },
      {
        image: "/images/menu/cmenu35.jpg",
        title: "Americano Awake",
        description: "smooth and balanced blend of espresso and water",
        buttonLabels: ["GF", "VG", "DF"],
        price: 42,
        id: 31,
      },
      {
        image: "/images/menu/cmenu36.jpg",
        title: "Latte Lush",
        description: "velvety smooth handcrafted Latte",
        buttonLabels: ["GF", "VG", "DF"],
        price: 48,
        id: 32,
      },
      {
        image: "/images/menu/cmenu37.jpg",
        title: "Cappuccino Crave",
        description: "expertly crafted Cappuccino, with its velvety foam and rich espresso",
        buttonLabels: ["GF", "VG", "DF"],
        price: 50,
        id: 33,
      },
    ],
  },
];

const Beverages = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto bg-[#80CC2885] min-h-[70vh] rounded-[26px] p-3 md:py-[50px] md:px-[70px]">
      {menuData.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-3xl font-bold text-[#508F21] mb-5 underline uppercase">
            {section.heading}
          </h2>

          <div className="grid gap-6 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex flex-col items-center text-center rounded-xl"
              >
                {/* Image */}
                <div className="w-full">
                  <Image
                    src={item.image}
                    width={314}
                    height={220}
                    alt={item.title || "Beverage image"}
                    className="w-full h-[220px] object-cover rounded-t-lg"
                  />
                </div>

                {/* Content */}
                <div className="w-full flex flex-col items-center text-center pb-[20px] relative px-3">
                  <h3 className="text-base font-bold font-sans uppercase w-full mt-[15px]">
                    {item.title}
                    <p className="text-sm font-semibold mt-1">${item.price}</p>
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 capitalize">
                    {item.description}
                  </p>

                  {/* Button Labels */}
                  <div className="flex gap-3 mt-4 flex-wrap justify-center">
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

export default Beverages;
