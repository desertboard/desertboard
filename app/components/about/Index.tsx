"use client";
import React, { useEffect } from "react";
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
import useSWR from 'swr'
import { AboutType } from "@/types/AboutType";
import Error from "next/error";
import parse from 'html-react-parser'

// import SecondSec from "../components/Common/Second-sec";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "" },
];

export default function Index() {

  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data }:{data:AboutType,error:Error|undefined,isLoading:boolean} = useSWR('/api/admin/about', fetcher)


  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <>
      <PageBanner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        desc={data && data.about[0] && data.about[0].description}
        title={data && data.about[0] && data.about[0].title}
        breadcrumbs={breadcrumbs}
        bnrHeight="90dvh"
      />
      <MainDescBOx
        secTitle="The DesertBoard Story"
        subTitle=""
        // mainImg="/assets/images/mn.jpg"
        paragraphs={data && data.about[0] && parse(data.about[0].story)}

        mainImg="/assets/images/about/about-main.jpg"
      />
      {/* <HistorySlider /> */}
      <TimeLineSlider/>
      <MisionVision />
      <AccrediationSlider />
       <BeforeFooterTag title={"Discover Industry Solutions"} url="/" />
    </>
  );
}
