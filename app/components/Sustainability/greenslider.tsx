'use client';
import React from "react";
import Image from "next/image";
import ola from "@/public/assets/images/home/ola.svg";
  import { secarlsldata } from "./data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import CardFiveFlow from "../Common/CardfiveFlow";

const greenslider = () => {
  return (
    <>
      <section className=" py-10 lg:py-20  relative bg-primary text-white overflow-hidden border-t-[5px] border-b-[5px] border-secondary">
      <motion.div className="ola ola-right absolute top-5 right-[-10%] w-[20em] md:w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Image className="absolute" src={ola} alt="Description of the image"></Image>
      </motion.div>

      <div className="ola ola-right absolute bottom-0 left-[-10%] w-[20em] md:w-[40em] rotate-180">
        <Image className="absolute" src={ola} alt="Description of the image"></Image>
      </div>
        <div className="container ">
          <div><h2 className="heavydark48 mb-6 md:mb-10">Our Role in Sustainable Actions<span className="text-orange">.</span></h2></div>

          <div>
          <motion.div className="ansm"  initial={{ opacity: 0, y: -30 }}
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
         <CardFiveFlow data={secarlsldata.data}   />
        </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default greenslider;
