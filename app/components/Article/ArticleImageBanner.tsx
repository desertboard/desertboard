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
import parse from 'html-react-parser';
import ShareArticle from "./ShareArticle";

interface HeroSectionProps {
  bannerSrc: StaticImageData | string;
  data: IndiNews;
}

const formatText = (text: string) => {
  return text.replace(/®/g, "<sup>®</sup>");
};

const ArticleImageBanner: React.FC<HeroSectionProps> = ({ bannerSrc, data }) => {
  const formatDescription = (description: string) => {
    return parse(formatText(description));
  };

  return (
    <section className="insp-mn inspbg pb-[80px]">
      <motion.div
        className="ola ola-right absolute right-[-10%] top-[13%] w-[20em] md:w-[40em]"
        animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="absolute" src={lfbef} alt="Description of the image" />
      </motion.div>
      <motion.div
        className="ola ola-right absolute bottom-[63%] left-[-15%] w-[20em] md:w-[40em]"
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="absolute" src={lfbt} alt="Description of the image" />
      </motion.div>
      <motion.div
        className="ola ola-right absolute right-[-10%] w-[20em] md:w-[40em] top-[54%]"
        animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="absolute" src={lfbef} alt="Description of the image" />
      </motion.div>
      <motion.div
        className="ola ola-right absolute bottom-[20%] left-[-15%] w-[20em] md:w-[40em]"
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="absolute" src={lfbt} alt="Description of the image" />
      </motion.div>

      <div className="h-[300px] bg-Darkgreen hidden lg:block absolute w-full"></div>
      <div className="container relative">
        <div className="pt-10 lg:pt-0">
          <Image
            className="w-full h-full object-cover"
            src={bannerSrc}
            alt="Banner image"
            width={1500}
            height={500}
          />
        </div>
        <div className="max-w-[1400px]">
          <div className={`${data?.data?.images[1] || data?.data?.images[2] ? "lg:pb-[60px] pb-6" : ""} pt-6 lg:pt-20 clr15op75 texthelvetica20`}>
            {data && data.data && formatDescription(data.data.description.split("</p>").slice(0, 3).join(''))}
          </div>

          {(data?.data?.images[1] || data?.data?.images[2] || data?.data?.images[3]) && (
            <div className="flex gap-4 md:gap-[40px] flex-wrap">
              {data?.data?.images[1] && <Image src={data?.data?.images[1]} alt="" width={400} height={400} />}
              {data?.data?.images[2] && <Image src={data?.data?.images[2]} alt="" width={400} height={400} />}
              {data?.data?.images[3] && <Image src={data?.data?.images[3]} alt="" width={400} height={400} />}
            </div>
          )}

          <div className={`pb-6 ${data?.data?.images[4] || data?.data?.images[5] ? "lg:pb-[60px]" : ""} pt-6 lg:pt-20 clr15op75 texthelvetica20`}>
            {data && data.data && formatDescription(data.data.description.split("</p>").slice(3, 7).join(''))}
          </div>

          {(data?.data?.images[4] || data?.data?.images[5]) && (
            <div className="flex gap-4 mg:gap-[40px] pb-6 lg:pb-[60px] flex-wrap">
              {data?.data?.images[4] && <Image src={data?.data?.images[4]} alt="" width={650} height={400} />}
              {data?.data?.images[5] && <Image src={data?.data?.images[5]} alt="" width={650} height={400} />}
            </div>
          )}

          <div className="pb-6 lg:pb-[60px] clr15op75 texthelvetica20">
            {data && data.data && formatDescription(data.data.description.split("</p>").slice(7).join(''))}
          </div>

          <div className="flex items-center gap-2 pb-6 lg:pb-[60px]">
            <Image src={assets.label} alt="" />
            <p className="nuber-next-bold texthelvetica20bold text-Darkgreen leading-[1] uppercase underline">{data?.data?.tags[0]}</p>
          </div>
          <div className="text-white">
          <ShareArticle/>
          </div>
       
          {/* <div className="flex items-center gap-2 pb-6 lg:pb-20">
            <Image src={assets.share} alt="" />
            <p className="nuber-next-bold text-font18 text-Darkgreen leading-[1]">Share Article</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ArticleImageBanner;