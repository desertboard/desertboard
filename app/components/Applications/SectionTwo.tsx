"use client";
import React, { useState, useEffect,useRef } from "react";

import Image from "next/image";
import readarrow from "@/public/assets/images/read-arrow.svg";

import SingleSlider from "../Applications/SingleSlider";
import SuggestedProduct from "./sectwocomp/SuggestedProduct";
import WhySupreme from "./sectwocomp/WhySupreme";
import { motion } from "framer-motion";
import { assets } from "@/public/assets/images/assets";
import { IndiApplication } from "@/types/ApplicationType";
import Link from "next/link";
import { IndiSectorType } from "@/types/IndiSector";

interface SectionTwoProps {
  suggested?: boolean;
  data:IndiApplication
  pageName:string;
  sectorData?:IndiSectorType// Optional boolean prop
}

function SectionTwo({ suggested,data,pageName,sectorData }: SectionTwoProps) {

  console.log(data)

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

  const links = [
    { text: "Technical Datasheet", href: "/downloads" },
    { text: "Certificates", href: "/downloads" },
    { text: "Get InTouch", href: "/contact" },
  ];
  const formatmm2Text = (text: string) => {
    return text.replace(/mm2/g, "mm<sup>2</sup>");
  };
  return (
    <>
      <section className="py-10 md:pt-20 pb-0 insp-mn relative inspbg">
      <motion.div
          className="ola ola-right absolute top-5 right-[-10%] w-[20em] md:w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={assets.leaf}
            alt="Description of the image"
          />
        </motion.div>
        <motion.div
          className="ola ola-right absolute bottom-[43%] left-[-15%] w-[20em] md:w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={assets.lfbt}
            alt="Description of the image"
          />
        </motion.div>
        <div className="container overflow-hidden" >
          <div className="lg:flex flex-col lg:flex-row  gap-10 md:gap-10  relative">
            <div className="lg:w-1/2 " ref={targetDivRef} >
           {suggested && <SuggestedProduct data={data} />}
                <WhySupreme pageName={pageName} data={data} />


                <div className="p-4 md:p-8 bg-[#E3DED9]">
      <h3 className="nubernext28heavy text-Darkgreen pb-4 md:pb-8">
        Specifications
      </h3>
      <div className="border-t border-[#15151510] border-dashed pb-4 md:pb-8">
        {data && data.data && data.data.specifications.map((item, index) => (
          <div
            key={index}
            className="flex justify-between py-2 md:py-5 border-b border-[#15151510] border-dashed"
          >
            <p className="texthelvetica20 clr15op75">{item.name}</p>
            <p className="texthelvetica20 clr15op75" dangerouslySetInnerHTML={{ __html: formatmm2Text(item.value) }} />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-3 flex-wrap">

{links.map((item, index) => (
  <Link
    key={index}
    href={item.href}
    className="flex gap-3 items-center group rmbtn pb-2 md:pb-3 cursor-pointer"
  >
    <p className="relative flex gap-2 max-w-fit transition-opacity duration-300 text-[16px] md:text-[18px] nuber-next-heavy leading-[1.25]">
      {item.text}
    </p>
    <Image
      src={readarrow}
      alt="icon"
      className="relative top-[2px] transition-all duration-300 group-hover:translate-x-1"
    />
  </Link>
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
                  <SingleSlider data={data} sectorData={sectorData}/>

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
