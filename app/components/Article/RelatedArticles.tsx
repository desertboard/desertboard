"use client";

import React ,{ useRef }  from "react";
import CustomClrSection from "../Common/CustomClrSection";
import { newsEvents } from "./data";
// import NewsListItem from "../NewsEventsListing/NewsListItem";
import '@/app/components/NewsEventsListing/listing.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import RelatedItem from "./RelatedItem";
const RelatedArticles: React.FC = () => {
  const swiperRef = useRef<any>(null);
  return (
    <CustomClrSection>
      <div className="container">
        <h2 className="heavydark mb-5 md:mb-10">
          Related Articles<span className="text-[#FF671F] leading-[1]">.</span>
        </h2>
        {/* <div className="related-news">
          {newsEvents.slice(0, 4).map((item) => (
            <NewsListItem listData={item} key={item.id} />
          ))}
        </div> */}
        <Swiper
                // install Swiper modules
                className="   "
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
                spaceBetween: 10,
              },
              410: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1524: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
            // onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}>


            {newsEvents.slice(0, 4).map((item) => (
              <SwiperSlide key={item.id} >
<div className="">
                  <RelatedItem listData={item} />
                  </div>


                </SwiperSlide>
          ))}



        </Swiper>
        <div className="container  relative">
          <div onClick={() => swiperRef.current?.slideNext()} className=" next-style cursor-pointer group absolute bottom-[-70px] right-[15px]  transform -translate-y-1/2 text-white z-10">
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
      </div>
    </CustomClrSection>
  );
};

export default RelatedArticles;
