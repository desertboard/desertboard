"use client";

import React from "react";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";
import Image from "next/image";
import { motion } from "framer-motion";
const RelatedArticles: React.FC = () => {

  return (
    <section className="py-10 lg:py-20 bg-[#E1DCD8] insp-mn relative ">
<motion.div
        className="ola ola-right absolute top-0 right-[-10%] w-[40em]"

        animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="absolute" src={lfbef} alt="Description of the image" />
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
        <h2 className="heavydark mb-2 xl:mb-10">
        Related Articles<span className="text-[#FF671F] leading-[1]">.</span>
        </h2>

      </div>
     </div>
    </section>
  );
};

export default RelatedArticles;
