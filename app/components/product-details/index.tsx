"use client"

import SectionTwo from "../Applications/SectionTwo";
import SectionThree from "./SectionThree";
import SectionFive from "./SectionFive";
import PageBanner from "../Common/PageBanner";
import SectionFour from "../Applications/SectionFour";
import Downloads from "../Common/BeforeFooterTag";


// Image imports
import { assets } from "@/public/assets/images/assets";
import Arrow from "@/public/assets/brdcrbs.svg";
import { slideses } from './data'
import {relslideses } from "./data";
import { useParams } from "next/navigation";

import { IndiApplication } from "@/types/ApplicationType";
import useSWR from "swr";
import { useEffect } from "react";


const ProducrDetails = () => {



  const {productName} = useParams()

  console.log(productName)

  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
  
  const { data }:{data:IndiApplication,error:Error|undefined,isLoading:boolean} = useSWR(`/api/admin/products?productName=${productName}`, fetcher)

  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: `${data && data.data.title}`, href: "#" },
  ];

  useEffect(()=>{
    console.log(data && data.data)
  },[data])



  return (
    <>
       <PageBanner
        bannerSrc={assets.appbanner} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title={`${data && data.data.title}`}
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />

      <SectionTwo data={data} suggested={false}/>
      <div className="pt-10 md:pt-20 insp-mn relative inspbg"></div>
      <SectionThree {...slideses} />
      {/* actual thing which existed here */}

      <SectionFour data={data} />
      
      <SectionFive {...relslideses}/>
     <Downloads title={"To Downloads"}/>
    </>
  );
};

export default ProducrDetails;
