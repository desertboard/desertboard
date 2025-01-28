import React from "react";
import '@/app/components/home/usps.scss'
import Link from "next/link";
import Banner from "@/public/assets/banner.png";
import imsec2 from "@/public/assets/images/mn.jpg";
import gdim1 from "@/public/assets/images/gd-im1.jpg";
import gdim2 from "@/public/assets/images/gd-im2.jpg";
import gdim3 from "@/public/assets/images/gd-im3.jpg";
import gdim4 from "@/public/assets/images/gd-im4.jpg";
import icn1 from "@/public/assets/images/icn1.svg";
import icn2 from "@/public/assets/images/icn2.svg";
import icn3 from "@/public/assets/images/icn3.svg";
import icn4 from "@/public/assets/images/icn4.svg";
import uspi1 from "@/public/assets/images/home/usp-i1.svg";
import uspi2 from "@/public/assets/images/home/usp-i2.svg"; 
import uspImg1 from "@/public/assets/images/home/usp-img1.jpg";
import readarrow from "@/public/assets/images/read-arrow.svg";
import Image from "next/image";
import Usps from "./Usps";
import Usp from "./Usp";
import UspList from "./UspList";

const HeroSection = () => {
  return (
    <>
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
        <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div>
        <figure className="absolute h-screen w-screen  -z-40">
          <Image className="w-screen h-screen absolute object-cover" src={Banner} width={1000} height={800} alt="" />
        </figure>
        <div className="relative z-10 text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-[17ch]">DesertBoard’s Palm Strand Board</h1>
          <p className="text-lg md:text-xl font-light mb-6 opacity-[75%]">The region’s most sustainable building material</p>
          <Link href="#" className="rounded-none inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-md">
            Know More
          </Link>
        </div>
      </section>

      <section className="pt-20 pt-md-15 pt-10 pb-[120px] pb-md-15 pb-10 insp-mn relative inspbg">
        <div className="container m-auto ">
          <div className="flex flex-col lg:flex-row items-center justify-between    adst relative">
            <div className="lg:w-1/2 text-center lg:text-left px-16 py-5 opacity-[99%]">
              <h2 className="  text-gray-900 mb-4 text-[48px]  font-black">
                Inspiration<span className="text-[#FF671F]">.</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 text-[#151515] opacity-[50%]">A Legacy Rooted in the Desert</p>
              <p className="text-[20px]">In the heart of the desert, where towering date palm trees symbolize our heritage, a groundbreaking innovation has emerged: DesertBoard&apos;s Palm Strand Board (PSB®), the world’s first engineered palm-based board. </p>
              <br />
              <p className="text-[20px]">
                For centuries, date palm trees have been a vital resource in the Middle East, historically used to construct Barasti houses that provided essential shelter in the harsh desert climate. Inspired by the rich legacy and the vision of the UAE&apos;s founding father, Sheikh Zayed bin Sultan Al Nahyan, DesertBoard® successfully produced
                the first engineered board in 2021.
              </p>
            </div>

            <div className="  flex justify-end relative top-10">
              <div className="relative">
                <Image src={imsec2} width={1080} height={640} alt="Picture of the author" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-black bg-opacity-50 rounded-full p-4">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Usps secTitle={"Key USP’s"} /> */}
       <UspList secTitle={"Key USP’s"} />

      <section className="py-20 py-md- 15 py-10 insp-mn relative darkbanner">
        <div className="container m-auto">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Sectors<span className="text-[#FF671F]">.</span>
            </h2>
            <p className="text-gray-400 text-[20px] max-w-[75ch]">PSB® boards&apos; diverse product lineup is used in everything from house building, furniture, and interior design to mass timber structures, fire-rated doors, building facades, and flooring.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group bg-gray-800 overflow-hidden">
              <Image src={gdim1} alt="Engineering & Construction" className="w-full h-[552px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 bg-blacktrans bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 text-white w-full p-8">
                <div className="w-full ">
                  <Image src={icn1} alt="icn1" className="" />
                </div>
                <h3 className=" pt-5 border-t opacity-[90%] text-lg font-semibold mt-5 text-[28px] leading-[1.3] font-[700] transition-all duration-300 group-hover:mt-10">
                  Engineering <br /> & Construction
                </h3>
                <p className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5]">Discover how our innovative solutions streamline engineering and construction projects. From planning to execution, we ensure precision and efficiency.</p>
                <a href="#" className="relative top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5] rmbtn ">
                  Read More
                </a>
              </div>
            </div>

            <div className="relative group bg-gray-800 overflow-hidden">
              <Image src={gdim2} alt="Landscape" className="w-full h-[552px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 bg-blacktrans bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 text-white w-full p-8">
                <div className="w-full ">
                  <Image src={icn2} alt="icn1" className="" />
                </div>
                <h3 className=" pt-5 border-t opacity-[90%] text-lg font-semibold mt-5 text-[28px] leading-[1.3] font-[700] transition-all duration-300 group-hover:mt-10">Landscape</h3>
                <p className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5]">Discover how our innovative solutions streamline engineering and construction projects. From planning to execution, we ensure precision and efficiency.</p>
                <a href="#" className="relative top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5] rmbtn ">
                  Read More
                </a>
              </div>
            </div>

            <div className="relative group bg-gray-800 overflow-hidden">
              <Image src={gdim3} alt="Interior Design" className="w-full h-[552px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 bg-blacktrans bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 text-white w-full p-8">
                <div className="w-full ">
                  <Image src={icn3} alt="icn1" className="" />
                </div>
                <h3 className=" pt-5 border-t opacity-[90%] text-lg font-semibold mt-5 text-[28px] leading-[1.3] font-[700] transition-all duration-300 group-hover:mt-10">Interior Design</h3>
                <p className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5]">Discover how our innovative solutions streamline engineering and construction projects. From planning to execution, we ensure precision and efficiency.</p>
                <a href="#" className="relative top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5] rmbtn ">
                  Read More
                </a>
              </div>
            </div>

            <div className="relative group bg-gray-800 overflow-hidden">
              <Image src={gdim4} alt="Events & Exhibitions" className="w-full h-[552px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 bg-blacktrans bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 text-white w-full p-8">
                <div className="w-full ">
                  <Image src={icn4} alt="icn1" className="" />
                </div>
                <h3 className=" pt-5 border-t opacity-[90%] text-lg font-semibold mt-5 text-[28px] leading-[1.3] font-[700] transition-all duration-300 group-hover:mt-10">
                  Events <br /> & Exhibitions
                </h3>
                <p className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5]">Discover how our innovative solutions streamline engineering and construction projects. From planning to execution, we ensure precision and efficiency.</p>
                <a href="#" className="relative top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5] rmbtn ">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 py-md- 15 py-10 insp-mn relative darkbanner">
        <div className="container m-auto">
          <div className="flex justify-between mb-8 items-end">
            <div className="text-center md:text-left ">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Sustainable Development Goals
                <span className="text-[#FF671F]">.</span>
              </h2>
              <p className="text-gray-400 text-[20px] max-w-[60ch]">Explore how eco-friendly and locally produced materials are helping us move closer to the United Nations' Sustainable Development Goals.</p>
            </div>
            <div className="flex gap-2 items-center ">
              <div>
                <p className="mb-0 text-18 text-[#FF671F]  font-black">Read More</p>
              </div>{" "}
              <Image src={readarrow} alt="icn1" className="" />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="relative group overflow-hidden transform transition-all duration-500 growf " style={{ backgroundImage: `url('/assets/images/mn.jpg')` }}>
            <div className="flex items-center justify-center min-h-[460px]">
              <div className="relative    bg-cover bg-center p-6">
                {/* Thumbnail Image Container with Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center  transition-all duration-500 group-hover:inset-1">
                  <Image src={Banner} alt="Thumbnail" className="w-20 h-20 transform transition-all duration-500 group-hover:scale-75 group-hover:translate-x-[-175%] group-hover:translate-y-[-215%]" />
                </div>

                {/* Description Content with Hover Effect */}
                <div className="absolute top-[-66px] left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-bold text-white">Description Title</h3>
                  <p className="text-sm text-white mt-2">This is a description that appears when you hover over the thumbnail image.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden transform transition-all duration-500 growf " style={{ backgroundImage: `url('/assets/images/mn.jpg')` }}>
            <div className="flex items-center justify-center min-h-[460px]">
              <div className="relative    bg-cover bg-center p-6">
                {/* Thumbnail Image Container with Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center  transition-all duration-500 group-hover:inset-1">
                  <Image src={Banner} alt="Thumbnail" className="w-20 h-20 transform transition-all duration-500 group-hover:scale-75 group-hover:translate-x-[-175%] group-hover:translate-y-[-215%]" />
                </div>

                {/* Description Content with Hover Effect */}
                <div className="absolute top-[-66px] left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-bold text-white">Description Title</h3>
                  <p className="text-sm text-white mt-2">This is a description that appears when you hover over the thumbnail image.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden transform transition-all duration-500 growf " style={{ backgroundImage: `url('/assets/images/mn.jpg')` }}>
            <div className="flex items-center justify-center min-h-[460px]">
              <div className="relative    bg-cover bg-center p-6">
                {/* Thumbnail Image Container with Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center  transition-all duration-500 group-hover:inset-1">
                  <Image src={Banner} alt="Thumbnail" className="w-20 h-20 transform transition-all duration-500 group-hover:scale-75 group-hover:translate-x-[-175%] group-hover:translate-y-[-215%]" />
                </div>

                {/* Description Content with Hover Effect */}
                <div className="absolute top-[-66px] left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-bold text-white">Description Title</h3>
                  <p className="text-sm text-white mt-2">This is a description that appears when you hover over the thumbnail image.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden transform transition-all duration-500 growf " style={{ backgroundImage: `url('/assets/images/mn.jpg')` }}>
            <div className="flex items-center justify-center min-h-[460px]">
              <div className="relative    bg-cover bg-center p-6">
                {/* Thumbnail Image Container with Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center  transition-all duration-500 group-hover:inset-1">
                  <Image src={Banner} alt="Thumbnail" className="w-20 h-20 transform transition-all duration-500 group-hover:scale-75 group-hover:translate-x-[-175%] group-hover:translate-y-[-215%]" />
                </div>

                {/* Description Content with Hover Effect */}
                <div className="absolute top-[-66px] left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-bold text-white">Description Title</h3>
                  <p className="text-sm text-white mt-2">This is a description that appears when you hover over the thumbnail image.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden transform transition-all duration-500 growf " style={{ backgroundImage: `url('/assets/images/mn.jpg')` }}>
            <div className="flex items-center justify-center min-h-[460px]">
              <div className="relative    bg-cover bg-center p-6">
                {/* Thumbnail Image Container with Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center  transition-all duration-500 group-hover:inset-1">
                  <Image src={Banner} alt="Thumbnail" className="w-20 h-20 transform transition-all duration-500 group-hover:scale-75 group-hover:translate-x-[-175%] group-hover:translate-y-[-215%]" />
                </div>

                {/* Description Content with Hover Effect */}
                <div className="absolute top-[-66px] left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-bold text-white">Description Title</h3>
                  <p className="text-sm text-white mt-2">This is a description that appears when you hover over the thumbnail image.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden transform transition-all duration-500 growf " style={{ backgroundImage: `url('/assets/images/mn.jpg')` }}>
            <div className="flex items-center justify-center min-h-[460px]">
              <div className="relative    bg-cover bg-center p-6">
                {/* Thumbnail Image Container with Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center  transition-all duration-500 group-hover:inset-1">
                  <Image src={Banner} alt="Thumbnail" className="w-20 h-20 transform transition-all duration-500 group-hover:scale-75 group-hover:translate-x-[-175%] group-hover:translate-y-[-215%]" />
                </div>

                {/* Description Content with Hover Effect */}
                <div className="absolute top-[-66px] left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-bold text-white">Description Title</h3>
                  <p className="text-sm text-white mt-2">This is a description that appears when you hover over the thumbnail image.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
