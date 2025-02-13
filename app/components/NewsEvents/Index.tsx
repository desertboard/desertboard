"use client";
import PageBanner from "../Common/PageBanner";
import bannerImg from "@/public/assets/images/banners/news-and-events-banner1.jpg";
import Arrow from "@/public/assets/brdcrbs.svg";
import BeforeFooterTag from "../Common/BeforeFooterTag";
import NewsBlock from "./NewsBlock";
import { linkedInSliderData, instagramPosts } from "./data";
import  LinkedInSlider  from "./LinkedInSlider";
import InstagramBlock from "./InstagramBlock";
import UpcommingEvents from "./UpcommingEvents";
import { useEffect } from "react";
import useSWR from "swr";
import { NewsType } from "@/types/NewsType";
import { EventType } from "@/types/EventType";


const Index = () => {


  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "News & Events", href: "#" },
  ];

  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data:newsData }:{data:NewsType,error:Error|undefined,isLoading:boolean} = useSWR('/api/admin/news', fetcher)

  const { data:eventsData }:{data:EventType,error:Error|undefined,isLoading:boolean} = useSWR('/api/admin/events', fetcher)

  const latestNews = newsData && newsData.data.filter((item)=>(
    item.type=="Desertboard"
  )).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const latestExpertise = newsData && newsData.data
  .filter((item) => item.type !== "Desertboard")
  // .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

useEffect(()=>{
  console.log("events",eventsData && eventsData.data)
},[eventsData])

  return (
    <>
      <PageBanner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title="News & Events"
        breadcrumbs={breadcrumbs}
        bnrHeight="92dvh"
      />
      <NewsBlock sectionTitle="Company News" data={latestNews}/>
      <LinkedInSlider data={linkedInSliderData} />
      <NewsBlock  sectionTitle="Our Expertise" data={latestExpertise}/>
      <InstagramBlock instagramData={instagramPosts} />
      <UpcommingEvents commingEvents={eventsData} />
      <BeforeFooterTag title={"Discover Industry Solutions"} />
    </>
  );
};

export default Index;
