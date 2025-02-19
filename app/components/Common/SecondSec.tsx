"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
interface SecondSecProps {
  title: string;
  subtitle: string;
  paragraphs?: string[];
  imageSrc: StaticImageData;
  bgimgSrc?: StaticImageData;
}

const SecondSec: React.FC<SecondSecProps> = ({
  title,
  subtitle,
  paragraphs,
  imageSrc,
  bgimgSrc,
}) => {
  return (
    <div>
      <section className="pt-10 lg:pt-20 pb-10 lg:pb-[120px] insp-mn relative  inspbg">
      {/* <motion.div
        className="ola ola-right absolute top-0 right-[-10%] w-[40em]"
        animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          className="absolute"
          src={lfbef}
          alt="Description of the image"
        />
      </motion.div>
      <motion.div
        className="ola ola-right absolute bottom-[43%] left-[-15%] w-[40em]"
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="absolute" src={lfbt} alt="Description of the image" />
      </motion.div> */}
        <div className="container  ">
          <div
            className="flex flex-col lg:flex-row items-center justify-between adst relative"
            style={{
              position: "relative",
              backgroundColor: bgimgSrc ? "transparent" : "#f0f0f0", // Fallback color
            }}>
            {/* Conditional Background Image for ::before */}
            <div
              className="absolute inset-0 bg-cover bg-center w-[65%]"
              style={{
                backgroundImage: bgimgSrc ? `url(${bgimgSrc.src})` : "none", // Using bgimgSrc.src for background
                zIndex: -1,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />

            <div className="lg:w-1/2 text-center lg:text-left px-[60px] py-[80px]">
              <h2 className="heavydark mb-4 ">
                {title}
                <span className="text-[#FF671F]">.</span>
              </h2>
              <p className="texthelvetica20 clr15op75 mb-0  ">
                {subtitle}
              </p>
              {paragraphs &&
                paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-[20px] mb-4">
                    {paragraph}
                  </p>
                ))}
            </div>

            <div className="flex justify-end relative top-10">
              <div className="relative">
                {/* This is your image displayed normally */}
                <Image
                  src={imageSrc}
                  width={1080}
                  height={640}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondSec;
