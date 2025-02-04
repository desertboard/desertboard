"use client";

import React from "react";
import CustomClrSection from "../Common/CustomClrSection";
import { newsEvents } from "../NewsEvents/data";
import NewsListItem from "../NewsEventsListing/NewsListItem";
import '@/app/components/NewsEventsListing/listing.scss'
const RelatedArticles: React.FC = () => {
  return (
    <CustomClrSection>
      <div className="container">
        <h2 className="heavydark mb-2 xl:mb-10">
          Related Articles<span className="text-[#FF671F] leading-[1]">.</span>
        </h2>
        <div className="related-news">
          {newsEvents.slice(0, 4).map((item) => (
            <NewsListItem listData={item} key={item.id} />
          ))}
        </div>
      </div>
    </CustomClrSection>
  );
};

export default RelatedArticles;
