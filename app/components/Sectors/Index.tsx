"use client"

import PageBanner from "../Common/PageBanner";
import Downloads from "../Common/BeforeFooterTag";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";

// Image imports
import Arrow from "@/public/assets/brdcrbs.svg";
import Image from "next/image";
import BackGround from '@/public/assets/images/Background.jpg'
import { useState } from "react";
import { menuItem } from "./data";
import SectorSelector from "./Selections/SectorSelector";
import ApplicationSelector from "./Selections/ApplicationSelector";
import { assets } from "@/public/assets/images/assets";
import { motion } from "framer-motion";



const Sectors = () => {
    const breadcrumbs = [
        { label: "Home", href: "#" },
        { label: "Sectors", href: "#" },
    ];


    const [activeSector,setActiveSector] = useState(0)
    const activeApplications = menuItem[activeSector].applications


    return (
        <>
            <PageBanner
                bannerSrc={assets.secbanner} // Corrected image import here
                arrowSrc={Arrow}
                desc="PSB® boards' diverse product lineup is used in everything from house building, furniture, and interior design to mass timber structures, fire-rated doors, building facades, and flooring. "
                title="Sectors"
                breadcrumbs={breadcrumbs}
                bnrHeight="90dvh"
            />

            <div className=' relative py-10 lg:py-20'>
                <Image src={BackGround} alt='background' className='absolute left-0 top-0 -z-10 inset-0 h-full w-full object-cover' />
                <motion.div className="ola ola-right absolute top-0 right-[-25%] md:right-[-10%] w-[20em] md:w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Image className="absolute" src={lfbef} alt="Description of the image" />
      </motion.div>
      <motion.div className="ola ola-right absolute bottom-[43%] left-[-25%] md:left-[-15%] w-[20em] md:w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Image className="absolute" src={lfbt} alt="Description of the image" />
      </motion.div>
                <div className='container h-fit text-black'>
                    <div className='flex gap-6 lg:gap-0 flex-col lg:flex-row'>

                        <div className={`w-full lg:w-1/3 lg:pr-20`}>

                            <SectorSelector setActiveSector={setActiveSector} activeSector={activeSector}/>

                        </div>

                        <div className={`w-full lg:w-2/3  lg:pl-20 flex flex-col gap-7 lg:border-l-2 border-[#15151510]`}>

                            <ApplicationSelector activeApplications={activeApplications}/>
                        </div>

                    </div>
                </div>
            </div>

            <Downloads title={"Discover Industry Solutions"} />
        </>
    );
};

export default Sectors;