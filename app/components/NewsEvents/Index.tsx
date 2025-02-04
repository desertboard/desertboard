"use client";
import PageBanner from "../Common/PageBanner";
import bannerImg from "@/public/assets/images/sectors/abt-bnr.jpg";
import Arrow from "@/public/assets/brdcrbs.svg";
import Downloads from "../Common/BeforeFooterTag";
import NewsBlock from "./NewsBlock";
import { newsEvents, linkedInSliderData } from "./data";
import  LinkedInSlider  from "./LinkedInSlider";


const Index = () => {

  const latestNews = (newsEvents || [])
    .filter((item) => item.type === "news")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const latestExpertise = (newsEvents || [])
    .filter((item) => item.type === "expertise")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "News & Events", href: "#" },
  ];
  return (
    <>
      <PageBanner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title="News & Events"
        breadcrumbs={breadcrumbs}
        bnrHeight="90dvh"
      />
      <NewsBlock newsEvent={latestNews} />
      <LinkedInSlider data={linkedInSliderData} />
      <NewsBlock newsEvent={latestExpertise} />
      <Downloads title={"Discover Industry Solutions"} />
    </>
  );
};

export default Index;
