"use client"

import PageBanner from "../Common/PageBanner";
import bannerImg from "@/public/assets/images/banners/news-evnets-listing.jpg";
import Arrow from "@/public/assets/brdcrbs.svg";
import Filter from "./Filter";
import Listing from "./NewsListing";
import { useState } from "react";
const Index = () => {

  const types = [
    { id: 1, name: "Type" },
    { id: 2, name: "Company news" },
    { id: 3, name: "Expertise" },
    { id: 4, name: "Events" },
  ];

  const sectors = [
    { id: 5, name: "Sector" },
    { id: 6, name: "Event Management" },
    { id: 7, name: "Fit-out" },
    { id: 8, name: "Joinery" },
    { id: 9, name: "Construction & Contracting" },
    { id: 10, name: "Hospitality" },
    { id: 11, name: "Commercial" },
    { id: 12, name: "Architecture" },
    { id: 13, name: "Interior Design" },
    { id: 14, name: "Furniture Manufacturing" },
    { id: 15, name: "Packaging & Gifting" },
  ];


  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "News & Events", href: "" },
  ];

  const [typeSelected, setTypeSelected] = useState(types[0]);
  const [sectorSelected, setSectorSelected] = useState(sectors[0])
  const [searchItem,setSearchItem] = useState("")

  
    return (
      <>
        <PageBanner
          bannerSrc={bannerImg} // Corrected image import here
          arrowSrc={Arrow}
          desc=""
          title="News & Events"
          breadcrumbs={breadcrumbs}
          bnrHeight="55dvh"
        />
        
        <Filter typeSelected={typeSelected} setTypeSelected={setTypeSelected} 
        types={types} setSectorSelected={setSectorSelected} 
        sectorSelected={sectorSelected} sectors={sectors} searchItem={searchItem} setSearchItem={setSearchItem}/>

        <Listing typeSelected={typeSelected} sectorSelected={sectorSelected} searchItem={searchItem}/>
      </>
    );
}

export default Index;