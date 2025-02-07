"use client";
import React, { useState, useEffect,useRef } from "react";

import Image from "next/image";
import readarrow from "@/public/assets/images/read-arrow.svg";

import SingleSlider from "../Applications/SingleSlider";
import SuggestedProduct from "./sectwocomp/SuggestedProduct";
import { suggestData, whySupreme } from "./data";
import WhySupreme from "./sectwocomp/WhySupreme";

interface SectionTwoProps {
  suggested?: boolean; // Optional boolean prop
}

function SectionTwo({ suggested }: SectionTwoProps) {





   const referenceDiv = useRef<HTMLDivElement | null>(null);
  const [divWidth, setDivWidth] = useState<number | null>(null);

  useEffect(() => {
    if (window.innerWidth > 1021) {
      if (referenceDiv.current) {
        setDivWidth((referenceDiv.current.offsetWidth) - 20); // Get the width of referenceDiv
      }
    }
    // Resize event listener to update width on window resize
    const handleResize = () => {
      if (window.innerWidth > 1021) {
        if (referenceDiv.current) {
          setDivWidth((referenceDiv.current.offsetWidth) - 20);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const targetDivRef = useRef<HTMLDivElement | null>(null);
  const nextDivRef = useRef<HTMLDivElement | null>(null);
  const [isStickydiv, setIsStickydiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetDivRef.current || !nextDivRef.current) return;

      const stickyRect = targetDivRef.current.getBoundingClientRect();
      const nextDivRect = nextDivRef.current.getBoundingClientRect();
    if(window.innerWidth > 1021){
      if (stickyRect.top <= 0 && nextDivRect.top > 150) {
        setIsStickydiv(true);
      }
      else {
        setIsStickydiv(false);
      }

      };
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <section className="py-10 md:pt-20 pb-0 insp-mn relative inspbg">
        <div className="container overflow-hidden" >
          <div className="lg:flex flex-col lg:flex-row  gap-10 md:gap-10 ">
            <div className="lg:w-1/2 " ref={targetDivRef} >
           {suggested && <SuggestedProduct data={suggestData.data} />}
                <WhySupreme {...whySupreme} />


                <div className="p-4 md:p-8 bg-[#E3DED9]">
      <h3 className="nubernext28heavy text-Darkgreen pb-4 md:pb-8">
        Specifications
      </h3>
      <div className="border-t border-[#15151510] border-dashed pb-4 md:pb-8">
        {[
          { label: "Modulus of rupture", value: "16 – 22 N/mm2" },
          { label: "Modulus of elasticity", value: "3,500 N/mm2" },
          { label: "Internal Bonding", value: "0.29 – 0.34 N/mm2" },
          { label: "Thickness Swelling", value: "5% - 15%" },
          { label: "Width", value: "1,200 – 1,250 mm" },
          { label: "Length", value: "1,830 – 3,048 mm" },
          { label: "Thickness", value: "9 – 44 mm" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between py-2 md:py-5 border-b border-[#15151510] border-dashed"
          >
            <p className="texthelvetica20 clr15op75">{item.label}</p>
            <p className="texthelvetica20 clr15op75">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-3 flex-wrap">
        {["Technical Datasheet", "Certificates", "Get InTouch"].map((text, index) => (
          <div key={index} className="flex gap-3 items-center group rmbtn pb-2 md:pb-3 cursor-pointer">
            <p className="relative flex gap-2 max-w-fit transition-opacity duration-300 text-[16px] md:text-[18px] nuber-next-heavy leading-[1.25]">
              {text}
            </p>
            <Image
              src={readarrow}
              alt="icon"
              className="relative top-[2px] transition-all duration-300 group-hover:translate-x-1"
            />
          </div>
        ))}
      </div>
    </div>
            </div>
            <div className="lg:w-1/2 " ref={referenceDiv}>
              <div
            className={`transition-all duration-300 mt-10 lg:mt-0 ${
              isStickydiv ? "fixed top-[110px] lg:w-2/6" : ""
                }`}
                style={{ width: divWidth ? `${divWidth}px` : "auto" }}>
                  <SingleSlider />

                  </div>
            </div>
          </div>
        </div>
      </section>
      <div ref={nextDivRef} > </div>
    </>
  );
};

export default SectionTwo;
