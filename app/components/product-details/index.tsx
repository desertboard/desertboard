import SectionTwo from "../Applications/SectionTwo";
import SectionThree from "./SectionThree";
import SectionFive from "./SectionFive";
import PageBanner from "../Common/PageBanner";
import SectionFour from "../Applications/SectionFour";
import Downloads from "../Common/BeforeFooterTag";


// Image imports
import { assets } from "@/public/assets/images/assets";
import Arrow from "@/public/assets/brdcrbs.svg";
import { slideses } from './data'
import { accordionData,relslideses } from "./data";


const ProducrDetails = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "PSB® Supreme", href: "#" },
  ];

  return (
    <>
       <PageBanner
        bannerSrc={assets.appbanner} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title="PSB® Supreme."
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />

      <SectionTwo suggested={false} />
      <div className="pt-10 md:pt-20 insp-mn relative inspbg"></div>
      <SectionThree {...slideses} />
      <SectionFour {...accordionData} />
      <SectionFive {...relslideses}/>
     <Downloads title={"To Downloads"}/>
    </>
  );
};

export default ProducrDetails;
