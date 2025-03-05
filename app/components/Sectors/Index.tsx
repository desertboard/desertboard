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

import SectorSelector from "./Selections/SectorSelector";
import ApplicationSelector from "./Selections/ApplicationSelector";
import { assets } from "@/public/assets/images/assets";
import { motion } from "framer-motion";
import useSWR from "swr";
import { SectorType } from "@/types/SectorType";
import Link from "next/link";

const Sectors = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sectors", href: "" },
  ];



  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data }: { data: SectorType, error: Error | undefined, isLoading: boolean } = useSWR('/api/admin/sector', fetcher)

  useEffect(() => {
    console.log(data && data.data)

  }, [data])

  const [activeSector, setActiveSector] = useState(0);
  const activeApplications = data && data.data && data.data[activeSector].applications;
  const [sectorName, setSectorName] = useState(data && data.data && data.data[0].title)

  useEffect(() => {
    console.log(data && data.data && data.data[0].title)
    setSectorName(data && data.data && data.data[0].title)
  }, [data])




  return (
    <>
      <PageBanner
        bannerSrc={assets.secbnr} // Corrected image import here
        arrowSrc={Arrow}
        desc="PSB®   diverse product lineup is used in everything from house building, furniture, and interior design to mass timber structures, fire-rated doors, building facades, and flooring. "
        title="Sectors"
        breadcrumbs={breadcrumbs}
        bnrHeight="90dvh"
      />
      <motion.div initial={{ opacity: 0, y: 30 }}
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
                <SectorSelector data={data}
                  setActiveSector={setActiveSector}
                  activeSector={activeSector}
                  setSectorName={setSectorName}
                />
              </div>

              <div
                className={`w-full lg:w-2/3  lg:pl-20 flex flex-col gap-7 lg:border-l-2 border-[#15151510]`}
              >
                <ApplicationSelector activeApplications={activeApplications} sectorName={sectorName} page="sectors" />

                <Link
                  href={`/sector-details/${sectorName}`}
                  className="nuber-next-heavy flex gap-2 max-w-fit w-[250px]
                                            group-hover:w-full transition-all duration-300
                                            text-[14px] md:text-font16 leading-[1.5] rmbtn pb-2"
                >
                  {sectorName}
                  <Image
                    src={assets.readarrow}
                    alt="icn1"
                    className="transition-all duration-300 relative top-[2px]"
                    width={11}
                    height={16}
                  />
                </Link>

              </div>
            </div>

          </div>

        </div>
      </motion.div>
      <Downloads title={"Downloads"} url='/downloads' />
    </>
  );
};

export default Sectors;
