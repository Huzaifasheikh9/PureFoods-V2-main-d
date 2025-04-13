import React from "react";
import Wrapper from "../../shared/Wrapper";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { Button } from "antd";

const OurJourney = () => {
  return (
    <div>
      <Wrapper>
        <div className="min-h-[60vh] flex flex-col mx-[30px] md:mx-[50px] my-[30px]">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <Image
              src="/images/about/img2.svg"
              width={491}
              height={598}
              alt="about image"
            />
            <div className="flex flex-col gap-[50px] md:gap-[100px] mt-[30px] md:mt-0">
              <Image
                src="/images/about/bg2.png"
                width={449}
                height={173}
                alt="about image"
              />
              <div  data-aos="fade-left" className="max-w-[712px] border border-[#508F21] p-[30px] md:p-[40px] rounded-[60px] flex flex-col gap-[7px] relative">
                <h2 className="text-2xl md:text-5xl bebas text-[#508F21] mx-auto">
                  our calling
                </h2>
                <h5 className="text-base md:text-2xl text-[#828282] poetson ">
                  Pure Foods was founded with an intent to bring our area not
                  only healthful, but locally-sourced and fresh food, from many
                  different cultures. As a vegetarian farm-to-table restaurant,
                  we hope to bring our community together through the power of
                  plants. But if anything, we aspire to bring you, our
                  customers, many steps closer to leading a healthier lifestyle,
                  which starts with what you eat. So let us, Pure Foods, help
                  you.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[60vh] flex flex-col mx-[30px] md:mx-[50px] my-[30px]">
          <div className="flex justify-between items-center gap-[30px] lg:items-end flex-col lg:flex-row mt-[30px] ">
            <Image
              src="/images/about/img3.svg"
              width={491}
              height={598}
              alt="about image"
            />
            <div className="flex flex-col gap-[50px] md:gap-[100px] mt-[30px] md:mt-0 relative">
              <Image
                src="/images/about/bg3.png"
                width={150}
                height={150}
                alt="about image"
                className="absolute top-[-150px] left-[100px]"
              />
              <div  data-aos="fade-left" className="max-w-[712px] border border-[#508F21] p-[30px] md:p-[40px] rounded-[60px] flex flex-col gap-[7px] relative">
                <h2 className="text-2xl md:text-5xl bebas text-[#508F21] mx-auto">
                  our journey
                </h2>
                <h5 className="text-base md:text-4xl text-[#828282] poetson ">
                  PureFoods was founded on August 26, 2024. So even though we
                  are still relatively new to the restaurant game, we have
                  managed to accomplish quite a lot so far! Our accomplishments
                  include:
                </h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-[50px]">
            <div  data-aos="fade-right" className="flex poppins text-[#979797] font-bold items-start  gap-[15px]">
              <GoDotFill className="mt-2 text-2xl" />
              <p  className="text-lg md:text-3xl w-[95%] ">
                Being nominated for the “Best Vegetarian/Vegan Cuisine -
                Competition” in the state.
              </p>
            </div>
            <div  data-aos="fade-right" className="flex poppins text-[#979797] font-bold items-start  gap-[15px]">
              <GoDotFill className="mt-2 text-2xl" />
              <p className="text-lg md:text-3xl w-[95%] ">
                Being highlighted in several local newspapers, food blogs, and
                social media posts.
              </p>
            </div>
            <div  data-aos="fade-right" className="flex poppins text-[#979797] font-bold items-start  gap-[15px]">
              <GoDotFill className="mt-2 text-2xl" />
              <p className="text-lg md:text-3xl w-[95%] ">
                Reaching over one hundred 5-star reviews across both Google and
                Yelp.
              </p>
            </div>
            <div  data-aos="fade-right" className="flex poppins text-[#979797] font-bold items-start  gap-[15px]">
              <GoDotFill className="mt-2 text-2xl" />
              <p className="text-lg md:text-3xl w-[95%] ">
                Hosting fundraisers, donating meals, and supporting local
                causes, in hopes of helping those in need within the community.
              </p>
            </div>
            <div  data-aos="fade-right" className="flex poppins text-[#979797] font-bold items-start  gap-[15px]">
              <GoDotFill className="mt-2 text-2xl" />
              <p className="text-lg md:text-3xl w-[95%] ">
                Sponsoring local youth sports teams, fairs, and farmers’
                markets.
              </p>
            </div>
            <div  data-aos="fade-right" className="flex poppins text-[#979797] font-bold items-start  gap-[15px]">
              <GoDotFill className="mt-2 text-2xl" />
              <p className="text-lg md:text-3xl w-[95%] ">
                Receiving a certificate for sustainability and Eco-friendly
                practices in the restaurant industry.
              </p>
            </div>
          </div>
          <div  data-aos="fade-right" className="mt-[30px] md:mt-[100px] text-[#979797] text-2xl poetson">
            As you can see, we’re just getting started here at PureFoods. We
            have so many more ideas as to how we can support and strengthen our
            community, while also promoting a healthy lifestyle. We can't wait
            to see what the future will bring!
          </div>
          <video
            className="w-full h-full object-cover my-[50px] rounded-2xl border-[20px] border-[#E7F9CF]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/about.mp4" type="video/mp4" />
          </video>
          <div className="max-w-full min-h-[586px] mx-[20px] md:mx-[50px] p-[30px] md:px-[80px] md:pr-[140px] md:py-[60px] mb-[80px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-between">
            <h1 className="text-3xl text-center md:text-6xl text-[#508F21] poppins">
              Contact & Hours
            </h1>
            <div className="flex flex-col xl:flex-row gap-[30px] text-[#828282] poetson items-center">
              <div  data-aos="fade-right" className="text-center max-w-[643px] min-h-[313px] py-[30px] lg:py-0 bg-white rounded-[66px] text-xl md:text-[28px] p-2 md:p-6 flex flex-col gap-[20px] md:gap-[30px] justify-between p-8">
                <p className=" ">
                  For suggestions, concerns, or comments, email us at
                  <br />
                  <span className="underline">onlypurefoods01@gmail.com</span>
                </p>
                <div className="flex flex-col gap-1">
                  <div>Our Hours:</div>
                  <div>Monday: Closed</div>
                  <div>Tuesday-Friday: 11:00 a.m. - 9:00 p.m.</div>
                  <div>Saturday: 9:00 a.m. - 9:00 p.m.</div>
                  <div>Sunday: 9:00 a.m. - 4:00 p.m.</div>
                </div>
              </div>
              <Image
                src="/images/about/img5.svg"
                width={413}
                height={413}
                alt="about us image"
                className="mx-auto my-[20px] md:my-[100px]"
              />
            </div>
          </div>

          <div className="max-w-full min-h-[186px] mx-[20px] md:mx-[50px] p-[30px] md:px-[80px] md:pr-[140px] md:py-[60px] mb-[80px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-evenly items-center">
            <h1 className="text-6xl text-center md:text-6xl text-[#727272] bebas">
              Feedback
            </h1>
            {/* <h1 className="underline  text-2xl text-center md:text-5xl text-[#508F21] bebas">
              
            </h1> */}
            <Button className="text-xl md:!text-3xl !rounded-full w-[250px] md:!w-[488px] !h-[50px] md:!h-[68px] !bg-white !text-[#508F21] "><a href="https://forms.gle/2CyYK9Bi7m7AGaJ38" target="_blank">Click for Feedback Form</a></Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurJourney;
