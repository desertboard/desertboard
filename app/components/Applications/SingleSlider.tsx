"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { assets } from "@/public/assets/images/assets";
import Image from "next/image";
const SectionTwo = () => {
  return (
    <>
     <div className="relative">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full"
            whileHover={{ scale: 1.02 }}
            />

            <figure className=" relative w-full h-[840px] overflow-hidden  ">
                                      <Image className="w-full   object-cover h-full" src={assets.sec2} width={320} height={320}  alt="" />
            </figure>

          </SwiperSlide>
          {/* <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full"
            whileHover={{ scale: 1.02 }}
            />

            <figure className=" relative w-full h-[840px] overflow-hidden  ">
                                      <Image className="w-full   object-cover h-full" src={assets.sec2} width={300} height={840}  alt="" />
            </figure>

          </SwiperSlide> */}



        {/* Slide 2 */}
        {/* <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full"

              whileHover={{ scale: 1.02 }}

            />
            <figure className=" relative w-full overflow-hidden  ">
                                      <Image className="w-full   object-cover h-full" src={assets.sec2} width={320} height={320}  alt="" />
            </figure>
        </SwiperSlide> */}
      </Swiper>


    </div>
    </>
  );
};

export default SectionTwo;
