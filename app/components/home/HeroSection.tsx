"use client";
import Link from "next/link";
import "@/app/components/home/usps.scss";

import "@/app/components/home/goalcrd.scss";
import Banner from "@/public/assets/banner.jpg";


import iconsl1 from "@/public/assets/images/home/slicon1.png";
import iconsl2 from "@/public/assets/images/home/slicon2.png";
import iconsl3 from "@/public/assets/images/home/slicon3.png";
import iconsl4 from "@/public/assets/images/home/slicon4.png";
import iconsl5 from "@/public/assets/images/home/slicon5.png";
import iconsl6 from "@/public/assets/images/home/slicon6.png";
import iconsl7 from "@/public/assets/images/home/slicon7.png";
import iconsl8 from "@/public/assets/images/home/slicon8.png";
import iconsl9 from "@/public/assets/images/home/slicon9.png";
import readarrow from "@/public/assets/images/read-arrow.svg";
import flogo from "@/public/assets/images/home/flogo.png";
import fb from "@/public/assets/images/home/fb.svg";
import lin from "@/public/assets/images/home/lin.svg";
import insta from "@/public/assets/images/home/inst.svg";
import youtube from "@/public/assets/images/home/youtube.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import UspList from "./UspList";
import MainDescBOx from "../Common/MainDescBox";
import { Homecarlsldata } from "../../data/homecarlsl";
import CardFlow from "../Common/cardflow";
// import HomeSlider from "../Common/homeslider";

import '@/app/components/home/goalcrd.scss';

