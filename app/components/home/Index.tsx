"use client"

import { useEffect, useState } from "react";
import BeforeFooterTag from "../../components/Common/BeforeFooterTag";
import MainDescBOx from "../../components/Common/MainDescBox";
import BannerSr from "../../components/home/BannerSr";
import SectorsList from "../../components/home/SectorsList";
import SustainabeSc from "../../components/home/SustainabeSc";
import UspList from "../../components/home/UspList";
// import useSWR from "swr";
import { HomeType } from "@/types/HomeType";
import { SectorType } from "@/types/SectorType";

import useSWR from "swr";

export default function Home() {

    const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

    const { data:sectorData }: { data: SectorType, error: Error | undefined, isLoading: boolean } = useSWR('/api/admin/sector', fetcher)

    const [data,setData] = useState<HomeType|null>(null)
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/admin/home');
          if (response.ok) {
            const data = await response.json();
            setData(data);
          } else {
            const data = await response.json();
            console.error('Error fetching data:', data.error);
          }
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
    
      fetchData();
    }, []);
    


    
  return (
    <>
      <BannerSr data={data}/>
      <MainDescBOx
        secTitle={data?.home[0]?.secondSectionTitle || ""}
        subTitle={data?.home[0]?.secondSectionSubTitle || ""}
        paragraphs={data?.home[0]?.inspiration}
        // mainImg="/assets/images/mn.jpg"
/*         mainVdo={data?.home[0]?.video} */
        mainVdo={'/assets/videos/abt_bnr.mp4'}
        vdoPoster={data?.home[0]?.videoPoster}
      />
      <UspList secTitle={"Key USPs"} data={data}/>
      <SectorsList sectorData={sectorData} data={data}/>
      <SustainabeSc data={data}/>
      <BeforeFooterTag title={"To Sustainability"} url={"/sustainability"} />
    </>
  );
}