"use client";
import React from "react";
import CardFlow from "../Common/cardflow";
import { Homecarlsldata } from "@/app/(user)/data/homecarlsl";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import parse from 'html-react-parser'
import { HomeType } from "@/types/HomeType";


const SectorsList = ({data}:{
  data:HomeType | null
}) => {
  return (
    <>
      <section className="relative py-10 lg:py-20  insp-mn inspbg">
        <motion.div className="ola ola-right absolute top-0 right-[-20%] md:right-[-10%] w-[20em] md:w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <Image className="absolute" src={lfbef} alt="Description of the image" />
        </motion.div>
        <motion.div className="ola ola-right absolute bottom-[43%] left-[-25%] md:left-[-15%] w-[20em] md:w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <Image className="absolute" src={lfbt} alt="Description of the image" />
        </motion.div>
        <div className="container m-auto">
          <div className="text-left mb-5 lg:mb-10">
            <motion.h2
              className="text-Darkgreen mb-4 text-[28px] md:text-[48px] leading-[1]  nuber-next"
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
              Sectors<span className="text-[#FF671F]">.</span>
            </motion.h2>

            <motion.div
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
              {parse(data?.home[0]?.sectorsDescription || "")}
            </motion.div>
          </div>

          <CardFlow data={Homecarlsldata.data} />
        </div>
      </section>
    </>
  );
};

export default SectorsList;
