import PageBanner from "../Common/PageBanner";
import bannerImg from "@/public/assets/images/sectors/abt-bnr.jpg";
import Arrow from "@/public/assets/brdcrbs.svg";
import Filter from "./Filter";
import Listing from "./Listing";
const Index = () => {
    
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
        <Filter/>
        <Listing/>
      </>
    );
}
 
export default Index;