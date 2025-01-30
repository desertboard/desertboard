"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

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
            className="relative w-full h-[500px] md:h-[840px] bg-cover bg-center"
            style={{ backgroundImage: `url(/assets/images/sectors/sec1.png)` }}
            whileHover={{ scale: 1.02 }}
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[500px] md:h-[840px] bg-cover bg-center"
            style={{ backgroundImage: `url(/assets/images/sectors/sec2.png)` }}
            whileHover={{ scale: 1.02 }}
          />
        </SwiperSlide>
      </Swiper>


    </div>
    </>
  );
};

export default SectionTwo;
