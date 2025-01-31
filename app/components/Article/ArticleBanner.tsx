import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import '@/app/components/Common/pgbnr.scss';
import calender from "@/public/assets/images/icons/calender.svg";
import label from "@/public/assets/images/icons/label.svg";
import share from "@/public/assets/images/icons/share.svg";

interface HeroSectionProps {
  bannerSrc: StaticImageData | string;
  arrowSrc: string;
  title: string;

  breadcrumbs: { label: string; href: string }[];
  bnrHeight?: string;
}

const ArticleBanner: React.FC<HeroSectionProps> = ({ bannerSrc, arrowSrc, title,   breadcrumbs, bnrHeight }) => {
  return (
    // <section className="relative h-[75dvh] bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full">
    <section className="relative bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full" style={{ "--banner-height": bnrHeight } as React.CSSProperties}>
      {/* <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
      <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div>  */}
      <figure className="absolute left-0 top-0 h-full w-full -z-40">
        <Image className="w-full h-full absolute object-cover" src={bannerSrc} width={1000} height={800} alt="Banner image" />
      </figure>
      <div className="container relative">
        <div className="pg-bnr__div absolute bottom-0 pb-10 lg:pb-16 w-[calc(100%-30px)]">

          <h1 className="pg-bnr__ttl heavydark48 max-w-[42ch]  mb-6 md:mb-10">
            {title}
            <span className="text-[#FF671F]">.</span>
          </h1>
          <div className="flex items-center justify-between mb-4 md:mb-[60px]">

              <div className="flex  items-center gap-5">
                  <div className="flex items-center gap-2">
                    <Image src={calender} alt=""></Image>
                    <p className="nuber-next-bold text-font20 text-[#fff] leading-[1] opacity-[75%]">November 30, 2024 </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={label} alt=""></Image>
                    <p className="nuber-next-bold text-font20 text-[#fff] leading-[1] opacity-[75%]">November 30, 2024 </p>
                    </div>
              </div>
              <div className="flex items-center gap-2">
                    <Image src={share} alt=""></Image>
                    <p className="nuber-next-bold text-font20 text-[#fff] leading-[1] opacity-[75%]">November 30, 2024 </p>
                  </div>

          </div>
          <div className="pg-bnr__txt flex items-center flex-wrap">
            <ul className="flex items-center">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="inline-flex items-center">
                  <a href={breadcrumb.href} className={`text-[#FFFFFFBF]  texthelvetica20 ${index === breadcrumbs.length - 1 ? "font-bold text-white " : "opacity-75"}`}>
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

export default ArticleBanner;
