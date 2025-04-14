// "use client"; // Ensures this runs only on the client-side

// import React, { useEffect, useState } from "react";
// import Wrapper from "../../shared/Wrapper";
// import Image from "next/image";
// import { Button } from "antd";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import Appetizers from "./Appetizers";
// import Mains from "./Mains";
// import Sides from "./Sides";
// import Desserts from "./Desserts";
// import Beverages from "./Beverages";

// const MenuHero = () => {
//   // Retrieve the active tab from localStorage or default to "Appetizers"
//   // const [activeTab, setActiveTab] = useState(
//   //   () => localStorage.getItem("activeMenuTab") || "Appetizers"
//   // );


//   const [activeTab, setActiveTab] = useState("activeMenuTab");

//   const menuItems = [
//     { name: "Appetizers", component: <Appetizers /> },
//     { name: "Mains", component: <Mains /> },
//     { name: "Sides", component: <Sides /> },
//     { name: "Desserts", component: <Desserts /> },
//     { name: "Beverages", component: <Beverages /> },
//   ];

//   // useEffect(() => {
//   //   localStorage.setItem("activeMenuTab", activeTab);
//   // }, [activeTab]);

//   useEffect(() => {
//     const storedTab = localStorage.getItem("activeMenuTab");
//     if (storedTab) {
//       setActiveTab(storedTab);
      
//     }
//   }, []);
  
//   useEffect(() => {
//     const hash = window.location.hash.replace("#", "");
//     if (hash) {
//       const menuTab = menuItems.find((item) => item.name.toLowerCase() === hash.toLowerCase());
//       if (menuTab) {
//         setActiveTab(menuTab.name);
//       }
//     }
//   }, []);

//   return (
//     <div>
//       <div className="bg-[#80CC2885] relative">
//         <Wrapper>
//           <div className="min-h-[70vh] flex flex-col lg:flex-row justify-between items-center p-[20px]">
//             <Image
//               src="/images/menu/bg1.svg"
//               width={714}
//               height={92}
//               alt="menu background"
//               className="absolute top-0 right-0 hidden md:block"
//             />
//             <Image
//               src="/images/about/bg1.png"
//               width={179}
//               height={74}
//               alt="menu background"
//               className="absolute bottom-4 left-0 hidden md:block"
//             />
//             <Image
//               src="/images/menu/img1.svg"
//               width={603}
//               height={603}
//               alt="menu image"
//             />

//             {/* Buttons (Tabs) */}
//             <div className="min-h-full flex flex-col w-full md:w-[50%] gap-[10px] items-center lg:items-end text-center md:text-start my-[30px] justify-end">
//               {menuItems.map((item) => (
//                 <Button
//                   key={item.name}
//                   onClick={() => setActiveTab(item.name)}
//                   className={`!rounded-full !w-[200px] md:!w-[365px] !flex !justify-between !h-[35px] md:!h-[77px] !bg-transparent !text-[17px] !border-2 !border-[#508F21] md:!text-4xl !font-bold poppins transition-all duration-300
//                   ${
//                     activeTab === item.name ? "!text-[#5B9533] " : "!text-white"
//                   }
//                   hover:!text-[#5B9533] `}
//                 >
//                   <span>{item.name}</span>
//                   <MdKeyboardArrowRight />
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </Wrapper>
//       </div>

//       {/* Render Active Component */}
//       <Wrapper>
//         <div className="relative">
//           <Image
//             src="/images/menu/bg2.svg"
//             width={905}
//             height={91}
//             alt="menu background"
//             className="mx-auto my-[70px]"
//           />
//           <Image
//             src="/images/menu/bg4.svg"
//             width={100}
//             height={100}
//             alt="menu image"
//             className="hidden md:block absolute top-[-50px] left-0"
//           />
//           <Image
//             src="/images/menu/bg5.svg"
//             width={225}
//             height={200}
//             alt="menu image"
//             className="hidden md:block absolute top-[-70px] right-0"
//           />
//         </div>
//         <div className="mb-[50px] md:mb-[100px]" id={activeTab}>
//           {menuItems.find((item) => item.name === activeTab)?.component}
//         </div>
//       </Wrapper>
//     </div>
//   );
// };

// export default MenuHero;





"use client";

import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../../shared/Wrapper";
import Image from "next/image";
import { Button } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import Appetizers from "./Appetizers";
import Mains from "./Mains";
import Sides from "./Sides";
import Desserts from "./Desserts";
import Beverages from "./Beverages";

// map hash ID to tab name
const tabToIdMap = {
  Appetizers: "2",
  Mains: "53",
  Sides: "64",      // We'll use 64 for Sides
  Desserts: "35",
  Beverages: "16",
};

const idToTabMap = {
  "2": "Appetizers",
  "53": "Mains",
  "64": "Sides",
  "35": "Desserts",
  "16": "Beverages",
};

const MenuHero = () => {
  const [activeTab, setActiveTab] = useState("Appetizers");

  const refs = {
    Appetizers: useRef(null),
    Mains: useRef(null),
    Sides: useRef(null),
    Desserts: useRef(null),
    Beverages: useRef(null),
  };

  const menuItems = [
    { name: "Appetizers", component: <Appetizers />, ref: refs.Appetizers },
    { name: "Mains", component: <Mains />, ref: refs.Mains },
    { name: "Sides", component: <Sides />, ref: refs.Sides },
    { name: "Desserts", component: <Desserts />, ref: refs.Desserts },
    { name: "Beverages", component: <Beverages />, ref: refs.Beverages },
  ];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && idToTabMap[hash]) {
      const tabName = idToTabMap[hash];
      setActiveTab(tabName);
      // wait for DOM render before scrolling
      setTimeout(() => {
        refs[tabName]?.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  return (
    <div>
      {/* Hero */}
      <div className="bg-[#80CC2885] relative">
        <Wrapper>
          <div className="min-h-[70vh] flex flex-col lg:flex-row justify-between items-center p-[20px]">
            <Image src="/images/menu/bg1.svg" width={714} height={92} alt="menu background" className="absolute top-0 right-0 hidden md:block" />
            <Image src="/images/about/bg1.png" width={179} height={74} alt="menu background" className="absolute bottom-4 left-0 hidden md:block" />
            <Image src="/images/menu/img1.svg" width={603} height={603} alt="menu image" />
            {/* Tabs */}
            <div className="min-h-full flex flex-col w-full md:w-[50%] gap-[10px] items-center lg:items-end text-center md:text-start my-[30px] justify-end">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    window.history.replaceState(null, "", `#${tabToIdMap[item.name]}`);
                    setTimeout(() => {
                      item.ref.current?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className={`!rounded-full !w-[200px] md:!w-[365px] !flex !justify-between !h-[35px] md:!h-[77px] !bg-transparent !text-[17px] !border-2 !border-[#508F21] md:!text-4xl !font-bold poppins transition-all duration-300 ${
                    activeTab === item.name ? "!text-[#5B9533]" : "!text-white"
                  } hover:!text-[#5B9533]`}
                >
                  <span>{item.name}</span>
                  <MdKeyboardArrowRight />
                </Button>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Content */}
      <Wrapper>
        {menuItems.map((item) => (
          <div
            key={item.name}
            ref={item.ref}
            id={tabToIdMap[item.name]} // id matches the hash like "35"
            className="mb-[50px] md:mb-[100px]"
          >
            {item.name === activeTab && item.component}
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

export default MenuHero;
