"use client";

import React, { useState } from "react";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tabData } from "./data";
const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Toggle accordion
  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 lg:py-20 bg-[#E1DCD8] insp-mn relative">
      <motion.div
        className="ola ola-right absolute top-0 right-[-25%] md:right-[-10%] w-[20em] md:w-[40em]"
        animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          className="absolute"
          src={lfbef}
          alt="Description of the image"
        />
      </motion.div>
      <motion.div
        className="ola ola-right absolute bottom-[43%] left-[-25%] md:left-[-15%] w-[20em] md:w-[40em]"
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
              <div className="col-12 ">
                <div className="hidden lg:block">
                <div className="tabset pt-2 border-b border-[#1515151A] hidden lg:flex md:gap-[30px] gap-[10px] lg:gap-[50px] xxl:gap-[107px]">
                  {tabData.data.map((tab, index) => (
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
                        className={`cursor-pointer py-4 border-b-[6px] text-[#15151580] ${
                          activeTab === `tab${index + 1}`
                            ? "border-[#FF671F] nuber-next-heavy leading-[1] text-font28"
                            : "border-transparent nuber-next-bold leading-[1] text-font24"
                        }`}
                        style={{
                          color:
                            activeTab === `tab${index + 1}`
                              ? "#002D28"
                              : "#15151580",
                        }}
                      >
                        {tab.tab}
                      </label>
                    </React.Fragment>
                  ))}
                </div>
                <div className="tab-panels flex flex-wrap mt-10 md:mt-20    ">
                  <AnimatePresence mode="wait">
                    {tabData.data.map(
                      (tab, index) =>
                        activeTab === `tab${index + 1}` && (
                          <motion.section
                            key={`tab${index + 1}`}
                            id={`f${index + 1}`}
                            className="tab-panel flex flex-col lg:flex-row w-full gap-10 md:gap-20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="w-full lg:w-1/2">
                              <motion.img
                                src={tab.image.src}
                                alt="New Tab Content"
                                className="w-full h-350 lg:h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                            <div className="w-full lg:w-1/2 text-justify items-center">
                              <h3 className="heavydark mb-5 md:mb-10">
                                {tab.title}
                              </h3>
                              <p className="texthelvetica20 clr15op75 mb-6 md:mb-10">
                                {tab.description}
                              </p>
                              <ul className="mb-6 md:mb-10">
                                {tab.list.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex texthelvetica20 clr15op75 mb-[16px]"
                                  >
                                    <span className="bg-[#FF671F] min-w-[8px] min-h-[8px] max-w-[8px] max-h-[8px] inline-block mr-[10px] relative top-2"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.section>
                        )
                    )}
                  </AnimatePresence>
                </div>
                </div>

                <div className="lg:hidden">
                  {tabData.data.map((tab, index) => (
                    <div key={index} className="border-b border-[#1515151A]">
                      <button
                        className="w-full text-left py-2 md:py-4 flex justify-between items-center"
                        onClick={() => handleAccordionClick(index)}
                      >
                        <span className="cursor-pointer py-2 md:py-4 heavydark border-transparent nuber-next-bold leading-[1] text-font24">
                          {tab.tab}
                        </span>
                        <span className="text-xl">
                          {activeIndex === index ? "−" : "+"}
                        </span>
                      </button>
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0">
                              {/* <h3 className="heavydark mb-5">{tab.title}</h3> */}
                              <p className="texthelvetica20 clr15op75 mb-6">
                                {tab.description}
                              </p>
                              <ul>
                                {tab.list.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex texthelvetica20 clr15op75 mb-[16px]"
                                  >
                                    <span className="bg-[#FF671F] min-w-[8px] min-h-[8px] max-w-[8px] max-h-[8px] inline-block mr-[10px] relative top-2"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
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
