import React from 'react'
import PageBanner from '../Common/PageBanner'
import bannerImg from "@/public/assets/downloadsbanner.jpg";
import Arrow from "@/public/assets/brdcrbs.svg";
import Selections from './Selections/Selections';
import BeforeFooterTag from '../Common/BeforeFooterTag';


const Downloads = () => {

    const breadcrumbs = [
        { label: "Home", href: "#" },
        { label: "Downloads", href: "#" },
      ];


  return (
    <>
        <PageBanner
                bannerSrc={bannerImg} // Corrected image import here
                arrowSrc={Arrow}
                // desc="Upcycling annually regenerated palm biomass into sustainable building solutions "
                title="Downloads"
                breadcrumbs={breadcrumbs}
                bnrHeight="90dvh"
            />

        <Selections/>
        <BeforeFooterTag title='Discover Industry Solutions'/>
    </>
    
  )
}

export default Downloads