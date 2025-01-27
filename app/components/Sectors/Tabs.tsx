"use client";

import React, { useState } from "react";
import sec2Img from "@/public/assets/images/sectors/sec2.png";
import Arrow from "@/public/assets/brdcrbs.svg";
import Image from "next/image";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  return (
    <section className="py-[80px] bg-[#E1DCD8] ">
      <div className="container mx-auto">
        <h2 className="text-[48px] font-bold text-[#002D28] mb-[40px]">
          Applications<span className="text-[#FF671F]">.</span>
        </h2>
        <div className="flex flex-col items-center ">
          <div className="w-full">
            <div className="col-12">
              <div className="tabset pt-2 border-b border-[#1515151A] flex  md:gap-[30px] gap-[10px] lg:gap-[50px]">
                {/* Tabs */}
                {["tab1", "tab2", "tab3", "tab4", "tab5", "tab6", "tab7"].map(
                  (tab, index) => (
                    <React.Fragment key={tab}>
                      <input
                        type="radio"
                        name="tabset"
                        id={tab}
                        aria-controls={`f${index + 1}`}
                        checked={activeTab === tab}
                        onChange={() => setActiveTab(tab)}
                        className="hidden"
                      />
                      <label
                        htmlFor={tab}
                        className={`cursor-pointer px-4 py-2 border-b-[6px] text-[#15151580] text-[28px] ${
                          tab === "tab1" ? "border-l-0" : ""
                        } ${
                          activeTab === tab
                            ? "border-[#FF671F]  font-bold"
                            : "border-transparent"
                        }`}
                        style={{
                          color: activeTab === tab ? "#002D28" : "#15151580",
                        }}>
                        <span>
                          {
                            [
                              "Façade Cladding",
                              "Wall Cladding",
                              "Partitional Wall",
                              "Sub-Flooring",
                              "Roofing",
                              "Concrete Forming",
                              "Site Hoarding",
                            ][index]
                          }
                        </span>
                      </label>
                    </React.Fragment>
                  )
                )}
              </div>

              {/* Tab Panels */}
              <div className="tab-panels flex flex-wrap my-[80px] ">
                {activeTab === "tab1" && (
                  <section id="f1" className="tab-panel flex w-full gap-[80px]">
                    <div className="w-1/2">
                      <Image
                        src={sec2Img}
                        alt="Landscape"
                        className="w-full h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      />
                    </div>
                    <div className="w-1/2 text-justify py-[30px] ">
                      <h3 className="text-[48px] font-bold mb-[40px] text-[#002D28]">
                        Façade Cladding<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="text-[20px] text-[#151515BF] mb-[40px] leading-7">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul>
                        <li className="flex items-center text-[20px] text-[#151515BF] mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <button className=" text-[#FF671F] py-2.5 mt-10  flex items-center justify-between border-[#FF671F] border-b-[1px] text-[18px] font-bold">
                        Read More
                        <span className="ml-2">
                          <Image src={Arrow} alt="" />
                        </span>
                      </button>
                    </div>
                  </section>
                )}
                {activeTab === "tab2" && (
                  <section id="f2" className="tab-panel flex w-full gap-[80px]">
                    <div className="w-1/2">
                      <Image
                        src={sec2Img}
                        alt="Landscape"
                        className="w-full h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      />
                    </div>
                    <div className="w-1/2 text-justify py-[30px] ">
                      <h3 className="text-[48px] font-bold mb-[40px] text-[#002D28]">
                        Façade Cladding<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="text-[20px] text-[#151515BF] mb-[40px] leading-7">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul>
                        <li className="flex items-center text-[20px] text-[#151515BF] mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <button className=" text-[#FF671F] py-2.5 mt-10  flex items-center justify-between border-[#FF671F] border-b-[1px] text-[18px] font-bold">
                        Read More
                        <span className="ml-2">
                          <Image src={Arrow} alt="" />
                        </span>
                      </button>
                    </div>
                  </section>
                )}
                {activeTab === "tab3" && (
                  <section id="f3" className="tab-panel flex w-full gap-[80px]">
                    <div className="w-1/2">
                      <Image
                        src={sec2Img}
                        alt="Landscape"
                        className="w-full h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      />
                    </div>
                    <div className="w-1/2 text-justify py-[30px] ">
                      <h3 className="text-[48px] font-bold mb-[40px] text-[#002D28]">
                        Façade Cladding<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="text-[20px] text-[#151515BF] mb-[40px] leading-7">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul>
                        <li className="flex items-center text-[20px] text-[#151515BF] mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <button className=" text-[#FF671F] py-2.5 mt-10  flex items-center justify-between border-[#FF671F] border-b-[1px] text-[18px] font-bold">
                        Read More
                        <span className="ml-2">
                          <Image src={Arrow} alt="" />
                        </span>
                      </button>
                    </div>
                  </section>
                )}
                {activeTab === "tab4" && (
                  <section id="f4" className="tab-panel flex w-full gap-[80px]">
                    <div className="w-1/2">
                      <Image
                        src={sec2Img}
                        alt="Landscape"
                        className="w-full h-[552px] object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                      />
                    </div>
                    <div className="w-1/2 text-justify py-[30px] ">
                      <h3 className="text-[48px] font-bold mb-[40px] text-[#002D28]">
                        Façade Cladding<span className="text-[#FF671F]">.</span>
                      </h3>
                      <p className="text-[20px] text-[#151515BF] mb-[40px] leading-7">
                        DesertBoard’s PSB® provides the engineering and
                        construction industry with sustainable, high-performance
                        materials tailored for demanding applications. From
                        durable formwork to fire-rated door cores, PSB® ensures
                        strength, safety, and eco-responsibility in every
                        project.
                      </p>

                      <ul>
                        <li className="flex items-center text-[20px] text-[#151515BF] mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Structural Elements: I-Beams, I-Joists, Columns, and
                          Slabs.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Wall Cladding & Partitions: Moisture-resistant boards
                          for interiors and exteriors.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Formwork and Shuttering: PSB® Conform for repeated use
                          in harsh conditions.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]  mb-[16px]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Flooring Solutions: Raised flooring and parquet with
                          PSB® Ultra.
                        </li>
                        <li className="flex items-center text-[20px] text-[#151515BF]">
                          <span className="bg-[#FF671F] w-[8px] h-[8px] inline-block mr-[10px]"></span>
                          Fire-Rated Door Cores: Up to 90-minute certified fire
                          resistance.
                        </li>
                      </ul>
                      <button className=" text-[#FF671F] py-2.5 mt-10  flex items-center justify-between border-[#FF671F] border-b-[1px] text-[18px] font-bold">
                        Read More
                        <span className="ml-2">
                          <Image src={Arrow} alt="" />
                        </span>
                      </button>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
