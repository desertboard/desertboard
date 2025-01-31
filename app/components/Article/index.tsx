
import React from 'react'
import ArticleBanner from "./ArticleBanner";

import bannerImg from "@/public/assets/images/sectors/banner.png";
import Arrow from "@/public/assets/brdcrbs.svg";

const Blogs = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "News & Events", href: "#" },
    { label: "DesertBoard® Stands....", href: "#" },
  ];
  return (
    <>
      <ArticleBanner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        title="DesertBoard® Stands Out at Big 5 Global with Its Unique Lineup of Sustainable Solutions "
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />

    </>
  )
}

export default Blogs