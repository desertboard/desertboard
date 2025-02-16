"use client";

import React from "react";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Accordionsec from "../Common/Accordionsec";
import { Sustainability } from "@/types/Sustainability";

const Sustainabilitypartners = ({data}:{
  data:Sustainability
}) => {

  const formatText = (text?: string) => {
    if (!text) return "";
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
                    {data && data.sustainability && data.sustainability.partners.heading}
                    <span className="text-[#FF671F] leading-[1]">.</span>
                  </h2>
              </div>
            </div><div className="w-full lg:w-3/4">
              <div>
              <p
  className="texthelvetica20 clr15op75 pb-7 lg:pb-10"
  dangerouslySetInnerHTML={{
    __html: formatText(
      data?.sustainability?.partners.description
        .split(".")
        .slice(0, 1)
        .join("") + "." 
    ),
  }}
/>
      <Accordionsec data={data} bg={"bg-[#D1CCC8]"} bullet={false} />
      <p
                  className="texthelvetica20 clr15op75 pt-5"
                  dangerouslySetInnerHTML={{
                    __html: formatText(
                      data?.sustainability?.partners.description
                        .split(".")
                        .slice(1)
                        .join("") + "." 
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainabilitypartners;
