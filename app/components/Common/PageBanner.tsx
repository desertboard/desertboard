"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import '@/app/components/Common/pgbnr.scss';
import { motion } from "framer-motion";

interface HeroSectionProps {
  bannerSrc: StaticImageData | string;
  arrowSrc: string;
  bnrPos?: string;
  title: string;
  desc?: string;
  breadcrumbs: { label: string; href: string }[];
  bnrHeight?: string;
  imageAlt?:string;
}
const formatText = (text: string) => {
  return text.replace(/®/g, "<sup>®</sup>");
};
const HeroSection: React.FC<HeroSectionProps> = ({ bannerSrc, arrowSrc, title,desc, breadcrumbs, bnrHeight, bnrPos,imageAlt }) => {
  return (
    // <section className="relative h-[75dvh] bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full">
    <section className="relative bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full" style={ { "--banner-height": bnrHeight } as React.CSSProperties}>
      {/* <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
      <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div>  */}
     <figure className="absolute left-0 top-0 h-full w-full -z-40 bg-primary">
  <Image
     className={`w-full h-full absolute top-0 left-0 object-cover ${bnrPos ? bnrPos : "object-center"}`}
     src={bannerSrc || "/assets/images/banners/bggrn.jpg"}
     width={1600}
     height={700}
     alt={imageAlt ?? "Banner Image"}
  />
</figure>

      <div className="container relative">
        <div className="pg-bnr__div absolute bottom-0 pb-10 md:pb-10 lg:pb-20">
          <motion.h1
          className="pg-bnr__ttl heavywhite  mb-5 md:mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
            {title}
            <span className="text-[#FF671F]">.</span>
          </motion.h1>
          {desc &&
            <motion.p
          className="text-[#FFFFFFBF] text-font20 lh-1p33 mb-3 md:mb-10 max-w-[90ch] text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: formatText(desc) }}  ></motion.p>}
          <div className="pg-bnr__txt flex items-center flex-wrap ">
            <ul className="flex items-center flex-wrap gap-[3px] md:gap-0">
              {breadcrumbs.map((breadcrumb, index) => (
                 <motion.li key={index} className="inline-flex items-center"
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                >
                  {breadcrumb.href ? (
                  <a href={breadcrumb.href} className={`text-[#FFFFFFBF] min-w-fit texthelvetica20 opacity-75 hover:text-[#FF671F] hover:opacity-[1]`}>
                    {breadcrumb.label}
                    </a>
                    ) : (
                      <span className={`text-[#FFFFFFBF] min-w-fit texthelvetica20 ${index === breadcrumbs.length - 1 ? "helveticaBold text-white " : "opacity-75"}`} dangerouslySetInnerHTML={{ __html: formatText(breadcrumb.label) }} />
                    )}
                  {index < breadcrumbs.length - 1 && <Image src={arrowSrc} alt="Arrow" className="mx-2" />}

                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
