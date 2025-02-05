<<<<<<< HEAD:app/(user)/sector-details/page.tsx
import MainDescBOx from "../../components/Common/MainDescBox";
import PageBanner from "../../components/Common/PageBanner";
import Tabs from "../../components/Sector-Details/Tabs";
import Downloads from "../../components/Common/BeforeFooterTag";

// Image imports
import bannerImg from "@/public/assets/images/sectors/banner.png";
import Arrow from "@/public/assets/brdcrbs.svg";



const Sectors = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Sectors", href: "#" },
    { label: "Engineering & Construction", href: "#" },
  ];
=======
import React from 'react'
import SectorDetails from '../components/Sector-Details/Index'
>>>>>>> aa56bc95e31d6ed2dcde518e8a7a23f8854df1fe:app/sector-details/page.tsx

const page = () => {
  return (
    <>
      <SectorDetails/>
    </>
  )
}

export default page