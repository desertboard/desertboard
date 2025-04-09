"use client";

import SectionTwo from "../../components/Applications/SectionTwo";
import SectionThree from "../../components/Applications/SectionThree";
import SectionFive from "../../components/Applications/SectionFive";
import PageBanner from "../../components/Common/PageBanner";
import SectionFour from "../../components/Applications/SectionFour";

// Image imports
import { assets } from "@/public/assets/images/assets";
import Arrow from "@/public/assets/brdcrbs.svg";
import { relslideses } from "../../components/Applications/data";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { IndiApplication } from "@/types/ApplicationType";
import { IndiSectorType } from "@/types/IndiSector";
import BacktoListing from "@/app/components/Common/BacktoListing";

const Sectors = () => {
  const {application} = useParams()
  const {sectorTitle} = useParams()

  // if(application && typeof application == "string"){
  //   application = application.replace(/\s+/g, "-").replace(/-+/g, " ").replace(/\band\b/g, "&").replace(/\b\w/g, (char) => char.toUpperCase())
  // }

  // const sector = typeof sectorTitle == "string" ? sectorTitle : ""
  const [finishes, setFinishes] = useState<string[]>([]);
  const [product,setProduct] = useState("")





  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

  const {
    data,
  }: { data: IndiApplication; error: Error | undefined; isLoading: boolean } =
    useSWR(product ? `/api/admin/products?productName=${product}` : null, fetcher);
  const {
    data: sectorData,
  }: { data: IndiSectorType; error: Error | undefined; isLoading: boolean } =
    useSWR(
      sectorTitle &&
        `/api/admin/sector/byid?slug=${sectorTitle}`,
      fetcher
    );
 
  const [relatedApps, setRelatedApps] = useState<
    {
      title: string;
      description: string;
      image: string;
      product: string;
      _id: string;
      bannerImage: string;
      gallery: string[];
      shortDescription: string;
      bannerImageAlt:string;
      slug:string;
    }[]
  >([]);
  useEffect(() => {
    if (data?.data?.finishes) {
      setFinishes(
        data.data.finishes.map((item: { name: string }) => item.name)
      );
    }
  }, [data]);

  const { data: finishesData } = useSWR(
    finishes.length > 0
      ? `/api/admin/finish?finishes=${encodeURIComponent(finishes.join(","))}`
      : null,
    fetcher
  );


  useEffect(() => {
    console.log("data", sectorData && sectorData.data);
    setRelatedApps(
      sectorData && sectorData.data && sectorData.data.applications
    );

    sectorData?.data?.applications.find((item)=>{
      if(item.slug === application){
        setProduct(item.product)
      }
    })

  }, [sectorData]);

  useEffect(() => {
    console.log("data data", data);
  }, [data]);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sectors", href: "/sectors" },
    { label: `${sectorData?.data?.title}`,href:"sector" },
    { label: `${sectorData?.data?.applications.find((item)=>item.slug===application)?.title}`, href: "" },
  ];

  


  return (
    <>
      <PageBanner
        bannerSrc={
          sectorData?.data?.applications.find(
            (item) => item.slug === application
          )?.bannerImage || assets.bggrn
        } // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title={sectorData?.data?.applications.find((item)=>item.slug===application)?.title || ""}
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
        imageAlt={sectorData?.data?.applications.find((item)=>item.title === application)?.bannerImageAlt || ""}
      />

      <SectionTwo
        pageName="applications"
        suggested={true}
        data={data}
        sectorData={sectorData}
      />
      <div className="pt-10 md:pt-20 insp-mn relative inspbg"></div>
      <SectionThree data={finishesData} />
      <SectionFour data={data} />
      <SectionFive {...relslideses} relatedApps={relatedApps} currentApplication={typeof application=="string" && application || ""} />
      <BacktoListing url="/sectors" pagelabel="Sectors" />

    </>
  );
};

export default Sectors;
