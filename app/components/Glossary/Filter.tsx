"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import lfbef from "@/public/assets/images/home/leaf.svg";
import Searchresult from "./Searchresult";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";

const Filter = () => {
  const menuforA = {
    alphabet: "A",
    items: [
      { id: 1, name: "Al Sa’afat" },
      { id: 2, name: "ASTM" },
    ],
  };
  const menuforB = {
    alphabet: "B",
    items: [{ id: 1, name: "BS" }],
  };
  const menuforC = {
    alphabet: "C",
    items: [
      { id: 1, name: "Carbon Footprint (CFP)" },
      { id: 2, name: "CO2 (Carbon Dioxide)" },
      { id: 3, name: "Carbon Sink" },
    ],
  };
  const menuforD = {
    alphabet: "D",
    items: [
      { id: 1, name: "Carbon Footprint (CFP)" },
      { id: 2, name: "CO2 (Carbon Dioxide)" },
      { id: 3, name: "Carbon Sink" },
    ],
  };
  const menuforE = {
    alphabet: "E",
    items: [
      { id: 1, name: "EGBC" },
      { id: 2, name: "EN" },
      { id: 3, name: "EPD" },
      { id: 4, name: "EUDR" },
      { id: 5, name: "Estidama" },
      { id: 6, name: "ESL" },
      { id: 7, name: "EST" },
    ],
  };
  const alphabet = [
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
    "#",
  ];
  const [activeLetter, setActiveLetter] = useState<string>("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className=" py-10 lg:py-20  insp-mn relative inspbg ">
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

        <div className="ola ola-right absolute bottom-0 left-[-10%] w-[40em] rotate-180">
          <Image
            className="absolute"
            src={lfbef}
            alt="Description of the image"
          ></Image>
        </div>
        <div className="container ">
          <div className="relative z-1">
            <div
              className={`w-full ${
                isSticky ? "fixed bgsti z-[9999] left-0 pt-4 md:pt-5" : ""
              } top-[0] lg:top-[100px] `}
            >
              <div className="container">
                <div className="flex justify-start gap-5 md:gap-4 md:justify-between  items-center">
                  <div>
                    <h2 className="heavydark ">
                      Filter<span className="text-orange">.</span>
                    </h2>
                  </div>
                  <div className="w- flex items-center justify-between  ">
                    <div className="relative w-full flex items-center gap-2 border-b-2 border-Darkgreen p-3 pl-5 pr-[110px]">
                      <button
                        type="button"
                        className="  group top-0 left-0 mt-1 mr-1    text-sm nuber-next-bold text-Darkgreen flex gap-2 items-center transition-all duration-300 ease-in-out
                        hover:text-[#FF671F]"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                            stroke="#151515"
                            strokeOpacity="0.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        placeholder="Search"
                        className="emilfs w-full  text-font20 leading-none    focus:outline-none   focus:border-b-[#FF671F] "
                      />
                    </div>
                  </div>
                </div>
                <div className="  mt-5 md:mt-8">
                  <div className="flex flex-wrap gap-2 py-4 md:py-8 justify-start md:justify-between w-full border-y-2 border-[#15151510] mb-6 md:mb-10">
                    {alphabet.map((letter) => (
                      <div
                        key={letter}
                        onClick={() => setActiveLetter(letter)}
                        className={`w-fit py-[5px] md:py-[10px] px-[10px] md:px-[15px] cursor-pointer transition-all duration-300
                      ${
                        activeLetter === letter
                          ? "border-b-2 border-orange"
                          : "border-b-2 border-transparent"
                      }
                    `}
                      >
                        <p className="texthelvetica20 font-bold">{letter}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Searchresult itemdata={menuforA} />
              </div>
              <div>
                <Searchresult itemdata={menuforB} />
              </div>
              <div>
                <Searchresult itemdata={menuforC} />
              </div>
              <div>
                <Searchresult itemdata={menuforD} />
              </div>
              <div className="ouy">
                <Searchresult itemdata={menuforE} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
