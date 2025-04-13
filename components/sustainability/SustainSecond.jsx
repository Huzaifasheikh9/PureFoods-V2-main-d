import React from "react";
import Wrapper from "../../shared/Wrapper";
import Image from "next/image";
import { Button } from "antd";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Color } from "antd/es/color-picker";

const SustainSecond = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col justify-center items-center">
          <div className="relative py-[50px] my-[20px]">
            <Image
              src="/images/sustain/img5.svg"
              width={806}
              height={826}
              alt="sustain image"
              className="mx-auto "
            />
            <Image
              src="/images/sustain/bg1.png"
              width={305}
              height={381}
              alt="sustain image"
              className="absolute bottom-0 left-0 hidden md:block"
            />
            <Image
              src="/images/sustain/bg2.png"
              width={305}
              height={381}
              alt="sustain image"
              className="absolute top-0 right-0 hidden md:block"
            />
          </div>
          <div className="max-w-full min-h-[386px] mx-[20px] md:mx-[50px] p-[30px] md:px-[80px] md:pr-[140px] md:py-[60px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-between">
            <h3  data-aos="fade-right" className="text-lg text-center md:text-left md:text-[30px] poetson text-[#979797] ">
              At PureFoods, we also grow some of our own vegetables and fruits
              like watermelons, cucumbers, beans, corn, onions, tomatoes, and
              many more. Conjointly, we offer discounts for tours on our
              supplying farms, where production and development methods of the
              food that you eat here at PureFoods, are shown. On top of that, in
              order for you to enjoy ingredients at their peak freshness,
              quality, and nutritional value, we are devoted to serving a
              rotating seasonal menu.
            </h3>
          </div>
          <Button className="!bg-[#89D037] !w-[90%] mx-auto md:!w-[581px] !h-[70px] md:!h-[113px] !rounded-[60px] md:!mx-[50px] !my-[30px]">
            <div className="text-lg md:text-[30px] border-2 border-white poppins font-bold text-white px-5 py-1 rounded-[60px] flex justify-between items-center w-[90%]">
            <Link href="/about" className="text-xl text-white bebas" style={{color: "white"}}>Explore Our Mission</Link>
              <FaChevronRight />
            </div>
          </Button>
          <div className="mx-[20px] md:mx-[50px] flex flex-col md:flex-row justify-between items-center">
            <Image
              src="/images/sustain/bg3.png"
              width={300}
              height={317}
              alt="sustain image"
              className="object-contain"
            />
            <h1 className="text-2xl md:text-5xl bebas text-[#508F21]">
              HOW WE ARE SUSTAINABLE
            </h1>
            <Image
              src="/images/sustain/bg3.png"
              width={371}
              height={393}
              alt="sustain image"
              className=""
            />
          </div>
          <div className="mx-[20px] md:mx-[50px] flex flex-col md:flex-row items-center justify-between mb-[50px] w-full">
            <div className="relative">
              <Image
                src="/images/sustain/img6.svg"
                width={446}
                height={458}
                alt="sustain image"
                className=""
              />
              <Image
                src="/images/sustain/arrow1.svg"
                width={165}
                height={236}
                alt="sustain image"
                className="absolute right-[-180px] top-[260px] hidden lg:block"
              />
            </div>
            <div  data-aos="fade-left" className=" md:max-w-[491px] border border-[#508F21] p-[30px] md:p-[40px] rounded-[60px] flex flex-col gap-[7px] relative">
              <h2 className="text-2xl md:text-5xl bebas text-[rgb(80,143,33)] mx-auto">
                Refrigeration
              </h2>
              <h5 className="text-base md:text-xl text-[#828282] poetson ">
                Refrigeration is responsible for nearly half of the energy
                consumption by the retail and supermarket sector, whose
                emissions have multiplied more than four times since 1990. This
                is why we take fresh foods directly from farms as it preserves
                energy.
              </h5>
            </div>
          </div>

          <div className="lg:mx-[20px] md:mx-[50px] flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto lg:w-[65%] mb-[30px] md:mb-[150px]">
            <div  data-aos="fade-right" className="max-w-[491px] border border-[#508F21] p-[30px] md:p-[40px] rounded-[60px] flex flex-col gap-[7px] relative">
              <h2 className="text-2xl md:text-5xl bebas text-[#508F21] mx-auto">
                Food Waste
              </h2>
              <h5 className="text-base md:text-xl text-[#828282] poetson ">
                Reducing food waste is our priority. Therefore, any leftover
                food that we have, including the peels and husks of vegetables,
                is trashed in separate receptacles, where we can send them to be
                recycled or turn them into nutrient-rich compost.
              </h5>
            </div>
            <div className="relative">
              <Image
                src="/images/sustain/img7.svg"
                width={446}
                height={458}
                alt="sustain image"
                className=""
              />
              <Image
                src="/images/sustain/arrow1.svg"
                width={256}
                height={256}
                alt="sustain image"
                className="absolute right-[-200px] top-[140px] hidden lg:block z-10"
              />
            </div>
          </div>

        
          <div className="mx-[20px] md:mx-[50px] flex flex-col md:flex-row items-center justify-between mb-[50px] w-full">
            <div className="relative">
              <Image
                src="/images/sustain/Group1.svg"
                width={446}
                height={458}
                alt="sustain image"
                className=""
              />
              <Image
                src="/images/sustain/arrow1.svg"
                width={165}
                height={236}
                alt="sustain image"
                className="absolute right-[-180px] top-[260px] hidden lg:block"
              />
            </div>
            <div  data-aos="fade-left" className=" md:max-w-[491px] border border-[#508F21] p-[30px] md:p-[40px] rounded-[60px] flex flex-col gap-[7px] relative">
              <h2 className="text-2xl md:text-5xl bebas text-[rgb(80,143,33)] mx-auto">
              Reusable Dishware
              </h2>
              <h5 className="text-base md:text-xl text-[#828282] poetson ">
              We use amazing reusable ceramic dishes, mugs, and glassware to serve our customers with our authentic dishes so that we can avoid contributing to plastic landfills and waste accumulation.
              </h5>
            </div>
          </div>


          <div className="lg:mx-[20px] md:mx-[50px] flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto lg:w-[65%] mb-[30px] md:mb-[150px]">
            <div  data-aos="fade-right" className="max-w-[491px] border border-[#508F21] p-[30px] md:p-[40px] rounded-[60px] flex flex-col gap-[7px] relative">
              <h2 className="text-2xl md:text-5xl bebas text-[#508F21] mx-auto">
              Sustainable Takeout Packaging
              </h2>
              <h5 className="text-base md:text-xl text-[#828282] poetson ">
              We provide recyclable and compostable take out containers, but don’t forget to rinse out these containers completely, leaving no trace of food before you recycle them.
              </h5>
            </div>
            <div className="relative">
              <Image
                src="/images/sustain/Group2.svg"
                width={446}
                height={458}
                alt="sustain image"
                className=""
              />
            
            </div>
          </div>
         

          {/* <div className="mt-[30px] md:mt-[150px] mx-[20px] md:mx-[50px] flex flex-col md:flex-row items-center justify-between w-[90%] lg:w-[65%] mb-[30px] md:mb-[100px] ">
            <div className="max-w-[491px] border border-[#508F21] p-[30px] md:p-[40px] rounded-[60px] flex flex-col gap-[7px] relative">
              <h2 className="text-3xl md:text-6xl bebas text-[#508F21] mx-auto">
                Food Waste
              </h2>
              <h5 className="text-base md:text-xl text-[#828282] poetson ">
                Reducing food waste is our priority. Therefore, any leftover
                food that we have, including the peels and husks of vegetables,
                is trashed in separate receptacles, where we can send them to be
                recycled or turn them into nutrient-rich compost.
              </h5>
            </div>
            <div className="relative z-0">
              <Image
                src="/images/sustain/img8.svg"
                width={446}
                height={458}
                alt="sustain image"
                className=""
              />
              <Image
                src="/images/sustain/bg4.png"
                width={313}
                height={313}
                alt="sustain image"
                className="absolute right-[-400px] top-[100px] hidden md:block z-10"
              />
            </div>
          </div> */}
          <div className="flex flex-col gap-[30px] md:gap-[70px]">
            <h1 className="text-2xl md:text-5xl bebas text-[#508F21] mx-auto">
              Whole Food Plant Diet
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <Image
                src="/images/sustain/img9.svg"
                width={542}
                height={507}
                alt="sustain image"
                className=""
              />
              <div className="lg:w-[50%] min-h-[200px] mx-[20px] md:mx-[50px] p-[30px] md:px-[80px] md:pr-[140px] md:py-[60px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-between">
                <h3  data-aos="fade-left" className="text-lg text-center md:text-left md:text-[30px] poetson text-[#979797] ">
                  The global food system is responsible for 30% of all
                  greenhouse gas emissions. This includes emissions from animal
                  husbandry, livestock, processing, transportation, and food
                  waste across the entire food production chain.
                </h3>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center">
              <Image
                src="/images/sustain/img10.svg"
                width={542}
                height={507}
                alt="sustain image"
                className=""
              />
              <div className="lg:w-[50%] min-h-[200px] mx-[20px] md:mx-[50px] p-[30px] md:px-[80px] md:pr-[140px] md:py-[60px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-between">
                <h3  data-aos="fade-left" className="text-lg text-center md:text-left md:text-[30px] poetson text-[#979797] ">
                  A single cow produces between 154 to 264 pounds of methane gas
                  per year. 1.5 billion cattle, raised for meat production
                  worldwide, emit at least 231 billion pounds of methane into
                  the atmosphere each year.
                </h3>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center">
              <Image
                src="/images/sustain/img11.svg"
                width={542}
                height={507}
                alt="sustain image"
                className=""
              />
              <div className="lg:w-[50%] min-h-[200px] mx-[20px] md:mx-[50px] p-[30px] md:px-[80px] md:pr-[140px] md:py-[60px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-between">
                <h3 data-aos="fade-left" className="text-lg text-center md:text-left md:text-[30px] poetson text-[#979797] ">
                  On top of that, the production of animal feed and grazing
                  land, particularly for livestock such as cattle and pigs, have
                  been a leading cause of worldwide deforestation.
                </h3>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center">
              <Image
                src="/images/sustain/img12.svg"
                width={542}
                height={507}
                alt="sustain image"
                className=""
              />
              <div className="mb-[50px] lg:w-[50%] min-h-[200px] mx-[20px] md:mx-[50px] p-[30px] md:px-[80px] md:pr-[140px] md:py-[60px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-between items-center">
                <h3 data-aos="fade-left" className="text-lg text-center md:text-left md:text-[30px] poetson text-[#979797] ">
                  So, by eating at PureFoods, you are actively offsetting this
                  harm to our one and only planet, while also bettering your own
                  health. Now, that’s a win-win scenario! So come and enjoy
                  yourself at PureFoods.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SustainSecond;
