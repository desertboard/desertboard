
import React from 'react'

import { assets } from '@/public/assets/images/assets';
import Arrow from "@/public/assets/brdcrbs.svg";
import Downloads from '../Common/BeforeFooterTag';
import PageBanner from '../Common/PageBanner';
import MainDescBOx from '../Common/MainDescBox';
import './sustainability.css';
import Greenslider from './greenslider';
import Sustainslide from './Sustainslide';

const Blogs = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Sustainability", href: "#" },
  ];
  return (
    <>
<PageBanner
        bannerSrc={assets.sumabanner} // Corrected image import here
        arrowSrc={Arrow}
        desc="Sustainable and desert-sourced, palm strand board regenerates with nature. "
        title="Sustainability Is At Our Core"
        breadcrumbs={breadcrumbs}
        bnrHeight="90dvh"
      />
       <MainDescBOx
        secTitle="Commitment to the Environment"
        subTitle=""
        paragraphs={[
          "With the zero-deforestation supply chain, we protect natural ecosystems, preserve biodiversity and promote environmental sustainability for a greener future. At DesertBoard, we take pride in spearheading the bio-economy by optimizing our production processes to minimize material waste and energy consumption, ensuring efficient resource utilization throughout our products' lifecycle.",
        ]}
        mainImg={assets.sumain}
      />
      <Greenslider />
      <Sustainslide />
       <Downloads title={"To Downloads"}/>

    </>
  )
}

export default Blogs