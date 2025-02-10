"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

// Images
import arrowExpand from "@/public/assets/images/icons/expand-icon.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StaticImageData } from "next/image";

interface LinkedInSliderProps {
  data: {
    id: number;
    title: string;
    desc: string;
    icon: StaticImageData;
    image: StaticImageData;
  }[];
}

const Slidersustain: React.FC<LinkedInSliderProps> = ({ data }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        // slidesPerView='auto'
        loop={true}
        navigation={{
          nextEl: ".button-next", // Target the next button
          prevEl: ".button-prev", // Target the previous button
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1524: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}


        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => console.log("slide change")}
      >

      {data.map((framework) => (
        <SwiperSlide key={framework.id}>
          <div
            className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"
            style={{
              backgroundImage: `url(${framework.image.src})`,
            }}
          >
            <div className="block lg:hidden absolute top-5 right-5 z-50 hover:cursor-pointer">
              <Image src={arrowExpand} alt="" width={20} height={20}></Image>
            </div>
            <div className="flex items-center justify-center min-h-[460px]">
              <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                {/* Thumbnail Image Container with Hover Effect */}
                <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                  <Image
                    src={framework.icon}
                    width={131}
                    height={131}
                    alt="Thumbnail"
                    className="  transform transition-all duration-500"
                  />
                </div>

                {/* Description Content with Hover Effect */}
              </div>
              <div className="p-6">
                <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                  <h3 className="nuber-next-bold text-font28  text-black">
                    {framework.title}
                  </h3>
                  <p className="helvetica text-font20 text-black opacity-[75%] mt-2">
                    {framework.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      ))}
      </Swiper>
      <div className="container  relative">
          <div onClick={() => swiperRef.current?.slideNext()}  className=" next-style cursor-pointer group absolute bottom-[-70px] right-[15px]  transform -translate-y-1/2 text-white z-10">
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div onClick={() => swiperRef.current?.slidePrev()} className=" prev-style group cursor-pointer absolute bottom-[-70px]   right-[50px] transform -translate-y-1/2 text-white z-10">
            {/* You can customize this icon as needed */}
            <div className="transition-all duration-300 group-hover:translate-x-[-5px]">
              <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9879 2L2.98787 17L17.9879 32M22.9939 7.00392L12.9978 17L22.9939 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
    </>
  );
};

export default Slidersustain;
