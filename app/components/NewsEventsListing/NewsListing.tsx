"use client";
import React, { useEffect, useState } from "react";
import '@/app/components/NewsEventsListing/listing.scss';
import LightSectionContainer from "../Common/LightSectionContainer";
import useSWR from 'swr';
import ListItem from "./NewsListItem";
import { NewsType } from "@/types/NewsType";

const Listing = ({
  typeSelected,
  sectorSelected,
  searchItem,
}: {
  typeSelected: { id: number; name: string };
  sectorSelected: { id: number; name: string };
  searchItem: string;
}) => {
  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());
  const { data,isLoading }: { data: NewsType; error: Error | undefined; isLoading: boolean } = useSWR('/api/admin/news', fetcher);

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

  const [itemsToShow, setItemsToShow] = useState(6); // State to control the number of items shown

  useEffect(() => {
    const handleFilter = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (!data?.data?.length || !typeSelected.name) return;

      console.log("Original Data:", data.data);

      if (typeSelected.name === "Type" && sectorSelected.name === "Sector") {
        console.log("in if - Returning all data");
        setFilteredData(data.data);
      } else if (typeSelected.name !== "Type" && sectorSelected.name === "Sector") {
        console.log("in else if - Filtering by type only");
        console.log(typeSelected.name);
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
    };

    handleFilter();
  }, [data, typeSelected, sectorSelected]);

  useEffect(() => {
    setFilteredData(() => (
      data && data ?
      data.data.filter((item) => item.title.toLowerCase().includes(searchItem) && item.type == typeSelected.name)
      : []
    ));
  }, [searchItem, data,typeSelected,sectorSelected]);

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 3); // Load 2 more items
  };

  if(isLoading){
    return null
  }

  return (
    <LightSectionContainer>
      <div className="container">
        <div className="news-list">
          {data && filteredData.slice(0, itemsToShow).map((item) => (
            <ListItem listData={item} key={item._id} />
          ))}
        </div>

        {itemsToShow < filteredData.length && (

          <div className="w-fit m-auto"><button onClick={handleLoadMore} className="load-more-button mt-8 bg-orange text-white px-8 py-3">
          Load More
        </button></div>
        )}

      </div>
    </LightSectionContainer>
  );
};

export default Listing;
