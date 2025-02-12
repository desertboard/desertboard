"use client";
import React, { useEffect } from "react";
import '@/app/components/NewsEventsListing/listing.scss'
import LightSectionContainer from "../Common/LightSectionContainer";
import useSWR from 'swr'
import ListItem from "./NewsListItem";
import { NewsType } from "@/types/NewsType";
const Listing = () => {
  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
  const { data }:{data:NewsType,error:Error|undefined,isLoading:boolean} = useSWR('/api/admin/news', fetcher)


  useEffect(()=>{
    console.log(data)
  },[data])
    return (
      <LightSectionContainer>
        <div className="container">
          <div className="news-list">
            {data && data.data.map((item)=>(
                <ListItem listData={item}   />
            ))}
          </div>
        </div>
      </LightSectionContainer>
    );
}

export default Listing;