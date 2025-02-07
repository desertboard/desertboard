import SectionTwo from "../../components/Applications/SectionTwo";
import SectionThree from "../../components/Applications/SectionThree";
import SectionFive from "../../components/Applications/SectionFive";
import PageBanner from "../../components/Common/PageBanner";
import SectionFour from "../../components/Applications/SectionFour";
import Downloads from "../../components/Common/BeforeFooterTag";


// Image imports
import { assets } from "@/public/assets/images/assets";
import Arrow from "@/public/assets/brdcrbs.svg";
import { accordionData, slideses } from "@/app/components/Applications/data";
import { relslideses } from "../../components/Applications/data";



const Sectors = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Sectors", href: "#" },
    { label: "Engineering & Construction", href: "#" },
    { label: "Façade Cladding", href: "#" },
  ];

  return (
    <>
       <PageBanner
        bannerSrc={assets.appbanner} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title="Façade Cladding"
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />

      <SectionTwo suggested={true} />
      <div className="pt-10 md:pt-20 insp-mn relative inspbg"></div>
      <SectionThree {...slideses}/>
      <SectionFour {...accordionData} />
      <SectionFive {...relslideses} />
     <Downloads title={"To Downloads"}/>
    </>
  );
};

export default Sectors;
