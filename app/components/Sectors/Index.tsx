"use client"

import PageBanner from "../Common/PageBanner";
import Downloads from "../Common/BeforeFooterTag";

// Image imports
import bannerImg from "@/public/assets/images/sectors/banner.png";
import Arrow from "@/public/assets/brdcrbs.svg";
import Image from "next/image";
import BackGround from '@/public/assets/images/Background.jpg'
import { useState } from "react";
import { menuItem } from "./data";
import SectorSelector from "./Selections/SectorSelector";
import ApplicationSelector from "./Selections/ApplicationSelector";



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
                bannerSrc={bannerImg} // Corrected image import here
                arrowSrc={Arrow}
                desc="PSB® boards' diverse product lineup is used in everything from house building, furniture, and interior design to mass timber structures, fire-rated doors, building facades, and flooring. "
                title="Sectors"
                breadcrumbs={breadcrumbs}
                bnrHeight="60dvh"
            />

            <div className='px-6 relative py-20'>
                <Image src={BackGround} alt='background' className='absolute left-0 top-0 -z-10 inset-0 h-full w-full object-cover' />
                <div className='container h-fit text-black'>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 gap-10'>

                        <div className={`col-span-1 md:pr-8`}>

                            <SectorSelector setActiveSector={setActiveSector} activeSector={activeSector}/>
                            
                        </div>

                        <div className={`col-span-2 pr-8 flex flex-col gap-7`}>
                            
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