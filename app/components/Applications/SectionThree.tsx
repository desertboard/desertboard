'use client';
import React from "react";
import Image, { StaticImageData } from "next/image";
import ola from "@/public/assets/images/home/ola.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";

interface WhySupremeProps {
  sectitle: string;
  data: {
    id: number;
    title: string;
    image: StaticImageData
    desc: string;
  }[];
}

// Component to display the data
const SectionThree: React.FC<WhySupremeProps> = ({ sectitle, data }) => {
  return (
    <>
      <section className=" py-10 lg:py-20  relative z-[1] bg-primary text-white overflow-hidden border-t-[5px] border-b-[5px] border-secondary">
      <motion.div className="ola ola-right absolute top-[-200px] right-[-10%] w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Image className="absolute" src={ola} alt="Description of the image"></Image>
      </motion.div>


        <div className="container ">
          <div><h2 className="heavydark48 mb-6 md:mb-10">{sectitle}<span className="text-orange">.</span></h2></div>

          <div>
          <motion.div className="ansm"  initial={{ opacity: 0, y: -30 }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: -30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.5 },
                },
              }}>
          <Swiper
                // install Swiper modules
                className="swpstss  "
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            // slidesPerView='auto'
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next", // Target the next button
              prevEl: ".swiper-button-prev", // Target the previous button
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              410: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1700: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
              1800: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}>
{data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative group overflow-hidden transform goal-crd bg-center bg-cover transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url(${item.image.src})` }}
              >
                {/* <div className="absolute bottom-[20px] left-[20px] opacity-[1] group-hover:opacity-[0]">
                    <h3 className="nubernext28bold   text-white " >{item.title}</h3></div> */}
                <div className="flex items-end  min-h-[300px] lg:min-h-[462px] sld transition-colors duration-500  ">

                  <div className="p-5 transition-all duration-500 ease-in-out w-full  ">
                    <h3 className="nubernext28bold max-w-[15ch] text-white transition-all duration-500 ease-in-out w-full  translate-y-[0px] group-hover:translate-y-[-20px]">

                      <span className="  overflow-hidden transition-opacity duration-500 group-hover:delay-100 delay-0 ">
                        {item.title}
                        </span>
                          </h3>

                          <p className="text-white overflow-hidden pt-3  min-w-[45ch] h-0 group-hover:h-full
                          transition-all duration-500 ease-in-out translate-y-[0px] group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-[1]" >
                           <span className="opacity-0 group-hover:opacity-100  transition-opacity duration-500 group-hover:delay-100 delay-0">
                        {item.desc}
                        </span>
                          </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}



          </Swiper>
        </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
