import React from "react";
import Wrapper from "../../shared/Wrapper";
import Image from "next/image";

const SustainabilityHero = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col gap-[50px]">
          <Image
            src="/images/sustain/img1.svg"
            width={1440}
            height={688}
            alt="sustainability img"
            className="mx-auto"
          />
          <div className="flex flex-col gap-[20px] md:gap-[50px] border border-[#508F21] rounded-[60px] p-3 md:p-[50px] mx-[15px] md:mx-[50px]">
            <h1  data-aos="fade-right" className="text-2xl md:text-5xl bebas text-[#508F21] text-center">
              What is Farm to Table?
            </h1>
            <h3  data-aos="fade-right" className="text-lg text-center md:text-left md:text-[30px] poetson text-[#979797] ">
              The term farm-to-table suggests that the food served by a
              restaurant comes directly from a farm, without going through a
              store, market, or distributor. In its most pure form, a
              farm-to-table restaurant would imply that you eat at the farm.
              More frequently, farm-to-table means a direct relationship between
              a farm and a restaurant, which is what we have here at PureFoods.
              Rather than buying through a distributor or a food service, we
              have created relationships with local farms and purchase our food
              supply directly from them. From this process, our community’s
              local farmers benefit as they can now make more money, and you
              benefit, as you get to know the processes behind the creation,
              treatment, and preparation of your food. Moreover, at PureFoods,
              we have higher quality and fresher food because our items are
              delivered directly from our supplying farms, only hours after
              being harvested. As a result, we have the unique ability to have
              specialty items that may be difficult to get from a food
              distributor.
            </h3>
          </div>
          <Image
            src="/images/sustain/img2.svg"
            width={1333}
            height={899}
            alt="sustainability img"
            className="mx-auto"
          />
          <Image
            src="/images/sustain/img3.svg"
            width={1140}
            height={50}
            alt="sustainability img"
            className="mx-auto"
          />
          <video
            className="w-full h-full object-contain md:my-[50px] rounded-2xl border-[20px] border-[#E7F9CF]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/sustain.mp4" type="video/mp4" />
          </video>
          <div className="max-w-full min-h-[386px] mx-[20px] md:mx-[50px] p-[30px] md:px-[80px] md:pr-[140px] md:py-[60px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-between">
            <h1  data-aos="fade-right" className="text-2xl md:text-5xl text-center text-[#508F21] bebas ">
            Our Approach:
            </h1>
            <h3  data-aos="fade-right" className="text-lg text-center md:text-left md:text-[30px] poetson text-[#979797] ">
            We at PureFoods showcase the ability to bring together various cultural cuisines into one farm-to-table restaurant. Here at PureFoods, you can taste the difference between locally grown vegetables and fruits at our unique restaurant, which look, feel, and taste much better than processed food. Our garden-fresh veggies and fruits are all very flavorful and delicious. Plus, the aroma and natural substances from them not only enhance the taste of our meals, but also provide many health benefits for you, which overall will contribute to your happiness and wellbeing.</h3>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SustainabilityHero;
