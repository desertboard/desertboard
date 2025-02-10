import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface HeroSectionProps {
  bannerSrc: StaticImageData | string;
  arrowSrc: string;
  title: string;
  breadcrumbs: { label: string; href: string }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ bannerSrc, arrowSrc, title, breadcrumbs }) => {
  return (
    <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center bnr-pg w-full">
      {/* <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
      <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div> */}
      <figure className="absolute h-[60vh] w-full -z-40">
        <Image className="w-full h-[60vh] absolute object-cover" src={bannerSrc} width={1000} height={800} alt="Banner image" />
      </figure>
      <div className="container  ">
        <div className="pg-bnr__div absolute bottom-0 pb-4 md:pb-10 lg:pb-20">
          <h1 className="pg-bnr__ttl  heavywhite  mb-6 md:mb-10">
            {title}
            <span className="text-[#FF671F]">.</span>
          </h1>

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
