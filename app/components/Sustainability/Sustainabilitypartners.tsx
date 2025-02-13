"use client";

import React from "react";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { accordionData } from "./data";
import Accordionsec from "../Common/Accordionsec";
const Sustainabilitypartners: React.FC = () => {
  const formatText = (text: string) => {
    return text.replace(/®/g, "<sup>®</sup>");
  };
  return (
    <section className="py-10 lg:py-20 bg-[#E1DCD8] insp-mn relative ">
      <motion.div
        className="ola ola-right absolute top-0 right-[-10%] w-[40em]"
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
        className="ola ola-right absolute bottom-[43%] left-[-15%] w-[40em]"
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="absolute" src={lfbt} alt="Description of the image" />
      </motion.div>
      <div className=" relative z-[1] ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
          <div className="w-full lg:w-1/4">
              <div>
                  <h2 className="heavydark mb-2 xl:mb-10">
                    Our Sustainability Partners
                    <span className="text-[#FF671F] leading-[1]">.</span>
                  </h2>
              </div>
            </div><div className="w-full lg:w-3/4">
              <div>
              <p className="texthelvetica20 clr15op75 pb-7 lg:pb-10">
        DesertBoard proudly collaborates with the Government of the UAE and internationally recognized sustainability organizations to drive impactful and sustainable solutions within the construction and allied industries.
      </p>
      <Accordionsec accordionData={accordionData.data} bg={"bg-[#D1CCC8]"} bullet={false} />
      <p className="texthelvetica20 clr15op75 pt-5" dangerouslySetInnerHTML={{ __html: formatText("PSB® zero-formaldehyde boards are aligned with global sustainability frameworks and green building standards, contributing to a significant reduction in the carbon footprint. Our association with these organizations fosters collaborative efforts with industry professionals, policymakers, and stakeholders to support a greener, more sustainable future.") }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainabilitypartners;
