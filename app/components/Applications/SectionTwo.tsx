"use client";
import React, {useEffect, useRef } from "react";
import Image from "next/image";
import readarrow from "@/public/assets/images/read-arrow.svg";
import SingleSlider from "../Applications/SingleSlider";
import SuggestedProduct from "./sectwocomp/SuggestedProduct";
import WhySupreme from "./sectwocomp/WhySupreme";
/* import { motion } from "framer-motion";
import { assets } from "@/public/assets/images/assets"; */
import { IndiApplication } from "@/types/ApplicationType";
import Link from "next/link";
import { IndiSectorType } from "@/types/IndiSector";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface SectionTwoProps {
  suggested?: boolean;
  data: IndiApplication;
  pageName: string;
  sectorData?: IndiSectorType;
}

function SectionTwo({ suggested, data, pageName, sectorData }: SectionTwoProps) {
  const referenceDiv = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (window.innerWidth > 1021 && sliderRef.current && referenceDiv.current) {
      gsap.to(sliderRef.current, {
        scrollTrigger: {
          trigger: referenceDiv.current,
          start: "top 110px",
          end: "bottom 0",
          scrub: true,
          pin: true,
        },
        ease: "power1.out",
      });
    }
  }, []);

  const links = [
    { text: "Technical Datasheet", href: "/downloads" },
    { text: "Certificates", href: "/downloads" },
    { text: "Get In Touch", href: "/contact" },
  ];

  const formatmm2Text = (text: string) => {
    return text ? text.replace(/mm2/g, "mm<sup>2</sup>") : "";
  };

  return (
    <section className="py-10 md:pt-20 pb-0 insp-mn relative inspbg">
      <div className="container overflow-hidden">
        <div className="lg:flex flex-col lg:flex-row relative">
          <div className="lg:w-1/2 w-full md:pr-5">
            {suggested && <SuggestedProduct data={data} />}
            <WhySupreme pageName={pageName} data={data} />
            <div className="p-4 md:p-8 bg-[#E3DED9]">
              <h3 className="nubernext28heavy text-Darkgreen pb-4 md:pb-8">
                Specifications
              </h3>
              <div className="border-t border-[#15151510] border-dashed pb-4 md:pb-8">
                {data?.data?.specifications.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 md:py-5 border-b border-[#15151510] border-dashed"
                  >
                    <p className="texthelvetica20 clr15op75">{item.name}</p>
                    <p
                      className="texthelvetica20 clr15op75"
                      dangerouslySetInnerHTML={{ __html: formatmm2Text(item.value) }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between gap-3 flex-wrap contlink">
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
          <div className="lg:w-1/2 hidden lg:block" ref={referenceDiv}>
            <div ref={sliderRef} className="transition-all duration-700 mt-10 lg:mt-0 md:pl-5" >
              <SingleSlider data={data} sectorData={sectorData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionTwo;
