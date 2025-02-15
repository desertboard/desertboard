"use client";
import React, { useEffect, useState } from "react";
import '@/app/components/NewsEventsListing/listing.scss'
import LightSectionContainer from "../Common/LightSectionContainer";
import useSWR from 'swr'
import ListItem from "./NewsListItem";
import { NewsType } from "@/types/NewsType";

const Listing = ({typeSelected,sectorSelected,searchItem}:{
  typeSelected:{ id: number; name: string; }
  sectorSelected:{ id: number; name: string; }
  searchItem:string
}) => {
  
  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
  const { data }:{data:NewsType,error:Error|undefined,isLoading:boolean} = useSWR('/api/admin/news', fetcher)

  const [filteredData, setFilteredData] = useState<
  { 
    date: string; 
    description: string; 
    images: string[]; 
    tags: string[]; 
    title: string; 
    _id: string; 
    type: string; 
    sector: string;
  }[]
>([]);


  useEffect(() => {
    if (!data?.data?.length) return;
  
    console.log("Original Data:", data.data);
    
    if (typeSelected.name === "Type" && sectorSelected.name === "Sector") {
      console.log("in if - Returning all data");
      setFilteredData(data.data);
    } else if (typeSelected.name !== "Type" && sectorSelected.name === "Sector") {
      console.log("in else if - Filtering by type only");
      setFilteredData(data.data.filter((item) => item.type === typeSelected.name));
    } else if (sectorSelected.name !== "Sector" && typeSelected.name === "Type") {
      console.log("Filtering by sector only");
      setFilteredData(data.data.filter((item) => item.sector === sectorSelected.name));
    } else {
      console.log("Filtering by both type and sector");
      setFilteredData(data.data.filter((item) => 
        item.type === typeSelected.name && item.sector === sectorSelected.name
      ));
    }
  }, [data, typeSelected, sectorSelected]);

  useEffect(()=>{
    setFilteredData(()=>(
      data && data ?
      data.data.filter((item)=>item.title.toLowerCase().includes(searchItem))
      : []
    ))
  },[searchItem,data])


    return (
      <LightSectionContainer>
        <div className="container">
          <div className="news-list">
            {data && filteredData.map((item)=>(
                <ListItem listData={item} key={item._id}  />
            ))}
          </div>
        </div>
      </LightSectionContainer>
    );
}

export default Listing;