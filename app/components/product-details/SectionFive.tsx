"use client";
import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import lfbef from "@/public/assets/images/home/leaf.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
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
const SectionFive: React.FC<WhySupremeProps> = ({ sectitle, data }) => {
  const swiperRef = useRef<SwiperType | null>(null);

   const [showNavButtons, setShowNavButtons] = useState(false);

    useEffect(() => {
      const updateNavVisibility = () => {
        if (swiperRef.current) {
          const slidesPerView = swiperRef.current.params.slidesPerView;
          if (typeof slidesPerView === 'number') {
            setShowNavButtons(slidesPerView < 6);
          }
        }
      };

      // Check on initialization and listen to resize events
      if (swiperRef.current) {
        updateNavVisibility();
        swiperRef.current.on("resize", updateNavVisibility);
      }

      return () => {
        if (swiperRef.current) {
          swiperRef.current.off("resize", updateNavVisibility);
        }
      };
    }, []);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
      if (hoveredIndex !== null && contentRefs.current[hoveredIndex]) {
        contentRefs.current[hoveredIndex]!.style.maxHeight =
          contentRefs.current[hoveredIndex]!.scrollHeight + 20+ "px"; // Expand to content height
      }
    }, [hoveredIndex]); // Runs when hoveredIndex changes

  return (
    <>

      <section className=" pt-10 lg:pt-20 pb-[80px] lg:pb-[80px]    insp-mn relative inspbg ">
        <motion.div
          className="ola ola-right absolute top-5 right-[-10%] w-[20em] md:w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={lfbef}
            alt="Description of the image"
          ></Image>
        </motion.div>

        <div className="lfbef ola-right absolute bottom-0 left-[-10%] w-[20em] md:w-[40em] rotate-180">
          <Image
            className="absolute"
            src={lfbef}
            alt="Description of the image"
          ></Image>
        </div>
        <div className="container ">
          <div>
            <h2 className="heavydark mb-6 md:mb-10">
            {sectitle}<span className="text-orange">.</span>
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
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={() => console.log("slide change")}>
                {data.map((item) => (
  <SwiperSlide key={item.id}>
                                    <div
                                      className="relative group overflow-hidden transform hrcd goal-crd bg-center bg-cover transition-all duration-500 ease-in-out"
                      style={{ backgroundImage: `url(${item.image.src})` }}
                      onMouseEnter={() => setHoveredIndex(item.id)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onTouchStart={() => setHoveredIndex(item.id)}  // For mobile devices
                                    >
                                      <div className="flex items-end pb-1 md:pb-3 xl:pb-3 min-h-[300px] lg:min-h-[426px]">
                                        <div className="px-4 md:px-5 xl:px-5 w-full">
                                          <h3 className="nubernext28bold text-white translate-y-[0px] pb-2 transition-all duration-500 delay-200 group-hover:translate-y-[-10px]">
                                            {item.title}
                                          </h3>


                                            <p className="text-white overflow-hidden   h-0 group-hover:h-full   group-hover:translate-y-[-10px]
                                            transition-all duration-500 ease-in-out  "
                                            style={{
                                              maxHeight: hoveredIndex === item.id ? `${contentRefs.current[item.id]?.scrollHeight  || 0}px` : "0px",
                                                                        }}
                                                                        ref={(el) => {
                                                                          contentRefs.current[item.id] = el;
                                                                        }}
                          >
                                            <span className="">
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
            {showNavButtons && (
              <div className="  relative">
                <div onClick={() => swiperRef.current?.slideNext()} className=" next-style cursor-pointer group absolute bottom-[-70px] right-[15px]  transform -translate-y-1/2 text-white z-10">
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
                <div onClick={() => swiperRef.current?.slidePrev()} className=" prev-style group cursor-pointer absolute bottom-[-70px]   right-[50px] transform -translate-y-1/2 text-white z-10">
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
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFive;
