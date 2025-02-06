"use client";

import React from "react";
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
            // navigation={{
            //   nextEl: ".swiper-button-next", // Target the next button
            //   prevEl: ".swiper-button-prev", // Target the previous button
            // }}
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
            onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}>


            {newsEvents.slice(0, 4).map((item) => (
              <SwiperSlide key={item.id} >
<div className="">
                  <RelatedItem listData={item} />
                  </div>


                </SwiperSlide>
          ))}



          </Swiper>
      </div>
    </CustomClrSection>
  );
};

export default RelatedArticles;
