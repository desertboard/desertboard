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
      <section className="py-[80px] insp-mn relative">
        <div className="container m-auto mt-[40px] pb-[80px]">
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
              <h2 className="text-gray-900 mb-4 text-[48px] font-black">
                {title}
                <span className="text-[#FF671F]">.</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 text-litetext opacity-[50%]">
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
