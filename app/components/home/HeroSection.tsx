"use client";
import Link from "next/link";
import "@/app/components/home/usps.scss";

import "@/app/components/home/goalcrd.scss";
import Banner from "@/public/assets/banner2.jpg";




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
import UspList from "./UspList";
import MainDescBOx from "../Common/MainDescBox";
import { Homecarlsldata } from "../../data/homecarlsl";
import CardFlow from "../Common/cardflow";
import Footer from "../Common/footer";
// import HomeSlider from "../Common/homeslider";

import '@/app/components/home/goalcrd.scss';

const HeroSection = () => {
  return (
    <>
      <section className="relative h-[75vh] md:h-[98vh] bg-cover bg-center flex items-center justify-center text-center">
        {/* <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
        <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div> */}
        <figure className="absolute h-[75vh] md:h-[98vh] top-0   w-full  -z-40">
          <Image className="w-screen h-[75vh] md:h-[98vh] absolute object-cover" src={Banner} width={1920} height={900} alt="" />
        </figure>
        <div className="relative z-10 text-white px-6 top-0 lg:top-[120px]">
          <h1 className="text-[45px]  md:text-[96px] leading-none font-black mb-4 lg:mb-[52px] max-w-[15.5ch] nuber-next-heavy m-auto">DesertBoard&apos;s Palm Strand Board</h1>
          <p className="text-font28 font-[400] mb-6 md:mb-[52px] opacity-[75%] leading-[1.3]">The region&apos;s most sustainable building material</p>
          <Link href="#" className="flex items-center nuber-next group w-fit text-font18 font-black m-auto gap-4 rounded-none inline-block px-5 py-3 md:px-10 md:py-4
          border border-white text-white btnhs  hover:text-[#FF671F] hover:border-[#FF671F] transition rounded-md">
            Know More
            <Image src={readarrow} alt="icn1" width={16} height={24} className="fiterwt transition-all duration-300 group-hover:translate-x-2 " />
          </Link>
        </div>
      </section>

      <MainDescBOx
        secTitle="Inspiration"
        subTitle="A Legacy Rooted in the Desert"
        desc="In the heart of the desert, where towering date palm trees symbolize our heritage, a groundbreaking innovation has emerged: DesertBoard's Palm Strand Board (PSB®), the world’s first engineered palm-based board. "
        desc2=" For centuries, date palm trees have been a vital resource in the Middle East, historically used to construct Barasti houses that provided essential shelter in the harsh desert climate. Inspired by the rich legacy and the vision of the UAE's founding father, Sheikh Zayed bin Sultan Al Nahyan, DesertBoard® successfully produced the
              first engineered board in 2021."
        // mainImg="/assets/images/mn.jpg"
        mainVdo="/assets/images/home/liftvdo.mp4"
        vdoPoster="/assets/images/mn.jpg"
      />



      <UspList secTitle={"Key USP's"} />

      <section className="  py-10 lg:py-20   insp-mn relative inspbg">
        <div className="container m-auto">
          <div className="text-left mb-5 lg:mb-10">
            <h2 className="text-Darkgreen mb-4 text-[28px] md:text-[48px] leading-[1] font-black nuber-next">
              Sectors<span className="text-[#FF671F]">.</span>
            </h2>

            <p className="text-font20 text-litetext opacity-[75%]  max-w-[75ch]">PSB® boards diverse product lineup is used in everything from house building, furniture, and interior design to mass timber structures, fire-rated doors, building facades, and flooring.</p>

          </div>

          <CardFlow data={Homecarlsldata.data} />
        </div>
      </section>
      {/* <HomeSlider  data = {Homecarlsldata.data} /> */}
      <section className="pt-10 lg:pt-20 pb-20 md:pb-20 insp-mn relative darkbanner">
        <div className="container m-auto">
          <div className="flex justify-between mb-8 md:items-end mdgrd gap-4 ">
            <div className="text-left ">
              <h2 className="text-Darkgreen mb-4 text-[28px] md:text-[48px]  font-black nuber-next leading-[1] ">
                Sustainable Development Goals
                <span className="text-[#FF671F]">.</span>
              </h2>
              <p className="text-font20 text-litetext opacity-[75%]  max-w-[75ch]">Explore how eco-friendly and locally produced materials are helping us move closer to the United Nations&apos; Sustainable Development Goals.</p>
            </div>
            <div className="flex gap-3 items-center group rmbtn pb-3">
              <div>
                <p className="relative flex gap-2 max-w-fit    transition-opacity duration-300 text-font18 font-black leading-[1.5]    text-font20 md:min-w-[105px] nuber-next-heavy leading-[1.25] ">Read More</p>
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
            slidesPerView='auto'
            loop={true}
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

                      <h3 className="nuber-next-bold text-font28 font-bold text-black">SDG 3</h3>
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
                    <h3 className="nuber-next-bold text-font28 font-bold text-black">SDG 7</h3>
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
                    <h3 className="nuber-next-bold text-font28 font-bold text-black">SDG 8</h3>
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
                    <h3 className="nuber-next-bold text-font28 font-bold text-black">SDG 9</h3>
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
                    <h3 className="nuber-next-bold text-font28 font-bold text-black">SDG 10</h3>
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
                    <h3 className="nuber-next-bold text-font28 font-bold text-black">SDG 11</h3>
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
                    <h3 className="nuber-next-bold text-font28 font-bold text-black">SDG 12</h3>
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
                    <h3 className="nuber-next-bold text-font28 font-bold text-black">SDG 13</h3>
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
                    <h3 className="nuber-next-bold text-font28 font-bold text-black">SDG 15</h3>
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

      <section className="bg-[#FFB549]  ">
        <div className="container m-auto">
          <div className="flex items-center gap-3   py-6 md:py-10 group  justify-end">
            <p className="mb-0 nuber-next-bold text-font28 lg:text-[22px] font-bold text-white nuber-next">Discover Industry Solutions</p>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
<Footer />

    </>
  );
};

export default HeroSection;
