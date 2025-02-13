"use client"

import SectionTwo from "../../../components/Applications/SectionTwo";
import SectionThree from "../../../components/Applications/SectionThree";
import SectionFive from "../../../components/Applications/SectionFive";
import PageBanner from "../../../components/Common/PageBanner";
import SectionFour from "../../../components/Applications/SectionFour";
import Downloads from "../../../components/Common/BeforeFooterTag";


// Image imports
import { assets } from "@/public/assets/images/assets";
import Arrow from "@/public/assets/brdcrbs.svg";
import { relslideses } from "../../../components/Applications/data";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr"
// import { IndiSectorType } from "@/types/IndiSector";
import { IndiApplication } from "@/types/ApplicationType";
import { IndiSectorType } from "@/types/IndiSector";


const Sectors = () => {

  const {productName} = useParams()
  const searchParams = useSearchParams()
  const application = searchParams.get("application")
  const sector = searchParams.get("sector") ? decodeURIComponent(searchParams.get("sector")!) : "";

  console.log("secotr",sector)

  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data }:{data:IndiApplication,error:Error|undefined,isLoading:boolean} = useSWR(`/api/admin/products?productName=${productName}`, fetcher)
  const { data:sectorData }:{data:IndiSectorType,error:Error|undefined,isLoading:boolean} = useSWR(`/api/admin/sector/byid?sector=${sector?.replace(/-/g, " ")}`, fetcher)

  useEffect(()=>{
    console.log("data",data && data.data)
  },[data]) 


  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sectors", href: "/sectors" },
    // { label: `${data && data.data.sector}`, href: "#" },
    { label: `${application}`, href: "" },
  ];

  return (
    <>
       <PageBanner
        bannerSrc={assets.appbanner} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title={application || ""}
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />

      <SectionTwo pageName="applications" suggested={true} data={data}/>
      <div className="pt-10 md:pt-20 insp-mn relative inspbg"></div>
      <SectionThree data={data}/>
      <SectionFour data={data} />
      <SectionFive {...relslideses} sectorData={sectorData}/>
     <Downloads title={"To Downloads"}/>
    </>
  );
};

export default Sectors;
