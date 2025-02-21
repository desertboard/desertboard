"use client";

import React, { useEffect,  useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideComponent } from "@splidejs/splide";
import "@splidejs/react-splide/css"; // Import Splide CSS
import Image from "next/image";


import { AboutType } from "@/types/AboutType";
const SplideSlider = ({ data }: { data: AboutType }) => {

  const [mainSlider, setMainSlider] = useState<SplideComponent | null>(null);
  const [thumbSlider, setThumbSlider] = useState<SplideComponent | null>(null);


  useEffect(() => {
    if (mainSlider && thumbSlider) {
      mainSlider.sync(thumbSlider);
    }
  }, [mainSlider, thumbSlider]);

  return (
    <div className="flex w-full  mx-auto flex-col md:flex-row   relative ">
      {/* Main Slider */}
      <div className="w-full relative md:absolute mainsplide ">
        <div className="container">
          <h2 className="text-white z-10 text-font48 nuber-next-heavy leading-[1] absolute top-10 lg:top-20 ">
            Our History<span className="text-[#FF671F]">.</span>
          </h2>
        </div>

        <Splide
          options={{
            type: "fade",
            pagination: false,
            arrows: false,
            height: "660px",
            breakpoints: {
              480: { height: "600px" },
              797: { height: "500px" },
              992: {
                height: "550px",
              },
            },
          }}
          onMounted={setMainSlider}
        >
          {data && data.about[0] && data.about[0].history.map((item, index) => (
            <SplideSlide key={index}>
              <div className="container h-full">
                <div className="timeline__bg flex-grow bg-cover bg-center absolute top-0 left-0 z-1 history__bg  w-full h-full">
                  <div className="timeline__img">
                    <Image
                      src={item.image}
                      fill
                      objectFit="cover"
                      className="h-full w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:w-2/3 h-full rounded-lg shadow   flex flex-col justify-end pb-20 relative z-30  ">
                  <h3 className="text-4xl lg:text-5xl lg:text-font72 helveticaBold text-white mb-2 md:mb-10 nuber-next-heavy ">
                    {item.timeSpan}
                  </h3>
                  <h4 className="text-xl lg:text-2xl lg:text-font28 leading-[1.2] opacity-75 nuber-next-heavy text-white mb-2 md:mb-5">
                    {item.heading}
                  </h4>
                  <p className="text-white text-font20 leading-[1.3] opacity-75 font-normal pb-[63px] md:pb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Thumbnail Slider */}

        <div className="w-full container   thumbsplidemn">
        <div className="relative">
        <div className="  top-[-100px] md:top-[0] relative md:w-1/4 mt-0 md:ml-auto">
        <Splide
            options={{
              type: "loop",
              direction: "ttb", // Vertical Scroll
              height: "660px",
              breakpoints: {
                797: {
                  direction: "ltr", // Horizontal on Mobile
                  perPage: 3,
                  height: "auto",
                  gap: "5px",
                },
                1200: {
                  perPage:4,
                },
                992: {
                  height: "550px",
                },
              },
              perPage: 4,
              wheel: true,
              pagination: false,
              isNavigation: true, // Enables thumbnail clicking
            }}
            onMounted={setThumbSlider}
          >
            {data && data.about[0] && data.about[0].history.map((item, index) => (
              <SplideSlide key={index}>
                <div
                  className={`w-full h-full flex items-center justify-center xl:justify-end rounded transition-all duration-300`}
                >
                  <span
                    className={`  nuber-next-bold font-[400] text-font-[14px] md:text-font24 leading-[1.3] transition-colors duration-300 text-center xl:text-right text-white opacity-50   hover:text-gray-200 `}
                  >
                    {item.timeSpan}
                  </span>
                  <div
                    className={`hidden xl:block lg:ml-3 h-[4px] w-[68px] transition-all ease-linear duration-300 stylefirst opacity-0 group-hover:opacity-50 `}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
         </div>
        </div>
        </div>
      </div>

  );
};

export default SplideSlider;
