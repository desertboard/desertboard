"use client";
import ola from "@/public/assets/images/home/ola.svg";
import React from "react";
import Image from "next/image";
import '@/app/components/Common/pgbnr.scss';
import { assets } from "@/public/assets/images/assets";
import { motion } from "framer-motion";

interface HeroSectionProps {
  arrowSrc: string;
  title: string;
  date: string;
  labeltext: string;

  breadcrumbs: { label: string; href: string }[];
  bnrHeight?: string;
}

const ArticleBanner: React.FC<HeroSectionProps> = ({  arrowSrc, title,date, labeltext ,  breadcrumbs }) => {
  return (
    // <section className="relative h-[75dvh] bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full">
    <section className="relative bg-cover bg-Darkgreen flex items-center justify-center text-center bnr-pg   article-banner w-full" >
       <motion.div
          className="ola ola-right absolute top-5 right-[-10%] w-[20em] md:w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={ola}
            alt="Description of the image"
          />
        </motion.div>

      <div className="container relative">
        <div className="pg-bnr__div   bottom-0 pb-10 lg:pb-[60px] w-full md:w-[calc(100%-30px)] pt-[110px]  md:pt-[150px]  lg:pt-[200px] xl:pt-[295px]">

          <h1 className="pg-bnr__ttl heavydark48 max-w-[42ch]  mb-6 md:mb-10">
            {title}
            <span className="text-[#FF671F]">.</span>
          </h1>
          <div className="flex flex-col md:flex-row items-start gap-4 md:items-center justify-between mb-4 md:mb-[60px] ">

              <div className="flex  items-center gap-5">
                  <div className="flex items-center gap-2">
                    <Image src={assets.calender} alt=""></Image>
                    <p className="nuber-next-bold text-font20 text-[#fff] leading-[1.2] opacity-[75%] uppercase text-left">{date} </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={assets.label} alt=""></Image>
                    <p className="nuber-next-bold text-font20 text-[#fff] leading-[1.2] opacity-[75%] uppercase underline text-left">{labeltext} </p>
                    </div>
              </div>
              <div className="flex items-center gap-2">
                    <Image src={assets.share} alt=""></Image>
                    <p className="nuber-next-bold text-font20 text-[#fff] leading-[1] opacity-[75%]">Share Article</p>
                  </div>

          </div>
          <div className="pg-bnr__txt flex items-center flex-wrap">
            <ul className="flex items-center gap-4  md:gap-0 flex-wrap">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="inline-flex items-center">
                  <a href={breadcrumb.href} className={`text-[#FFFFFFBF] min-w-fit texthelvetica20 ${index === breadcrumbs.length - 1 ? "helvetica-bold text-white " : "opacity-75"}`}>
                    {breadcrumb.label}
                  </a>

                  {index < breadcrumbs.length - 1 && <Image src={arrowSrc} alt="Arrow" className="mx-1  md:mx-2 w-[10px] md:w-[14px] h-[10px] md:h-[18px]" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleBanner;
