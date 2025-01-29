import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation,  Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import readarrow from "@/public/assets/images/read-arrow.svg";
interface FrameworkItem {
  id: number;
  title: string;
  dec: string;
  link: string;
  image: StaticImageData;
  icon: StaticImageData;

}

interface FrameworkSectionProps {

  data: FrameworkItem[];
}


  const HomeSlider: React.FC<FrameworkSectionProps> = ({  data }) => {
  return (
    <section className="pt-10 lg:pt-20 pb-20 md:pb-20 insp-mn relative darkbanner">
    <div className="container m-auto">
      <div className="flex justify-between mb-8 md:items-end mdgrd gap-4 ">
        <div className="text-left ">
          <h2 className="text-gray-900 mb-4 text-[28px] md:text-[48px]  font-black nuber-next leading-[1] ">
            Sustainable Development Goals
            <span className="text-[#FF671F]">.</span>
          </h2>
          <p className="text-font20 text-[#151515] opacity-[75%]  max-w-[75ch]">Explore how eco-friendly and locally produced materials are helping us move closer to the United Nations&apos; Sustainable Development Goals.</p>
        </div>
        <div className="flex gap-2 items-center group">
          <div>
            <p className="relative flex gap-2 max-w-fit    transition-opacity duration-300 text-font18 font-black leading-[1.5] rmbtn  text-font20 md:min-w-[100px]">Read More</p>
          </div>{" "}
          <Image src={readarrow} alt="icn1" className="transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
    <div className="ansm">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView='auto'
        navigation={{
          nextEl: ".swiper-button-next", // Target the next button
          prevEl: ".swiper-button-prev", // Target the previous button
        }}
        breakpoints={{
          0: {
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
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
          {data.map((framework) => (
            <SwiperSlide  key={framework.id}>
          <div
            className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"
            style={{
              backgroundImage: `url('/assets/images/home/sliconmn1.jpg')`,
            }}>
            <div className="flex items-center justify-center min-h-[460px]">
              <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                {/* Thumbnail Image Container with Hover Effect */}
                <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                  <Image src={framework.icon}  alt= {framework.title} className="  transform transition-all duration-500" />
                </div>

                {/* Description Content with Hover Effect */}
              </div>
              <div className="p-6">
                <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                      <h3 className="text-[22px] font-bold text-black"  >{framework.title} </h3>
                  <p className="text-sm text-black opacity-[75%] mt-2">{framework.dec}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
))}
      </Swiper>
    </div>
    <div className="container m-auto relative">
      <div className="swiper-button-next cursor-pointer group absolute bottom-[-70px] right-[25px]  transform -translate-y-1/2 text-white z-10">
        <div className="transition-all duration-300 group-hover:translate-x-1">
          <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="swiper-button-prev group cursor-pointer absolute bottom-[-70px] right-[60px] transform -translate-y-1/2 text-white z-10">
        {/* You can customize this icon as needed */}
        <div className="transition-all duration-300 group-hover:translate-x-[-5px]">
          <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9879 2L2.98787 17L17.9879 32M22.9939 7.00392L12.9978 17L22.9939 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  </section>

  );
};

export default HomeSlider;
