import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import '@/app/components/Common/pgbnr.scss';

interface HeroSectionProps {
  bannerSrc: StaticImageData | string;
  arrowSrc: string;
  title: string;
  desc?: string;
  breadcrumbs: { label: string; href: string }[];
  bnrHeight?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ bannerSrc, arrowSrc, title,desc, breadcrumbs, bnrHeight }) => {
  return (
    // <section className="relative h-[75dvh] bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full">
    <section className="relative bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full" style={{ "--banner-height": bnrHeight } as React.CSSProperties}>
      {/* <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
      <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div>  */}
      <figure className="absolute left-0 top-0 h-full w-full -z-40">
        <Image className="w-full h-full absolute top-0 left-0 object-cover object-center" src={bannerSrc} fill objectFit="cover" alt="Banner image" />
      </figure>
      <div className="container relative">
        <div className="pg-bnr__div absolute bottom-0 pb-10 lg:pb-20">
          <h1 className="pg-bnr__ttl heavywhite  mb-5 md:mb-10">
            {title}
            <span className="text-[#FF671F]">.</span>
          </h1>
          {desc && <p className="text-[#FFFFFFBF] text-font20 lh-1p33 mb-10 max-w-[90ch] text-left">{desc}</p>}
          <div className="pg-bnr__txt flex items-center flex-wrap">
            <ul className="flex items-center flex-wrap">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="inline-flex items-center">
                  <a href={breadcrumb.href} className={`text-[#FFFFFFBF] min-w-fit texthelvetica20 ${index === breadcrumbs.length - 1 ? "helveticaBold text-white " : "opacity-75"}`}>
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
