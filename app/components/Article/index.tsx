
import React from 'react'
import Filter from './Filter'
import PageBanner from "../Common/PageBanner";

import bannerImg from "@/public/assets/images/sectors/banner.png";
import Arrow from "@/public/assets/brdcrbs.svg";

const Blogs = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Glossary", href: "#" },
  ];
  return (
    <>
      <PageBanner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title="Glossary"
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />
        <Filter/>
    </>
  )
}

export default Blogs