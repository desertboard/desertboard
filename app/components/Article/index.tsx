"use client"

import React, { useEffect } from "react";
import ArticleBanner from "./ArticleBanner";
import ArticleImageBanner from "./ArticleImageBanner";

import Arrow from "@/public/assets/brdcrbs.svg";
import Downloads from "../Common/BeforeFooterTag";
import RelatedArticles from "./RelatedArticles";

import useSWR from "swr";
import { useParams } from "next/navigation";
import { IndiNews } from "@/types/IndiNews";
import { NewsType } from "@/types/NewsType";

const Blogs = () => {

  const {itemTitle} = useParams()

  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data,isLoading:newsLoading }:{data:IndiNews,error:Error|undefined,isLoading:boolean} = useSWR(`/api/admin/news/byid?slug=${itemTitle}`, fetcher)

  const { data:relatedData,isLoading:relatedDataLoading }:{data:NewsType,error:Error|undefined,isLoading:boolean} = useSWR(`/api/admin/news`, fetcher)


  useEffect(()=>{
    console.log(data)
  },[data])


  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "News & Events", href: "/news-and-events-listing" },
    { label: "DesertBoard® Stands....", href: "" },
  ];

  if(newsLoading || relatedDataLoading){
    return null
  }

  return (
    <>
      <ArticleBanner arrowSrc={Arrow} title={data?.data?.title} date="November 30, 2024" labeltext={data?.data?.tags[0]} breadcrumbs={breadcrumbs} bnrHeight="60dvh" />
      <ArticleImageBanner bannerSrc={data?.data?.images[0] || ""} data={data}/>
      <RelatedArticles data={relatedData}/>
      <Downloads title={"To Sustainability"} url={"/sustainability"}  />
    </>
  );
};

export default Blogs;
