"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ola from "@/public/assets/images/home/ola.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

interface WhySupremeProps {
  data:  {
    data: {
      _id: string;
      name: string;
      image: string;
      description: string
    }[]
  }
}

// Component to display the data
const SectionThree: React.FC<WhySupremeProps> = ({ data }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const contentRefs = useRef(new Map());

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

  console.log(data)


  useEffect(() => {
    if (hoveredIndex !== null) {
      const contentRef = contentRefs.current.get(hoveredIndex);
      if (contentRef) {
        contentRef.style.maxHeight = contentRef.scrollHeight + 20 + "px"; // Expand to content height
      }
    }
  }, [hoveredIndex]);
  
   // Runs when hoveredIndex changes
  return (
    <>
      <section className="  pt-10 lg:pt-20 pb-[80px] lg:pb-[80px]    relative z-[1] bg-primary text-white overflow-hidden border-t-[5px] border-b-[5px] border-secondary">
        <motion.div
          className="ola ola-right absolute top-[-200px] right-[-10%] w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={ola}
            alt="Description of the image"
          ></Image>
        </motion.div>

        <div className="container ">
          <div>
            <h2 className="heavydark48 mb-6 md:mb-10">
            Customizable Finishes
              <span className="text-orange">.</span>
            </h2>
          </div>

          <div>
            <motion.div
              className="ansm"
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
                pagination={false}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {data && data.data &&  data.data.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div
                      className="relative group overflow-hidden transform goal-crd hrcd bg-center bg-cover transition-all duration-500 ease-in-out"
                      style={{ backgroundImage: `url(${item.image})` }}
                      onMouseEnter={() => setHoveredIndex(item._id)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onTouchStart={() => setHoveredIndex(item._id)}  // For mobile devices
                    >
                      {/* <div className="absolute bottom-[20px] left-[20px] opacity-[1] group-hover:opacity-[0]">
                    <h3 className="nubernext28bold  text-white " >{item.description}</h3></div> */}
                      <div className="flex items-end  min-h-[300px] lg:min-h-[462px] sld transition-colors duration-500  ">
                        <div className="p-5 transition-all duration-500 ease-in-out w-full  ">
                          <h3 className="nubernext28bold max-w-[15ch] text-white transition-all duration-500 ease-linear w-full  translate-y-[0px] delay-200 group-hover:translate-y-[-10px]">
                            {item.name}
                          </h3>

                          <p
                            className="text-white overflow-hidden pt-3 transition-all duration-500 ease-in-out   "
                            style={{
                              maxHeight:
                                hoveredIndex === item._id
                                  ? `${contentRefs.current.get(item._id)?.scrollHeight || 0}px`
                                  : "0px",
                            }}
                            ref={(el) => {
                              if (el) {
                                contentRefs.current.set(item._id, el);
                              } else {
                                contentRefs.current.delete(item._id); // Clean up if the element is removed
                              }
                            }}
                          >
                            <span className="   duration-500 delay-0 block">
                              {item.description}
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
        <div className="relative">
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className="next-style cursor-pointer group absolute bottom-[-70px] right-[15px] transform -translate-y-1/2 text-white z-10"
          >
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
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className="prev-style group cursor-pointer absolute bottom-[-70px] right-[50px] transform -translate-y-1/2 text-white z-10"
          >
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

export default SectionThree;
