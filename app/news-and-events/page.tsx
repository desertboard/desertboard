import Banner from "../components/Banner/Hero";
import SecFirst from "../components/NewsEvents/SecFirst";
import Downloads from "../components/Common/BeforeFooterTag";
import newsEvents from "../data/newsEvents.json";

// Image imports
import bannerImg from "@/public/assets/images/sectors/banner.png";
import Arrow from "@/public/assets/brdcrbs.svg";

const NewsAndEventsPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "News & Events", href: "#" },
  ];
  return (
    <div>
      <Banner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        title="News & Events"
        breadcrumbs={breadcrumbs}
      />
      <SecFirst newsEvents={newsEvents} />
           <Downloads title={"To Downloads"}/>
    </div>
  );
};

export default NewsAndEventsPage;
