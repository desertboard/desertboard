"use client";
import { motion, } from "framer-motion";

import Image from "next/image";
import Banner from "@/public/assets/banner2.jpg";
import Link from "next/link";
import readarrow from "@/public/assets/images/read-arrow.svg";

const BannerSr = () => {

  return (
    <section

      className="relative h-[75vh] md:h-screen bg-cover bg-center flex items-center justify-center text-center"
    >
      <figure className="absolute h-[75vh] md:h-screen top-0 w-full -z-40 bg-primary hr-figs">
        <motion.img
          className="h-[75vh] md:h-screen w-full absolute object-cover"
          src={Banner.src}
          width={1920}
          height={900}
          alt=""
          animate={{ scale: [1, 1.2] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 15,
            ease: "easeInOut",
          }}
        />
      </figure>
      <div className="relative z-10 text-white px-6 top-0 lg:top-[120px]">
        <motion.h1
          className="text-[45px] md:text-[96px] leading-none mb-4 lg:mb-[52px] max-w-[15.5ch] nuber-next-heavy m-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          DesertBoard&apos;s Palm Strand Board
        </motion.h1>
        <motion.p
          className="text-font28 font-[400] mb-6 md:mb-[52px] opacity-[75%] leading-[1.3]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
        >
          The region&apos;s most sustainable building material
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.6 }}
        >
            <Link href="#" className="flex items-center nuber-next-heavy group w-fit text-font18  m-auto gap-4 rounded-none inline-block px-5 py-3 md:px-10 md:py-4
          border border-white text-white btnhs  hover:text-[#FF671F] hover:border-[#FF671F] transition rounded-md">
            Know More
            <Image src={readarrow} alt="icn1" width={16} height={24} className="fiterwt transition-all duration-300 group-hover:translate-x-2 " />
          </Link>

        </motion.div>
      </div>
    </section>
  );
};

export default BannerSr;
