"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import ola from "@/public/assets/images/home/ola.svg";
import olar from "@/public/assets/images/home/ola-r.svg";
import leaff from "@/public/assets/images/home/leaf-f.svg";

import flogo from "@/public/assets/images/home/flogo.png";
import fb from "@/public/assets/images/home/fb.svg";
import lin from "@/public/assets/images/home/lin.svg";
import insta from "@/public/assets/images/home/inst.svg";
import youtube from "@/public/assets/images/home/youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#00594F] fotersmn relative overflow-hidden *:">
        <motion.div
          className="ola ola-right absolute top-[4%] left-[-9%] w-[25em] md:w-[45em] rotate-[25deg]  -z-[1]"
          animate={{ x: [0, -20, 0], rotate: [25, 20, 25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={olar}
            alt="Description of the image"
          ></Image>
        </motion.div>
        <motion.div
          className="ola ola-right absolute top-[-19%] left-[-2%] w-[20em] md:w-[40em] rotate-[5deg] -z-[1]"
          animate={{ x: [0, -20, 0], rotate: [5, 5, 5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={leaff}
            alt="Description of the image"
          ></Image>
        </motion.div>
        <motion.div
          className="ola ola-right absolute bottom-[10%] md:bottom-[35%] right-[-25%] md:right-[-15%] w-[20em] md:w-[40em] rotate-[28deg]  -z-[1]"
          animate={{ y: [0, -20, 0], rotate: [28, 35, 28] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={ola}
            alt="Description of the image"
          ></Image>
        </motion.div>
        <motion.div
          className="ola ola-right absolute top-[-15%] right-[0%] md:right-[30%] rotate-[-44deg] w-[10em] md:w-[30em]  -z-[1]"
          animate={{ x: [0, -20, 0], rotate: [-44, -40, -44] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={ola}
            alt="Description of the image"
          ></Image>
        </motion.div>

        <div className="container m-auto afsr">
          <div className="pt-10 md:pt-20    ">
            <motion.div
              className="py-[20px]  md:py-10 px-[20px]  md:px-12 bg-ser "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 50% visible
              variants={{
                hidden: { opacity: 0, y: -30 }, // Start below and invisible
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0 },
                },
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <p className=" mb-0 text-Darkgreen   text-[25px]  md:text-[36px] leading-[1.2] xxl:leading-none  nuber-next-heavy">
                    Stay Up To Date with DesertBoard
                    <span className="text-[#FF671F] mb-0     text-[25px]  md:text-[36px]  ">
                      .
                    </span>
                  </p>
                </div>
                <div>
                  <div className="w-full flex items-center justify-between  ">
                    <div className="relative w-full ">
                      {/* Email Input Field */}
                      <input
                        type="email"
                        placeholder="Email"
                        className="emilfs w-full p-3 pl-5 pr-[110px] text-font18 leading-none border-b-2 border-Darkgreen   focus:outline-none   focus:border-b-[#FF671F]"
                      />

                      {/* Subscribe Button */}
                      <button
                        type="button"
                        className="absolute group top-0 right-0 mt-1 mr-1 px-5 py-2 text-sm nuber-next-bold text-Darkgreen flex gap-2 items-center transition-all duration-300 ease-in-out
                        hover:text-[#FF671F]"
                      >
                        Subscribe
                        <svg
                          width="11"
                          height="16"
                          viewBox="0 0 25 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                        >
                          <path
                            d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996"
                            stroke="#002D28"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="pt-10 md:pt-20  ">
            <div className="pb-10 md:pb-20 border-b-2 border-[#ffffff10]  ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 50% visible
                  variants={{
                    hidden: { opacity: 0, y: -30 }, // Start below and invisible
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, delay: 0.2 },
                    },
                  }}
                >
                  <div className="flex flex-col gap-10 lg:gap-20">
                    <Image
                      src={flogo}
                      alt="logo"
                      className="w-1/2 md:w-[400px]"
                    />
                    <div className="flex gap-3">
                      <a href="#" className="group">
                        <div className="border border-[#FF671F] w-[47px] h-[47px] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-[#FF671F] group-hover:rounded-md">
                          <Image
                            src={fb}
                            alt="Facebook"
                            className="group-hover:brightness-0 group-hover:invert"
                          />
                        </div>
                      </a>

                      <a href="#" className="group">
                        <div className="border border-[#FF671F] w-[47px] h-[47px] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-[#FF671F] group-hover:rounded-md">
                          <Image
                            src={lin}
                            alt="LinkedIn"
                            className="group-hover:brightness-0 group-hover:invert"
                          />
                        </div>
                      </a>

                      <a href="#" className="group">
                        <div className="border border-[#FF671F] w-[47px] h-[47px] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-[#FF671F] group-hover:rounded-md">
                          <Image
                            src={insta}
                            alt="Instagram"
                            className="group-hover:brightness-0 group-hover:invert"
                          />
                        </div>
                      </a>

                      <a href="#" className="group">
                        <div className="border border-[#FF671F] w-[47px] h-[47px] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-[#FF671F] group-hover:rounded-md">
                          <Image
                            src={youtube}
                            alt="YouTube"
                            className="group-hover:brightness-0 group-hover:invert"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:pl-10 lg:border-l-2 border-[#ffffff10]">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 50% visible
                      variants={{
                        hidden: { opacity: 0, y: -30 }, // Start below and invisible
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 1, delay: 0.5 },
                        },
                      }}
                    >
                      <div>
                        <p className="text-[24px] text-white  mb-3 md:mb-5 pb-3 md:pb-5 border-b-2 border-[#ffffff10] w-fit leading-[1.3] nuber-next-heavy">
                          Quick Links
                        </p>
                      </div>
                      <div className="flex flex-col linkq ">
                        <Link
                          href="/about"
                          className="transition-all duration-300 ease-in-out hover:text-[#FF671F] hover:translate-x-2"
                        >
                          About
                        </Link>
                        <Link
                          href="/sectors"
                          className="transition-all duration-300 ease-in-out hover:text-[#FF671F] hover:translate-x-2"
                        >
                          Sectors
                        </Link>
                        <Link
                          href="/sustainability"
                          className="transition-all duration-300 ease-in-out hover:text-[#FF671F] hover:translate-x-2"
                        >
                          Sustainability
                        </Link>
                        <Link
                          href="/downloads"
                          className="transition-all duration-300 ease-in-out hover:text-[#FF671F] hover:translate-x-2"
                        >
                          Downloads
                        </Link>
                        <Link
                          href="news-and-events"
                          className="transition-all duration-300 ease-in-out hover:text-[#FF671F] hover:translate-x-2"
                        >
                          News & Events
                        </Link>
                      </div>
                    </motion.div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 50% visible
                      variants={{
                        hidden: { opacity: 0, y: -30 }, // Start below and invisible
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 1, delay: 0.7 },
                        },
                      }}
                    >
                      <div>
                        <p className="text-[24px] text-white  mb-3 md:mb-5 pb-3 md:pb-5 border-b-2 border-[#ffffff10] w-fit leading-[1.3] nuber-next-heavy">
                          Quick Links
                        </p>
                      </div>
                      <div className="flex flex-col linkq">
                        <Link
                          href="/faqs"
                          className="transition-all duration-300 ease-in-out hover:text-[#FF671F] hover:translate-x-2"
                        >
                          FAQS
                        </Link>
                        <Link
                          href="/glossary"
                          className="transition-all duration-300 ease-in-out hover:text-[#FF671F] hover:translate-x-2"
                        >
                          Glossary
                        </Link>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-in-out hover:text-[#FF671F] hover:translate-x-2"
                        >
                          Download Brochure{" "}
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 50% visible
                      variants={{
                        hidden: { opacity: 0, y: -30 }, // Start below and invisible
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 1, delay: 0.9 },
                        },
                      }}
                    >
                      <div>
                        <p className="text-[24px] text-white  mb-3 md:mb-5 pb-3 md:pb-5 border-b-2 border-[#ffffff10] w-fit leading-[1.3] nuber-next-heavy">
                          Contact Us
                        </p>
                      </div>
                      <div className="flex flex-col linkq">
                        <Link
                          href="tel:+97165610999"
                          className="transition-all duration-300 ease-in-out hover:text-[#FF671F] hover:translate-x-2"
                        >
                          {" "}
                          <div className="flex gap-3 items-center">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.40338 8.50536C3.89327 13.9263 8.3166 18.223 13.8076 20.5543L14.6894 20.9472C15.6658 21.382 16.7644 21.4582 17.7916 21.1624C18.8187 20.8666 19.7085 20.2178 20.3041 19.3302L21.4569 17.6134C21.6373 17.3441 21.7103 17.0171 21.6616 16.6967C21.6128 16.3763 21.4459 16.0857 21.1936 15.8823L17.288 12.7313C17.1519 12.6216 16.9952 12.5406 16.827 12.493C16.6589 12.4455 16.4829 12.4324 16.3096 12.4546C16.1363 12.4767 15.9693 12.5337 15.8185 12.622C15.6678 12.7104 15.5364 12.8282 15.4324 12.9686L14.2239 14.5986C11.1216 13.0664 8.6106 10.5549 7.07904 7.45244L8.7077 6.24391C8.84806 6.13987 8.96595 6.00853 9.05428 5.85778C9.14261 5.70704 9.19957 5.53999 9.22174 5.36669C9.2439 5.19338 9.23081 5.01738 9.18325 4.84925C9.1357 4.68113 9.05465 4.52435 8.94499 4.38833L5.79401 0.482667C5.59055 0.230398 5.3 0.063461 4.9796 0.0147401C4.65919 -0.0339808 4.33216 0.0390465 4.06291 0.219437L2.33441 1.37869C1.4415 1.97748 0.790152 2.8738 0.4964 3.90799C0.202648 4.94218 0.285568 6.04706 0.730388 7.02582L1.40338 8.50536Z"
                                fill="#FF671F"
                              />
                            </svg>

                            <span>+971 6 5610999</span>
                          </div>
                        </Link>
                        <Link
                          href="mailto:info@desertboard.ae"
                          className="transition-all duration-300 ease-in-out hover:text-[#FF671F] hover:translate-x-2"
                        >
                          <div className="flex gap-3 items-center">
                            <svg
                              width="22"
                              height="18"
                              viewBox="0 0 22 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.3494 0.339844H2.65057C1.50253 0.339844 0.573654 1.27915 0.573654 2.4272L0.563217 14.9513C0.563217 16.0994 1.50253 17.0387 2.65057 17.0387H19.3494C20.4975 17.0387 21.4368 16.0994 21.4368 14.9513V2.4272C21.4368 1.27915 20.4975 0.339844 19.3494 0.339844ZM18.932 4.77548L11.5531 9.38853C11.2192 9.59727 10.7808 9.59727 10.4468 9.38853L3.06804 4.77548C2.96339 4.71673 2.87175 4.63736 2.79866 4.54217C2.72557 4.44697 2.67256 4.33794 2.64282 4.22167C2.61309 4.1054 2.60726 3.9843 2.62569 3.86571C2.64411 3.74712 2.68641 3.6335 2.75002 3.53173C2.81362 3.42995 2.89722 3.34215 2.99574 3.27362C3.09427 3.20509 3.20568 3.15726 3.32322 3.13304C3.44076 3.10881 3.562 3.10869 3.67959 3.13267C3.79719 3.15666 3.90869 3.20425 4.00735 3.27258L11 7.64559L17.9926 3.27258C18.0913 3.20425 18.2028 3.15666 18.3204 3.13267C18.438 3.10869 18.5592 3.10881 18.6768 3.13304C18.7943 3.15726 18.9057 3.20509 19.0042 3.27362C19.1028 3.34215 19.1864 3.42995 19.25 3.53173C19.3136 3.6335 19.3559 3.74712 19.3743 3.86571C19.3927 3.9843 19.3869 4.1054 19.3572 4.22167C19.3274 4.33794 19.2744 4.44697 19.2013 4.54217C19.1282 4.63736 19.0366 4.71673 18.932 4.77548Z"
                                fill="#FF671F"
                              />
                            </svg>
                            <span className="break-all">
                              Info@desertboard.ae
                            </span>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <motion.div
                className="py-6 md:py-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 50% visible
                variants={{
                  hidden: { opacity: 0, y: -30 }, // Start below and invisible
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 1 },
                  },
                }}
              >
                <p className="mb-0 text-center text-white text-[14px]">
                  Copyright 2025
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
