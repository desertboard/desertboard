"use client";
import React from "react";

import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import "@/app/components/home/goalcrd.scss";
import { motion } from "framer-motion";

import Accordion from "../Applications/Accordion";
interface WhySupremeProps {
  data: {
    content: string;
    title: string;
  }[];
}

// Component to display the data
const SectionFour: React.FC<WhySupremeProps> = ({ data }) => {
  return (
    <>
      <section className="pt-10 lg:pt-20 pb-10 md:pb-20 insp-mn relative darkbanner  overflow-hidden">
        <motion.div
          className="ola ola-right absolute top-5 right-[-10%] w-[20em] md:w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={lfbef}
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
            src={lfbt}
            alt="Description of the image"
          />
        </motion.div>
        <div className="container m-auto">
          <div className="relative z-[1]">
            <motion.h2
              className="text-Darkgreen mb-4 md:mb-10 text-[28px] md:text-[48px]   nuber-next-heavy leading-[1] "
              initial={{ opacity: 0, x: -30 }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.3 },
                },
              }}
            >
              Best Practices
              <span className="text-[#FF671F]">.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.5 },
              },
            }}
          >
            <Accordion accordionData={data} bg={"bg-[#ede8e3]"} bullet={true} />

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
