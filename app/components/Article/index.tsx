
import React from 'react'
import ArticleBanner from "./ArticleBanner";
import ArticleImageBanner from "./ArticleImageBanner";

import bannerImg from "@/public/assets/images/sectors/banner.png";
import Arrow from "@/public/assets/brdcrbs.svg";
import Downloads from '../Common/Downloads';

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
        date="November 30, 2024"
        labeltext="Sustainability, Company News"
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />
      <ArticleImageBanner
  bannerSrc={bannerImg}
      />
       <Downloads title={"To Downloads"}/>

    </>
  )
}

export default Blogs