
import React from 'react'
import Filter from './Filter'
import PageBanner from "../Common/PageBanner";

import bannerImg from "@/public/assets/images/bannergl.jpg";
import Arrow from "@/public/assets/brdcrbs.svg";
import BeforeFooterTag from '../Common/BeforeFooterTag';

const Blogs = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Glossary", href: "" },
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
      <Filter />
      <BeforeFooterTag title={'Discover Industry Solutions'} url="/contact"  />
    </>
  )
}

export default Blogs