'use client'
import React from 'react'

import svsic1 from "@/public/assets/images/home/svsic1.png";
import svsic2 from "@/public/assets/images/home/svsic2.png";
import svsic3 from "@/public/assets/images/home/svsic3.png";
import svsic4 from "@/public/assets/images/home/svsic4.png";
import svsic5 from "@/public/assets/images/home/svsic5.png";
import svsic6 from "@/public/assets/images/home/svsic6.png";
import svsic7 from "@/public/assets/images/home/svsic7.png";
import svsic8 from "@/public/assets/images/home/svsic8.png";
import svsic9 from "@/public/assets/images/home/svsic9.png";

import readarrow from "@/public/assets/images/read-arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import "@/app/components/home/goalcrd.scss";


const SustainabeSc = () => {
  return (
    <>
      <section className="pt-10 lg:pt-20 pb-20 md:pb-20 insp-mn relative darkbanner">
      
        <div className="container m-auto">
          <div className="flex justify-between mb-8 md:items-end mdgrd gap-4 ">
            <div className="text-left ">
              <h2 className="text-Darkgreen mb-4 text-[28px] md:text-[48px]   nuber-next leading-[1] ">
                Sustainable Development Goals
                <span className="text-[#FF671F]">.</span>
              </h2>
              <p className="text-font20 text-litetext opacity-[75%]  max-w-[75ch]">Explore how eco-friendly and locally produced materials are helping us move closer to the United Nations&apos; Sustainable Development Goals.</p>
            </div>
            <div className="flex gap-3 items-center group rmbtn pb-3">
              <div>
                <p className="relative flex gap-2 max-w-fit    transition-opacity duration-300 text-font18  leading-[1.5]    text-font20 md:min-w-[105px] nuber-next-heavy leading-[1.25] ">Read More</p>
              </div>{" "}
              <Image src={readarrow} alt="icn1" className="transition-all duration-300 group-hover:translate-x-1 " />
            </div>
          </div>
        </div>
        <div className="ansm">
          <Swiper
            // install Swiper modules
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
           <SwiperSlide>
              <div

                className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"

                style={{
                  backgroundImage: `url('/assets/images/home/sliconmn1.jpg')`,
                }}>
                <div className="flex items-center justify-center min-h-[460px]">
                  <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                    {/* Thumbnail Image Container with Hover Effect */}
                    <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                      <Image src={svsic1} width={131} height={131} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">

                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">

                      <h3 className="nuber-next-bold text-font28  text-black">SDG 3</h3>
                      <p className="helvetica text-font20 text-black opacity-[75%] mt-2">DesertBoard’s zero-formaldehdye Palm Strand Boards ® improve indoor air quality  </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"
                style={{
                  backgroundImage: `url('/assets/images/home/sliconmn2.jpg')`,
                }}>
                <div className="flex items-center justify-center min-h-[460px]">
                  <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                    {/* Thumbnail Image Container with Hover Effect */}
                    <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                      <Image src={svsic2} width={131} height={131} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="nuber-next-bold text-font28   text-black">SDG 7</h3>
                      <p className="helvetica text-font20 text-black opacity-[75%] mt-2">DesertBoard’s eco-friendly manufacturing process is powered by 30% clean energy.  </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"
                style={{
                  backgroundImage: `url('/assets/images/home/sliconmn3.jpg')`,
                }}>
                <div className="flex items-center justify-center min-h-[460px]">
                  <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                    {/* Thumbnail Image Container with Hover Effect */}
                    <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                      <Image src={svsic3} width={131} height={131} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="nuber-next-bold text-font28  text-black">SDG 8</h3>
                      <p className="helvetica text-font20 text-black opacity-[75%] mt-2">DesertBoard adheres to the Abu Dhabi Occupational Safety and Health System Framework, along with ISO 45001, ISO 14001, and ISO 9001 standards, ensuring a safe work environment. </p>
                     </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"
                style={{
                  backgroundImage: `url('/assets/images/home/sliconmn4.jpg')`,
                }}>
                <div className="flex items-center justify-center min-h-[460px]">
                  <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                    {/* Thumbnail Image Container with Hover Effect */}
                    <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                      <Image src={svsic4} width={131} height={131} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="nuber-next-bold text-font28   text-black">SDG 9</h3>
                      <p className="helvetica text-font20 text-black opacity-[75%] mt-2">DesertBoard has generated 284 job opportunities since inception, divided between 156 factory team members and 128 back-office team members.</p>
                   </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"
                style={{
                  backgroundImage: `url('/assets/images/home/sliconmn5.jpg')`,
                }}>
                <div className="flex items-center justify-center min-h-[460px]">
                  <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                    {/* Thumbnail Image Container with Hover Effect */}
                    <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                      <Image src={svsic5} width={131} height={131} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="nuber-next-bold text-font28   text-black">SDG 10</h3>
                      <p className="helvetica text-font20 text-black opacity-[75%] mt-2">DesertBoard proudly embraces diversity and inclusivity in the workplace, employing a workforce that includes 19 nationalities, with a significant female representation. </p>
                     </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"
                style={{
                  backgroundImage: `url('/assets/images/home/sliconmn6.jpg')`,
                }}>
                <div className="flex items-center justify-center min-h-[460px]">
                  <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                    {/* Thumbnail Image Container with Hover Effect */}
                    <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                      <Image src={svsic6} width={131} height={131} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="nuber-next-bold text-font28   text-black">SDG 11</h3>
                      <p className="helvetica text-font20 text-black opacity-[75%] mt-2">DesertBoard honors and preserves Emirati heritage by upcycling palm frond biomass into innovative sustainable building solution.    </p>
                     </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"
                style={{
                  backgroundImage: `url('/assets/images/home/sliconmn7.jpg')`,
                }}>
                <div className="flex items-center justify-center min-h-[460px]">
                  <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                    {/* Thumbnail Image Container with Hover Effect */}
                    <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                      <Image src={svsic7} width={131} height={131} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="nuber-next-bold text-font28  text-black">SDG 12</h3>
                      <p className="helvetica text-font20 text-black opacity-[75%] mt-2">
                      DesertBoard proactively advocates for the significance of sustainable building solutions, having participated in 30+ regional and global forums in 2024.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"
                style={{
                  backgroundImage: `url('/assets/images/home/sliconmn8.jpg')`,
                }}>
                <div className="flex items-center justify-center min-h-[460px]">
                  <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                    {/* Thumbnail Image Container with Hover Effect */}
                    <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                      <Image src={svsic8} width={131} height={131} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="nuber-next-bold text-font28   text-black">SDG 13</h3>
                      <p className="helvetica text-font20 text-black opacity-[75%] mt-2">DesertBoard proudly supports the UAE&apos;s Net Zero 2050 strategy, Saudi Arabia&apos;s Net Zero 2060 initiative, and India&apos;s Net Zero 2070 vision.</p>

                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative group overflow-hidden transform   growf goal-crd   bg-center delay-0"
                style={{
                  backgroundImage: `url('/assets/images/home/sliconmn9.jpg')`,
                }}>
                <div className="flex items-center justify-center min-h-[460px]">
                  <div className="absolute bg-cover bg-center h-full goal-crd__icon">
                    {/* Thumbnail Image Container with Hover Effect */}
                    <div className="absolute flex items-center justify-center transition-all duration-500 goal-crd__ibox">
                      <Image src={svsic9} width={131} height={131} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="nuber-next-bold text-font28  text-black">SDG 15</h3>
                      <p className="helvetica text-font20 text-black opacity-[75%] mt-2">
                      DesertBoard protects the natural ecosystem with zero-deforestation supply chain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <div className="container m-auto relative">
          <div className="swiper-button-next cursor-pointer group absolute bottom-[-70px] right-[15px]  transform -translate-y-1/2 text-white z-10">
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="swiper-button-prev group cursor-pointer absolute bottom-[-70px] right-[50px] transform -translate-y-1/2 text-white z-10">
            {/* You can customize this icon as needed */}
            <div className="transition-all duration-300 group-hover:translate-x-[-5px]">
              <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9879 2L2.98787 17L17.9879 32M22.9939 7.00392L12.9978 17L22.9939 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default SustainabeSc