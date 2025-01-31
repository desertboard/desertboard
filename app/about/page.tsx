"use client";
import PageBanner from "../components/Common/PageBanner";
// import Banner from "../components/Banner/Hero";
// Image imports
import bannerImg from "@/public/assets/images/sectors/abt-bnr.jpg";
import Arrow from "@/public/assets/brdcrbs.svg";
import MainDescBOx from "../components/Common/MainDescBox";
import HistorySlider from "../components/about/HistorySlider"; 
import MisionVision from "../components/about/MisionVision";
// import SecondSec from "../components/Common/Second-sec";

export default function Home() {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
  ];
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
        secTitle="The DesertBoard Story."
        subTitle=""
        // mainImg="/assets/images/mn.jpg"
        paragraphs={[
          "DesertBoard® is the manufacturer of the region’s most sustainable building material, Palm Strand Board (PSB®), crafted from annually regenerated date palm biomass.Founded by Mr. Hatem Farah, the company was driven by the ambitious vision of transforming abundantly available raw materials into innovative and sustainable solutions.",
          " With the region's vast date palm groves, substantial quantities of palm biomass are generated each year, which, if left to decompose, would emit harmful methane gas, and if incinerated, it releases CO2 - both major contributors to climate change.","DesertBoard® addresses this environmental challenge by upcycling palm biomass using a patented process, becoming the world’s first factory to produce a Super E0 (zero-emission) grade panel, equivalent to OSB3 & OSB4."
        ]}
        mainImg="/assets/images/mn.jpg"
      />
      <HistorySlider />
      <MisionVision/>
    </>
  );
}
