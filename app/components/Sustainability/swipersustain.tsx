"use client";
import React, {  useRef, useState } from "react";
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
import { Sustainability } from "@/types/Sustainability";



const Swipersustain = ({ data }:{
  data:Sustainability
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeSlide, setActiveSlide] = useState<number | null>(0); // Start with the first slide active

  // Set active slide on hover and reset on mouse leave



  const formatText = (text: string) => {
    return text.replace(/®/g, "<sup>®</sup>");
  };

  return (
    <>
      <Swiper
      className={`suscard-mn mousemove`}
      modules={[Navigation, Pagination]}
      slidesPerView="auto"
      loop={true}
      navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
      }}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 0 },
        560: { slidesPerView: 2, spaceBetween: 0 },
        768: { slidesPerView: 3, spaceBetween: 0 },
        992: { slidesPerView: 3, spaceBetween: 0 },
        // 1200: { slidesPerView: 4, spaceBetween: 0 },
        1200: { slidesPerView: 9, spaceBetween: 0 },
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data &&
        data.sustainability &&
        data.sustainability.goals.goals.map((framework, index) => (
          <SwiperSlide
            key={framework._id}
            className={`suscard bg-cover bg-center flex-shrink-0 ${
              activeSlide === index ? "swiper-slide-active activsw" : ""
            }`}
            style={{ backgroundImage: `url(${framework.image})` }}
            onMouseEnter={() => setActiveSlide(index)}
          >
            <div className="relative group overflow-hidden transform growf goal-crd bg-center delay-0">
              <div className="block lg:hidden absolute top-5 right-5 z-50 hover:cursor-pointer">
                <Image src={arrowExpand} alt="" width={20} height={20} />
              </div>
              <div className="flex items-center justify-center min-h-[484px] max-h-[484px]">
                <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                  <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                    {framework.logo !== "" && (
                      <Image
                        src={framework.logo}
                        width={131}
                        height={131}
                        alt="Thumbnail"
                        className="transform transition-all duration-500"
                      />
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="textvisible opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 md:group-hover:delay-500 delay-0">
                    <h3
                      className="nuber-next-bold text-font28 text-black"
                      dangerouslySetInnerHTML={{ __html: formatText(framework.heading) }}
                    />
                    <p
                      className="helvetica text-font20 text-black opacity-[75%] mt-2"
                      dangerouslySetInnerHTML={{ __html: formatText(framework.description) }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>

      <div className="container relative">
        <div onClick={() => swiperRef.current?.slideNext()} className="next-style cursor-pointer group absolute bottom-[-70px] right-[15px] transform -translate-y-1/2 text-white z-10">
          <div className="transition-all duration-300 group-hover:translate-x-1">
            <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div onClick={() => swiperRef.current?.slidePrev()} className="prev-style group cursor-pointer absolute bottom-[-70px] right-[50px] transform -translate-y-1/2 text-white z-10">
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

export default Swipersustain;
