import React from 'react'
import PageBanner from '../Common/PageBanner'
import Arrow from "@/public/assets/brdcrbs.svg";
import Selections from './Selections/Selections';
import BeforeFooterTag from '../Common/BeforeFooterTag';
import { assets } from '@/public/assets/images/assets';


const Downloads = () => {

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Downloads", href: "" },
      ];


  return (
    <>
        <PageBanner
                bannerSrc={assets.dbanner} // Corrected image import here
                arrowSrc={Arrow}
                // desc="Upcycling annually regenerated palm biomass into sustainable building solutions "
                title="Downloads"
                breadcrumbs={breadcrumbs}
                bnrHeight="90dvh"
            />

        <Selections/>
        <BeforeFooterTag title='Discover Industry Solutions' url="/sectors"/>
    </>

  )
}

export default Downloads