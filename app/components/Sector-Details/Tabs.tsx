"use client";

import React, { useState } from "react";
import readarrow from "@/public/assets/images/read-arrow.svg";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const tabs = [
    "Façade Cladding",
    "Wall Cladding",
    "Partitional Wall",
    "Sub-Flooring",
    "Roofing",
    "Concrete Forming",
    "Site Hoarding",
  ];
  return (
    <section className="py-10 lg:py-20 bg-[#E1DCD8] insp-mn relative">
<motion.div
        className="ola ola-right absolute top-0 right-[-10%] w-[40em]"

        animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="absolute" src={lfbef} alt="Description of the image" />
      </motion.div>
      <motion.div
        className="ola ola-right absolute bottom-[43%] left-[-15%] w-[40em]"
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="absolute" src={lfbt} alt="Description of the image" />
      </motion.div>
      <div className=" relative z-[1]">
      <div className="container mx-auto">
        <h2 className="heavydark mb-2 xl:mb-10">
          Applications<span className="text-[#FF671F] leading-[1]">.</span>
        </h2>
        <div className="flex flex-col items-center">
      <div className="w-full">
        <div className="col-12">
          {/* Tab Buttons */}
          <div className="tabset pt-2 border-b border-[#1515151A] flex  md:gap-[30px] gap-[10px] lg:gap-[50px] xxl:gap-[107px]">
            {tabs.map((tab, index) => (
              <React.Fragment key={`tab${index + 1}`}>
                <input
                  type="radio"
                  name="tabset"
                  id={`tab${index + 1}`}
                  aria-controls={`f${index + 1}`}
                  checked={activeTab === `tab${index + 1}`}
                  onChange={() => setActiveTab(`tab${index + 1}`)}
                  className="hidden"
                />
                <label
                  htmlFor={`tab${index + 1}`}
                  className={`cursor-pointer   py-4 border-b-[6px] text-[#15151580] ${
                    activeTab === `tab${index + 1}`
                      ? "border-[#FF671F]  nuber-next-heavy leading-[1] text-font28"
                      : "border-transparent nuber-next-bold leading-[1] text-font24"
                  }`}
                  style={{
                    color: activeTab === `tab${index + 1}` ? "#002D28" : "#15151580",
                  }}
                >
                  {tab}
                </label>
              </React.Fragment>
            ))}
          </div>

          {/* Tab Content with Framer Motion */}
          <div className="tab-panels flex flex-wrap mt-10 md:mt-20">
            <AnimatePresence mode="wait">
              {activeTab === "tab1" && (
                <motion.section
                  key="tab1"
                  id="f1"
                  className="tab-panel flex flex-col lg:flex-row  w-full gap-10 md:gap-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.img
                      src="/assets/images/sectors/sec2.png"
                      alt="Landscape"
                      className="w-full h-350 lg:h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 text-justify items-center] ">
                      <h3 className=" heavydark  mb-5 md:mb-10  ">
                        Façade Cladding<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="texthelvetica20 clr15op75 mb-6 md:mb-10  ">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul className="mb-6 md:mb-10">
                        <li className="flex items-center texthelvetica20 clr15op75 mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <div className="flex gap-3 items-center group rmbtn pb-3 cursor-pointer">
                          <div>
                            <p className="relative  flex gap-2 max-w-fit transition-opacity duration-300 text-font18  leading-[1.44]  text-font18   nuber-next-heavy leading-[1.25] ">Read More</p>
                          </div> 
                          <Image src={readarrow} alt="icn1" className="relative top-[2px] transition-all duration-300 group-hover:translate-x-1 " />
                        </div>
                    </div>
                </motion.section> 
              )}

          {activeTab === "tab2" && (
                <motion.section
                  key="tab2"
                  id="f2"
                  className="tab-panel flex flex-col lg:flex-row w-full gap-10 md:gap-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.img
                      src="/assets/images/sectors/sec2.png"
                      alt="New Tab Content"
                      className="w-full h-350 lg:h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 text-justify items-center] ">
                      <h3 className=" heavydark  mb-5 md:mb-10  ">
                      Wall Cladding<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="texthelvetica20 clr15op75 mb-6 md:mb-10  ">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul className="mb-6 md:mb-10">
                        <li className="flex items-center texthelvetica20 clr15op75 mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <div className="flex gap-3 items-center group rmbtn pb-3 cursor-pointer">
                          <div>
                            <p className="relative  flex gap-2 max-w-fit transition-opacity duration-300 text-font18  leading-[1.44]  text-font18   nuber-next-heavy leading-[1.25] ">Read More</p>
                          </div>
                          <Image src={readarrow} alt="icn1" className="relative top-[2px] transition-all duration-300 group-hover:translate-x-1 " />
                        </div>
                    </div>
                </motion.section>
              )}
              {activeTab === "tab3" && (
                <motion.section
                  key="tab3"
                  id="f3"
                  className="tab-panel flex flex-col lg:flex-row w-full gap-10 md:gap-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.img
                      src="/assets/images/sectors/sec2.png"
                      alt="New Tab Content"
                      className="w-full h-350 lg:h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 text-justify items-center] ">
                      <h3 className=" heavydark  mb-5 md:mb-10  ">
                      Partitional Wall<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="texthelvetica20 clr15op75 mb-6 md:mb-10  ">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul className="mb-6 md:mb-10">
                        <li className="flex items-center texthelvetica20 clr15op75 mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <div className="flex gap-3 items-center group rmbtn pb-3 cursor-pointer">
                          <div>
                            <p className="relative  flex gap-2 max-w-fit transition-opacity duration-300 text-font18  leading-[1.44]  text-font18   nuber-next-heavy leading-[1.25] ">Read More</p>
                          </div>
                          <Image src={readarrow} alt="icn1" className="relative top-[2px] transition-all duration-300 group-hover:translate-x-1 " />
                        </div>
                    </div>
                </motion.section>
              )}
              {activeTab === "tab4" && (
                <motion.section
                  key="tab4"
                  id="f4"
                  className="tab-panel flex flex-col lg:flex-row w-full gap-10 md:gap-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.img
                      src="/assets/images/sectors/sec2.png"
                      alt="New Tab Content"
                      className="w-full h-350 lg:h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 text-justify items-center] ">
                      <h3 className=" heavydark  mb-5 md:mb-10  ">
                      Sub-Flooring<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="texthelvetica20 clr15op75 mb-6 md:mb-10  ">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul className="mb-6 md:mb-10">
                        <li className="flex items-center texthelvetica20 clr15op75 mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <div className="flex gap-3 items-center group rmbtn pb-3 cursor-pointer">
                          <div>
                            <p className="relative  flex gap-2 max-w-fit transition-opacity duration-300 text-font18  leading-[1.44]  text-font18   nuber-next-heavy leading-[1.25] ">Read More</p>
                          </div>
                          <Image src={readarrow} alt="icn1" className="relative top-[2px] transition-all duration-300 group-hover:translate-x-1 " />
                        </div>
                    </div>
                </motion.section>
              )}
              {activeTab === "tab5" && (
                <motion.section
                  key="tab5"
                  id="f5"
                  className="tab-panel flex flex-col lg:flex-row w-full gap-10 md:gap-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.img
                      src="/assets/images/sectors/sec2.png"
                      alt="New Tab Content"
                      className="w-full h-350 lg:h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 text-justify items-center] ">
                      <h3 className=" heavydark  mb-5 md:mb-10  ">
                      Roofing<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="texthelvetica20 clr15op75 mb-6 md:mb-10  ">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul className="mb-6 md:mb-10">
                        <li className="flex items-center texthelvetica20 clr15op75 mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <div className="flex gap-3 items-center group rmbtn pb-3 cursor-pointer">
                          <div>
                            <p className="relative  flex gap-2 max-w-fit transition-opacity duration-300 text-font18  leading-[1.44]  text-font18   nuber-next-heavy leading-[1.25] ">Read More</p>
                          </div>
                          <Image src={readarrow} alt="icn1" className="relative top-[2px] transition-all duration-300 group-hover:translate-x-1 " />
                        </div>
                    </div>
                </motion.section>
              )}
              {activeTab === "tab6" && (
                <motion.section
                  key="tab6"
                  id="f6"
                  className="tab-panel flex flex-col lg:flex-row w-full gap-10 md:gap-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.img
                      src="/assets/images/sectors/sec2.png"
                      alt="New Tab Content"
                      className="w-full h-350 lg:h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 text-justify items-center] ">
                      <h3 className=" heavydark  mb-5 md:mb-10  ">
                      Concrete Forming<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="texthelvetica20 clr15op75 mb-6 md:mb-10  ">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul className="mb-6 md:mb-10">
                        <li className="flex items-center texthelvetica20 clr15op75 mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <div className="flex gap-3 items-center group rmbtn pb-3 cursor-pointer">
                          <div>
                            <p className="relative  flex gap-2 max-w-fit transition-opacity duration-300 text-font18  leading-[1.44]  text-font18   nuber-next-heavy leading-[1.25] ">Read More</p>
                          </div>
                          <Image src={readarrow} alt="icn1" className="relative top-[2px] transition-all duration-300 group-hover:translate-x-1 " />
                        </div>
                    </div>
                </motion.section>
              )}
              {activeTab === "tab7" && (
                <motion.section
                  key="tab7"
                  id="f7"
                  className="tab-panel flex flex-col lg:flex-row  w-full gap-10 md:gap-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.img
                      src="/assets/images/sectors/sec2.png"
                      alt="New Tab Content"
                      className="w-full h-350 lg:h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 text-justify items-center] ">
                      <h3 className=" heavydark  mb-5 md:mb-10  ">
                      Site Hoarding<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="texthelvetica20 clr15op75 mb-6 md:mb-10  ">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul className="mb-6 md:mb-10">
                        <li className="flex items-center texthelvetica20 clr15op75 mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center texthelvetica20 clr15op75">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <div className="flex gap-3 items-center group rmbtn pb-3 cursor-pointer">
                          <div>
                            <p className="relative  flex gap-2 max-w-fit transition-opacity duration-300 text-font18  leading-[1.44]  text-font18   nuber-next-heavy leading-[1.25] ">Read More</p>
                          </div>
                          <Image src={readarrow} alt="icn1" className="relative top-[2px] transition-all duration-300 group-hover:translate-x-1 " />
                        </div>
                    </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
      </div>
     </div>
    </section>
  );
};

export default Tabs;
