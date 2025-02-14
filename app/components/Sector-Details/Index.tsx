"use client"

// Image imports
import Arrow from "@/public/assets/brdcrbs.svg";
import PageBanner from "../Common/PageBanner";
import MainDescBOx from "../Common/MainDescBox";
import Tabs from "./Tabs";
import BeforeFooterTag from "../Common/BeforeFooterTag";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";
// import { SectorType } from "@/types/SectorType";
import { IndiSectorType } from "@/types/IndiSector";



const SectorDetails = () => {

  const {sectorTitle} = useParams()

  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data }:{data:IndiSectorType,error:Error|undefined,isLoading:boolean} = useSWR(`/api/admin/sector?title=${sectorTitle}`, fetcher)


  useEffect(()=>{
    console.log(data && data.data)
  },[data])

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sectors", href: "/sectors" },
    { label: `${data && data.data.title}`, href: "" },
  ];


  return (
    <>
      <PageBanner
        bannerSrc={data && data.data.bannerImage} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title={data && data.data.title}
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />
      <MainDescBOx
        secTitle={data && data.data.title}
        subTitle=""
        paragraphs={data && data.data.description}
         mainImg={data && data.data.image}
        // mainVdo={"../assets/images/home/liftvdo.mp4"}
        // vdoPoster="../assets/images/mn.jpg"
      />
      <Tabs applications={data && data.data.applications}/>
           <BeforeFooterTag title={"To Downloads"}/>
    </>
  );
};

export default SectorDetails;