const HeroSection = () => {
  return (
    <>
      <section className="relative h-[98vh] bg-cover bg-center flex items-center justify-center text-center">
        {/* <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
        <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div> */}
        <figure className="absolute h-[98vh] top-0   w-full  -z-40">
          <Image className="w-screen h-[98vh] absolute object-cover" src={Banner} width={1920} height={900} alt="" />
        </figure>
        <div className="relative z-10 text-white px-6 top-0 lg:top-[120px]">
          <h1 className="text-4xl md:text-[96px] leading-none font-black mb-4 lg:mb-[52px] max-w-[15.5ch] nuber-next-heavy m-auto">DesertBoard&apos;s Palm Strand Board</h1>
          <p className="text-font28 font-[400] mb-6 md:mb-[52px] opacity-[75%]">The region&apos;s most sustainable building material</p>
          <Link href="#" className="flex nuber-next group w-fit text-font18 font-black m-auto gap-2 rounded-none inline-block px-12 py-4  border border-white text-white btnhs hover:bg-white hover:text-black transition rounded-md">
            Know More
            <Image src={readarrow} alt="icn1" className="fiterwt transition-all duration-300 group-hover:translate-x-2 " />
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
          <div className="text-left mb-5 md:mb-10">
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
            <div className="flex gap-2 items-center group">
              <div>
                <p className="relative flex gap-2 max-w-fit    transition-opacity duration-300 text-font18 font-black leading-[1.5] rmbtn  text-font20 md:min-w-[100px]">Read More</p>
              </div>{" "}
              <Image src={readarrow} alt="icn1" className="transition-all duration-300 group-hover:translate-x-1" />
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
                      <Image src={iconsl1} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">

                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">

                      <h3 className="text-[22px] font-bold text-black">Good Health And Well-Being</h3>
                      <p className="text-sm text-black opacity-[75%] mt-2">DesertBoard has designed its PSB® to be zero-emissions. This greener alternative to wood-based products (example: MDF, particleboard, and plywood) includes zero formaldehyde.</p>
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
                      <Image src={iconsl2} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="text-[22px] font-bold text-black">Affordable And Clean Energy</h3>
                      <p className="text-sm text-black opacity-[75%] mt-2">As proved by Desert Board&apos;s life cycle assessment (LCA) and Environmental Product Declaration (EPD), 30% of the factory’s purchased electricity comes from clean sources (nuclear & solar).</p>
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
                      <Image src={iconsl3} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="text-[22px] font-bold text-black">Decent Work And Economic Growth</h3>
                      <p className="text-sm text-black opacity-[75%] mt-2">As of 2025, DesertBoard employes a workforce of 284 team members, including 156 positions at our factory and 128 roles within the company&apos;s back-office operations.</p>
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
                      <Image src={iconsl4} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="text-[22px] font-bold text-black">Industry, Innovation, And Infrastructure</h3>
                      <p className="text-sm text-black opacity-[75%] mt-2">Desert Board&apos;s engineered solutions are improving the construction industry while combating deforestation. Palm Strand Board®’s outstanding properties include high strength, versatility, fire resistance, sound isolation, among many more.</p>
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
                      <Image src={iconsl5} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="text-[22px] font-bold text-black">Reduced Inequality</h3>
                      <p className="text-sm text-black opacity-[75%] mt-2">At DesertBoard, inclusivity is a key pillar, with a multicultural talent pool that values diversity in ethnicity, religious background, and an increasing female shares of our workforce.</p>
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
                      <Image src={iconsl6} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="text-[22px] font-bold text-black">Sustainable Cities And Communities</h3>
                      <p className="text-sm text-black opacity-[75%] mt-2">DesertBoard is proudly preserving the UAE’s cultural and natural heritage by collecting annually regenerated palm frond biomass, preventing it from ending up in landfills or being incinerated, which would otherwise release CO2 or methane into the atmosphere.</p>
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
                      <Image src={iconsl7} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="text-[22px] font-bold text-black">Responsible Consumption And Production</h3>
                      <p className="text-sm text-black opacity-[75%] mt-2">
                        Every year, DesertBoard sources hundreds of thousands of tons of palm residues from local farmers and converts them into PSB®. To raise awareness on responsible consumption and production, DesertBoard showcased its’ bio-economy model at 19 regional and global forums in 2024.
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
                      <Image src={iconsl8} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="text-[22px] font-bold text-black">Climate Action</h3>
                      <p className="text-sm text-black opacity-[75%] mt-2">By producing 100% sustainable, zero-formaldehyde boards, DesertBoard is helping decarbonize the built environment and support the Net Zero initiatives of the UAE, KSA, EU, and India.</p>

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
                      <Image src={iconsl9} alt="Thumbnail" className="  transform transition-all duration-500" />
                    </div>

                    {/* Description Content with Hover Effect */}
                  </div>
                  <div className="p-6">
                    <div className="opacity-0 group-hover:opacity-100 w-full group-hover:w-full transition-opacity duration-500 group-hover:delay-300 delay-0">
                    <h3 className="text-[22px] font-bold text-black">Life On Land</h3>
                      <p className="text-sm text-black opacity-[75%] mt-2">
                        DesertBoard promotes forest conservation by reusing local biomass rather than sourcing newly cut trees from around the globe. This approach is in sync with the UAE’s 2030 Green Agenda, complying with the “Green Diversification Program”, and the “National Waste-To-Resources Program”.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <div className="container m-auto relative">
          <div className="swiper-button-next cursor-pointer group absolute bottom-[-70px] right-[25px]  transform -translate-y-1/2 text-white z-10">
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="swiper-button-prev group cursor-pointer absolute bottom-[-70px] right-[60px] transform -translate-y-1/2 text-white z-10">
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
          <div className="flex items-center gap-3 px-3 mdpx-0  py-10  group  justify-end">
            <p className="mb-0 text-[22px] font-bold text-white nuber-next">Discover Industry Solutions</p>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <footer className=" bg-[#00594F]">
        <div className="container m-auto">
          <div className="pt-10 md:pt-20    ">
            <div className="py-[20px]  md:py-10 px-[20px]  md:px-12 bg-ser ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <p className=" mb-0 text-Darkgreen   text-[25px]  md:text-[36px] leading-1 md:leading-none font-black">
                    Stay Up To Date with DesertBoard
                    <span className="text-[#FF671F] mb-0     text-[25px]  md:text-[36px]  ">.</span>
                  </p>
                </div>
                <div>
                  <div className="w-full flex items-center justify-between  ">
                    <div className="relative w-full ">
                      {/* Email Input Field */}
                      <input type="email" placeholder="Email" className="emilfs w-full p-3 pl-5 pr-[110px] text-font18 leading-none border-b-2 border-Darkgreen   focus:outline-none   focus:border-b-[#FF671F]" />

                      {/* Subscribe Button */}
                      <button type="button" className="absolute top-0 right-0 mt-1 mr-1 px-5 py-2 text-sm font-bold text-Darkgreen flex gap-2 items-center transition-all">
                        Subscribe
                        <svg width="11" height="16" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#002D28" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 md:pt-20  ">
            <div className="pb-10 md:pb-20 border-b-2 border-[#ffffff10]  ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
                <div>
                  <div className="flex flex-col gap-10 lg:gap-20">
                    <Image src={flogo} alt="logo" className="w-1/2 md:w-[400px]" />
                    <div className="flex gap-3">
                      <div className="border border-[#FF671F] w-[47px] h-[47px] flex items-center justify-center">
                        <Image src={fb} alt="fb" />
                      </div>
                      <div className="border border-[#FF671F] w-[47px] h-[47px] flex items-center justify-center">
                        <Image src={lin} alt="linkedin" />
                      </div>
                      <div className="border border-[#FF671F] w-[47px] h-[47px] flex items-center justify-center">
                        <Image src={insta} alt="instagram" />
                      </div>
                      <div className="border border-[#FF671F] w-[47px] h-[47px] flex items-center justify-center">
                        <Image src={youtube} alt="youtube" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    <div>
                      <div>
                        <p className="text-[24px] text-white font-black mb-3 md:mb-5 pb-3 md:pb-5 border-b-2 border-[#ffffff10] w-fit leading-1">Quick Links</p>
                      </div>
                      <div className="flex flex-col linkq">
                        <a>About</a>
                        <a>Sectors</a>
                        <a>Sustainability</a>
                        <a>Downloads</a>
                        <a>News & Events </a>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-[24px] text-white font-black mb-3 md:mb-5 pb-3 md:pb-5 border-b-2 border-[#ffffff10] w-fit leading-1">Quick Links</p>
                      </div>
                      <div className="flex flex-col linkq">
                        <a>FAQS</a>
                        <a>Glossary</a>
                        <a>Download Brochure </a>
                      </div>
                    </div>

                    <div>
                      <div>
                        <p className="text-[24px] text-white font-black mb-3 md:mb-5 pb-3 md:pb-5 border-b-2 border-[#ffffff10] w-fit leading-1">Contact Us</p>
                      </div>
                      <div className="flex flex-col linkq">
                        <a>
                          {" "}
                          <div className="flex gap-3 items-center">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1.40338 8.50536C3.89327 13.9263 8.3166 18.223 13.8076 20.5543L14.6894 20.9472C15.6658 21.382 16.7644 21.4582 17.7916 21.1624C18.8187 20.8666 19.7085 20.2178 20.3041 19.3302L21.4569 17.6134C21.6373 17.3441 21.7103 17.0171 21.6616 16.6967C21.6128 16.3763 21.4459 16.0857 21.1936 15.8823L17.288 12.7313C17.1519 12.6216 16.9952 12.5406 16.827 12.493C16.6589 12.4455 16.4829 12.4324 16.3096 12.4546C16.1363 12.4767 15.9693 12.5337 15.8185 12.622C15.6678 12.7104 15.5364 12.8282 15.4324 12.9686L14.2239 14.5986C11.1216 13.0664 8.6106 10.5549 7.07904 7.45244L8.7077 6.24391C8.84806 6.13987 8.96595 6.00853 9.05428 5.85778C9.14261 5.70704 9.19957 5.53999 9.22174 5.36669C9.2439 5.19338 9.23081 5.01738 9.18325 4.84925C9.1357 4.68113 9.05465 4.52435 8.94499 4.38833L5.79401 0.482667C5.59055 0.230398 5.3 0.063461 4.9796 0.0147401C4.65919 -0.0339808 4.33216 0.0390465 4.06291 0.219437L2.33441 1.37869C1.4415 1.97748 0.790152 2.8738 0.4964 3.90799C0.202648 4.94218 0.285568 6.04706 0.730388 7.02582L1.40338 8.50536Z"
                                fill="#FF671F"
                              />
                            </svg>

                            <span>+971 6 5610999</span>
                          </div>
                        </a>
                        <a>
                          <div className="flex gap-3 items-center">
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M19.3494 0.339844H2.65057C1.50253 0.339844 0.573654 1.27915 0.573654 2.4272L0.563217 14.9513C0.563217 16.0994 1.50253 17.0387 2.65057 17.0387H19.3494C20.4975 17.0387 21.4368 16.0994 21.4368 14.9513V2.4272C21.4368 1.27915 20.4975 0.339844 19.3494 0.339844ZM18.932 4.77548L11.5531 9.38853C11.2192 9.59727 10.7808 9.59727 10.4468 9.38853L3.06804 4.77548C2.96339 4.71673 2.87175 4.63736 2.79866 4.54217C2.72557 4.44697 2.67256 4.33794 2.64282 4.22167C2.61309 4.1054 2.60726 3.9843 2.62569 3.86571C2.64411 3.74712 2.68641 3.6335 2.75002 3.53173C2.81362 3.42995 2.89722 3.34215 2.99574 3.27362C3.09427 3.20509 3.20568 3.15726 3.32322 3.13304C3.44076 3.10881 3.562 3.10869 3.67959 3.13267C3.79719 3.15666 3.90869 3.20425 4.00735 3.27258L11 7.64559L17.9926 3.27258C18.0913 3.20425 18.2028 3.15666 18.3204 3.13267C18.438 3.10869 18.5592 3.10881 18.6768 3.13304C18.7943 3.15726 18.9057 3.20509 19.0042 3.27362C19.1028 3.34215 19.1864 3.42995 19.25 3.53173C19.3136 3.6335 19.3559 3.74712 19.3743 3.86571C19.3927 3.9843 19.3869 4.1054 19.3572 4.22167C19.3274 4.33794 19.2744 4.44697 19.2013 4.54217C19.1282 4.63736 19.0366 4.71673 18.932 4.77548Z"
                                fill="#FF671F"
                              />
                            </svg>
                            <span className="break-all">Info@desertboard.ae</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="py-6 md:py-10">
                <p className="mb-0 text-center text-white text-[14px]">Copyright 2025</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HeroSection;
