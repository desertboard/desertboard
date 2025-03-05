"use client";

import PageBanner from "../Common/PageBanner";
import Downloads from "../Common/BeforeFooterTag";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";

// Image imports
import Arrow from "@/public/assets/brdcrbs.svg";
import Image from "next/image";
import BackGround from "@/public/assets/images/Background.jpg";
import { useEffect, useState } from "react";

import SectorSelector from "../Sectors/Selections/SectorSelector";
import ApplicationSelector from "../Sectors/Selections/ApplicationSelector";
import { assets } from "@/public/assets/images/assets";
import { motion } from "framer-motion";
import useSWR from "swr";
import { SectorType } from "@/types/SectorType";

type StructuredData = {
  title:string;
  applications:{
    description:string;
    image:string;
    product:string;
    title:string;
    _id:string;
  }[];
}[]

const Products = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "" },
  ];

  const [structuredData,setStructuredData] = useState<StructuredData>([])

  const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data:productData,isLoading:productLoading }:{data:SectorType,error:Error|undefined,isLoading:boolean} = useSWR('/api/admin/products', fetcher)

  const {data:sectorData,isLoading:sectorLoading}:{data:SectorType,isLoading:boolean} = useSWR(
    productData ? `/api/admin/sector` : null, fetcher
  )

  useEffect(() => {
    if (!productData || !sectorData) return;

    const mappedData = productData.data.map((productItem) => {
      const matchingSectors = sectorData.data.filter((sector) =>
        sector.applications.some((app) => app.product === productItem.title)
      );

      const applications = matchingSectors.flatMap((sector) =>
        sector.applications.filter((app) => app.product === productItem.title)
      );

      return {
        title: productItem.title,
        applications,
        sectorName: matchingSectors.length > 0 ? matchingSectors[0].title : "Unknown Sector", // Pick the first sector name or default
      };
    });

    setStructuredData(mappedData);

  }, [productData, sectorData]);


  const [sectorName,setSectorName] = useState("")
  const [activeSector, setActiveSector] = useState(0);

  useEffect(() => {
    if (structuredData.length > 0) {
      setSectorName(structuredData[0].title);
    }
  }, [structuredData]);




  const activeApplications =  productData &&
  structuredData.length > 0 &&
  structuredData.find((item) => item.title === sectorName)?.applications || [];

  if(productLoading || sectorLoading){
    return null
  }

  return (
    <>
      <PageBanner
        bannerSrc={assets.secbnr} // Corrected image import here
        arrowSrc={Arrow}
        desc="PSB®   diverse product lineup is used in everything from house building, furniture, and interior design to mass timber structures, fire-rated doors, building facades, and flooring. "
        title="Products"
        breadcrumbs={breadcrumbs}
        bnrHeight="90dvh"
      />
<motion.div     initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
               >
      <div className=" relative py-10 lg:py-20">
        <Image
          src={BackGround}
          alt="background"
          className="absolute left-0 top-0 -z-10 inset-0 h-full w-full object-cover"
        />
        <motion.div
          className="ola ola-right absolute top-0 right-[-25%] md:right-[-10%] w-[20em] md:w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={lfbef}
            alt="Description of the image"
          />
        </motion.div>
        <motion.div
          className="ola ola-right absolute bottom-[43%] left-[-25%] md:left-[-15%] w-[20em] md:w-[40em]"
          animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="absolute"
            src={lfbt}
            alt="Description of the image"
          />
        </motion.div>
        <div className="container h-fit text-black">
          <div className="flex gap-6 lg:gap-0 flex-col lg:flex-row relative z-1">
            <div className={`w-full lg:w-1/3 lg:pr-20`}>
              <SectorSelector data={productData} page="product"
                setActiveSector={setActiveSector}
                activeSector={activeSector}
                setSectorName={setSectorName}
              />
            </div>

            <div
              className={`w-full lg:w-2/3  lg:pl-20 flex flex-col gap-7 lg:border-l-2 border-[#15151510]`}
            >
              <ApplicationSelector activeApplications={activeApplications} sectorName={sectorName} page="product"/>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      <Downloads title={"Downloads"} url='/downloads' />
    </>
  );
};

export default Products;
