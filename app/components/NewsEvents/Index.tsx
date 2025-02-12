"use client";
import PageBanner from "../Common/PageBanner";
import bannerImg from "@/public/assets/images/banners/news-and-events-banner1.jpg";
import Arrow from "@/public/assets/brdcrbs.svg";
import BeforeFooterTag from "../Common/BeforeFooterTag";
import NewsBlock from "./NewsBlock";
import { newsEvents, linkedInSliderData, instagramPosts,upCommingEvents } from "./data";
import  LinkedInSlider  from "./LinkedInSlider";
import InstagramBlock from "./InstagramBlock";
import UpcommingEvents from "./UpcommingEvents";


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
        bnrHeight="92dvh"
      />
      <NewsBlock newsEvent={latestNews} sectionTitle="Company News" />
      <LinkedInSlider data={linkedInSliderData} />
      <NewsBlock newsEvent={latestExpertise} sectionTitle="Our Expertise" />
      <InstagramBlock instagramData={instagramPosts} />
      <UpcommingEvents commingEvents={upCommingEvents} />
      <BeforeFooterTag title={"Discover Industry Solutions"} url="/" />
    </>
  );
};

export default Index;
