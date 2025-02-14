
'use client'
import React, { useEffect } from 'react'

import { assets } from '@/public/assets/images/assets';
import Arrow from "@/public/assets/brdcrbs.svg";
import Downloads from '../Common/BeforeFooterTag';
import PageBanner from '../Common/PageBanner';
import MainDescBOx from '../Common/MainDescBox';
import './sustainability.css';
import Greenslider from './greenslider';
import Sustainslide from './Sustainslide';
import Sustainabilitypartners from './Sustainabilitypartners';
import Tabssustain from './Tabssustain';
import {tabData} from './data';
import useSWR from 'swr';
import { SustainType } from '@/types/SustainType';


const Blogs = () => {

  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data }:{data:SustainType,error:Error|undefined,isLoading:boolean} = useSWR('/api/admin/sustainability', fetcher)


  useEffect(()=>{
    console.log(data)
  },[data])

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sustainability", href: "" },
  ];
  return (
    <>
<PageBanner
        bannerSrc={assets.sumabanner} // Corrected image import here
        arrowSrc={Arrow}
        desc="Sustainable and desert-sourced, palm strand board regenerates with nature. "
        title="Sustainability Is At Our Core"
        breadcrumbs={breadcrumbs}
        bnrHeight="90dvh"
      />
       <MainDescBOx
        secTitle="Commitment to the Environment"
        subTitle=""
        paragraphs={[
          "With the zero-deforestation supply chain, we protect natural ecosystems, preserve biodiversity and promote environmental sustainability for a greener future. At DesertBoard, we take pride in spearheading the bio-economy by optimizing our production processes to minimize material waste and energy consumption, ensuring efficient resource utilization throughout our products' lifecycle.",
        ]}
        mainImg={assets.sumain}
      />
      <Greenslider />
      <Sustainslide />
      <Sustainabilitypartners />
      <Tabssustain data={tabData.data} />
       <Downloads title={"To Downloads"} url='/downloads'/>

    </>
  )
}

export default Blogs