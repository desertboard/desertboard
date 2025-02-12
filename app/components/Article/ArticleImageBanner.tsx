"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import "@/app/components/Common/pgbnr.scss";
import { assets } from "@/public/assets/images/assets";
import { motion } from "framer-motion";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";
import { IndiNews } from "@/types/IndiNews";
import parse from 'html-react-parser'

interface HeroSectionProps {
  bannerSrc: StaticImageData | string;
  data:IndiNews
}

const ArticleImageBanner: React.FC<HeroSectionProps> = ({ bannerSrc,data }) => {
  return (
    // <section className="relative h-[75dvh] bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full">
    <section className="insp-mn inspbg ">
    <motion.div
       className="ola ola-right absolute   right-[-10%]   top-[13%] w-[20em] md:w-[40em]"
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
       className="ola ola-right absolute bottom-[63%] left-[-15%] w-[20em] md:w-[40em]"
       animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
       transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
     >
       <Image
         className="absolute"
         src={lfbt}
         alt="Description of the image"
       />
     </motion.div>
       <motion.div
          className="ola ola-right absolute   right-[-10%] w-[20em] md:w-[40em] top-[54%]"
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
          className="ola ola-right absolute bottom-[20%] left-[-15%] w-[20em] md:w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={lfbt}
            alt="Description of the image"
          />
        </motion.div>

      <div className=" h-[300px] bg-Darkgreen hidden lg:block absolute w-full "> </div>
      <div className="container relative">
        <div className="pt-10 lg:pt-0">
          <Image
            className="w-full h-full   object-cover"
            src={bannerSrc}

            alt="Banner image"
            width={400}
            height={500}
          />
        </div>
        <div className="max-w-[1400px]">
          <div className={`${data?.data?.images[1] || data?.data?.images[2] ? "lg:pb-[60px] pb-6" : ""} pt-6 lg:pt-20 clr15op75 texthelvetica20`}>
            {data && data.data && parse(data.data.description.split("</p>").slice(0,3).join(''))}
            {/* <p className="pb-5 lg:pb-10 clr15op75 texthelvetica20">
              DesertBoard® proudly unveiled its versatile range of 100%
              sustainable products at Big 5 Global 2024, the region’s largest
              urban development and construction event. Held from November 26th
              to 29th at the Dubai World Trade Centre, gulf, the event provided
              the perfect stage to showcase DesertBoard®’s locally manufactured
              Palm Strand Boards (PSB®)—recognized as the region’s most
              sustainable building material.{" "}
            </p>
            <p className="clr15op75 texthelvetica20">
              Big 5 Global 2024 hosted over 100,000 attendees from more than 165
              countries, with 2,700 global exhibitors presenting groundbreaking
              innovations. In this vibrant environment, DesertBoard® stood out
              with its lineup of nine+ sustainable Palm Strand Board (PSB®)
              products, solidifying its reputation as a leader in eco-friendly
              construction materials.{" "}
            </p> */}


          </div>
          {(data?.data?.images[1] || data?.data?.images[2] || data?.data?.images[3]) && <div className="flex gap-4 md:gap-[40px] flex-wrap">
            {data?.data?.images[1] && <Image src={data?.data?.images[1]} alt="" width={400} height={400}></Image>}
            {data?.data?.images[2] && <Image src={data?.data?.images[2]} alt="" width={400} height={400}></Image>}
            {data?.data?.images[3] && <Image src={data?.data?.images[3]} alt="" width={400} height={400}></Image>}
          </div>}

          <div className={`pb-6 ${data?.data?.images[4] || data?.data?.images[5] ? "lg:pb-[60px]" : ""} pt-6 lg:pt-20 clr15op75 texthelvetica20`}>
          {data && data.data && parse(data.data.description.split("</p>").slice(3,7).join(''))}
            {/* <p className="pb-5 lg:pb-10 clr15op75 texthelvetica20">
              Aligned with the gulf’s Vision 2030, DesertBoard®’s
              zero-formaldehyde boards contribute directly to achieving net-zero
              carbon emissions. Featuring a 100% deforestation-free supply
              chain, DesertBoard®’s manufacturing process retains approximately
              60,000 tons of CO2 annually, further reinforcing its commitment to
              sustainability.
            </p>
            <p className="pb-5 lg:pb-10 clr15op75 texthelvetica20">
              The event underscored DesertBoard®’s pivotal role in advancing
              sustainable construction. By engaging with key stakeholders, the
              company inspired attendees to embrace eco-friendly materials that
              deliver exceptional performance while prioritizing environmental
              responsibility. Visitors to the DesertBoard® exhibit witnessed
              firsthand how its innovative products address the region’s growing
              demand for sustainable material, setting new standards in
              durability and environmental impact.
            </p>
            <p className="clr15op75 texthelvetica20">
              The event underscored DesertBoard®’s pivotal role in advancing
              sustainable construction. By engaging with key stakeholders, the
              company inspired attendees to embrace eco-friendly materials that
              deliver exceptional performance while prioritizing environmental
              responsibility. Visitors to the DesertBoard® exhibit witnessed
              firsthand how its innovative products address the region’s growing
              demand for sustainable material, setting new standards in
              durability and environmental impact.
            </p> */}
          </div>

          {(data?.data?.images[4] || data?.data?.images[5]) && <div className="flex gap-4 mg:gap-[40px] pb-6 lg:pb-[60px] flex-wrap">
            {data?.data?.images[4] && <Image src={data?.data?.images[4]} alt="" width={650} height={400}></Image>}
            {data?.data?.images[5] && <Image src={data?.data?.images[5]} alt="" width={650} height={400}></Image>}
          </div>}
            <div className="pb-6 lg:pb-[60px] clr15op75 texthelvetica20">
            {data && data.data && parse(data.data.description.split("</p>").slice(7).join(''))}
              {/* <p className=" clr15op75 texthelvetica20">
              DesertBoard® extends its heartfelt appreciation to everyone who visited its stall and showed interest in its zero-emission Palm Strand Board (PSB®). Your enthusiasm for locally manufactured solutions fuels our mission to drive the construction industry toward a greener, more innovative future.
              </p> */}
          </div>

          <div className="flex items-center gap-2 pb-6 lg:pb-[60px]">
                    <Image src={assets.label} alt=""></Image>
                    <p className="nuber-next-bold texthelvetica20bold text-Darkgreen leading-[1] uppercase underline">{data?.data?.tags[0]} </p>
          </div>
          <div className="flex items-center gap-2 pb-6 lg:pb-20">
                    <Image src={assets.share} alt=""></Image>
                    <p className="nuber-next-bold text-font18 text-Darkgreen leading-[1] ">Share Article</p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ArticleImageBanner;
