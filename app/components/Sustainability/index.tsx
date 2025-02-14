"use client"

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
import useSWR from 'swr';
import { Sustainability } from '@/types/Sustainability';

const Blogs = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sustainability", href: "" },
  ];

  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data }: { data: Sustainability, error: Error | undefined, isLoading: boolean } = useSWR('/api/admin/sustainability', fetcher)



  useEffect(()=>{
    console.log(data);
  },[data])

  
  return (
    <>
<PageBanner
        bannerSrc={data && data.sustainability && data.sustainability.bannerImage!=="" && data.sustainability.bannerImage || assets.sumabanner} // Corrected image import here
        arrowSrc={Arrow}
        desc={data && data.sustainability && data.sustainability.pageDescription}
        title={data && data.sustainability && data.sustainability.pageHeading}
        breadcrumbs={breadcrumbs}
        bnrHeight="90dvh"
      />
       <MainDescBOx
        secTitle={data && data.sustainability && data.sustainability.heading}
        subTitle=""
        paragraphs={data && data.sustainability && data.sustainability.description}
        mainImg={data && data.sustainability && data.sustainability.image!=="" && data.sustainability.image || assets.sumain}
      />
      <Greenslider data={data}/>
      <Sustainslide data={data}/>
      <Sustainabilitypartners data={data}/>
      <Tabssustain data={data} />
       <Downloads title={"To Downloads"} url='/downloads'/>

    </>
  )
}

export default Blogs