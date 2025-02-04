import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import "@/app/components/Common/pgbnr.scss";
import { assets } from "@/public/assets/images/assets";

interface HeroSectionProps {
  bannerSrc: StaticImageData | string;
}

const ArticleImageBanner: React.FC<HeroSectionProps> = ({ bannerSrc }) => {
  return (
    // <section className="relative h-[75dvh] bg-cover bg-center flex items-center justify-center text-center bnr-pg pg-bnr w-full">
    <section className="insp-mn inspbg ">
      {/* <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
      <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div>  */}

      <div className=" h-[300px] bg-Darkgreen hidden lg:block absolute w-full "> </div>
      <div className="container relative">
        <div className=" pt-10 lg:pt-0">
          <Image
            className="w-full h-full   object-cover"
            src={bannerSrc}
            width={1000}
            height={600}
            alt="Banner image"
          />
        </div>
        <div className="max-w-[1400px]">
          <div className="pb-10 lg:pb-[60px] pt-10 lg:pt-20">
            <p className="pb-5 lg:pb-10 clr15op75">
              DesertBoard® proudly unveiled its versatile range of 100%
              sustainable products at Big 5 Global 2024, the region’s largest
              urban development and construction event. Held from November 26th
              to 29th at the Dubai World Trade Centre, gulf, the event provided
              the perfect stage to showcase DesertBoard®’s locally manufactured
              Palm Strand Boards (PSB®)—recognized as the region’s most
              sustainable building material.{" "}
            </p>
            <p className="clr15op75">
              Big 5 Global 2024 hosted over 100,000 attendees from more than 165
              countries, with 2,700 global exhibitors presenting groundbreaking
              innovations. In this vibrant environment, DesertBoard® stood out
              with its lineup of nine+ sustainable Palm Strand Board (PSB®)
              products, solidifying its reputation as a leader in eco-friendly
              construction materials.{" "}
            </p>
          </div>
          <div className="flex gap-4 md:gap-[40px] flex-wrap">
            <Image src={assets.articlesec1} alt=""></Image>
            <Image src={assets.articlesec2} alt=""></Image>
            <Image src={assets.articlesec3} alt=""></Image>
          </div>
          <div className="pb-10 lg:pb-[60px] pt-10 lg:pt-20">
            <p className="pb-5 lg:pb-10 clr15op75">
              Aligned with the gulf’s Vision 2030, DesertBoard®’s
              zero-formaldehyde boards contribute directly to achieving net-zero
              carbon emissions. Featuring a 100% deforestation-free supply
              chain, DesertBoard®’s manufacturing process retains approximately
              60,000 tons of CO2 annually, further reinforcing its commitment to
              sustainability.
            </p>
            <p className="pb-5 lg:pb-10 clr15op75">
              The event underscored DesertBoard®’s pivotal role in advancing
              sustainable construction. By engaging with key stakeholders, the
              company inspired attendees to embrace eco-friendly materials that
              deliver exceptional performance while prioritizing environmental
              responsibility. Visitors to the DesertBoard® exhibit witnessed
              firsthand how its innovative products address the region’s growing
              demand for sustainable material, setting new standards in
              durability and environmental impact.
            </p>
            <p className="clr15op75">
              The event underscored DesertBoard®’s pivotal role in advancing
              sustainable construction. By engaging with key stakeholders, the
              company inspired attendees to embrace eco-friendly materials that
              deliver exceptional performance while prioritizing environmental
              responsibility. Visitors to the DesertBoard® exhibit witnessed
              firsthand how its innovative products address the region’s growing
              demand for sustainable material, setting new standards in
              durability and environmental impact.
            </p>
          </div>

          <div className="flex gap-4 mg:gap-[40px] pb-10 lg:pb-[60px] flex-wrap">
            <Image src={assets.articlesec4} alt=""></Image>
            <Image src={assets.articlesec5} alt=""></Image>
          </div>
            <div className="pb-10 lg:pb-[60px] ">
              <p className=" clr15op75">
              DesertBoard® extends its heartfelt appreciation to everyone who visited its stall and showed interest in its zero-emission Palm Strand Board (PSB®). Your enthusiasm for locally manufactured solutions fuels our mission to drive the construction industry toward a greener, more innovative future.
              </p>
          </div>

          <div className="flex items-center gap-2 pb-10 lg:pb-[60px]">
                    <Image src={assets.label} alt=""></Image>
                    <p className="nuber-next-bold texthelvetica20bold text-Darkgreen leading-[1] ">Sustainability, Company News </p>
          </div>
          <div className="flex items-center gap-2 pb-10 lg:pb-20">
                    <Image src={assets.share} alt=""></Image>
                    <p className="nuber-next-bold texthelvetica20bold text-Darkgreen leading-[1] ">Share Article</p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ArticleImageBanner;
