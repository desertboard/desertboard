"use client";
import React from "react";
import Image from "next/image";
import lfbef from "@/public/assets/images/home/leaf.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";

const accordianData = [
  {
    image: "/assets/images/applications/ra1.jpg",
    title: "Façade Cladding",
    desc: "A wide range of uncoated boards, used as a core material, offering flexibility for customization and finishing.",
  },
  {
    image: "/assets/images/applications/ra2.jpg",
    title: "Wall Cladding",
    desc: "A smooth, decorative melamine-surfaced board, perfect for furniture, cabinetry, and interior applications.",
  },
  {
    image: "/assets/images/applications/ra3.jpg",
    title: "Partitional Wall",
    desc: "A Smooth, sanded surface board, ideal for interior fit-outs and paneling, ensuring enhanced finish quality and easy customization.",
  },
  {
    image: "/assets/images/applications/ra4.jpg",
    title: "Concrete Forming",
    desc: "A smooth, decorative melamine-surfaced board, perfect for furniture, cabinetry, and interior applications.",
  },
  {
    image: "/assets/images/applications/ra5.jpg",
    title: "Sub-Flooring",
    desc: "A flawless, smooth-surfaced board achieved with putty, ideal for high-quality paint applications and achieving a polished, refined look. ",
  },
  {
    image: "/assets/images/applications/ra5.jpg",
    title: "Sub-Flooring",
    desc: "A flawless, smooth-surfaced board achieved with putty, ideal for high-quality paint applications and achieving a polished, refined look. ",
  },
];
const SectionFive = () => {
  return (
    <>
      <section className=" py-20  insp-mn relative inspbg ">
        <motion.div
          className="ola ola-right absolute top-5 right-[-10%] w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={lfbef}
            alt="Description of the image"
          ></Image>
        </motion.div>

        <div className="lfbef ola-right absolute bottom-0 left-[-10%] w-[40em] rotate-180">
          <Image
            className="absolute"
            src={lfbef}
            alt="Description of the image"
          ></Image>
        </div>
        <div className="container ">
          <div>
            <h2 className="heavydark mb-6 md:mb-10">
            Related Applications<span className="text-orange">.</span>
            </h2>
          </div>

          <div>
            <motion.div
              className=" "
              initial={{ opacity: 0, y: -30 }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: -30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.5 },
                },
              }}
            >
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={5}
                loop={true}
                navigation={{
                  nextEl: ".button-next", // Target the next button
                  prevEl: ".button-next", // Target the previous button
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  410: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1524: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
                }}
                pagination={false}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {accordianData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative group overflow-hidden transform hrcd goal-crd bg-center bg-cover transition-all duration-500 ease-in-out"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="flex items-end pb-6 md:pb-10 min-h-[462px]">
                        <div className="px-6 md:px-10 w-full">
                          <h3 className="nubernext28bold text-white translate-y-[5px] transition-all duration-500 group-hover:translate-y-[-10px]">
                            {item.title}
                          </h3>

                            <p className="text-white overflow-hidden pt-3 h-0 group-hover:h-full   group-hover:translate-y-[-10px]
                            transition-all duration-500 ease-in-out  ">
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
            <div className="  relative">
              <div className="button-next next-style cursor-pointer group absolute bottom-[-70px] right-[15px]  transform -translate-y-1/2 text-white z-10">
                <div className="transition-all duration-300 group-hover:translate-x-1">
                  <svg
                    width="20"
                    height="30"
                    viewBox="0 0 25 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996"
                      stroke="#FF671F"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="button-next prev-style group cursor-pointer absolute bottom-[-70px]   right-[50px] transform -translate-y-1/2 text-white z-10">
                {/* You can customize this icon as needed */}
                <div className="transition-all duration-300 group-hover:translate-x-[-5px]">
                  <svg
                    width="20"
                    height="30"
                    viewBox="0 0 25 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9879 2L2.98787 17L17.9879 32M22.9939 7.00392L12.9978 17L22.9939 26.996"
                      stroke="#FF671F"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFive;
