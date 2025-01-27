import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import "@/app/components/Common/pgbnr.scss";

interface HeroSectionProps {
  bannerSrc: StaticImageData | string;
  arrowSrc: string;
  title: string;
  desc?: string;
  breadcrumbs: { label: string; href: string }[];
  bnrHeight?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ bannerSrc, arrowSrc, title, desc, breadcrumbs}) => {
  return (
    // <section className="relative h-[75dvh] bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full">
    <section className={`relative bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full`}>
      {/* <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
      <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div>  */}
      <figure className="absolute left-0 top-0 h-full w-full -z-40">
        <Image className="w-full h-full absolute object-cover" src={bannerSrc} width={1000} height={800} alt="Banner image" />
      </figure>
      <div className="container relative">
        <div className="pg-bnr__div absolute bottom-0 pb-[80px]">
          <h1 className="pg-bnr__ttl text-font72 mb-10 font-bold leading-[1]">
            {title}
            <span className="text-[#FF671F]">.</span>
          </h1>
          <p className="text-[#FFFFFFBF] text-font20 lh-1p33 mb-10 max-w-[40ch] text-left">{desc}</p>
          <div className="pg-bnr__txt flex items-center flex-wrap">
            <ul className="flex items-center">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="inline-flex items-center">
                  <a href={breadcrumb.href} className={`text-[#FFFFFFBF]  text-font20 ${index === breadcrumbs.length - 1 ? "font-bold text-white " : "opacity-75"}`}>
                    {breadcrumb.label}
                  </a>
                  {index < breadcrumbs.length - 1 && <Image src={arrowSrc} alt="Arrow" className="mx-2" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
