"use client";
import React from "react";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";
import readarrow from "@/public/assets/images/read-arrow.svg";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import "@/app/components/home/goalcrd.scss";
import { motion } from "framer-motion";
import Slidersustain from "./Slidersustain";
import Link from "next/link";
import { HomeType } from "@/types/HomeType";

const SustainabeSc = ({data}:{
  data:HomeType | null
}) => {
  return (
    <>
      <section className="pt-10 lg:pt-20 pb-20 md:pb-20 insp-mn relative darkbanner  overflow-hidden">
        <motion.div className="ola ola-right absolute top-5 right-[-20%] md:right-[-10%] w-[20em] md:w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <Image className="absolute" src={lfbef} alt="Description of the image" />
        </motion.div>
        <motion.div className="ola ola-right absolute bottom-[-52%] md:bottom-[43%] left-[-15%] w-[20em] md:w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <Image className="absolute" src={lfbt} alt="Description of the image" />
        </motion.div>
        <div className="container m-auto">
          <div className="flex justify-between mb-8 md:items-end mdgrd gap-4 ">
            <div className="text-left ">
              <motion.h2
                className="text-Darkgreen mb-4 text-[28px] md:text-[48px]   nuber-next-heavy leading-[1] "
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
                }}>
                {data?.home[0]?.sustainabilitySection.heading}
                <span className="text-[#FF671F]">.</span>
              </motion.h2>
              <motion.p
                className="text-font20 text-litetext opacity-[75%]  max-w-[75ch]"
                initial={{ opacity: 0, x: -30 }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 0.75,
                    x: 0,
                    transition: { duration: 1, delay: 0.5 },
                  },
                }}>
                {data?.home[0]?.sustainabilitySection?.description}
              </motion.p>
            </div>
            <div className="flex gap-3 items-center group rmbtn pb-3">
              <div>
               <Link href="/sustainability"> <p className="relative flex gap-2 max-w-fit    transition-opacity duration-300       text-font20 md:min-w-[105px] nuber-next-heavy leading-[1.25] cursor-pointer">Read More</p></Link>
              </div>{" "}
              <Image src={readarrow} alt="icn1" className="relative top-[2px] transition-all duration-300 group-hover:translate-x-1 " />
            </div>
          </div>
        </div>
        <motion.div
          className="ansm omsus-mn"
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
          }}>
          <Slidersustain data={data} />

        </motion.div>

      </section>
    </>
  );
};

export default SustainabeSc;
