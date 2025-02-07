"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { assets } from "@/public/assets/images/assets";
import Image from "next/image";
const SectionTwo = () => {


  return (
    <>
      <div className="slidefix">
        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView="auto"
          effect="fade"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          scrollbar={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
            1400: {
              slidesPerView: 1,
            },
            1789: {
              slidesPerView: 1,
            },
          }}

        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div>

            <figure className=" relative w-full h-[300px] md:h-[360px] lg:h-[85dvh] overflow-hidden  ">
              <Image
                className="w-full h-full"
                src={assets.sec2}
                fill
                objectFit="cover"
                alt=""
              />
              </figure>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <figure className=" relative w-full h-[300px] md:h-[360px] lg:h-[85dvh] overflow-hidden  ">
                <Image
                  className="w-full h-full"
                  src={assets.sec1}
                  fill
                  objectFit="cover"
                  alt=""
                />
              </figure>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </>
  );
};

export default SectionTwo;
