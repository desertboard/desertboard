"use client";
import React from "react";
import PageBanner from "../Common/PageBanner";
import MainDescBOx from "../Common/MainDescBox";
// import HistorySlider from "./HistorySlider";
import MisionVision from "./MisionVision";
import AccrediationSlider from "./AccrediationSlider";

// import Banner from "../components/Banner/Hero";
// Image imports
import bannerImg from "@/public/assets/images/sectors/abt-bnr.jpg";
import Arrow from "@/public/assets/brdcrbs.svg";
import BeforeFooterTag from "../Common/BeforeFooterTag";
import TimeLineSlider from "./TimelineSlider";

// import SecondSec from "../components/Common/Second-sec";

const breadcrumbs = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
];

export default function Index() {
  return (
    <>
      <PageBanner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        desc="Upcycling annually regenerated palm biomass into sustainable building solutions "
        title="About DesertBoard"
        breadcrumbs={breadcrumbs}
        bnrHeight="90dvh"
      />
      <MainDescBOx
        secTitle="The DesertBoard Story"
        subTitle=""
        // mainImg="/assets/images/mn.jpg"
        paragraphs={[
          "DesertBoard® is the manufacturer of the region’s most sustainable building material, Palm Strand Board (PSB®), crafted from annually regenerated date palm biomass.Founded by Mr. Hatem Farah, the company was driven by the ambitious vision of transforming abundantly available raw materials into innovative and sustainable solutions.",
          " With the region's vast date palm groves, substantial quantities of palm biomass are generated each year, which, if left to decompose, would emit harmful methane gas, and if incinerated, it releases CO2 - both major contributors to climate change.",
          "DesertBoard® addresses this environmental challenge by upcycling palm biomass using a patented process, becoming the world’s first factory to produce a Super E0 (zero-emission) grade panel, equivalent to OSB3 & OSB4.",
        ]}
        mainImg="/assets/images/about/about-main.jpg"
      />
      {/* <HistorySlider /> */}
      <TimeLineSlider/>
      <MisionVision />
      <AccrediationSlider />
       <BeforeFooterTag title={"Discover Industry Solutions"} /> 
    </>
  );
}
