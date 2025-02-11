"use client";
import Image from "next/image";
import "@/app/components/Common/MainDescBox.scss";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";
import { StaticImageData } from "next/image";
import React, { JSX, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import parse from 'html-react-parser'

interface MainDescBoxProps {
  secTitle: string;
  subTitle: string;
  paragraphs: JSX.Element | string | JSX.Element[] | string[];
  mainImg?: StaticImageData | string;
  mainVdo?: string;
  vdoPoster?: string;
}

const MainDescBOx: React.FC<MainDescBoxProps> = ({ secTitle, subTitle, paragraphs, mainImg, mainVdo, vdoPoster }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Type the ref for HTMLVideoElement
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } else {
      console.error("Video element not found");
    }
  };

  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="pt-10 lg:pt-20 pb-10 lg:pb-[110px] insp-mn relative inspbg overflow-hidden">
      <motion.div className="ola ola-right absolute top-0 right-[-25%] md:right-[-10%] w-[20em] md:w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Image className="absolute" src={lfbef} alt="Description of the image" />
      </motion.div>
      <motion.div className="ola ola-right absolute bottom-[43%] left-[-25%] md:left-[-15%] w-[20em] md:w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Image className="absolute" src={lfbt} alt="Description of the image" />
      </motion.div>
      <div className="container m-auto">
        <div className="lg:flex flex-col lg:flex-row items-center justify-between adst relative xl:pr-[10em] xxl:pr-[20em]">
          <div className="lg:w-1/2 text-left px-5 lg:pl-6 xl:pl-16 py-5 lg:py-20 xl:py-20 opacity-[99%] mb-2 lg:mb-0">
            <motion.h2
              className="text-Darkgreen mb-4 text-[28px] md:text-[48px] nuber-next-heavy leading-[1.2] overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 50% visible
              variants={{
                hidden: { opacity: 0, x: -30 }, // Start below and invisible
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.3 },
                },
              }}>
              {secTitle}
              <span className="text-[#FF671F]">.</span>
            </motion.h2>
            {subTitle && <p className="nuber-next md-6 lg:mb-10 text-[#151515] font-black opacity-[50%] text-font24 leading-[1]">{subTitle}</p>}
            
              <motion.div
                
                className="text-font20 clr15op75 max-w-[100%] md:max-w-[98%] leading-[1.3] mb-4 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 50% visible
                variants={{
                  hidden: { opacity: 0, x: -30 }, // Start below and invisible
                  visible: {
                    opacity: 0.75,
                    x: 0,
                    transition: { duration: 1, delay: 0.5 },
                  },
                }}>
                {typeof paragraphs == "string" ? parse(paragraphs) : paragraphs}
              </motion.div>
            
          </div>

          <div className="flex lg:absolute w-full lg:w-1/2 xl:w-[58%] lg:right-0 lg:top-5 h-full">

            {mainImg && <figure className=" relative h-[250px] lg:h-full  w-full   ">

                <Image className="w-full object-cover h-[full]" src={mainImg} fill objectFit="cover" alt="Banner image" />

            </figure>}
            {/* <div className="relative"> */}
            {/* Video element */}
            {mainVdo && (
              <>
                <motion.div className="relative h-full" style={{ y: translateY }}>
                  <video ref={videoRef} className="h-full object-cover" src={mainVdo} poster={vdoPoster} controls={false} width={1080} height={740} playsInline onEnded={() => setIsPlaying(false)} />
                  {/* Play/Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {!isPlaying && ( // Show the button only if video is paused
                      <button className="bg-white bg-opacity-20 rounded-sm px-6 py-3 md:px-10 md:py-6 transition duration-300 hover:bg-opacity-50" onClick={togglePlay}>
                        <svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.0114746 0.469116V33.5308L25.9885 17L0.0114746 0.469116Z" fill="white" />
                        </svg>
                      </button>
                    )}
                  </div>
                </motion.div>
              </>
            )}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDescBOx;
