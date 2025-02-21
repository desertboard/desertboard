"use client"

import { useEffect } from "react";
import BeforeFooterTag from "../../components/Common/BeforeFooterTag";
import MainDescBOx from "../../components/Common/MainDescBox";
import BannerSr from "../../components/home/BannerSr";
import SectorsList from "../../components/home/SectorsList";
import SustainabeSc from "../../components/home/SustainabeSc";
import UspList from "../../components/home/UspList";
import useSWR from "swr";
import { HomeType } from "@/types/HomeType";

export default function Home() {

    const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

    const { data }: { data: HomeType, error: Error | undefined, isLoading: boolean } = useSWR('/api/admin/home', fetcher)
  
  
    useEffect(()=>{
      console.log(data);
    },[data])

    
  return (
    <>
      <BannerSr data={data}/>
      <MainDescBOx
        secTitle={data?.home[0].secondSectionTitle}
        subTitle={data?.home[0].secondSectionSubTitle}
        paragraphs={data?.home[0].inspiration}
        // mainImg="/assets/images/mn.jpg"
        mainVdo={data?.home[0]?.video}
        vdoPoster={data?.home[0]?.videoPoster}
      />
      <UspList secTitle={"Key USPs"} data={data}/>
      <SectorsList data={data}/>
      <SustainabeSc data={data}/>
      <BeforeFooterTag title={"To Sustainability"} url={"/sustainability"} />
    </>
  );
}