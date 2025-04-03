"use client"

import SectionTwo from "../Applications/SectionTwo";
import SectionThree from "./SectionThree";
import SectionFive from "./SectionFive";
import PageBanner from "../Common/PageBanner";
import SectionFour from "../Applications/SectionFour";


// Image imports
import Arrow from "@/public/assets/brdcrbs.svg";
import { slideses } from './data'
import {relslideses } from "./data";
import { useParams } from "next/navigation";

import useSWR from "swr";
import { useEffect, useState } from "react";
import BacktoListing from "../Common/BacktoListing";



const ProducrDetails = () => {

  const { productName } = useParams();

  const [finishes, setFinishes] = useState<string[]>([]);
  const [convertedProductName,setConvertedProductName] = useState("")

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

  useEffect(()=>{
    if(productName?.includes("psb") && typeof productName == "string"){
      setConvertedProductName(productName.replace("psb", "PSB").replace("fr", "FR").replace("ecocore", "ecoCore").replace(/\s+/g, "-").replace(/\b\w/g, (char) => char.toUpperCase()))
    }
  },[productName])

  // First API Call: Fetch product details
  const { data } = useSWR(
    productName ? `/api/admin/products?productName=${convertedProductName}` : null,
    fetcher
  );

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: `${data?.data?.title || ""}`, href: "" },
  ];


  // Update finishes state when data is available
  useEffect(() => {
    if (data?.data?.finishes) {
      setFinishes(data.data.finishes.map((item:{name:string}) => item.name));
    }
  }, [data]);

  // Second API Call: Fetch finishes details once finishes are set
  const { data: finishesData } = useSWR(
    finishes.length > 0 ? `/api/admin/finish?finishes=${encodeURIComponent(finishes.join(","))}` : null,
    fetcher
  );

  useEffect(() => {
    console.log("Finishes Data:", finishes);
  }, [finishes]);

  return (
    <>
       <PageBanner
        bannerSrc={data && data.data.bannerImage || ""}
        arrowSrc={Arrow}
        desc=""
        title={`${data?.data?.title || ""}`}
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
        bnrPos="object-right"
      />

      <SectionTwo pageName="products" data={data} suggested={false}/>
      <div className="pt-10 md:pt-20 insp-mn relative inspbg"></div>
      <SectionThree {...slideses} data={data}/>
      {/* actual thing which existed here */}

      <SectionFour data={data} />

      <SectionFive {...relslideses} data={finishesData}/>
       <BacktoListing url="/products" pagelabel="Products"/>
    </>
  );
};

export default ProducrDetails;
