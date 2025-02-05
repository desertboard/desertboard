import SectionTwo from "../../components/Applications/SectionTwo";
import SectionThree from "../../components/Applications/SectionThree";
import SectionFive from "../../components/Applications/SectionFive";
import PageBanner from "../../components/Common/PageBanner";
import SectionFour from "../../components/Applications/SectionFour";
import Downloads from "../../components/Common/BeforeFooterTag";


// Image imports
import { assets } from "@/public/assets/images/assets";
import Arrow from "@/public/assets/brdcrbs.svg";



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
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
     <Downloads title={"To Downloads"}/>
    </>
  );
};

export default Sectors;
