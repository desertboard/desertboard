

// Image imports
import Arrow from "@/public/assets/brdcrbs.svg";
import PageBanner from "../Common/PageBanner";
import MainDescBOx from "../Common/MainDescBox";
import Tabs from "./Tabs";
import BeforeFooterTag from "../Common/BeforeFooterTag";
import { assets } from "@/public/assets/images/assets";



const SectorDetails = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Sectors", href: "#" },
    { label: "Engineering & Construction", href: "#" },
  ];

  return (
    <>
      <PageBanner
        bannerSrc={assets.secdbanner} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title="Engineering & Construction"
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />
      <MainDescBOx
        secTitle="Engineering & Construction"
        subTitle=""
        paragraphs={[
          "Desert Board proudly introduces Palm Strand Board (PSB®), a groundbreaking engineered solution redefining sustainability and performance in the construction industry. With zero formaldehyde emissions, PSB® ensures a healthier living environment, exemplifying our commitment to safety and well-being. Crafted from upcycled palm fronds, this locally manufactured material supports the region's bioeconomy while reducing environmental impact. Engineered for strength, durability, and versatility, PSB® thrives under challenging conditions, offering exceptional moisture resistance, fire safety, and sound isolation properties. From structural applications to fine furnishings, PSB® delivers unmatched quality and customization, empowering designers, architects, and builders to create with confidence and sustainability in mind.",
        ]}
         mainImg={assets.sec1}
        // mainVdo={"../assets/images/home/liftvdo.mp4"}
        // vdoPoster="../assets/images/mn.jpg"
      />
      <Tabs />
           <BeforeFooterTag title={"To Downloads"}/>
    </>
  );
};

export default SectorDetails;
