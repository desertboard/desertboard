import React from "react";
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
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
        <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div>
        <figure className="absolute h-screen w-screen  -z-40">
          <Image
            className="w-screen h-screen absolute object-cover"
            src={Banner}
            width={1000}
            height={800}
            alt=""
          />
        </figure>
        <div className="relative z-10 text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-[17ch]">
            DesertBoard’s Palm Strand Board
          </h1>
          <p className="text-lg md:text-xl font-light mb-6 opacity-[75%]">
            The region’s most sustainable building material
          </p>
          <Link
            href="#"
            className="rounded-none inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-md"
          >
            Know More
          </Link>
        </div>
      </section>

      <section className="py-20 py-md- 15 py-10 insp-mn relative">
        <div className="container m-auto ">
          <div className="flex flex-col lg:flex-row items-center justify-between    adst relative">
            <div className="lg:w-1/2 text-center lg:text-left px-16 py-5">
              <h2 className="  text-gray-900 mb-4 text-[48px]  font-black">
                Inspiration<span className="text-[#FF671F]">.</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 text-[#151515] opacity-[50%]">
                A Legacy Rooted in the Desert
              </p>
              <p className="text-[20px]">
                In the heart of the desert, where towering date palm trees
                symbolize our heritage, a groundbreaking innovation has emerged:
                DesertBoard's Palm Strand Board (PSB®), the world’s first
                engineered palm-based board.{" "}
              </p>
              <br />
              <p className="text-[20px]">
                For centuries, date palm trees have been a vital resource in the
                Middle East, historically used to construct Barasti houses that
                provided essential shelter in the harsh desert climate. Inspired
                by the rich legacy and the vision of the UAE's founding father,
                Sheikh Zayed bin Sultan Al Nahyan, DesertBoard® successfully
                produced the first engineered board in 2021.
              </p>
            </div>

            <div className="  flex justify-end relative top-10">
              <div className="relative">
                <Image
                  src={imsec2}
                  width={1080}
                  height={640}
                  alt="Picture of the author"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-black bg-opacity-50 rounded-full p-4">
                    <svg
                      className="w-8 h-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 pb-md-15 pb-10 pt-10 pt-md-5 pt-5 insp-mn relative">
        <div className="container m-auto">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Sectors<span className="text-[#FF671F]">.</span>
            </h2>
            <p className="text-gray-400 text-[20px] max-w-[75ch]">
              PSB® boards' diverse product lineup is used in everything from
              house building, furniture, and interior design to mass timber
              structures, fire-rated doors, building facades, and flooring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group bg-gray-800 overflow-hidden">
              <Image
                src={gdim1}
                alt="Engineering & Construction"
                className="w-full h-[552px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-blacktrans bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 text-white w-full p-8">
                <div className="w-full ">
                  <Image src={icn1} alt="icn1" className="" />
                </div>
                <h3 className=" pt-5 border-t opacity-[90%] text-lg font-semibold mt-5 text-[28px] leading-[1.3] font-[700] transition-all duration-300 group-hover:mt-10">
                  Engineering <br /> & Construction
                </h3>
                <p className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5]">
                  Discover how our innovative solutions streamline engineering
                  and construction projects. From planning to execution, we
                  ensure precision and efficiency.
                </p>
                <a href="#" className="relative top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5] rmbtn ">Read More</a>
              </div>
            </div>

            <div className="relative group bg-gray-800 overflow-hidden">
              <Image
                src={gdim2}
                alt="Landscape"
                className="w-full h-[552px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-blacktrans bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 text-white w-full p-8">
                <div className="w-full ">
                  <Image src={icn2} alt="icn1" className="" />
                </div>
                <h3 className=" pt-5 border-t opacity-[90%] text-lg font-semibold mt-5 text-[28px] leading-[1.3] font-[700] transition-all duration-300 group-hover:mt-10">
                Landscape
                </h3>
                <p className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5]">
                  Discover how our innovative solutions streamline engineering
                  and construction projects. From planning to execution, we
                  ensure precision and efficiency.
                </p>
                <a href="#" className="relative top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5] rmbtn ">Read More</a>

              </div>
            </div>

            <div className="relative group bg-gray-800 overflow-hidden">
              <Image
                src={gdim3}
                alt="Interior Design"
                className="w-full h-[552px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-blacktrans bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 text-white w-full p-8">
                <div className="w-full ">
                  <Image src={icn3} alt="icn1" className="" />
                </div>
                <h3 className=" pt-5 border-t opacity-[90%] text-lg font-semibold mt-5 text-[28px] leading-[1.3] font-[700] transition-all duration-300 group-hover:mt-10">
                Interior Design
                </h3>
                <p className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5]">
                  Discover how our innovative solutions streamline engineering
                  and construction projects. From planning to execution, we
                  ensure precision and efficiency.
                </p>
                <a href="#" className="relative top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5] rmbtn ">Read More</a>

              </div>
            </div>

            <div className="relative group bg-gray-800 overflow-hidden">
              <Image
                src={gdim4}
                alt="Events & Exhibitions"
                className="w-full h-[552px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-blacktrans bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 text-white w-full p-8">
                <div className="w-full ">
                  <Image src={icn4} alt="icn1" className="" />
                </div>
                <h3 className=" pt-5 border-t opacity-[90%] text-lg font-semibold mt-5 text-[28px] leading-[1.3] font-[700] transition-all duration-300 group-hover:mt-10">
                Events   <br /> & Exhibitions
                </h3>
                <p className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5]">
                  Discover how our innovative solutions streamline engineering
                  and construction projects. From planning to execution, we
                  ensure precision and efficiency.
                </p>
                <a href="#" className="relative top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[16px] leading-[1.5] rmbtn ">Read More</a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
