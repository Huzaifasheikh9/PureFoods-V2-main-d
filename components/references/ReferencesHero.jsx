import React from "react";
import Wrapper from "../../shared/Wrapper";
import Image from "next/image";

const ReferencesHero = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[20px] mx-2 md:mx-[50px] ">
            <h2 className="text-3xl md:text-5xl text-[#508F21] bebas customMargin mt-5">Resources</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-1 text-[#508F21] border h-[130px] border-[#508F21] p-2 md:p-[60px] rounded-[60px] custom_bg">
              <p className="text-lg md:text-xl lg:text-[30px] poppins font-bold"><a href="https://drive.google.com/file/d/1FT5bsxvcBxCQ0QbGJa1kh4BaSYHqdYGb/view?usp=sharing" target="_blank">Works Cited</a></p>
              <p className="text-lg md:text-xl lg:text-[30px] poppins font-bold"><a href="https://drive.google.com/file/d/106p3jtqPZIlXnK366V127ody7BSSPyC8/view?usp=sharing" target="_blank">Images From</a> </p>
              <p className="text-lg md:text-xl lg:text-[30px] poppins font-bold"><a href="https://drive.google.com/file/d/1_9fr7ngArkkAYobHwQhXbyWsqgK_r48b/view?usp=sharin" target="_blank">Copyrights</a> </p>
              <p className="text-lg md:text-xl lg:text-[30px] poppins font-bold"><a href="https://drive.google.com/file/d/1xD8fe88A3q5x58hVkUwy39OBaiiF-fKf/view?usp=sharing" target="_blank">Worklog</a> </p>
            </div>
            <div className="flex flex-col gap-3 md:gap-[30px] border border-[#508F21] rounded-[60px] p-3 md:p-[20px] custom_bg text-center ">
            <h2 className="text-3xl md:text-5xl text-[#508F21] bebas customMargin underline ">Technologies & Tools Used</h2>
              <p data-aos="fade-right" className="text-xl md:text-[25px] poetson text-[#508F21]">
                <a href="https://github.com/vercel/next.js/blob/canary/license.md" target="_blank" rel="noopener noreferrer">Next.js License</a>
              </p>
              <p data-aos="fade-right" className="text-xl md:text-[25px] poetson text-[#508F21]">
                <a href="https://github.com/facebook/react/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">React License</a>
              </p>
              <p data-aos="fade-right" className="text-xl md:text-[25px] poetson text-[#508F21]">
                <a href="https://github.com/ant-design/ant-design/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">Ant Design License</a>
              </p>
              <p data-aos="fade-right" className="text-xl md:text-[25px] poetson text-[#508F21]">
                <a href="https://github.com/michalsnik/aos/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">AOS License</a>
              </p>
              <p data-aos="fade-right" className="text-xl md:text-[25px] poetson text-[#508F21]">
                <a href="https://github.com/emailjs-com/emailjs-sdk/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">EmailJS License</a>
              </p>
              <p data-aos="fade-right" className="text-xl md:text-[25px] poetson text-[#508F21]">
                <a href="https://github.com/react-icons/react-icons/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">React Icons License</a>
              </p>
              <p data-aos="fade-right" className="text-xl md:text-[25px] poetson text-[#508F21]">
                <a href="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">Tailwind CSS License</a>
              </p>
              <p data-aos="fade-right" className="text-xl md:text-[25px] poetson text-[#508F21]">
                <a href="https://github.com/postcss/postcss/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">PostCSS License</a>
              </p>
              <p data-aos="fade-right" className="text-xl md:text-[25px] poetson text-[#508F21]">
                <a href="https://github.com/postcss/autoprefixer/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Autoprefixer License</a>
              </p>
            </div>
            <div className="max-w-full min-h-[320px] p-[30px] md:px-[80px] md:pr-[140px] md:py-[60px] mb-[80px] rounded-[60px] flex flex-col gap-[20px] relative custom_bg justify-center items-center" data-aos="fade-right">
              <h3 className="text-small md:text-[20px] poetson text-[#508F21]">
                The website was designed from scratch, starting with a Figma prototype to plan the layout and visuals.
                <br />
                <br />
                You can view the Figma design here:<br />
              
                 <a href="https://www.figma.com/file/OtDKLl1F06RvupclhsGsGo?type=design&node-id=0%3A1&mode=design" target="_blank">https://www.figma.com/file/OtDKLl1F06RvupclhsGsGo?type=design&node-id=0%3A1&mode=design</a>
                <br />
                <br />

                For development, Next.js and React were used for a fast and interactive experience. Tailwind CSS handled styling, while Ant Design provided UI components. AOS added smooth animations, and React Icons enhanced visuals. Since there's no backend, EmailJS was integrated for form submissions. PostCSS and Autoprefixer ensured consistent styling.
              </h3>
              {/* <div className="flex justify-center">
                <iframe
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  width="800"
                  height="450"
                  src="https://embed.figma.com/design/OtDKLl1F06RvupclhsGsGo/PureFoods?node-id=0-1&embed-host=share"
                  allowFullScreen
                ></iframe>
              </div> */}

            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ReferencesHero;